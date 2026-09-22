import { useEffect, useRef } from "react";
import * as THREE from "three";

// Procedurally paints a dark sphere with glowing ember "landmass" blotches,
// so the project never depends on an external texture file.
function createEarthTexture() {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size / 2;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#050506";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const blobCount = 260;
  for (let i = 0; i < blobCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 10 + 2;
    const heat = Math.random();
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    if (heat > 0.85) {
      grad.addColorStop(0, "rgba(255,120,120,0.9)");
      grad.addColorStop(1, "rgba(255,120,120,0)");
    } else if (heat > 0.5) {
      grad.addColorStop(0, "rgba(240,48,58,0.55)");
      grad.addColorStop(1, "rgba(240,48,58,0)");
    } else {
      grad.addColorStop(0, "rgba(90,20,24,0.45)");
      grad.addColorStop(1, "rgba(90,20,24,0)");
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function Globe({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Core sphere
    const earthTexture = createEarthTexture();
    const sphereGeo = new THREE.SphereGeometry(2, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x0c0c0e,
      emissive: 0xf0303a,
      emissiveMap: earthTexture,
      emissiveIntensity: 1.1,
      roughness: 0.55,
      metalness: 0.35,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // Fresnel-style glow shell
    const glowGeo = new THREE.SphereGeometry(2.08, 64, 64);
    const glowMat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      uniforms: { glowColor: { value: new THREE.Color(0xf0303a) } },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 glowColor;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
          gl_FragColor = vec4(glowColor, intensity * 0.9);
        }
      `,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    group.add(glow);

    // Wireframe lattice
    const wireGeo = new THREE.IcosahedronGeometry(2.16, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff5b5b,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    group.add(wire);

    // Orbit rings
    const rings = [];
    const ringSpecs = [
      { radius: 2.9, tilt: 0.55, speed: 0.18, opacity: 0.5 },
      { radius: 3.25, tilt: -0.85, speed: -0.12, opacity: 0.32 },
      { radius: 2.65, tilt: 1.4, speed: 0.24, opacity: 0.22 },
    ];
    ringSpecs.forEach((spec) => {
      const curve = new THREE.EllipseCurve(0, 0, spec.radius, spec.radius);
      const points = curve.getPoints(128).map((p) => new THREE.Vector3(p.x, p.y, 0));
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: 0xff5b5b,
        transparent: true,
        opacity: spec.opacity,
      });
      const ring = new THREE.LineLoop(geo, mat);
      ring.rotation.x = Math.PI / 2 + spec.tilt;
      ring.rotation.y = spec.tilt * 0.6;
      ring.userData.speed = spec.speed;
      group.add(ring);
      rings.push(ring);
    });

    // Particle sparks riding the rings
    const sparkCount = 90;
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkRing = new Float32Array(sparkCount);
    for (let i = 0; i < sparkCount; i++) {
      sparkRing[i] = ringSpecs[i % ringSpecs.length].radius;
    }
    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xffb3b3,
      size: 0.045,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    group.add(sparks);

    // Distant star field
    const starCount = 260;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 9 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // Lights
    scene.add(new THREE.AmbientLight(0x33090c, 1.4));
    const key = new THREE.PointLight(0xff5b5b, 6, 20);
    key.position.set(4, 2, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0x5533ff, 2, 20);
    rim.position.set(-5, -2, -4);
    scene.add(rim);

    // Pointer parallax
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      const speedScale = prefersReducedMotion ? 0.12 : 1;

      sphere.rotation.y = t * 0.12 * speedScale;
      wire.rotation.y = -t * 0.05 * speedScale;
      wire.rotation.x = t * 0.02 * speedScale;

      rings.forEach((ring) => {
        ring.rotation.z = t * ring.userData.speed * speedScale;
      });

      const posAttr = sparks.geometry.attributes.position;
      for (let i = 0; i < sparkCount; i++) {
        const spec = ringSpecs[i % ringSpecs.length];
        const angle = t * spec.speed * speedScale * 2 + (i / sparkCount) * Math.PI * 2;
        const x = Math.cos(angle) * sparkRing[i];
        const y = Math.sin(angle) * sparkRing[i];
        const v = new THREE.Vector3(x, y, 0);
        v.applyEuler(new THREE.Euler(Math.PI / 2 + spec.tilt, spec.tilt * 0.6, 0));
        posAttr.setXYZ(i, v.x, v.y, v.z);
      }
      posAttr.needsUpdate = true;

      group.rotation.y += (pointer.x * 0.25 - group.rotation.y) * 0.02;
      group.rotation.x += (-pointer.y * 0.15 - group.rotation.x) * 0.02;
      group.position.y = Math.sin(t * 0.5) * 0.12 * speedScale;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      mount.removeChild(renderer.domElement);
      sphereGeo.dispose();
      sphereMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      earthTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      role="img"
      aria-label="Animated rotating globe representing Nexora's global AI network"
    />
  );
}
