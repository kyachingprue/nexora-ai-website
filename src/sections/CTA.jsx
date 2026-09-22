import { motion } from "motion/react";
import { NavLink } from "react-router";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="noise-veil relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-16"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(240,48,58,0.4), transparent 70%)" }}
        />
        <h2 className="relative font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ready to build with Nexora?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-mute">
          Start free, invite your team, and ship your first AI-powered
          workflow before your coffee's cold.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <NavLink
            to="/pricing"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-ember px-6 py-3 text-sm font-medium text-white shadow-ember transition-transform hover:scale-[1.03]"
          >
            Get Started <span aria-hidden>&rarr;</span>
          </NavLink>
          <NavLink
            to="/resources"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:border-ember/40"
          >
            Read the docs
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
}
