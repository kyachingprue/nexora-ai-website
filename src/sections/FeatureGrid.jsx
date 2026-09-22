import AnimatedSection from "../components/AnimatedSection.jsx";
import { FEATURES } from "../data/features.js";

export default function FeatureGrid({ items = FEATURES, title, description }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      {(title || description) && (
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {title && (
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          )}
          {description && <p className="mt-4 text-mute">{description}</p>}
        </div>
      )}

      <AnimatedSection
        as="div"
        y={26}
        stagger={0.06}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="card-surface group rounded-2xl p-6 transition-colors hover:border-ember/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember/15 text-ember transition-transform group-hover:scale-110">
                <Icon className="text-xl" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{feature.desc}</p>
            </div>
          );
        })}
      </AnimatedSection>
    </section>
  );
}
