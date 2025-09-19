'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FadeIn, StaggeredFadeIn } from '../../components/Animations';
// import { SecurityBadge } from '../../components/VisualElements';
import MemberImage from '../../components/MemberImage';

interface Member {
  id: string;
  codeName: string;
  tag: string;
  image: string;
  status: 'active' | 'inactive' | 'deceased';
  rank: string;
  specialization: string;
  joinDate: string;
  missions: number;
  description?: string;
  skills?: string[];
  notableMissions?: string[];
}

export default function MembersPage() {
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    // Charger les données des membres depuis l'API
    const loadMembers = async () => {
      try {
        const response = await fetch('/api/members');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (result.success) {
          setMembers(result.data);
        } else {
          throw new Error(result.message || 'Failed to load members');
        }
      } catch (error) {
        console.error('Failed to load members:', error);
        // En cas d'erreur, afficher un message d'erreur
        setMembers([]);
      }
    };

    loadMembers();
  }, []);

  const handleCardClick = (member: Member) => {
    // Naviguer vers la page de profil du membre
    router.push(`/members/${member.codeName.toLowerCase()}`);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedMember(null);
  // };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'var(--color-success)';
      case 'inactive':
        return 'var(--color-warning)';
      case 'deceased':
        return 'var(--color-error)';
      default:
        return 'var(--color-text-secondary)';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'inactive':
        return 'Inactif';
      case 'deceased':
        return 'Décédé';
      default:
        return status;
    }
  };

  return (
    <div>
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section avec effets spectaculaires */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-16) 0',
            background: `
              linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)
            `,
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Grille de sécurité animée en arrière-plan */}
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
              animation: 'securityGridMove 20s linear infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Particules de données flottantes */}
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
            {[...Array(15)].map((_, i) => {
              const left = ((i * 7) % 100) + ((i * 3) % 20);
              const top = ((i * 11) % 100) + ((i * 5) % 15);
              const delay = (i % 3) + i * 0.2;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${left}%`,
                    top: `${top}%`,
                    width: '3px',
                    height: '3px',
                    backgroundColor: 'rgba(180, 35, 45, 0.6)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(180, 35, 45, 0.8)',
                    animation: `dataFloat ${4 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

          {/* Effet de terminal avec texte qui s'affiche */}
          <div
            className="members-terminal"
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              right: '10%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid rgba(180, 35, 45, 0.5)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-accent-red)',
              textAlign: 'left',
              maxWidth: '600px',
              margin: '0 auto',
              boxShadow: '0 0 20px rgba(180, 35, 45, 0.3)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-success)' }}>
                BLACK-WATER@SECURE:
              </span>
              <span style={{ color: 'var(--color-text-secondary)' }}>~$</span>
              <span style={{ color: 'var(--color-accent-red)' }}>
                {' '}
                access_operators_db
              </span>
            </div>
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>
                Initializing secure connection...
              </span>
            </div>
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>
                Authentication:{' '}
              </span>
              <span style={{ color: 'var(--color-success)' }}>GRANTED</span>
            </div>
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>
                Loading operator profiles:{' '}
              </span>
              <div
                style={{
                  width: '200px',
                  height: '4px',
                  backgroundColor: 'rgba(180, 35, 45, 0.3)',
                  borderRadius: '2px',
                  marginTop: 'var(--spacing-1)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--color-accent-red)',
                    borderRadius: '2px',
                    animation: 'loadingBar 3s ease-in-out infinite',
                    boxShadow: '0 0 10px rgba(180, 35, 45, 0.8)',
                  }}
                />
              </div>
            </div>
            <div>
              <span style={{ color: 'var(--color-success)' }}>
                ACCESS GRANTED
              </span>
              <span
                style={{
                  color: 'var(--color-accent-red)',
                  animation: 'terminalBlink 1s infinite',
                }}
              >
                _
              </span>
            </div>
          </div>

          {/* Contenu principal avec effet de terminal */}
          <div
            className="container members-main-container"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <FadeIn>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <h1
                  className="members-hero-title"
                  style={{
                    fontSize: 'var(--font-size-5xl)',
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
                    animation: 'terminalGlow 3s ease-in-out infinite',
                    transform: 'translateZ(50px)',
                  }}
                >
                  Dossier des Opérateurs
                </h1>

                {/* Effet de scan sur le titre */}
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
                  className="members-description"
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: 'var(--line-height-relaxed)',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    transform: 'translateZ(30px)',
                    animation: 'float 6s ease-in-out infinite',
                  }}
                >
                  Accès restreint aux dossiers personnels des opérateurs de
                  Black Water. Informations classifiées - Niveau de sécurité
                  requis.
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

            {/* Indicateur d'accès accordé - Positionné juste en dessous du texte */}
            <FadeIn delay={600}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 'var(--spacing-6)',
                  animation: 'accessGranted 2s ease-in-out infinite',
                }}
                className="access-granted-indicator"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid var(--color-success)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    color: 'var(--color-success)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--color-success)',
                      borderRadius: '50%',
                      animation: 'pulse 1s infinite',
                    }}
                  />
                  Accès Accordé
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section Grille des Membres */}
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: 'var(--spacing-8)',
                  maxWidth: '1200px',
                  margin: '0 auto',
                }}
              >
                {members.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => handleCardClick(member)}
                    className="member-card-3d"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Effet de glow sur les bords */}
                    <div
                      className="card-glow"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 'var(--radius-lg)',
                        pointerEvents: 'none',
                        zIndex: 0,
                      }}
                    />

                    {/* Ligne de scan */}
                    <div
                      className="card-scan"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background:
                          'linear-gradient(90deg, transparent, var(--color-accent-red), transparent)',
                        opacity: 0,
                        zIndex: 3,
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Particules de statut */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        pointerEvents: 'none',
                        zIndex: 2,
                      }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="status-particles"
                          style={{
                            position: 'absolute',
                            width: '4px',
                            height: '4px',
                            backgroundColor: getStatusColor(member.status),
                            borderRadius: '50%',
                            boxShadow: `0 0 10px ${getStatusColor(member.status)}`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Image optimisée avec next/image */}
                    <div
                      className="card-image"
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        filter: 'blur(2px) brightness(0.7)',
                        transition: 'all 0.6s ease',
                      }}
                    >
                      <MemberImage
                        codeName={member.codeName}
                        width={300}
                        height={200}
                        className="member-card-image"
                      />
                    </div>

                    {/* Informations du membre avec effet de révélation */}
                    <div
                      className="card-info"
                      style={{
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                        transform: 'translateY(10px)',
                        opacity: 0.8,
                        transition: 'all 0.6s ease',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 'var(--font-size-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--color-accent-red)',
                          marginBottom: 'var(--spacing-2)',
                          fontFamily: 'var(--font-family-display)',
                        }}
                      >
                        {member.codeName}
                      </h3>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                          marginBottom: 'var(--spacing-3)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {member.tag} • {member.rank}
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--font-size-base)',
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        {member.specialization}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 'var(--spacing-2)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: getStatusColor(member.status),
                            boxShadow: `0 0 10px ${getStatusColor(member.status)}`,
                            animation: 'pulse 2s infinite',
                          }}
                        />
                        <span
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          {getStatusText(member.status)}
                        </span>
                      </div>
                      <div
                        style={{
                          padding: 'var(--spacing-2) var(--spacing-4)',
                          backgroundColor: 'var(--color-bg-primary)',
                          border: '1px solid var(--color-border-primary)',
                          borderRadius: 'var(--radius-base)',
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                          marginTop: 'var(--spacing-4)',
                        }}
                      >
                        Consulter le dossier →
                      </div>
                    </div>

                    {/* Effet de déclassification progressif */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          'linear-gradient(45deg, transparent 0%, rgba(180, 35, 45, 0.1) 50%, transparent 100%)',
                        clipPath: 'inset(0 100% 0 0)',
                        transition: 'clip-path 0.6s ease',
                        pointerEvents: 'none',
                        zIndex: 1,
                      }}
                    />

                    {/* Indicateur de niveau de sécurité */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 'var(--spacing-2)',
                        left: 'var(--spacing-2)',
                        backgroundColor: 'var(--color-accent-red)',
                        color: 'white',
                        padding: 'var(--spacing-1) var(--spacing-2)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        zIndex: 2,
                        boxShadow: '0 0 10px rgba(180, 35, 45, 0.5)',
                      }}
                    >
                      CLASSIFIED
                    </div>
                  </div>
                ))}
              </div>
            </StaggeredFadeIn>

            {members.length === 0 && (
              <FadeIn>
                <div
                  style={{
                    textAlign: 'center',
                    padding: 'var(--spacing-16) 0',
                  }}
                >
                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Aucun membre trouvé avec ces critères.
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* Section Statistiques */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-secondary)',
          }}
        >
          <div className="container">
            <FadeIn>
              <h2
                style={{
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-12)',
                  color: 'var(--color-accent-red)',
                }}
              >
                Statistiques des Opérateurs
              </h2>
            </FadeIn>
            <StaggeredFadeIn>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 'var(--spacing-8)',
                  backgroundColor: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--spacing-8)',
                  maxWidth: '800px',
                  margin: '0 auto',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: 'var(--font-size-5xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {members.length}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginTop: 'var(--spacing-2)',
                    }}
                  >
                    Membres au total
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: 'var(--font-size-5xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-success)',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {members.filter((m) => m.status === 'active').length}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginTop: 'var(--spacing-2)',
                    }}
                  >
                    Membres actifs
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: 'var(--font-size-5xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-red)',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {members.filter((m) => m.status === 'deceased').length}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginTop: 'var(--spacing-2)',
                    }}
                  >
                    Membres décédés
                  </p>
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
