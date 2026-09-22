import { motion } from "motion/react";
import { NavLink } from "react-router";
import Globe from "../components/Globe.jsx";
import { HERO_CARDS, STATS } from "../data/features.js";

const cardPosition = [
  "md:top-[14%] md:left-0",
  "md:bottom-[10%] md:left-[2%]",
  "md:top-[14%] md:right-0",
  "md:bottom-[10%] md:right-[2%]",
];

function FloatingCard({ card, index }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`card-surface group w-full rounded-2xl p-5 md:absolute md:w-56 ${cardPosition[index]}`}
      style={{ animation: `drift ${12 + index * 1.5}s ease-in-out ${index * 0.6}s infinite` }}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ember/15 text-ember">
        <Icon className="text-lg" />
      </span>
      <p className="mt-4 font-display text-sm font-semibold text-ink">{card.title}</p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <p className="text-xs leading-relaxed text-mute">{card.desc}</p>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-mute transition-colors group-hover:border-ember/50 group-hover:text-ember">
          <span aria-hidden className="text-xs">&rarr;</span>
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="noise-veil relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(240,48,58,0.28), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-6 text-center sm:px-8 sm:pt-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-mute"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          AI-Powered Future
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          Build the Future
          <br />
          with <span className="text-gradient">Artificial Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
        >
          Nexora helps you integrate powerful AI models and automation into
          your products and workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <NavLink
            to="/pricing"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-ember px-6 py-3 text-sm font-medium text-white shadow-ember transition-transform hover:scale-[1.03]"
          >
            Get Started <span aria-hidden>&rarr;</span>
          </NavLink>
          <NavLink
            to="/features"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ember/40"
          >
            Explore Features
          </NavLink>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-4 max-w-6xl px-5 sm:px-8">
        <div className="relative md:h-[560px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mx-auto h-72 w-72 sm:h-96 sm:w-96 md:absolute md:left-1/2 md:top-1/2 md:h-[480px] md:w-[480px] md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <Globe className="h-full w-full" />
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-0 md:block">
            {HERO_CARDS.map((card, i) => (
              <FloatingCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card-surface flex flex-col items-center gap-8 rounded-3xl px-6 py-8 sm:flex-row sm:justify-between sm:px-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-surface bg-gradient-to-br from-ember to-ember-dim"
                />
              ))}
            </div>
            <p className="text-left text-sm text-mute">
              Trusted by <span className="text-ink">10,000+</span> teams
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-semibold text-ember">{stat.value}</p>
                <p className="mt-1 text-xs text-mute">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
