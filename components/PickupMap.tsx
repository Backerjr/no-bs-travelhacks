import Link from 'next/link';

interface PickupMapProps {
  stops: { label: string; description: string; href: string }[];
}

export default function PickupMap({ stops }: PickupMapProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="font-serif text-2xl text-brand">Pickup & Pause Map</h3>
      <p className="mt-2 text-sm text-brand-muted">
        Save Ahmed’s curated Google Map offline for coffee interludes, comfort stops, and marquee highlights.
      </p>
      <ul className="mt-6 space-y-4 text-sm text-brand">
        {stops.map((stop) => (
          <li key={stop.label} className="space-y-1">
            <p className="font-semibold">{stop.label}</p>
            <p className="text-brand-muted">{stop.description}</p>
            <Link className="text-xs uppercase tracking-[0.3em] text-brand-accent" href={stop.href} target="_blank" rel="noopener">
              Open in Google Maps
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
