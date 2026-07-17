import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Space_Mono, DM_Sans } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'MYSA Builds — Web Design & Digital Systems', template: '%s | MYSA Builds' },
  description: 'Architecting high-performance digital infrastructure for ambitious businesses. Web design, development, and digital strategy from Nairobi.',
  keywords: ['web design', 'web development', 'UI/UX', 'Nairobi', 'digital studio'],
  openGraph: {
    type: 'website', locale: 'en_KE', url: 'https://mysabuilds.com', siteName: 'MYSA Builds',
    title: 'MYSA Builds — Web Design & Digital Systems',
    description: 'Architecting high-performance digital infrastructure for ambitious businesses.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MYSA Builds' }],
  },
  twitter: { card: 'summary_large_image', title: 'MYSA Builds', images: ['/og-image.png'], creator: '@mysabuilds' },
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