'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { FadeIn, StaggeredFadeIn } from '../../../components/Animations';
import {
  SecurityBadge,
  RedactedStamp,
  ClassifiedWatermark,
} from '../../../components/VisualElements';

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
  // Données étendues pour le profil
  psychologicalProfile?: {
    riskAssessment: string;
    stressTolerance: string;
    teamCompatibility: string;
    notes: string;
  };
  arsenal?: {
    weapons: string[];
    equipment: string[];
    specialties: string[];
  };
  recentActivities?: {
    date: string;
    activity: string;
    classification: 'public' | 'classified' | 'secret' | 'top-secret';
  }[];
  additionalInfo?: {
    clearanceLevel: string;
    lastEvaluation: string;
    nextMission: string;
  };
}

export default function MemberProfilePage() {
  const params = useParams();
  const codeName = params.code as string;
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = async () => {
      try {
        // Charger depuis l'API
        const response = await fetch(`/api/members/${codeName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (result.success) {
          setMember(result.data);
        } else {
          throw new Error(result.message || 'Failed to load member');
        }
      } catch (error) {
        console.error('Failed to load member:', error);
        // En cas d'erreur, on ne charge pas de données de fallback
        // pour éviter les conflits avec l'API
        setMember(null);
      } finally {
        setLoading(false);
      }
    };

    if (codeName) {
      loadMember();
    }
  }, [codeName]);

  if (loading) {
    return (
      <div>
        <Header />
        <main style={{ padding: 'var(--spacing-16) 0', textAlign: 'center' }}>
          <div className="container">
            <FadeIn>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Chargement du dossier...
              </p>
            </FadeIn>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!member) {
    return (
      <div>
        <Header />
        <main style={{ padding: 'var(--spacing-16) 0', textAlign: 'center' }}>
          <div className="container">
            <FadeIn>
              <h1
                style={{
                  color: 'var(--color-accent-red)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Membre non trouvé
              </h1>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Le dossier demandé n&apos;existe pas ou a été supprimé.
              </p>
            </FadeIn>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
        {/* En-tête du profil */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-secondary)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <ClassifiedWatermark />
          <div className="container">
            <FadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: 'var(--spacing-12)',
                  alignItems: 'center',
                }}
              >
                {/* Photo du membre */}
                <div
                  style={{
                    position: 'relative',
                    width: '200px',
                    height: '200px',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    margin: '0 auto',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(45deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      textAlign: 'center',
                      padding: 'var(--spacing-4)',
                    }}
                  >
                    IMAGE CLASSIFIÉE
                  </div>
                </div>

                {/* Informations principales */}
                <div>
                  <h1
                    style={{
                      fontSize: 'var(--font-size-4xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-red)',
                      marginBottom: 'var(--spacing-2)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    {member.codeName}
                  </h1>
                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-4)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    {member.tag} • {member.rank}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-6)',
                    }}
                  >
                    {member.specialization}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-4)',
                      marginBottom: 'var(--spacing-6)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)',
                      }}
                    >
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: getStatusColor(member.status),
                        }}
                      />
                      <span
                        style={{
                          fontSize: 'var(--font-size-base)',
                          color: 'var(--color-text-primary)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {getStatusText(member.status)}
                      </span>
                    </div>
                    <SecurityBadge level="top-secret" />
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section Historique */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div className="container">
            <FadeIn>
              <h2
                style={{
                  fontSize: 'var(--font-size-3xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-accent-red)',
                  marginBottom: 'var(--spacing-8)',
                  fontFamily: 'var(--font-family-display)',
                }}
              >
                Historique Opérationnel
              </h2>
            </FadeIn>
            <StaggeredFadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: 'var(--spacing-6)',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    position: 'relative',
                  }}
                >
                  <RedactedStamp>REDACTED</RedactedStamp>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Missions Notables
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {member.notableMissions?.map((mission, index) => (
                      <li
                        key={index}
                        style={{
                          padding: 'var(--spacing-2) 0',
                          borderBottom: '1px solid var(--color-border-primary)',
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {mission}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    position: 'relative',
                  }}
                >
                  <RedactedStamp>REDACTED</RedactedStamp>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Statistiques
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--spacing-3)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      <span style={{ color: 'var(--color-text-secondary)' }}>
                        Missions accomplies:
                      </span>
                      <span
                        style={{
                          color: 'var(--color-text-primary)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {member.missions}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      <span style={{ color: 'var(--color-text-secondary)' }}>
                        Date d&apos;incorporation:
                      </span>
                      <span
                        style={{
                          color: 'var(--color-text-primary)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {member.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Profil Psychologique */}
        {member.psychologicalProfile && (
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
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-8)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Profil Psychologique
                </h2>
              </FadeIn>
              <StaggeredFadeIn>
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-8)',
                    position: 'relative',
                  }}
                >
                  <RedactedStamp>REDACTED</RedactedStamp>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: 'var(--spacing-6)',
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--font-size-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--spacing-2)',
                        }}
                      >
                        Évaluation des Risques
                      </h4>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {member.psychologicalProfile.riskAssessment}
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--font-size-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--spacing-2)',
                        }}
                      >
                        Tolérance au Stress
                      </h4>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {member.psychologicalProfile.stressTolerance}
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--font-size-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--spacing-2)',
                        }}
                      >
                        Compatibilité Équipe
                      </h4>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {member.psychologicalProfile.teamCompatibility}
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: 'var(--spacing-6)' }}>
                    <h4
                      style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-2)',
                      }}
                    >
                      Notes du Psychologue
                    </h4>
                    <p
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 'var(--line-height-relaxed)',
                      }}
                    >
                      {member.psychologicalProfile.notes}
                    </p>
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>
          </section>
        )}

        {/* Section Arsenal des Compétences */}
        {member.arsenal && (
          <section
            style={{
              padding: 'var(--spacing-16) 0',
              backgroundColor: 'var(--color-bg-primary)',
            }}
          >
            <div className="container">
              <FadeIn>
                <h2
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-8)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Arsenal des Compétences
                </h2>
              </FadeIn>
              <StaggeredFadeIn>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-6)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      position: 'relative',
                    }}
                  >
                    <RedactedStamp>REDACTED</RedactedStamp>
                    <h3
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-4)',
                      }}
                    >
                      Armement
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {member.arsenal.weapons.map((weapon, index) => (
                        <li
                          key={index}
                          style={{
                            padding: 'var(--spacing-2) 0',
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          • {weapon}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      position: 'relative',
                    }}
                  >
                    <RedactedStamp>REDACTED</RedactedStamp>
                    <h3
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-4)',
                      }}
                    >
                      Équipement
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {member.arsenal.equipment.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            padding: 'var(--spacing-2) 0',
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      position: 'relative',
                    }}
                  >
                    <RedactedStamp>REDACTED</RedactedStamp>
                    <h3
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-4)',
                      }}
                    >
                      Spécialités
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {member.arsenal.specialties.map((specialty, index) => (
                        <li
                          key={index}
                          style={{
                            padding: 'var(--spacing-2) 0',
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          • {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>
          </section>
        )}

        {/* Section Activités Récentes */}
        {member.recentActivities && (
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
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-8)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Activités Récentes
                </h2>
              </FadeIn>
              <StaggeredFadeIn>
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    position: 'relative',
                  }}
                >
                  <RedactedStamp>REDACTED</RedactedStamp>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--spacing-4)',
                    }}
                  >
                    {member.recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: 'var(--spacing-3) 0',
                          borderBottom: '1px solid var(--color-border-primary)',
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 'var(--font-size-sm)',
                              color: 'var(--color-text-primary)',
                              margin: 0,
                            }}
                          >
                            {activity.activity}
                          </p>
                          <p
                            style={{
                              fontSize: 'var(--font-size-xs)',
                              color: 'var(--color-text-tertiary)',
                              margin: 0,
                            }}
                          >
                            {activity.date}
                          </p>
                        </div>
                        <SecurityBadge level={activity.classification} />
                      </div>
                    ))}
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>
          </section>
        )}

        {/* Section Informations Supplémentaires */}
        {member.additionalInfo && (
          <section
            style={{
              padding: 'var(--spacing-16) 0',
              backgroundColor: 'var(--color-bg-primary)',
            }}
          >
            <div className="container">
              <FadeIn>
                <h2
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-8)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Informations Supplémentaires
                </h2>
              </FadeIn>
              <StaggeredFadeIn>
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-8)',
                    position: 'relative',
                  }}
                >
                  <RedactedStamp>REDACTED</RedactedStamp>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: 'var(--spacing-6)',
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--font-size-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--spacing-2)',
                        }}
                      >
                        Niveau d&apos;Habilitation
                      </h4>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {member.additionalInfo.clearanceLevel}
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--font-size-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--spacing-2)',
                        }}
                      >
                        Dernière Évaluation
                      </h4>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {member.additionalInfo.lastEvaluation}
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 'var(--font-size-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-text-primary)',
                          marginBottom: 'var(--spacing-2)',
                        }}
                      >
                        Prochaine Mission
                      </h4>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {member.additionalInfo.nextMission}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
