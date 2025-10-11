import { findGuestPortal } from '@/lib/data';
import { buildWhatsAppLink } from '@/lib/whatsapp';

interface GuestPortalPageProps {
  params: { guestId: string };
}

export default function GuestPortalPage({ params }: GuestPortalPageProps) {
  const portal = findGuestPortal(params.guestId);

  if (!portal) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-serif text-3xl text-brand">Portal Not Found</h1>
        <p className="mt-2 text-sm text-brand-muted">Double-check the link or WhatsApp Ahmed for a fresh invitation.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Guest Portal</p>
        <h1 className="mt-2 font-serif text-4xl text-brand">Hi {portal.name}, here’s your itinerary</h1>
        <p className="mt-3 text-sm text-brand-muted">
          Dates {portal.trip.dates} • Pax {portal.trip.pax} • Vibe {portal.trip.vibe}
        </p>
      </div>
      <section className="space-y-4">
        {portal.itinerary.map((day) => (
          <div key={day.day} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Day {day.day}</p>
            <h2 className="mt-2 font-serif text-2xl text-brand">{day.title}</h2>
            <p className="mt-2 text-sm text-brand-muted">{day.notes}</p>
          </div>
        ))}
      </section>
      <a
        href={buildWhatsAppLink(`Hi Ahmed, it’s ${portal.name}. I’m viewing my portal and have a question about the itinerary.`)}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-muted"
      >
        Message Ahmed on WhatsApp
      </a>
    </main>
  );
}
