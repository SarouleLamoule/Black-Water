import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blackwater.example.com'),
  title: 'Black Water - Organisation Clandestine',
  description:
    'Organisation clandestine opérant dans les ombres de Los Santos, spécialisée dans les opérations sensibles et la gestion de crises pour des clients de haut niveau.',
  keywords: [
    'Black Water',
    'organisation clandestine',
    'opérations spéciales',
    'sécurité',
    'Los Santos',
    'GTA V',
    'RP',
  ],
  authors: [{ name: 'Black Water' }],
  creator: 'Black Water',
  publisher: 'Black Water',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://blackwater.example.com',
    siteName: 'Black Water',
    title: 'Black Water - Organisation Clandestine',
    description:
      'Organisation clandestine opérant dans les ombres de Los Santos, spécialisée dans les opérations sensibles et la gestion de crises pour des clients de haut niveau.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Black Water - Organisation Clandestine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Water - Organisation Clandestine',
    description:
      'Organisation clandestine opérant dans les ombres de Los Santos, spécialisée dans les opérations sensibles et la gestion de crises pour des clients de haut niveau.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'organization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {/* Skip links pour l'accessibilité */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <a href="#navigation" className="skip-link">
          Aller à la navigation
        </a>
        {children}
      </body>
    </html>
  );
}
