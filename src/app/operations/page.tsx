'use client';

import {
  Header,
  Footer,
  OperationsTimeline,
  FadeIn,
  StaggeredFadeIn,
  SecurityBadge,
} from '../../components';

// Données d'exemple pour les opérations
const operations = [
  {
    id: '1',
    title: 'Opération Nightfall',
    date: '2024-01-15',
    status: 'success' as const,
    description:
      'Mission de reconnaissance nocturne dans le quartier de Vinewood. Collecte d&apos;informations sensibles sur les activités d&apos;un groupe criminel local.',
    location: 'Vinewood, Los Santos',
    participants: ['SHADOW', 'RAVEN'],
    classification: 'classified' as const,
  },
  {
    id: '2',
    title: 'Mission Silent Strike',
    date: '2024-01-22',
    status: 'success' as const,
    description:
      'Opération d&apos;infiltration dans un complexe industriel pour récupérer des documents confidentiels. Mission menée avec succès sans détection.',
    location: 'Complexe Industriel, Port de Los Santos',
    participants: ['SHADOW', 'PHANTOM'],
    classification: 'secret' as const,
  },
  {
    id: '3',
    title: 'Opération Thunder Strike',
    date: '2024-02-05',
    status: 'success' as const,
    description:
      'Assaut coordonné pour libérer des otages retenus dans un bâtiment gouvernemental. Tous les otages ont été libérés sans perte.',
    location: 'Bâtiment Gouvernemental, Downtown',
    participants: ['STORM', 'VIPER', 'SHADOW'],
    classification: 'top-secret' as const,
  },
  {
    id: '4',
    title: 'Mission Digital Ghost',
    date: '2024-02-18',
    status: 'ongoing' as const,
    description:
      'Opération de cybersécurité en cours pour infiltrer un réseau criminel et collecter des preuves numériques.',
    location: 'Réseau Numérique',
    participants: ['PHANTOM'],
    classification: 'classified' as const,
  },
  {
    id: '5',
    title: 'Opération Long Shot',
    date: '2024-03-02',
    status: 'success' as const,
    description:
      'Mission de neutralisation d&apos;une cible à longue distance. Opération menée avec précision depuis une position d&apos;observation.',
    location: 'Collines de Los Santos',
    participants: ['RAVEN'],
    classification: 'secret' as const,
  },
  {
    id: '6',
    title: 'Mission Final Extraction',
    date: '2024-03-10',
    status: 'failure' as const,
    description:
      'Tentative d&apos;extraction d&apos;un agent infiltré. Mission échouée suite à une trahison interne. Agent GHOST porté disparu.',
    location: 'Quartier de Little Seoul',
    participants: ['GHOST', 'SHADOW'],
    classification: 'top-secret' as const,
  },
  {
    id: '7',
    title: 'Opération Controlled Demolition',
    date: '2024-03-25',
    status: 'success' as const,
    description:
      'Destruction contrôlée d&apos;un laboratoire de production de substances illégales. Installation neutralisée sans dommages collatéraux.',
    location: 'Laboratoire Clandestin, Sandy Shores',
    participants: ['VIPER', 'STORM'],
    classification: 'classified' as const,
  },
  {
    id: '8',
    title: 'Mission Code Breaker',
    date: '2024-04-08',
    status: 'ongoing' as const,
    description:
      'Décryptage en cours d&apos;un système de communication crypté utilisé par une organisation criminelle internationale.',
    location: 'Centre de Communication',
    participants: ['PHANTOM', 'SHADOW'],
    classification: 'secret' as const,
  },
];

export default function Operations() {
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
                Nos Opérations
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
                Un aperçu de nos missions récentes et de notre expertise
                opérationnelle.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section Statistiques */}
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
                  Statistiques des Opérations
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
                  Nos performances et notre taux de réussite.
                </p>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                      fontSize: 'var(--font-size-4xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-success)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {operations.filter((op) => op.status === 'success').length}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    Missions Réussies
                  </p>
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
                      fontSize: 'var(--font-size-4xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-warning)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {operations.filter((op) => op.status === 'ongoing').length}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    En Cours
                  </p>
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
                      fontSize: 'var(--font-size-4xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-error)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {operations.filter((op) => op.status === 'failure').length}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    Échecs
                  </p>
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
                      fontSize: 'var(--font-size-4xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-red)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {operations.length}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    Total des Missions
                  </p>
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Types d'Opérations */}
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
                  Types d&apos;Opérations
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
                  Nos domaines d&apos;expertise et nos spécialisations.
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
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Reconnaissance
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Collecte d&apos;informations et surveillance discrète pour
                    préparer les opérations futures.
                  </p>
                  <SecurityBadge level="classified" />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Infiltration
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Pénétration discrète dans des zones sécurisées pour
                    récupérer des informations ou des objets sensibles.
                  </p>
                  <SecurityBadge level="secret" />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Assaut
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Opérations d&apos;assaut coordonnées pour libérer des otages
                    ou neutraliser des menaces.
                  </p>
                  <SecurityBadge level="top-secret" />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Cybersécurité
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Opérations numériques pour infiltrer des réseaux et
                    collecter des informations sensibles.
                  </p>
                  <SecurityBadge level="classified" />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Neutralisation
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Élimination ciblée de menaces spécifiques avec précision et
                    discrétion maximales.
                  </p>
                  <SecurityBadge level="top-secret" />
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Extraction
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Récupération d&apos;agents ou d&apos;objets sensibles dans
                    des environnements hostiles.
                  </p>
                  <SecurityBadge level="secret" />
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Timeline des Opérations */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div className="container">
            <OperationsTimeline operations={operations} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
