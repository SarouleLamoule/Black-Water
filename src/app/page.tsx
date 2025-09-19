'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { FadeIn } from '../components/Animations';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-8)',
            background:
              'linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Effet de bruit de fond */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 50%, rgba(180, 35, 45, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(180, 35, 45, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(180, 35, 45, 0.02) 0%, transparent 50%)
              `,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <FadeIn delay={200}>
              <h1
                style={{
                  fontSize: 'var(--font-size-6xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-accent-red)',
                  marginBottom: 'var(--spacing-6)',
                  fontFamily: 'var(--font-family-display)',
                  textShadow: '0 0 20px rgba(180, 35, 45, 0.3)',
                  letterSpacing: '0.05em',
                }}
              >
                BLACK WATER
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <p
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-8)',
                  lineHeight: 'var(--line-height-relaxed)',
                }}
              >
                Organisation clandestine opérant dans les ombres de Los Santos
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-4)',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link href="/about">
                  <Button variant="primary" size="lg">
                    Qui sommes Nous
                  </Button>
                </Link>
                <Link href="/members">
                  <Button variant="outline" size="lg">
                    Nos Membres
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
