import AnimatedSection from "../components/AnimatedSection.jsx";

const STEPS = [
  {
    n: "01",
    title: "Connect your data",
    desc: "Link your product, docs and existing tools — Nexora indexes what matters in minutes.",
  },
  {
    n: "02",
    title: "Design the workflow",
    desc: "Drag models and actions onto a canvas, or start from a template built for your industry.",
  },
  {
    n: "03",
    title: "Ship and monitor",
    desc: "Deploy with one click, then watch latency, cost and accuracy in a live dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-line bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From idea to production, in three steps
          </h2>
          <p className="mt-4 text-mute">
            No infrastructure to provision — Nexora handles routing, scaling
            and observability for you.
          </p>
        </div>

        <AnimatedSection
          as="div"
          y={30}
          stagger={0.12}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="card-surface relative overflow-hidden rounded-2xl p-7">
                <span className="font-mono text-xs text-ember">{step.n}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-4 hidden h-px w-8 bg-line md:block"
                />
              )}
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
