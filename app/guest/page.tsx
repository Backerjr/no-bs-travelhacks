import FAQ from '@/components/FAQ';
import { getFAQs, getGuestInfo } from '@/lib/data';
import InfoBanner from '@/components/InfoBanner';
import PickupMap from '@/components/PickupMap';

export default function GuestHubPage() {
  const info = getGuestInfo();
  const faqs = getFAQs();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-4xl text-brand">Guest Information Hub</h1>
      <p className="mt-2 text-sm text-brand-muted">Everything you need before arrival: contacts, etiquette, SOPs.</p>

      <section className="mt-10 space-y-4 text-sm text-brand">
        <h2 className="font-serif text-2xl text-brand">Essential Contacts</h2>
        <p>WhatsApp Business: {info.contacts.whatsappBusiness}</p>
        <p>Emergency Line: {info.contacts.emergency}</p>
      </section>

      <section className="mt-10">
        <InfoBanner
          imageSrc={info.etiquetteImages[0]}
          title="Mosque Etiquette"
          description="Modest attire, serene footsteps, and respectful photography guidelines before you enter Sheikh Zayed Grand Mosque."
        />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-serif text-2xl text-brand">Pickup Areas Covered</h2>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-brand">
          {info.pickupAreas.map((area) => (
            <span key={area} className="rounded-full border border-brand px-4 py-2">
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-serif text-2xl text-brand">SOP Snapshot</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-brand">
            <h3 className="font-semibold uppercase tracking-[0.3em] text-brand-muted">Cancellations</h3>
            <p className="mt-3 text-brand-muted">{info.sop.cancellation}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-brand">
            <h3 className="font-semibold uppercase tracking-[0.3em] text-brand-muted">No-Show</h3>
            <p className="mt-3 text-brand-muted">{info.sop.noShow}</p>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-serif text-2xl text-brand">Coffee & Comfort Stops</h2>
        <PickupMap
          stops={[
            {
              label: 'XVA Café, Al Fahidi',
              description: 'Cardamom flat white between creek and textile souq tours.',
              href: 'https://maps.google.com/?q=XVA+Cafe+Dubai'
            },
            {
              label: 'Sheikh Zayed Grand Mosque',
              description: 'Arrive 45 minutes before opening for chandelier glow shots.',
              href: 'https://maps.google.com/?q=Sheikh+Zayed+Grand+Mosque'
            },
            {
              label: 'Louvre Abu Dhabi',
              description: 'Reserve a 14:00 entry to flow from mosque to art without rush.',
              href: 'https://maps.google.com/?q=Louvre+Abu+Dhabi'
            }
          ]}
        />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-serif text-2xl text-brand">FAQs</h2>
        <FAQ items={faqs} />
      </section>
    </main>
  );
}
