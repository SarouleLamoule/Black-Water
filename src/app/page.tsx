'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ClassifiedDocument from '../components/ClassifiedDocument';
import { FadeIn, StaggeredFadeIn } from '../components/Animations';

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
                <Button variant="primary" size="lg">
                  Découvrir
                </Button>
                <Button variant="outline" size="lg">
                  En savoir plus
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section À propos */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-secondary)',
          }}
        >
          <div className="container">
            <StaggeredFadeIn>
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-12)',
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-4xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--spacing-4)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  À propos de Black Water
                </h2>
                <p
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: 'var(--line-height-relaxed)',
                  }}
                >
                  Une organisation discrète et efficace, spécialisée dans les
                  opérations sensibles et la protection d&apos;intérêts
                  stratégiques.
                </p>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: 'var(--spacing-8)',
                }}
              >
                <ClassifiedDocument level="classified" title="Mission">
                  <p>
                    Black Water opère dans l&apos;ombre pour maintenir
                    l&apos;équilibre et protéger les intérêts de ses clients.
                    Notre expertise couvre un large éventail d&apos;opérations
                    spécialisées.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="secret" title="Méthodes">
                  <p>
                    Nous utilisons des techniques avancées et des protocoles
                    stricts pour garantir la discrétion et l&apos;efficacité de
                    nos opérations. Chaque mission est planifiée avec précision.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="top-secret" title="Résultats">
                  <p>
                    Notre taux de réussite exceptionnel et notre réputation
                    d&apos;excellence font de Black Water le partenaire de choix
                    pour les opérations les plus sensibles.
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section CTA */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-primary)',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <FadeIn>
              <h2
                style={{
                  fontSize: 'var(--font-size-3xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-6)',
                  fontFamily: 'var(--font-family-display)',
                }}
              >
                Prêt à découvrir nos services ?
              </h2>
              <p
                style={{
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-8)',
                  maxWidth: '500px',
                  margin: '0 auto var(--spacing-8)',
                }}
              >
                Contactez-nous pour discuter de vos besoins spécifiques.
              </p>
              <Button variant="primary" size="lg">
                Nous contacter
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
