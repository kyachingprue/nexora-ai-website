import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router";
import { HiCheck } from "react-icons/hi2";
import { SOLUTIONS } from "../data/solutions.js";

export default function SolutionsShowcase({
  items = SOLUTIONS,
  eyebrow = "Solutions",
  title = "Built for how your industry actually works",
  description = "Nexora adapts to your workflows instead of asking you to adapt to it.",
}) {
  const [active, setActive] = useState(0);
  const current = items[active];
  const CurrentIcon = current.icon;

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

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[340px_1fr] lg:gap-6">
        {/* Industry selector */}
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
          {items.map((s, i) => {
            const ItemIcon = s.icon;
            const isActive = i === active;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`focus-ring relative flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors lg:w-full ${
                  isActive
                    ? "border-ember/50"
                    : "border-line hover:border-line hover:bg-surface"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="solution-active-bg"
                    className="absolute inset-0 rounded-2xl bg-ember/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                    isActive ? "bg-ember text-white" : "bg-surface-2 text-mute"
                  }`}
                >
                  <ItemIcon className="text-base" />
                </span>
                <span
                  className={`relative whitespace-nowrap text-sm font-medium transition-colors lg:whitespace-normal ${
                    isActive ? "text-ink" : "text-mute"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(240,48,58,0.22), transparent 70%)" }}
          />
          <AnimatePresence mode="wait">
            <CurrentIcon
              key={`ghost-${current.title}`}
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-8 text-[220px] text-ink/[0.03]"
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ember/15 text-ember">
                <CurrentIcon className="text-2xl" />
              </span>

              <h3 className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-mute sm:text-base">
                {current.desc}
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {current.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-sm text-ink"
                  >
                    <HiCheck className="mt-0.5 shrink-0 text-ember" />
                    {point}
                  </motion.li>
                ))}
              </ul>

              <NavLink
                to="/pricing"
                className="focus-ring mt-8 inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ember/40 hover:text-ember"
              >
                Explore {current.title} plans
                <span aria-hidden>&rarr;</span>
              </NavLink>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
