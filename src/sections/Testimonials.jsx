const QUOTES = [
  { name: "Amara Osei", role: "CTO, Fenwick Retail", quote: "Nexora cut our support response time by more than half in one quarter." },
  { name: "Diego Ramirez", role: "Head of Data, Halvorsen Bank", quote: "We replaced four brittle scripts with one workflow that just works." },
  { name: "Priya Nair", role: "Founder, Loomstack", quote: "The routing layer alone saved us weeks of infrastructure work." },
  { name: "Tomasz Wik", role: "VP Eng, Marrow Health", quote: "Compliance signed off in days because the audit trail was already there." },
  { name: "Elena Frost", role: "Product Lead, Circuit", quote: "Our team ships AI features in an afternoon instead of a sprint." },
];

export default function Testimonials() {
  const loop = [...QUOTES, ...QUOTES];
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Teams building with Nexora
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-5 py-2 [animation-play-state:running] hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="card-surface w-80 shrink-0 rounded-2xl p-6"
            >
              <blockquote className="text-sm leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-9 w-9 rounded-full bg-gradient-to-br from-ember to-ember-dim" />
                <span>
                  <span className="block text-sm font-medium text-ink">{t.name}</span>
                  <span className="block text-xs text-mute">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
