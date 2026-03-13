import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Space_Mono, DM_Sans } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'MUTANU STUDIO — Systems Engineering', template: '%s | MUTANU STUDIO' },
  description: 'Architecting high-performance digital infrastructure for ambitious businesses. Web design, development, and digital strategy from Nairobi.',
  keywords: ['web design', 'web development', 'UI/UX', 'Nairobi', 'digital studio'],
  openGraph: {
    type: 'website', locale: 'en_KE', url: 'https://mutanostudio.com', siteName: 'Mutanu Studio',
    title: 'MUTANU STUDIO — Systems Engineering',
    description: 'Architecting high-performance digital infrastructure for ambitious businesses.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mutanu Studio' }],
  },
  twitter: { card: 'summary_large_image', title: 'MUTANU STUDIO', images: ['/og-image.png'], creator: '@mutanostudio' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, themeColor: '#050505',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceMono.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}