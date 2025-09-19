export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border-primary)',
        marginTop: 'auto',
        padding: 'var(--spacing-8) 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-8)',
            marginBottom: 'var(--spacing-8)',
          }}
        >
          {/* Section Black Water */}
          <div>
            <h3
              style={{
                color: 'var(--color-accent-red)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-4)',
                fontFamily: 'var(--font-family-display)',
              }}
            >
              BLACK WATER
            </h3>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              Organisation clandestine opérant dans les ombres de Los Santos
              depuis 1993.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-tertiary)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'var(--color-accent-red)',
                  borderRadius: '50%',
                  boxShadow: 'var(--shadow-classified)',
                }}
              />
              Statut: [CLASSIFIED]
            </div>
          </div>
        </div>

        {/* Disclaimer RP */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-primary)',
            paddingTop: 'var(--spacing-6)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              border: '1px solid var(--color-accent-red)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--line-height-relaxed)',
                margin: 0,
                marginBottom: 'var(--spacing-2)',
              }}
            >
              ⚠️ <strong>DISCLAIMER IMPORTANT</strong> ⚠️
            </p>
            <p
              style={{
                color: 'var(--color-text-tertiary)',
                fontSize: 'var(--font-size-xs)',
                lineHeight: 'var(--line-height-relaxed)',
                margin: 0,
              }}
            >
              Ce site est une œuvre de fiction créée dans le cadre d&apos;un jeu
              de rôle (RP) sur Grand Theft Auto V. Tous les contenus,
              personnages, organisations et événements sont purement fictifs et
              ne visent aucune personne réelle. Aucune incitation à la violence
              ou à des activités illégales n&apos;est encouragée. Toute
              ressemblance avec des personnes ou des situations réelles serait
              purement fortuite.
            </p>
          </div>

          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: 'var(--font-size-xs)',
              margin: 0,
            }}
          >
            © 2025 Black Water RP. Tous droits réservés. | Site développé et
            designé par SarouleLamoule
          </p>
        </div>
      </div>
    </footer>
  );
}
