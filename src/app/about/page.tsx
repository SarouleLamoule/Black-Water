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
                Née après la démobilisation d&apos;unités d&apos;élite, Black
                Water opère dans l&apos;ombre pour maintenir l&apos;équilibre et
                protéger les intérêts de ses clients dans un environnement
                complexe.
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
                    Black Water a commencé comme société de sécurité privée,
                    évoluant progressivement vers des services plus spécialisés.
                    Face aux défis d&apos;un environnement en mutation, nos
                    fondateurs ont développé une approche unique combinant
                    expertise militaire et discrétion opérationnelle.
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                    }}
                  >
                    Notre structure s&apos;est progressivement militarisée avec
                    des camps, cellules régionales et réseaux de couverture,
                    nous permettant d&apos;opérer comme une force parallèle
                    capable d&apos;imposer notre expertise là où les solutions
                    traditionnelles échouent.
                  </p>
                </div>

                <ClassifiedDocument level="classified" title="Origines">
                  <p>
                    Derrière notre façade légale se cache une réalité plus
                    complexe : une véritable armée de l&apos;ombre. Nos rangs
                    sont composés d&apos;anciens soldats, mercenaires et agents
                    abandonnés par le système. Des professionnels sans attaches,
                    qui n&apos;obéissent plus aux États ni aux lois... mais
                    uniquement à leurs contrats.
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
                  Nos Objectifs
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
                  Une vision stratégique à court, moyen et long terme.
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
                <ClassifiedDocument level="classified" title="Court Terme">
                  <p>
                    Identifier les cibles d&apos;influence politiques locales,
                    se réintroduire dans les marchés légaux et illégaux,
                    stabiliser les revenus en sécurisant des contrats
                    &quot;gris&quot; et commencer à agir pour la récupération du
                    business d&apos;armes.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="secret" title="Moyen Terme">
                  <p>
                    Identifier et infiltrer des points d&apos;accès politiques
                    et administratifs locaux, diversifier les revenus, servir de
                    contact ou d&apos;intermédiaire discret et déployer une
                    stratégie de réputation pour paraître indispensable.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="top-secret" title="Long Terme">
                  <p>
                    Récupérer le business d&apos;armes, conserver une influence
                    suffisamment discrète pour éviter la mise en lumière
                    publique, transformer Black Water en un réseau capable
                    d&apos;imposer des solutions politiques et instrumentaliser
                    les leviers décisionnels.
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Ambitions */}
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
                  Nos Ambitions
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
                  Une vision qui transcende les frontières traditionnelles du
                  pouvoir.
                </p>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  maxWidth: '800px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                <ClassifiedDocument
                  level="top-secret"
                  title="Vision Stratégique"
                >
                  <p>
                    Black Water ne cherche pas la gloire, ni la reconnaissance.
                    Notre volonté est de devenir l&apos;ombre derrière chaque
                    décision, la main invisible de la guerre comme de la paix.
                    Une entité discrète mais incontournable et puissante, qui
                    dirige sans gouverner et qui règne sans trône.
                  </p>
                  <p>
                    Nos ambitions ne sont pas de conquérir un territoire
                    visible, mais de posséder chaque zone grise. D&apos;être
                    l&apos;allié qu&apos;on redoute autant que l&apos;ennemi
                    qu&apos;on ne veut jamais se faire.
                  </p>
                  <p>
                    <strong>
                      Black Water n&apos;est pas une armée. C&apos;est une
                      certitude : tôt ou tard, tout pouvoir finit par lui
                      appartenir.
                    </strong>
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Vision RP */}
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
                  Vision RP
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
                  Notre approche du jeu de rôle et de l&apos;immersion.
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
                <ClassifiedDocument level="classified" title="Intentions RP">
                  <p>
                    Black Water sert de moteur narratif : intrigues politiques,
                    conflits de pouvoir, alliances et trahisons. Les joueurs
                    incarnent des rôles avec hiérarchie, loyauté et règles
                    internes.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="secret" title="Philosophie d'Action">
                  <p>
                    La guerre n&apos;est pas une question de balles, mais de
                    contrôle. Black Water se définit par sa capacité à
                    infiltrer, orienter et modeler l&apos;environnement. Notre
                    terrain de jeu est l&apos;incertitude, le secret, les
                    failles de l&apos;état.
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Quartier Général */}
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
                  Quartier Général
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
                  Le centre névralgique de nos opérations.
                </p>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  maxWidth: '800px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    border: '2px solid var(--color-accent-red)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    boxShadow: 'var(--shadow-classified)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 'var(--spacing-2)',
                      right: 'var(--spacing-2)',
                      backgroundColor: 'var(--color-accent-red)',
                      color: 'var(--color-bg-primary)',
                      padding: 'var(--spacing-1) var(--spacing-2)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-bold)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    TOP SECRET
                  </div>

                  <h3
                    style={{
                      color: 'var(--color-accent-red)',
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                      textAlign: 'center',
                    }}
                  >
                    Documentation Quartier Général
                  </h3>

                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '200px',
                      backgroundColor: 'var(--color-bg-primary)',
                      border: '2px solid var(--color-accent-red)',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: 'var(--spacing-4)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all var(--duration-200) var(--ease-in-out)',
                    }}
                    onClick={() =>
                      window.open('https://youtu.be/R8i_dMk2_is', '_blank')
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'var(--color-bg-secondary)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'var(--color-bg-primary)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--color-accent-red)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-4)',
                        boxShadow: 'var(--shadow-classified)',
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: '20px solid var(--color-bg-primary)',
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          marginLeft: '4px',
                        }}
                      />
                    </div>
                    <p
                      style={{
                        color: 'var(--color-text-primary)',
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        margin: 0,
                        textAlign: 'center',
                      }}
                    >
                      Accéder à la documentation vidéo
                    </p>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-sm)',
                        margin: 'var(--spacing-2) 0 0 0',
                        textAlign: 'center',
                      }}
                    >
                      Cliquez pour ouvrir dans YouTube
                    </p>
                  </div>

                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: 'var(--font-size-sm)',
                      textAlign: 'center',
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    Documentation vidéo classifiée - Accès restreint
                  </p>
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Style de Vie */}
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
                  Style de Vie du Groupe
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
                  La culture et les valeurs qui unissent nos membres.
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
                <ClassifiedDocument level="classified" title="Hiérarchie">
                  <p>
                    Chaque membre vit sous une hiérarchie implacable. Les ordres
                    ne se discutent pas, ils s&apos;exécutent. La fraternité
                    prime sur tout. La trahison est impensable et se paie au
                    prix fort.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="secret" title="Image & Présence">
                  <p>
                    Silence, regard droit, gestes précis. Une présence qui
                    impose le respect avant même de parler. Seuls les plus
                    endurcis et les plus fiables survivent à la sélection.
                    Chaque membre est une pièce rare.
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument
                  level="top-secret"
                  title="Doctrine de Loyauté"
                >
                  <p>
                    <strong>
                      &quot;La loyauté se paie, l&apos;ombre a un prix.&quot;
                    </strong>
                    <br />
                    Black Water ne croit pas en la morale des États. Ils se
                    vendent au plus offrant : entreprises, politiciens, mafias
                    locales. Leur loyauté ne va pas à un drapeau, mais à un
                    contrat.
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>
          </div>
        </section>

        {/* Section Système de Code */}
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
                  Système de Code
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
                  Notre système de communication et d&apos;identification
                  interne.
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
                <ClassifiedDocument
                  level="classified"
                  title="Grades & Call-Signs"
                >
                  <p>
                    <strong>Commandant suprême :</strong> Ombre
                    <br />
                    <strong>Capitaine :</strong> Loup
                    <br />
                    <strong>Lieutenant :</strong> Faucon
                    <br />
                    <strong>Sergent :</strong> Silex
                    <br />
                    <strong>Opérateur :</strong> Sable
                  </p>
                  <p>
                    <em>Exemple :</em> &quot;Faucon pour Sable S-06&quot;
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="secret" title="Codes de Situation">
                  <p>
                    <strong>Code Grey :</strong> Surveillance renforcée
                    <br />
                    <strong>Code Brume :</strong> Suspicion, individu à
                    surveiller
                    <br />
                    <strong>Code Corbeau :</strong> Fuite d&apos;information
                    <br />
                    <strong>Code Sable Noir :</strong> Confrontation armée
                    <br />
                    <strong>Code Black :</strong> Crise stratégique
                  </p>
                  <p>
                    <em>Exemple :</em> &quot;Ombre à Faucon, zone X en code
                    Grey.&quot;
                  </p>
                </ClassifiedDocument>

                <ClassifiedDocument level="top-secret" title="Codes Critiques">
                  <p>
                    <strong>Crit Silence :</strong> Embargo d&apos;information
                    <br />
                    <strong>Crit Exfil :</strong> Exfiltration requise
                    <br />
                    <strong>Crit Host :</strong> Prise d&apos;otage
                    <br />
                    <strong>Crit Black :</strong> Crise stratégique / Activation
                    commandant
                  </p>
                </ClassifiedDocument>
              </div>
            </StaggeredFadeIn>

            <StaggeredFadeIn>
              <div
                style={{
                  maxWidth: '800px',
                  margin: '0 auto',
                  textAlign: 'center',
                  marginTop: 'var(--spacing-8)',
                }}
              >
                <ClassifiedDocument
                  level="top-secret"
                  title="Matricules Internes"
                >
                  <p>
                    <strong>Commandant suprême :</strong> S-01
                    <br />
                    <strong>Capitaines :</strong> S-02 / S-03
                    <br />
                    <strong>Lieutenant :</strong> S-04
                    <br />
                    <strong>Sergent :</strong> S-05
                    <br />
                    <strong>Opérateurs :</strong> S-06 à S-12
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
                  Nos Facettes
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
                  Une organisation aux multiples visages, adaptée à chaque
                  situation.
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
                    [LEGAL]
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
                    Facette Légale
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-3)',
                    }}
                  >
                    Société de sécurité privée, logistique, conseil en gestion
                    des risques
                  </p>
                  <SecurityBadge level="classified" />
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
                    [SHADOW]
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
                    Facette Clandestine
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-3)',
                    }}
                  >
                    Influence politique, neutralisation de menaces, contrats
                    occultes
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
                    [NETWORK]
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
                    Réseaux Clandestins
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-3)',
                    }}
                  >
                    Informateurs, sociétés écrans, économie parallèle
                  </p>
                  <SecurityBadge level="top-secret" />
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
