import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import MouseEffect from '../components/MouseEffect';
import BulletImpact from '../components/BulletImpact';
import TargetSystem from '../components/TargetSystem';
import { TargetProvider } from '../contexts/TargetContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://black-water-self.vercel.app'),
  title: 'Black Water - Organisation Clandestine',
  description:
    'Organisation clandestine opérant dans les ombres de Los Santos.',
  icons: {
    icon: [
      { url: '/icone.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/icone.ico',
    apple: '/logo.png',
  },
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
  creator: 'saroulelamoule',
  publisher: 'saroulelamoule',
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
    url: 'https://black-water-self.vercel.app',
    siteName: 'Black Water',
    title: 'Black Water - Organisation Clandestine',
    description:
      'Organisation clandestine opérant dans les ombres de Los Santos.',
    images: [
      {
        url: 'https://black-water-self.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Black Water - Organisation Clandestine',
        type: 'image/png',
      },
    ],
  },
  other: {
    'property:fb:app_id': '123456789',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Water - Organisation Clandestine',
    description:
      'Organisation clandestine opérant dans les ombres de Los Santos.',
    images: ['https://black-water-self.vercel.app/logo.png'],
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
        <TargetProvider>
          {/* Effet de souris global */}
          <MouseEffect />

          {/* Effet d'impact de balles global */}
          <BulletImpact />

          {/* Système de cibles global */}
          <TargetSystem />

          {/* Skip links pour l'accessibilité */}
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>
          <a href="#navigation" className="skip-link">
            Aller à la navigation
          </a>
          {children}
        </TargetProvider>
      </body>
    </html>
  );
}
