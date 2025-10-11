'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Tour } from '@/lib/types';
import { buildWhatsAppLink } from '@/lib/whatsapp';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const ctaHref =
    tour.cta.type === 'whatsapp'
      ? buildWhatsAppLink(`Hi Ahmed, I’m interested in ${tour.title}. Can you share availability?`)
      : '/ai';

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/40 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={tour.images[0]}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-muted">{tour.duration}</p>
          <h3 className="mt-2 font-serif text-2xl text-brand">{tour.title}</h3>
          <p className="mt-2 text-sm text-brand-muted">Pickup: {tour.pickupWindow}</p>
        </div>
        <ul className="space-y-1 text-sm text-slate-600">
          {tour.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-center gap-2">
              <span aria-hidden>•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={ctaHref}
            className="rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-muted"
          >
            {tour.cta.text}
          </Link>
          {tour.cta.type === 'ai' ? <span className="text-xs text-brand-muted">Powered by BoujeeBot</span> : null}
        </div>
      </div>
    </motion.article>
  );
}
