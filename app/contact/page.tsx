'use client';

import { FormEvent, useState } from 'react';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl text-brand">Connect with Ahmed</h1>
      <p className="mt-2 text-sm text-brand-muted">
        Prefer WhatsApp? Use the instant link below or submit the concierge form for email follow-up within hours.
      </p>
      <div className="mt-8 flex flex-col gap-6">
        <a
          href={buildWhatsAppLink('Hi Ahmed, I discovered your concierge and want to begin planning.')}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-muted"
        >
          Message on WhatsApp
        </a>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-brand-muted" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-brand-muted" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-brand-muted" htmlFor="message">
              Trip Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand focus:border-brand focus:ring-2 focus:ring-brand/20"
              placeholder="Desired dates, guest count, dream experiences..."
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-muted"
          >
            Submit
          </button>
          {status === 'success' ? (
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Message received. Ahmed will reply shortly.</p>
          ) : null}
          {status === 'error' ? (
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">Something went wrong. Try WhatsApp instead.</p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
