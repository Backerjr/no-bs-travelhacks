import BoujeeBot from '@/components/BoujeeBot';

export default function AIPage() {
  return (
    <main className="bg-brand/5">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-serif text-4xl text-brand">BoujeeBot HQ</h1>
        <p className="mt-2 text-sm text-brand-muted">
          Full-screen AI concierge ready with Ahmed’s etiquette notes, pickup timing, and pro hydration reminders.
        </p>
      </div>
      <BoujeeBot />
    </main>
  );
}
