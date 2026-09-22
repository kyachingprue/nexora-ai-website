import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { FEATURES } from "../data/features.js";

function FeatureCard({ feature, index, isLarge, className = "" }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(240px circle at ${mouseX}% ${mouseY}%, rgba(240,48,58,0.18), transparent 72%)`;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: "easeOut" }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-7 ${className}`}
    >
      {/* cursor-tracked glow */}
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* hairline border glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-ember/40 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-ember/10 text-ember">
            <span className="absolute inset-0 rounded-2xl bg-ember/20 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            <Icon className="relative text-xl" />
          </span>
          {isLarge && (
            <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium text-mute">
              Most relied on
            </span>
          )}
        </div>

        <h3
          className={`mt-5 font-display font-semibold text-ink ${
            isLarge ? "text-xl sm:text-2xl" : "text-base"
          }`}
        >
          {feature.title}
        </h3>
        <p
          className={`mt-2.5 leading-relaxed text-mute ${
            isLarge ? "max-w-sm text-sm sm:text-base" : "text-sm"
          }`}
        >
          {feature.desc}
        </p>

        {isLarge && (
          <div className="mt-auto pt-8">
            <svg viewBox="0 0 240 64" className="h-16 w-full max-w-xs" fill="none">
              <defs>
                <linearGradient id="feature-sparkline" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#F0303A" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FF5B5B" stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path
                d="M2 46 C 40 10, 70 52, 108 26 S 176 6, 238 22"
                stroke="url(#feature-sparkline)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function FeaturesShowcase({
  items = FEATURES,
  eyebrow = "Platform capabilities",
  title = "Everything you need to ship AI",
  description = "A single platform for models, automation and the insight to know it's working.",
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      {(title || description) && (
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-mute">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          )}
          {description && <p className="mt-4 text-mute">{description}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(210px,auto)]">
        {items.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            index={i}
            isLarge={i === 0}
            className={
              i === 0
                ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                : i === 5
                  ? "lg:col-span-2"
                  : ""
            }
          />
        ))}
      </div>
    </section>
  );
}
