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
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  // const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<
    'all' | 'active' | 'inactive' | 'deceased'
  >('all');
  const [sortBy, setSortBy] = useState<'rank' | 'name' | 'missions'>('rank');
  const [searchTerm, setSearchTerm] = useState('');

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
          setFilteredMembers(result.data);
        } else {
          throw new Error(result.message || 'Failed to load members');
        }
      } catch (error) {
        console.error('Failed to load members:', error);
        // Données de fallback pour le développement
        const fallbackMembers: Member[] = [
          {
            id: '1',
            codeName: 'SHADOW',
            tag: 'BW-001',
            image: '/members/shadow_blur.webp',
            status: 'active',
            rank: 'Lieutenant',
            specialization: 'Opérations spéciales',
            joinDate: '2023-01-15',
            missions: 47,
            description:
              'Expert en infiltration et reconnaissance. Spécialisé dans les opérations nocturnes et la collecte d&apos;informations sensibles.',
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
            status: 'active',
            rank: 'Sergent',
            specialization: 'Sniper d&apos;élite',
            joinDate: '2023-02-20',
            missions: 32,
            description:
              'Tireur d&apos;élite avec une précision exceptionnelle. Expert en camouflage et en positionnement tactique.',
            skills: [
              'Tir de précision',
              'Camouflage',
              'Observation',
              'Patience',
            ],
            notableMissions: ['Opération Long Shot', 'Mission Clean Sweep'],
          },
          {
            id: '3',
            codeName: 'PHANTOM',
            tag: 'BW-003',
            image: '/members/phantom_blur.webp',
            status: 'inactive',
            rank: 'Caporal',
            specialization: 'Hacker',
            joinDate: '2023-03-10',
            missions: 28,
            description:
              'Expert en cybersécurité et infiltration numérique. Spécialisé dans la collecte d&apos;informations et la protection des données.',
            skills: [
              'Cybersécurité',
              'Hacking',
              'Analyse de données',
              'Cryptographie',
            ],
            notableMissions: [
              'Opération Digital Ghost',
              'Mission Code Breaker',
            ],
          },
          {
            id: '4',
            codeName: 'STORM',
            tag: 'BW-004',
            image: '/members/storm_blur.webp',
            status: 'active',
            rank: 'Sergent-chef',
            specialization: 'Assaut',
            joinDate: '2023-04-05',
            missions: 41,
            description:
              'Spécialiste des opérations d&apos;assaut et de libération d&apos;otages. Expert en tactiques de combat urbain.',
            skills: [
              'Assaut',
              'Libération d&apos;otages',
              'Combat urbain',
              'Leadership',
            ],
            notableMissions: [
              'Opération Thunder Strike',
              'Mission Hostage Rescue',
            ],
          },
          {
            id: '5',
            codeName: 'GHOST',
            tag: 'BW-005',
            image: '/members/ghost_blur.webp',
            status: 'deceased',
            rank: 'Lieutenant',
            specialization: 'Infiltration',
            joinDate: '2022-11-12',
            missions: 23,
            description:
              'Maître de l&apos;infiltration et de la discrétion. Spécialisé dans les opérations de sabotage et d&apos;extraction.',
            skills: ['Infiltration', 'Sabotage', 'Extraction', 'Discrétion'],
            notableMissions: [
              'Opération Silent Death',
              'Mission Final Extraction',
            ],
          },
          {
            id: '6',
            codeName: 'VIPER',
            tag: 'BW-006',
            image: '/members/viper_blur.webp',
            status: 'active',
            rank: 'Caporal',
            specialization: 'Explosifs',
            joinDate: '2023-05-18',
            missions: 19,
            description:
              'Expert en explosifs et démolition. Spécialisé dans la neutralisation de cibles et la destruction d&apos;infrastructures.',
            skills: ['Explosifs', 'Démolition', 'Neutralisation', 'Ingénierie'],
            notableMissions: [
              'Opération Controlled Demolition',
              'Mission Target Elimination',
            ],
          },
        ];
        setMembers(fallbackMembers);
        setFilteredMembers(fallbackMembers);
      }
    };

    loadMembers();
  }, []);

  useEffect(() => {
    let filtered = members;

    // Filtrage par statut
    if (filter !== 'all') {
      filtered = filtered.filter((member) => member.status === filter);
    }

    // Recherche par code name
    if (searchTerm) {
      filtered = filtered.filter((member) =>
        member.codeName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          const rankOrder = [
            'Lieutenant',
            'Sergent-chef',
            'Sergent',
            'Caporal',
          ];
          return rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank);
        case 'name':
          return a.codeName.localeCompare(b.codeName);
        case 'missions':
          return b.missions - a.missions;
        default:
          return 0;
      }
    });

    setFilteredMembers(filtered);
  }, [members, filter, searchTerm, sortBy]);

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

        {/* Section Filtres et Recherche */}
        <section
          style={{
            padding: 'var(--spacing-8) 0',
            backgroundColor: 'var(--color-bg-primary)',
            borderBottom: '1px solid var(--color-border-primary)',
          }}
        >
          <div className="container">
            <FadeIn>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-4)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                {/* Recherche */}
                <div
                  style={{
                    position: 'relative',
                    minWidth: '250px',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Rechercher par code name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      padding: 'var(--spacing-3) var(--spacing-4)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--color-bg-secondary)',
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-base)',
                    }}
                  />
                </div>

                {/* Filtres */}
                <select
                  value={filter}
                  onChange={(e) =>
                    setFilter(
                      e.target.value as
                        | 'all'
                        | 'active'
                        | 'inactive'
                        | 'deceased'
                    )
                  }
                  style={{
                    padding: 'var(--spacing-3) var(--spacing-4)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-bg-secondary)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-base)',
                    minWidth: '120px',
                  }}
                >
                  <option value="all">Tous les statuts</option>
                  <option value="active">Actifs</option>
                  <option value="inactive">Inactifs</option>
                  <option value="deceased">Décédés</option>
                </select>

                {/* Tri */}
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as 'rank' | 'name' | 'missions')
                  }
                  style={{
                    padding: 'var(--spacing-3) var(--spacing-4)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-bg-secondary)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-base)',
                    minWidth: '120px',
                  }}
                >
                  <option value="rank">Trier par rang</option>
                  <option value="name">Trier par nom</option>
                  <option value="missions">Trier par missions</option>
                </select>
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
                {filteredMembers.map((member) => (
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

            {filteredMembers.length === 0 && (
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
                    {members.reduce((total, m) => total + m.missions, 0)}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginTop: 'var(--spacing-2)',
                    }}
                  >
                    Missions totales
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
