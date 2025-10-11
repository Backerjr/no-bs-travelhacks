'use client';

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface BoujeeBotProps {
  headline?: string;
  description?: string;
}

export default function BoujeeBot({ headline = 'Chat with BoujeeBot', description }: BoujeeBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "I'm BoujeeBot, Ahmed’s AI concierge. Ask about mosque etiquette, safari pickups, or crafting a luxe day-to-night flow."
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const newMessages: Message[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed })
      });
      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', content: data?.message ?? data?.content ?? 'Noted.' }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Connection dipped in the dunes. WhatsApp Ahmed directly for immediate support.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white/70 p-10 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl text-brand">{headline}</h2>
            <p className="mt-2 max-w-2xl text-sm text-brand-muted">
              {description ||
                'Your poetic yet practical guide to the Emirates. BoujeeBot remembers Ahmed’s SOPs, etiquette cues, and timing hacks.'}
            </p>
          </div>
          <AnimatePresence>
            {loading ? (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs uppercase tracking-[0.3em] text-brand-muted"
              >
                Typing…
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4 overflow-y-auto rounded-2xl bg-slate-50 p-4 text-sm text-brand" style={{ maxHeight: 360 }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={clsx('rounded-2xl px-4 py-3 shadow-sm',
                  message.role === 'assistant'
                    ? 'bg-white text-brand'
                    : 'bg-brand text-white'
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about today’s weather window or a luxe essentials kit."
              className="h-32 rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-brand shadow-inner outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <button
              type="submit"
              disabled={loading}
              className="self-start rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-muted disabled:opacity-50"
            >
              Send to Boujee
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
