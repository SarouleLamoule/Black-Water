'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { FadeIn } from '../../../components/Animations';
import {
  SecurityBadge,
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

        {/* Section Informations en cours d'investigation */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div className="container">
            <FadeIn>
              <div
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '2px solid var(--color-accent-red)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--spacing-12)',
                  textAlign: 'center',
                  position: 'relative',
                  maxWidth: '800px',
                  margin: '0 auto',
                  boxShadow: 'var(--shadow-classified)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 'var(--spacing-4)',
                    right: 'var(--spacing-4)',
                    backgroundColor: 'var(--color-accent-red)',
                    color: 'var(--color-bg-primary)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: '0.05em',
                  }}
                >
                  ENQUÊTE EN COURS
                </div>

                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    border: '3px solid var(--color-accent-red)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-8)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'pulse 2s infinite',
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'var(--color-bg-primary)',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Informations en cours d&apos;investigation
                </h2>

                <p
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--spacing-6)',
                    lineHeight: 'var(--line-height-relaxed)',
                  }}
                >
                  Le dossier de cet opérateur fait actuellement l&apos;objet
                  d&apos;une enquête approfondie. Toutes les informations
                  détaillées sont temporairement classifiées et inaccessibles.
                </p>

                <div
                  style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    marginTop: 'var(--spacing-8)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    ⚠️ Accès restreint - Niveau de sécurité requis : TOP SECRET
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-text-tertiary)',
                      margin: 'var(--spacing-2) 0 0 0',
                    }}
                  >
                    Les informations seront déclassifiées une fois
                    l&apos;enquête terminée.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
