import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps any section and reveals its direct children with a staggered,
 * GSAP-driven fade/rise as they scroll into view. `as` lets you change
 * the wrapping element (section, div, ul...).
 */
export default function AnimatedSection({
  children,
  className = "",
  as: Tag = "section",
  y = 32,
  stagger = 0.08,
  start = "top 82%",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.children.length ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger,
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, stagger, start]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
