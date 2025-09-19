'use client';

import { useState } from 'react';
import {
  Header,
  Footer,
  OperatorCard,
  OperatorModal,
  FadeIn,
  StaggeredFadeIn,
  // SecurityBadge,
} from '../../components';

// Données d'exemple pour les opérateurs
const operators = [
  {
    id: '1',
    codeName: 'SHADOW',
    tag: 'BW-001',
    image: '/members/shadow_blur.webp',
    status: 'active' as const,
    specialization: 'Opérations spéciales',
    joinDate: '2023-01-15',
    missions: 47,
    description:
      "Expert en infiltration et reconnaissance. Spécialisé dans les opérations nocturnes et la collecte d'informations sensibles.",
    skills: [
      'Infiltration',
      'Reconnaissance',
      'Combat rapproché',
      'Surveillance',
    ],
    notableMissions: [
      'Opération Nightfall',
      'Mission Silent Strike',
      'Reconnaissance Alpha',
    ],
  },
  {
    id: '2',
    codeName: 'RAVEN',
    tag: 'BW-002',
    image: '/members/raven_blur.webp',
    status: 'active' as const,
    specialization: "Sniper d'élite",
    joinDate: '2023-02-20',
    missions: 32,
    description:
      "Tireur d'élite avec une précision exceptionnelle. Expert en camouflage et en positionnement tactique.",
    skills: ['Tir de précision', 'Camouflage', 'Observation', 'Patience'],
    notableMissions: ['Opération Long Shot', 'Mission Clean Sweep'],
  },
  {
    id: '3',
    codeName: 'PHANTOM',
    tag: 'BW-003',
    image: '/members/phantom_blur.webp',
    status: 'inactive' as const,
    specialization: 'Hacker',
    joinDate: '2023-03-10',
    missions: 28,
    description:
      "Expert en cybersécurité et infiltration numérique. Spécialisé dans la collecte d'informations et la protection des données.",
    skills: ['Cybersécurité', 'Hacking', 'Analyse de données', 'Cryptographie'],
    notableMissions: ['Opération Digital Ghost', 'Mission Code Breaker'],
  },
  {
    id: '4',
    codeName: 'STORM',
    tag: 'BW-004',
    image: '/members/storm_blur.webp',
    status: 'active' as const,
    specialization: 'Assaut',
    joinDate: '2023-04-05',
    missions: 41,
    description:
      "Spécialiste des opérations d'assaut et de libération d'otages. Expert en tactiques de combat urbain.",
    skills: ['Assaut', "Libération d'otages", 'Combat urbain', 'Leadership'],
    notableMissions: ['Opération Thunder Strike', 'Mission Hostage Rescue'],
  },
  {
    id: '5',
    codeName: 'GHOST',
    tag: 'BW-005',
    image: '/members/ghost_blur.webp',
    status: 'deceased' as const,
    specialization: 'Infiltration',
    joinDate: '2022-11-12',
    missions: 23,
    description:
      "Maître de l'infiltration et de la discrétion. Spécialisé dans les opérations de sabotage et d'extraction.",
    skills: ['Infiltration', 'Sabotage', 'Extraction', 'Discrétion'],
    notableMissions: ['Opération Silent Death', 'Mission Final Extraction'],
  },
  {
    id: '6',
    codeName: 'VIPER',
    tag: 'BW-006',
    image: '/members/viper_blur.webp',
    status: 'active' as const,
    specialization: 'Explosifs',
    joinDate: '2023-05-18',
    missions: 19,
    description:
      "Expert en explosifs et démolition. Spécialisé dans la neutralisation de cibles et la destruction d'infrastructures.",
    skills: ['Explosifs', 'Démolition', 'Neutralisation', 'Ingénierie'],
    notableMissions: [
      'Opération Controlled Demolition',
      'Mission Target Elimination',
    ],
  },
];

export default function Team() {
  const [selectedOperator, setSelectedOperator] = useState<
    (typeof operators)[0] | null
  >(null);

  const activeOperators = operators.filter((op) => op.status === 'active');
  const inactiveOperators = operators.filter((op) => op.status === 'inactive');
  const deceasedOperators = operators.filter((op) => op.status === 'deceased');

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
                Notre Équipe
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
                Des professionnels d&apos;élite, chacun spécialisé dans un
                domaine particulier pour assurer le succès de nos opérations.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section Opérateurs Actifs */}
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
                  Opérateurs Actifs
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
                  Nos agents actuellement en service, prêts à mener des
                  opérations.
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
                {activeOperators.map((operator) => (
                  <OperatorCard
                    key={operator.id}
                    operator={operator}
                    onClick={() => setSelectedOperator(operator)}
                  />
                ))}
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Opérateurs Inactifs */}
        {inactiveOperators.length > 0 && (
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
                    Opérateurs Inactifs
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
                    Agents temporairement hors service ou en mission spéciale.
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
                  {inactiveOperators.map((operator) => (
                    <OperatorCard
                      key={operator.id}
                      operator={operator}
                      onClick={() => setSelectedOperator(operator)}
                    />
                  ))}
                </div>
              </StaggeredFadeIn>
            </div>
          </section>
        )}

        {/* Section Opérateurs Décédés */}
        {deceasedOperators.length > 0 && (
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
                    En Mémoire
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
                    Nos héros tombés au service de Black Water.
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
                  {deceasedOperators.map((operator) => (
                    <OperatorCard
                      key={operator.id}
                      operator={operator}
                      onClick={() => setSelectedOperator(operator)}
                    />
                  ))}
                </div>
              </StaggeredFadeIn>
            </div>
          </section>
        )}

        {/* Section Statistiques */}
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
                  Statistiques de l&apos;Équipe
                </h2>
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
                    backgroundColor: 'var(--color-bg-primary)',
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
                    {activeOperators.length}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    Opérateurs Actifs
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
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
                    {inactiveOperators.length}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    Opérateurs Inactifs
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
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
                    {deceasedOperators.length}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    En Mémoire
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
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
                    {operators.reduce((total, op) => total + op.missions, 0)}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    Missions Total
                  </p>
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal Opérateur */}
      <OperatorModal
        operator={selectedOperator}
        isOpen={!!selectedOperator}
        onClose={() => setSelectedOperator(null)}
      />
    </div>
  );
}
