const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    body: "Share the occasion, headcount, budget, and any branding. A WhatsApp message or a quick call is enough to get started.",
  },
  {
    n: "02",
    title: "Samples and quote in 24 hours",
    body: "We recommend products, send mockups with your logo, and quote transparent slab pricing — usually within a single working day.",
  },
  {
    n: "03",
    title: "We brand, pack, and deliver",
    body: "Approve the sample and we handle printing, custom packaging, and dispatch — with delivery across India in 7–14 days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-surface">
      <div className="container-px">
        <div className="max-w-2xl">
          <p className="eyebrow">Simple process</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            From requirement to delivery.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step) => (
            <li key={step.n}>
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none text-brand"
              >
                {step.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
