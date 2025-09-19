'use client';

import { ReactNode } from 'react';

interface ClassifiedDocumentProps {
  children: ReactNode;
  level?: 'classified' | 'secret' | 'top-secret';
  title?: string;
  className?: string;
}

export default function ClassifiedDocument({
  children,
  level = 'classified',
  title,
  className = '',
}: ClassifiedDocumentProps) {
  const getLevelColor = () => {
    switch (level) {
      case 'secret':
        return 'var(--color-warning)';
      case 'top-secret':
        return 'var(--color-error)';
      default:
        return 'var(--color-accent-red)';
    }
  };

  const getLevelText = () => {
    switch (level) {
      case 'secret':
        return 'SECRET';
      case 'top-secret':
        return 'TOP SECRET';
      default:
        return 'CLASSIFIED';
    }
  };

  return (
    <div
      className={`classified-document ${className}`}
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-bg-secondary)',
        border: `2px solid ${getLevelColor()}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-6)',
        margin: 'var(--spacing-6) 0',
        boxShadow: 'var(--shadow-redacted)',
        overflow: 'hidden',
      }}
    >
      {/* Watermark de fond */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          fontSize: 'var(--font-size-6xl)',
          fontWeight: 'var(--font-weight-extrabold)',
          color: 'rgba(180, 35, 45, 0.05)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
        }}
      >
        {getLevelText()}
      </div>

      {/* En-tête du document */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--spacing-4)',
          paddingBottom: 'var(--spacing-4)',
          borderBottom: `1px solid ${getLevelColor()}`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div>
          {title && (
            <h3
              style={{
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                margin: 0,
                fontFamily: 'var(--font-family-display)',
              }}
            >
              {title}
            </h3>
          )}
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--font-size-xs)',
              margin: 0,
              marginTop: 'var(--spacing-1)',
            }}
          >
            Document confidentiel — Accès restreint
          </p>
        </div>

        {/* Badge de classification */}
        <div
          style={{
            backgroundColor: getLevelColor(),
            color: 'white',
            padding: 'var(--spacing-1) var(--spacing-3)',
            borderRadius: 'var(--radius-base)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {getLevelText()}
        </div>
      </div>

      {/* Contenu du document */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          color: 'var(--color-text-primary)',
        }}
      >
        {children}
      </div>

      {/* Lignes de scan */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(180, 35, 45, 0.1) 2px,
              rgba(180, 35, 45, 0.1) 4px
            )
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Effet de bruit */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(180, 35, 45, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(180, 35, 45, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(180, 35, 45, 0.02) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
}
