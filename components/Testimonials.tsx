import { Quote } from "lucide-react";

// Placeholder testimonials. Replace with real, attributable client quotes
// (see README — TODOs) before launch.
const testimonials = [
  {
    quote:
      "We ordered 600 onboarding kits on a tight timeline and Rainbow Gate had samples to us the next morning. Everything arrived branded, boxed, and a week early.",
    name: "Priya Ramesh",
    role: "HR Manager",
    company: "Zenpay Fintech",
  },
  {
    quote:
      "Our admin team used to dread festival gifting. Now it's one WhatsApp thread. The slab pricing is clear and the quality has held up across three years of orders.",
    name: "Arjun Nair",
    role: "Admin Head",
    company: "Cognivise Technologies",
  },
  {
    quote:
      "They understood our brand instantly — the custom packaging looked like something we'd designed in-house. Our clients genuinely use the drinkware.",
    name: "Sneha Iyer",
    role: "Marketing Lead",
    company: "Mango & Co.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-py bg-brand/5">
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            What clients say.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-surface p-7 shadow-sm">
                <Quote
                  className="h-7 w-7 text-accent"
                  aria-hidden="true"
                  fill="currentColor"
                />
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-ink-muted">
                    {t.role}, {t.company}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
