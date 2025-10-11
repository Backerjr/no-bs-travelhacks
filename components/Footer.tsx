import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-200">© {new Date().getFullYear()} Ahmed’s Digital Concierge. Crafted for UAE guests.</p>
        <div className="flex gap-4 text-xs uppercase tracking-[0.3em]">
          <Link className="hover:text-amber-200" href="/contact">
            WhatsApp Ahmed
          </Link>
          <Link className="hover:text-amber-200" href="/ai">
            Ask BoujeeBot
          </Link>
        </div>
      </div>
    </footer>
  );
}
