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
        {/* Hero Section avec effets avancés */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-8)',
            background: `
              linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)
            `,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Effet de particules flottantes */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
            }}
          >
            {[...Array(20)].map((_, i) => {
              // Utiliser des valeurs déterministes basées sur l'index pour éviter l'erreur d'hydratation
              const left = ((i * 7) % 100) + ((i * 3) % 20);
              const top = ((i * 11) % 100) + ((i * 5) % 15);
              const duration = 3 + (i % 4);
              const delay = (i % 2) + i * 0.1;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '2px',
                    height: '2px',
                    backgroundColor: 'rgba(180, 35, 45, 0.6)',
                    borderRadius: '50%',
                    left: `${left}%`,
                    top: `${top}%`,
                    animation: `particleFloat ${duration}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                    boxShadow: '0 0 10px rgba(180, 35, 45, 0.8)',
                  }}
                />
              );
            })}
          </div>

          {/* Effet Matrix Rain */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              opacity: 0.1,
            }}
          >
            {[...Array(15)].map((_, i) => {
              // Utiliser des valeurs déterministes basées sur l'index
              const duration = 8 + (i % 4);
              const delay = i % 5;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${(i * 100) / 15}%`,
                    top: '-100px',
                    width: '2px',
                    height: '100px',
                    background:
                      'linear-gradient(to bottom, transparent, rgba(180, 35, 45, 0.8), transparent)',
                    animation: `matrixRain ${duration}s linear infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

          {/* Lignes de scan */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background:
                  'linear-gradient(90deg, transparent, rgba(180, 35, 45, 0.8), transparent)',
                animation: 'scanLine 6s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(180, 35, 45, 0.6)',
              }}
            />
          </div>

          {/* Effet holographique de fond */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '200px',
              height: '200px',
              background:
                'radial-gradient(circle, rgba(180, 35, 45, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'hologram 4s ease-in-out infinite',
              filter: 'blur(1px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: '150px',
              height: '150px',
              background:
                'radial-gradient(circle, rgba(180, 35, 45, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'hologram 5s ease-in-out infinite reverse',
              filter: 'blur(1px)',
            }}
          />

          {/* Contenu principal avec effets 3D */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '900px',
              position: 'relative',
              zIndex: 10,
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <FadeIn delay={200}>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--font-size-6xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                    textShadow: `
                      0 0 20px rgba(180, 35, 45, 0.8),
                      0 0 40px rgba(180, 35, 45, 0.6),
                      0 0 60px rgba(180, 35, 45, 0.4)
                    `,
                    letterSpacing: '0.1em',
                    animation: 'glow 3s ease-in-out infinite',
                    transform: 'translateZ(50px)',
                    filter: 'drop-shadow(0 0 30px rgba(180, 35, 45, 0.5))',
                  }}
                >
                  BLACK WATER
                </h1>

                {/* Effet de glitch sur le titre */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(180, 35, 45, 0.1) 50%, transparent 100%)',
                    animation:
                      'slideInFromLeft 2s ease-in-out infinite alternate',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div
                style={{
                  position: 'relative',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    transform: 'translateZ(30px)',
                    animation: 'float 6s ease-in-out infinite',
                  }}
                >
                  Organisation clandestine opérant dans les ombres de Los Santos
                </p>

                {/* Effet de données qui défilent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-100px',
                    width: '2px',
                    height: '20px',
                    background:
                      'linear-gradient(to bottom, transparent, rgba(180, 35, 45, 0.8), transparent)',
                    animation: 'dataStream 4s linear infinite',
                    transform: 'translateY(-50%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-100px',
                    width: '2px',
                    height: '20px',
                    background:
                      'linear-gradient(to bottom, transparent, rgba(180, 35, 45, 0.8), transparent)',
                    animation: 'dataStream 4s linear infinite 2s',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-6)',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  transform: 'translateZ(20px)',
                }}
              >
                <Link href="/about">
                  <div
                    style={{
                      position: 'relative',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        'perspective(1000px) rotateY(0deg) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        'perspective(1000px) rotateY(-5deg) scale(1)';
                    }}
                  >
                    <Button variant="primary" size="lg">
                      Qui sommes Nous
                    </Button>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          'linear-gradient(45deg, transparent, rgba(180, 35, 45, 0.1), transparent)',
                        animation:
                          'slideInFromLeft 3s ease-in-out infinite alternate',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </Link>

                <Link href="/members">
                  <div
                    style={{
                      position: 'relative',
                      transform: 'perspective(1000px) rotateY(5deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        'perspective(1000px) rotateY(0deg) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        'perspective(1000px) rotateY(5deg) scale(1)';
                    }}
                  >
                    <Button variant="outline" size="lg">
                      Nos Membres
                    </Button>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          'linear-gradient(45deg, transparent, rgba(180, 35, 45, 0.1), transparent)',
                        animation:
                          'slideInFromRight 3s ease-in-out infinite alternate',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </Link>
              </div>
            </FadeIn>

            {/* Indicateur de scroll */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'float 2s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  width: '2px',
                  height: '30px',
                  background:
                    'linear-gradient(to bottom, rgba(180, 35, 45, 0.8), transparent)',
                  borderRadius: '1px',
                }}
              />
            </div>
          </div>

          {/* Effet de grille de fond */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(180, 35, 45, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(180, 35, 45, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'rotate 20s linear infinite',
              pointerEvents: 'none',
            }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
