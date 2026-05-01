import type {Metadata} from 'next';
import { Oswald, Montserrat, Inter } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Best Gym in Jamshedpur | The CrossFit Gym Near Sonari Airport',
  description: 'Looking for the best gym in Jamshedpur? The CrossFit Gym in Kagal Nagar, near Sonari Airport, offers expert personal training, muscle gain, and weight loss programs. Join today!',
  keywords: 'best gym in Jamshedpur, gym near Sonari Airport, fitness center in Jamshedpur, personal trainer in Jamshedpur, weight loss gym Jamshedpur, muscle gain training Jamshedpur',
  alternates: {
    canonical: 'https://ais-pre-uwn5r7gf6n7hmfkz2m5vot-350588490993.asia-northeast1.run.app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The CrossFit Gym Jamshedpur',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'PATANJALI BUILDING, River Meet Road, Near Sonari Airport, Main Rd, Kagal Nagar, Naya Line',
    addressLocality: 'Jamshedpur',
    addressRegion: 'Jharkhand',
    postalCode: '831011',
    addressCountry: 'IN',
  },
  telephone: '+917870800800',
  url: 'https://ais-pre-uwn5r7gf6n7hmfkz2m5vot-350588490993.asia-northeast1.run.app',
  openingHours: 'Mo-Su 05:00-23:00',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.variable} ${montserrat.variable} ${inter.variable} font-sans bg-[#0B0B0B] text-[#F5F5F5] antialiased overflow-x-hidden`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
