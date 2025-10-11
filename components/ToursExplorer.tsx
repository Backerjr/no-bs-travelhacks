'use client';

import { useMemo, useState } from 'react';
import Filters from './Filters';
import TourGrid from './TourGrid';
import type { Tour } from '@/lib/types';

interface ToursExplorerProps {
  tours: Tour[];
}

export default function ToursExplorer({ tours }: ToursExplorerProps) {
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => Array.from(new Set(tours.flatMap((tour) => tour.tags || []))), [tours]);

  const filtered = useMemo(() => {
    if (!tag) return tours;
    return tours.filter((tour) => tour.tags?.includes(tag));
  }, [tag, tours]);

  return (
    <div className="space-y-8">
      <Filters tags={tags} onSelect={setTag} />
      <TourGrid items={filtered} />
    </div>
  );
}
