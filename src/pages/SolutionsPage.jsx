import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import CTA from "../sections/CTA.jsx";
import { HiCheck } from "react-icons/hi2";
import { SOLUTIONS } from "../data/solutions.js";
import SolutionsShowcase from "../components/SolutionsShowcase.jsx";

export default function SolutionsPage() {
  return (
    <>
      <SEO
        path="/solutions"
        title="Solutions"
        description="See how Nexora fits enterprise ops, commerce, finance, healthcare, education and logistics."
      />
      <PageHero
        eyebrow="Solutions"
        title="Built for how your industry actually works"
        description="Nexora adapts to your workflows instead of asking you to adapt to it."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <AnimatedSection
          as="div"
          y={26}
          stagger={0.07}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="card-surface group flex flex-col rounded-2xl p-7 transition-colors hover:border-ember/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember/15 text-ember transition-transform group-hover:scale-110">
                  <Icon className="text-xl" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{s.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-mute">
                      <HiCheck className="mt-0.5 shrink-0 text-ember" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </AnimatedSection>
      </section>

      <SolutionsShowcase/>
      <CTA />
    </>
  );
}
