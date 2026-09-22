import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiCheck, HiChevronDown } from "react-icons/hi2";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { PLANS, FAQS } from "../data/pricing.js";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-sm font-medium text-ink sm:text-base">{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-mute">
          <HiChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-mute">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingPage() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <SEO
        path="/pricing"
        title="Pricing"
        description="Simple, transparent pricing for teams of every size — start free, upgrade when you're ready."
      />
      <PageHero
        eyebrow="Pricing"
        title="Plans that scale with your workflows"
        description="Start free. Upgrade when your team needs more workflows, calls or control."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <AnimatedSection
          as="div"
          y={26}
          stagger={0.08}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? "border-2 border-ember bg-surface shadow-ember"
                  : "card-surface"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ember px-4 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-mute">{plan.tagline}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-semibold text-ink">{plan.price}</span>
                {plan.period && <span className="pb-1 text-sm text-mute">{plan.period}</span>}
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mute">
                    <HiCheck className="mt-0.5 shrink-0 text-ember" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`focus-ring mt-8 w-full rounded-full py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  plan.featured
                    ? "bg-ember text-white shadow-ember"
                    : "border border-line text-ink hover:border-ember/40"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </AnimatedSection>
      </section>

      <section className="border-t border-line bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
