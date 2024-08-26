import type { Metadata } from 'next';
import { Cormorant, Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Header from '@/components/Header';

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title:
    'Los Angeles attorney Peter Hosharain specializes in personal injury law - hosharianlaw.com',
  description:
    'Los Angeles based lawyer Peter Hosharian of Hosharian Law specializes in Personal Injury. Schedule your free consultation with attorney Peter Hosharian and visit our office located in Burbank California.',
  keywords: [
    'personal injury',
    'personal injury lawyer',
    'auto accident laywer',
    'car accident lawyer',
    'bodily injury lawyer',
    'workers compensation lawyer',
    'Glendale lawyer',
    'Glendale attorney',
    'Burbank lawer',
    'Burbank attorney',
    'Los Angeles attorney',
  ],
  verification: {
    google: 'N37zilee8O4LkOn3GFrn9onbMxYWgXhkM3Nth5OUzCA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body>
        <div className="container mx-auto flex h-full flex-col">
          <Header />
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
