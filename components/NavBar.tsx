import Link from 'next/link';

const links = [
  { href: '/tours', label: 'Tours' },
  { href: '/guest', label: 'Guest Hub' },
  { href: '/ai', label: 'BoujeeBot' },
  { href: '/contact', label: 'Contact' }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl text-brand">
          Ahmed’s Digital Concierge
        </Link>
        <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.3em] text-brand">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-accent">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
