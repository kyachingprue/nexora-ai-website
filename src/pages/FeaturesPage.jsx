import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import FeatureGrid from "../sections/FeatureGrid.jsx";
import CTA from "../sections/CTA.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { FEATURES } from "../data/features.js";
import FeaturesShowcase from "../components/FeaturesShowcase.jsx";

const COMPARE = [
  { label: "Model providers supported", value: "18+" },
  { label: "Average routing latency", value: "< 100ms" },
  { label: "Workflow build time", value: "~15 min" },
  { label: "Uptime SLA", value: "99.9%" },
];

export default function FeaturesPage() {
  return (
    <>
      <SEO
        path="/features"
        title="Features"
        description="Explore Nexora's model routing, automation builder, analytics and integrations."
      />
      <PageHero
        eyebrow="Platform"
        title="Every tool your AI team actually uses"
        description="From model routing to analytics, Nexora replaces a stack of point solutions with one coherent platform."
      />

      <FeatureGrid items={FEATURES} />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <AnimatedSection
          as="div"
          y={22}
          stagger={0.06}
          className="grid grid-cols-2 gap-5 rounded-3xl border border-line bg-surface p-8 sm:grid-cols-4 sm:p-10"
        >
          {COMPARE.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl font-semibold text-ember sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-mute">{item.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </section>

      <FeaturesShowcase/>
      <CTA />
    </>
  );
}
