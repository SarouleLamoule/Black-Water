'use client';

import {
  Header,
  Footer,
  ClassifiedDocument,
  FadeIn,
  StaggeredFadeIn,
  SecurityBadge,
} from '../../components';

// Données d'exemple pour les articles de presse
const pressArticles = [
  {
    id: '1',
    title: "Mystérieuse Organisation Opérant dans l'Ombre",
    date: '2024-03-15',
    source: 'Los Santos Times',
    excerpt:
      "Des sources anonymes rapportent l'existence d'une organisation clandestine opérant dans les coulisses de la ville...",
    classification: 'public' as const,
    category: 'Enquête',
  },
  {
    id: '2',
    title: 'Opérations Secrètes dans le Quartier Financier',
    date: '2024-03-10',
    source: 'Vinewood Gazette',
    excerpt:
      'Des témoins rapportent avoir observé des activités suspectes dans le quartier financier de Los Santos...',
    classification: 'classified' as const,
    category: 'Sécurité',
  },
  {
    id: '3',
    title: 'Nouvelle Menace pour la Sécurité Urbaine',
    date: '2024-03-05',
    source: 'Los Santos Herald',
    excerpt:
      "Les autorités locales s'inquiètent de l'émergence de nouvelles menaces pour la sécurité de la ville...",
    classification: 'public' as const,
    category: 'Sécurité',
  },
  {
    id: '4',
    title: 'Opérations Clandestines dans le Port',
    date: '2024-02-28',
    source: 'Port Authority News',
    excerpt:
      'Des activités non autorisées ont été signalées dans la zone portuaire de Los Santos...',
    classification: 'secret' as const,
    category: 'Infrastructure',
  },
  {
    id: '5',
    title: 'Cybersécurité : Nouvelle Génération de Menaces',
    date: '2024-02-20',
    source: 'Tech Los Santos',
    excerpt:
      "Les experts en cybersécurité alertent sur l'émergence de nouvelles menaces numériques...",
    classification: 'classified' as const,
    category: 'Technologie',
  },
  {
    id: '6',
    title: 'Organisation Clandestine : Mythe ou Réalité ?',
    date: '2024-02-15',
    source: 'Los Santos Weekly',
    excerpt:
      'Une enquête approfondie sur les rumeurs concernant une organisation secrète opérant dans la ville...',
    classification: 'public' as const,
    category: 'Enquête',
  },
];

export default function Press() {
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
                Presse & Médias
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
                Suivez l&apos;actualité et les développements concernant Black
                Water à travers les médias et les sources d&apos;information.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section Articles de Presse */}
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
                  Articles de Presse
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
                  Les dernières nouvelles et analyses concernant nos activités.
                </p>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: 'var(--spacing-8)',
                }}
              >
                {pressArticles.map((article) => (
                  <div
                    key={article.id}
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'all var(--duration-200) var(--ease-in-out)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                      e.currentTarget.style.borderColor =
                        'var(--color-accent-red)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor =
                        'var(--color-border-primary)';
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 'var(--spacing-4)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-tertiary)',
                          backgroundColor: 'var(--color-bg-tertiary)',
                          padding: 'var(--spacing-1) var(--spacing-2)',
                          borderRadius: 'var(--radius-base)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {article.category}
                      </span>
                      <SecurityBadge level={article.classification} />
                    </div>

                    <h3
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-3)',
                        fontFamily: 'var(--font-family-display)',
                        lineHeight: 'var(--line-height-tight)',
                      }}
                    >
                      {article.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 'var(--font-size-base)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 'var(--line-height-relaxed)',
                        marginBottom: 'var(--spacing-4)',
                      }}
                    >
                      {article.excerpt}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 'var(--spacing-4)',
                        borderTop: '1px solid var(--color-border-primary)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-tertiary)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {article.source}
                      </span>
                      <span
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        {article.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Communiqués Officiels */}
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
                  Communiqués Officiels
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
                  Nos déclarations officielles et nos positions sur les
                  questions importantes.
                </p>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: 'var(--spacing-8)',
                }}
              >
                <ClassifiedDocument
                  level="classified"
                  title="Communiqué de Presse - Mars 2024"
                >
                  <p>
                    Black Water confirme son engagement envers la sécurité et la
                    stabilité de Los Santos. Nous continuons à opérer dans le
                    respect des lois et des réglementations en vigueur, tout en
                    maintenant notre discrétion opérationnelle.
                  </p>
                  <p>
                    Notre organisation reste dédiée à la protection des intérêts
                    légitimes et à la neutralisation des menaces qui pèsent sur
                    notre communauté.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument
                  level="secret"
                  title="Déclaration Officielle - Février 2024"
                >
                  <p>
                    Face aux récentes spéculations médiatiques, Black Water
                    tient à clarifier sa position. Nous sommes une organisation
                    professionnelle qui opère dans le cadre légal et éthique.
                  </p>
                  <p>
                    Nos opérations sont menées avec la plus grande discrétion
                    pour protéger la confidentialité de nos clients et
                    l&apos;intégrité de nos missions.
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Contact Presse */}
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
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Contact Presse
                </h2>
                <p
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 'var(--spacing-8)',
                  }}
                >
                  Pour toute demande d&apos;information ou d&apos;interview,
                  veuillez utiliser les canaux de communication sécurisés.
                </p>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    Relations Presse
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Toutes les demandes de presse sont traitées par notre équipe
                    de relations publiques selon des protocoles stricts de
                    sécurité.
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
