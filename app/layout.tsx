import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SignatureBar from '@/components/SignatureBar';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Ahmed's Digital Concierge",
  description:
    'Luxury-magazine inspired concierge for UAE travel—signature tours, etiquette briefs, BoujeeBot AI, and guest portals.',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-slate-50">
        <SignatureBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
