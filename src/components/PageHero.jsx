import { motion } from "motion/react";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="noise-veil relative overflow-hidden border-b border-line py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(240,48,58,0.35), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-mute"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
