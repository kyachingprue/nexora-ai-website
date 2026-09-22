import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiArrowUpRight, HiOutlineClock } from "react-icons/hi2";
import { ARTICLES, DOCS_LINKS } from "../data/resources.js";

export default function ResourcesShowcase({
  articles = ARTICLES,
  docs = DOCS_LINKS,
  eyebrow = "Resources",
  title = "Guides, case studies & documentation",
  description = "Everything you need to design, ship and scale AI workflows with Nexora.",
}) {
  const [featured, ...rest] = articles;
  const tags = useMemo(() => ["All", ...new Set(rest.map((a) => a.tag))], [rest]);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? rest : rest.filter((a) => a.tag === filter);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      {(title || description) && (
        <div className="mx-auto mb-12 max-w-2xl text-center">
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

      {/* Editorial hero article */}
      {featured && (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="group relative cursor-pointer overflow-hidden rounded-3xl border border-line bg-surface px-7 py-10 sm:px-12 sm:py-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(240,48,58,0.14) 1px, transparent 0)",
              backgroundSize: "26px 26px",
              maskImage: "radial-gradient(ellipse 60% 100% at 100% 0%, black, transparent)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(240,48,58,0.3), transparent 70%)" }}
          />

          <div className="relative max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-xs font-medium text-ember">
                Editor's pick
              </span>
              <span className="text-xs text-mute-2">{featured.tag}</span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-semibold leading-snug text-ink sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">
              {featured.desc}
            </p>

            <div className="mt-8 flex items-center gap-5">
              <span className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-white shadow-ember transition-transform group-hover:scale-[1.03]">
                Read article
                <HiArrowUpRight className="text-base" />
              </span>
              <span className="flex items-center gap-1.5 text-xs text-mute-2">
                <HiOutlineClock />
                {featured.read}
              </span>
            </div>
          </div>
        </motion.article>
      )}

      {/* Filters */}
      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isActive = tag === filter;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              aria-pressed={isActive}
              className={`focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-white" : "text-mute hover:text-ink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="resource-filter-bg"
                  className="absolute inset-0 rounded-full bg-ember"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{tag}</span>
            </button>
          );
        })}
      </div>

      {/* Filtered article grid */}
      <motion.div
        layout
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((a) => (
            <motion.article
              key={a.title}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="card-surface group flex cursor-pointer flex-col rounded-2xl p-6 transition-colors hover:border-ember/40"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ember">
                  {a.tag}
                </span>
                <HiArrowUpRight className="text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" />
              </div>
              <h4 className="mt-5 font-display text-base font-semibold leading-snug text-ink">
                {a.title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{a.desc}</p>
              <p className="mt-5 flex items-center gap-1.5 text-xs text-mute-2">
                <HiOutlineClock />
                {a.read}
              </p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-mute">
          No articles under this topic yet — check back soon.
        </p>
      )}

      {/* Documentation strip */}
      <div className="mt-20 border-t border-line pt-14">
        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          Developer documentation
        </h3>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((d, i) => (
            <motion.a
              key={d.title}
              href="#"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-5 transition-colors hover:border-ember/40"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-ember transition-transform duration-300 group-hover:scale-y-100"
              />
              <div>
                <p className="font-display text-sm font-semibold text-ink">{d.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-mute">{d.desc}</p>
              </div>
              <HiArrowUpRight className="mt-4 shrink-0 self-end text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
