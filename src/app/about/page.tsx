'use client';

import {
  Header,
  Footer,
  ClassifiedDocument,
  FadeIn,
  StaggeredFadeIn,
  SecurityBadge,
} from '../../components';

export default function About() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-secondary)',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <FadeIn>
              <h1
                style={{
                  fontSize: 'var(--font-size-5xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-6)',
                  fontFamily: 'var(--font-family-display)',
                }}
              >
                À propos de Black Water
              </h1>
              <p
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: 'var(--line-height-relaxed)',
                }}
              >
                Une organisation discrète et efficace, spécialisée dans les
                opérations sensibles et la protection d&apos;intérêts
                stratégiques.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section Histoire */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div className="container">
            <StaggeredFadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-12)',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: 'var(--font-size-3xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-6)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Notre Histoire
                  </h2>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Fondée dans l&apos;ombre de Los Santos, Black Water est née
                    de la nécessité de créer une organisation capable
                    d&apos;opérer avec discrétion et efficacité dans un
                    environnement complexe et dangereux.
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                    }}
                  >
                    Depuis nos débuts, nous avons développé une expertise unique
                    dans la gestion d&apos;opérations sensibles, en respectant
                    les plus hauts standards de professionnalisme et de
                    confidentialité.
                  </p>
                </div>

                <ClassifiedDocument level="classified" title="Fondation">
                  <p>
                    Black Water a été établie avec pour mission de fournir des
                    services d&apos;élite dans un environnement où la discrétion
                    est primordiale. Notre approche méthodique et notre
                    engagement envers l&apos;excellence nous ont permis de
                    devenir un acteur de référence.
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Valeurs */}
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
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--spacing-4)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Nos Valeurs
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
                  Les principes qui guident chacune de nos actions et décisions.
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
                <ClassifiedDocument level="classified" title="Discrétion">
                  <p>
                    La confidentialité est au cœur de notre approche. Nous
                    respectons strictement les protocoles de sécurité et
                    maintenons l&apos;anonymat de nos clients et de nos
                    opérations.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="secret" title="Excellence">
                  <p>
                    Nous nous engageons à fournir des services de la plus haute
                    qualité, en utilisant les meilleures techniques et en
                    respectant les plus hauts standards professionnels.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="top-secret" title="Fiabilité">
                  <p>
                    Notre réputation repose sur notre capacité à honorer nos
                    engagements et à livrer des résultats concrets, même dans
                    les situations les plus complexes et délicates.
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Équipe */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-primary)',
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
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--spacing-4)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Notre Équipe
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
                  Des professionnels expérimentés et hautement qualifiés.
                </p>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--spacing-8)',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'var(--color-bg-tertiary)',
                      borderRadius: '50%',
                      margin: '0 auto var(--spacing-4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    [CLASSIFIED]
                  </div>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-2)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Directeur Exécutif
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-3)',
                    }}
                  >
                    Direction stratégique et coordination des opérations
                  </p>
                  <SecurityBadge level="top-secret" />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'var(--color-bg-tertiary)',
                      borderRadius: '50%',
                      margin: '0 auto var(--spacing-4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    [CLASSIFIED]
                  </div>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-2)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Chef des Opérations
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-3)',
                    }}
                  >
                    Planification et exécution des missions
                  </p>
                  <SecurityBadge level="secret" />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'var(--color-bg-tertiary)',
                      borderRadius: '50%',
                      margin: '0 auto var(--spacing-4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    [CLASSIFIED]
                  </div>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-2)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Responsable Sécurité
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-3)',
                    }}
                  >
                    Protection et sécurité des opérations
                  </p>
                  <SecurityBadge level="classified" />
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
