import ToursExplorer from '@/components/ToursExplorer';
import { getTours } from '@/lib/data';

export default function ToursPage() {
  const tours = getTours();
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif text-4xl text-brand">All Signature Tours</h1>
          <p className="mt-2 text-sm text-brand-muted">
            Filter by vibe to sculpt your itinerary—each tour includes pickups, inclusions, and Ahmed’s notes.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <ToursExplorer tours={tours} />
      </div>
    </main>
  );
}
