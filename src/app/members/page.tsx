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
                Dossier des Membres
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
                Accès restreint aux dossiers personnels des opérateurs de Black
                Water. Informations classifiées - Niveau de sécurité requis.
              </p>
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
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      cursor: 'pointer',
                      transition: 'all var(--duration-200) var(--ease-in-out)',
                      position: 'relative',
                      overflow: 'hidden',
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
                    {/* Image optimisée avec next/image */}
                    <MemberImage
                      codeName={member.codeName}
                      width={300}
                      height={200}
                      className="member-card-image"
                    />

                    {/* Informations du membre */}
                    <div style={{ textAlign: 'center' }}>
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
                Statistiques de l&apos;Équipe
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
