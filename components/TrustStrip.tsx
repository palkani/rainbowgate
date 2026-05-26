import Image from "next/image";

// Placeholder client marks. Replace the files in /public/logos with real,
// permission-cleared client logos and update the names below.
const clients = [
  { src: "/logos/client-1.svg", name: "Northwind" },
  { src: "/logos/client-2.svg", name: "Vertex" },
  { src: "/logos/client-3.svg", name: "Lumen" },
  { src: "/logos/client-4.svg", name: "Meridian" },
  { src: "/logos/client-5.svg", name: "Caldera" },
  { src: "/logos/client-6.svg", name: "Atlas" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="container-px">
        <p className="text-center text-sm font-medium uppercase tracking-[0.16em] text-ink-muted">
          Trusted by teams across India
        </p>
        <ul className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <li key={client.name}>
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                width={160}
                height={48}
                className="h-10 w-auto max-h-12 opacity-70 grayscale transition-all duration-200 ease-out hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
