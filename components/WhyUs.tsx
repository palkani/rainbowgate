import { Clock, IndianRupee, Leaf, Palette } from "lucide-react";

const valueProps = [
  {
    icon: IndianRupee,
    title: "Bulk Pricing",
    body: "Transparent slab pricing that drops as your quantity rises — no hidden setup fees.",
  },
  {
    icon: Palette,
    title: "Full Personalization",
    body: "Logo printing, custom packaging, and branded inserts tailored to your brand guidelines.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    body: "Samples within 24 hours and delivery in 7–14 days, anywhere in India.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    body: "Eco-friendly options across every category, from bamboo to recycled materials.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-py bg-bg">
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Why Rainbow Gate.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {valueProps.map((prop) => (
            <li key={prop.title} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <prop.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-ink">{prop.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  {prop.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
