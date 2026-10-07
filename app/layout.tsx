import type {Metadata} from 'next';
import {Oswald, Plus_Jakarta_Sans, JetBrains_Mono} from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'VS Bricks Supply | Premium Red Bricks Supplier at ₹9/Brick',
  description:
    'VS Bricks Supply provides premium quality PVC, RBS, and VBS red clay construction bricks at just ₹9 per brick. Delivery in all over Telangana. No breakage, uncompromised quality. Order on WhatsApp 9606948371.',
  keywords: [
    'VS Bricks Supply',
    'PVC Red Bricks',
    'RBS Bricks',
    'VBS Bricks',
    'Karimnagar red bricks supplier',
    'red clay bricks ₹9 Telangana',
    'construction red bricks Hyderabad Telangana',
  ],
  authors: [{name: 'VS Bricks Supply'}],
  openGraph: {
    title: 'VS Bricks Supply | Just ₹9 Per Brick - Supply All Over Telangana',
    description:
      'Direct supplier of PVC, RBS, and VBS red bricks. ₹9 per brick. No breakage. Full quantity delivered across Telangana. Call/WhatsApp 9606948371.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VS Bricks Supply | Premium Red Bricks at ₹9',
    description:
      'Stronger Walls | Brighter Futures. First quality PVC, RBS, and VBS red bricks delivered in all over Telangana.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://vsbrickssupply.com/#business',
        name: 'VS Bricks Supply',
        description:
          'Supplier of premium quality PVC, RBS, and VBS red construction bricks across Telangana with zero breakage and uncompromised quality.',
        telephone: '+919606948371',
        priceRange: '₹9 per brick',
        sameAs: ['https://www.instagram.com/karimnagar_red_bricks__/'],
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Telangana',
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Telangana',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'Product',
        '@id': 'https://vsbrickssupply.com/#product',
        name: 'VS Premium Red Clay Bricks (PVC / RBS / VBS)',
        description:
          'Kiln-fired, solid red clay bricks designed for high compressive strength and durability in construction.',
        brand: {
          '@type': 'Brand',
          name: 'VS Bricks Supply',
        },
        offers: {
          '@type': 'Offer',
          price: '9.00',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2027-12-31',
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${oswald.variable} ${jakarta.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </head>
      <body
        className="font-sans antialiased bg-[#FAF8F5] text-[#1A1816] selection:bg-[#B83824] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

