'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface FiltersProps {
  tags: string[];
  onSelect(tag: string | null): void;
}

export default function Filters({ tags, onSelect }: FiltersProps) {
  const [active, setActive] = useState<string | null>(null);

  function handleClick(tag: string | null) {
    setActive(tag);
    onSelect(tag);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => handleClick(null)}
        className={clsx(
          'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition',
          active === null
            ? 'border-brand bg-brand text-white'
            : 'border-slate-300 bg-white text-brand hover:border-brand hover:text-brand'
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => handleClick(tag)}
          className={clsx(
            'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition',
            active === tag
              ? 'border-brand bg-brand text-white'
              : 'border-slate-300 bg-white text-brand hover:border-brand hover:text-brand'
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
