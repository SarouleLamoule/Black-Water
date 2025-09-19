'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Operator {
  id: string;
  codeName: string;
  tag: string;
  image: string;
  status: 'active' | 'inactive' | 'deceased';
  specialization: string;
  joinDate: string;
  missions: number;
}

interface OperatorCardProps {
  operator: Operator;
  onClick?: (operator: Operator) => void;
  className?: string;
}

export default function OperatorCard({
  operator,
  onClick,
  className = '',
}: OperatorCardProps) {
  const [imageError, setImageError] = useState(false);

  const getStatusColor = () => {
    switch (operator.status) {
      case 'active':
        return 'var(--color-success)';
      case 'inactive':
        return 'var(--color-warning)';
      case 'deceased':
        return 'var(--color-error)';
      default:
        return 'var(--color-text-tertiary)';
    }
  };

  const getStatusText = () => {
    switch (operator.status) {
      case 'active':
        return 'ACTIF';
      case 'inactive':
        return 'INACTIF';
      case 'deceased':
        return 'DÉCÉDÉ';
      default:
        return 'INCONNU';
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(operator);
    }
  };

  return (
    <div
      className={`operator-card ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-4)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all var(--duration-200) var(--ease-in-out)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          e.currentTarget.style.borderColor = 'var(--color-accent-red)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          e.currentTarget.style.borderColor = 'var(--color-border-primary)';
        }
      }}
    >
      {/* Watermark de fond */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          fontSize: 'var(--font-size-4xl)',
          fontWeight: 'var(--font-weight-extrabold)',
          color: 'rgba(180, 35, 45, 0.03)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
        }}
      >
        CLASSIFIED
      </div>

      {/* En-tête avec image et status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-4)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Image de l'opérateur */}
        <div
          style={{
            position: 'relative',
            width: '80px',
            height: '80px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid var(--color-accent-red)',
            boxShadow: 'var(--shadow-classified)',
          }}
        >
          {!imageError ? (
            <Image
              src={operator.image}
              alt={`Opérateur ${operator.codeName}`}
              fill
              style={{
                objectFit: 'cover',
                filter: 'blur(8px)',
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-tertiary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              [CLASSIFIED]
            </div>
          )}

          {/* Overlay de classification */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(180, 35, 45, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: 'var(--color-accent-red)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textShadow: '0 0 10px rgba(180, 35, 45, 0.5)',
              }}
            >
              CLASSIFIED
            </span>
          </div>
        </div>

        {/* Informations de base */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              margin: 0,
              marginBottom: 'var(--spacing-1)',
              fontFamily: 'var(--font-family-display)',
            }}
          >
            {operator.codeName}
          </h3>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--font-size-sm)',
              margin: 0,
              marginBottom: 'var(--spacing-2)',
            }}
          >
            {operator.specialization}
          </p>

          {/* Badge de statut */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-1)',
              backgroundColor: getStatusColor(),
              color: 'white',
              padding: 'var(--spacing-1) var(--spacing-2)',
              borderRadius: 'var(--radius-base)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-medium)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'white',
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)',
              }}
            />
            {getStatusText()}
          </div>
        </div>
      </div>

      {/* Informations détaillées */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div>
          <p
            style={{
              color: 'var(--color-text-tertiary)',
              fontSize: 'var(--font-size-xs)',
              margin: 0,
              marginBottom: 'var(--spacing-1)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Tag
          </p>
          <p
            style={{
              color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              margin: 0,
              fontFamily: 'var(--font-family-mono)',
            }}
          >
            {operator.tag}
          </p>
        </div>

        <div>
          <p
            style={{
              color: 'var(--color-text-tertiary)',
              fontSize: 'var(--font-size-xs)',
              margin: 0,
              marginBottom: 'var(--spacing-1)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Missions
          </p>
          <p
            style={{
              color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              margin: 0,
            }}
          >
            {operator.missions}
          </p>
        </div>
      </div>

      {/* Date d'adhésion */}
      <div
        style={{
          marginTop: 'var(--spacing-3)',
          paddingTop: 'var(--spacing-3)',
          borderTop: '1px solid var(--color-border-primary)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: 'var(--color-text-tertiary)',
            fontSize: 'var(--font-size-xs)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Adhésion: {operator.joinDate}
        </p>
      </div>

      {/* Effet de bruit */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(180, 35, 45, 0.01) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(180, 35, 45, 0.01) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
}
