import Hero from '@/components/Hero';
import TourGrid from '@/components/TourGrid';
import FAQ from '@/components/FAQ';
import BoujeeBot from '@/components/BoujeeBot';
import { getTours, getFAQs } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const tours = getTours().slice(0, 3);
  const faqs = getFAQs();

  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl text-brand">Signature Experiences</h2>
            <p className="mt-2 text-sm text-brand-muted">
              Curated highlights for guests who want poetic shots, seamless timing, and couture-level comfort.
            </p>
          </div>
          <Link className="text-xs uppercase tracking-[0.3em] text-brand hover:text-brand-accent" href="/tours">
            View all tours
          </Link>
        </div>
        <div className="mt-10">
          <TourGrid items={tours} />
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="font-serif text-3xl text-brand">Frequently Asked Rituals</h2>
        <p className="mt-2 text-sm text-brand-muted">
          Ahmed’s SOP crib sheet—know-before cues for mosques, balloons, and cancellation fine print.
        </p>
        <div className="mt-8">
          <FAQ items={faqs} />
        </div>
      </section>
      <BoujeeBot headline="BoujeeBot on Call" description="Drop your question and our AI concierge replies with Ahmed’s tone, etiquette cues, and timing intel." />
    </main>
  );
}
