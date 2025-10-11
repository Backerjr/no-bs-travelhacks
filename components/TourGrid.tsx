import TourCard from './TourCard';
import type { Tour } from '@/lib/types';

interface TourGridProps {
  items: Tour[];
}

export default function TourGrid({ items }: TourGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((tour) => (
        <TourCard key={tour.slug} tour={tour} />
      ))}
    </div>
  );
}
