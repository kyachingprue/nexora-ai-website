import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { HiArrowUpRight } from "react-icons/hi2";
import { ARTICLES, DOCS_LINKS } from "../data/resources.js";
import ResourcesShowcase from "../components/ResourcesShowcase.jsx";

export default function ResourcesPage() {
  return (
    <>
      <SEO
        path="/resources"
        title="Resources"
        description="Guides, case studies and documentation for building with Nexora."
      />
      <PageHero
        eyebrow="Resources"
        title="Guides, case studies & documentation"
        description="Everything you need to design, ship and scale AI workflows with Nexora."
      />

      <ResourcesShowcase/>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <AnimatedSection
          as="div"
          y={26}
          stagger={0.06}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="card-surface group flex cursor-pointer flex-col rounded-2xl p-6 transition-colors hover:border-ember/40"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ember">
                  {a.tag}
                </span>
                <HiArrowUpRight className="text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{a.desc}</p>
              <p className="mt-5 text-xs text-mute-2">{a.read}</p>
            </article>
          ))}
        </AnimatedSection>
      </section>


      <section className="border-t border-line bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Developer documentation
          </h2>
          <AnimatedSection
            as="div"
            y={18}
            stagger={0.06}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {DOCS_LINKS.map((d) => (
              <div
                key={d.title}
                className="card-surface flex items-center justify-between rounded-xl p-5 transition-colors hover:border-ember/40"
              >
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{d.title}</p>
                  <p className="mt-1 text-xs text-mute">{d.desc}</p>
                </div>
                <HiArrowUpRight className="shrink-0 text-mute" />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
