import Link from 'next/link';
import { notFound } from 'next/navigation';
import { findTour, getTours } from '@/lib/data';
import { buildWhatsAppLink } from '@/lib/whatsapp';

interface TourDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getTours().map((tour) => ({ slug: tour.slug }));
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = findTour(params.slug);
  if (!tour) {
    notFound();
  }

  const ctaHref =
    tour.cta.type === 'whatsapp'
      ? buildWhatsAppLink(`Hi Ahmed, I’d love to reserve the ${tour.title}. Can you confirm availability?`)
      : '/ai';

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Signature Tour</p>
      <h1 className="mt-2 font-serif text-4xl text-brand">{tour.title}</h1>
      <p className="mt-2 text-sm text-brand-muted">
        Duration {tour.duration} • Pickup window {tour.pickupWindow}
      </p>
      <div className="mt-10 space-y-8 text-sm text-brand">
        <section>
          <h2 className="font-serif text-2xl text-brand">Highlights</h2>
          <ul className="mt-3 space-y-2">
            {tour.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span aria-hidden>•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-brand">Inclusions</h2>
          <ul className="mt-3 space-y-2">
            {tour.inclusions.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-brand">Good to know</h2>
          <ul className="mt-3 space-y-2">
            {tour.notes.map((note) => (
              <li key={note} className="flex gap-2">
                <span aria-hidden>•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link
          href={ctaHref}
          className="rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-muted"
        >
          {tour.cta.text}
        </Link>
        <Link className="text-xs uppercase tracking-[0.3em] text-brand-muted hover:text-brand" href="/tours">
          Back to tours
        </Link>
      </div>
    </main>
  );
}
