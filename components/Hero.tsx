'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const heroButtons = [
  {
    href: '/tours',
    label: 'Browse Tours'
  },
  {
    href: buildWhatsAppLink('Hi Ahmed, I want to plan a luminous UAE escape.'),
    label: 'Plan My Trip',
    external: true
  },
  {
    href: '/ai',
    label: 'Ask Boujee'
  }
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 translate-y-1/3 -translate-x-1/3 rounded-full bg-amber-200/30 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-end md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1"
        >
          <p className="font-serif text-lg uppercase tracking-[0.3em] text-amber-200">Arabian Peninsula Edition</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            Dubai. Detours. Done Differently.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            Ahmed’s Digital Concierge choreographs signature mosque mornings, desert evenings, and couture-level hospitality with
            AI precision.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {heroButtons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className="rounded-full border border-amber-200/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
                rel={button.external ? 'noopener' : undefined}
                target={button.external ? '_blank' : undefined}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="max-w-sm rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-slate-100 shadow-glow backdrop-blur"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-200">Ahmed’s Tip</p>
          <p className="mt-3 leading-relaxed text-slate-100">
            Book dawn access at the Grand Mosque, then glide to Louvre Abu Dhabi for light-drenched galleries before the city wakes.
            Hydrate every hour to stay radiant.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
