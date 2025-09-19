'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from './index';

interface Operator {
  id: string;
  codeName: string;
  tag: string;
  image: string;
  status: 'active' | 'inactive' | 'deceased';
  specialization: string;
  joinDate: string;
  missions: number;
  description?: string;
  skills?: string[];
  notableMissions?: string[];
}

interface OperatorModalProps {
  operator: Operator | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OperatorModal({
  operator,
  isOpen,
  onClose,
}: OperatorModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Gérer la fermeture avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Gérer le clic en dehors du modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !operator) {
    return null;
  }

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

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)',
        zIndex: 'var(--z-index-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-4)',
      }}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: 'var(--color-bg-primary)',
          border: '2px solid var(--color-accent-red)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: 'var(--shadow-redacted)',
        }}
      >
        {/* En-tête du modal */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--spacing-6)',
            borderBottom: '1px solid var(--color-border-primary)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--color-bg-primary)',
            zIndex: 2,
          }}
        >
          <div>
            <h2
              style={{
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                margin: 0,
                fontFamily: 'var(--font-family-display)',
              }}
            >
              {operator.codeName}
            </h2>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
                margin: 0,
                marginTop: 'var(--spacing-1)',
              }}
            >
              Fiche opérateur classifiée
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            style={{
              minWidth: 'auto',
              padding: 'var(--spacing-2)',
            }}
          >
            ✕
          </Button>
        </div>

        {/* Contenu du modal */}
        <div style={{ padding: 'var(--spacing-6)' }}>
          {/* Section principale */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: 'var(--spacing-6)',
              marginBottom: 'var(--spacing-6)',
            }}
          >
            {/* Image de l'opérateur */}
            <div
              style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid var(--color-accent-red)',
                boxShadow: 'var(--shadow-classified)',
              }}
            >
              <Image
                src={operator.image}
                alt={`Opérateur ${operator.codeName}`}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'blur(12px)',
                }}
              />

              {/* Overlay de classification */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(180, 35, 45, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    color: 'var(--color-accent-red)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textShadow: '0 0 10px rgba(180, 35, 45, 0.5)',
                    textAlign: 'center',
                  }}
                >
                  IMAGE
                  <br />
                  CLASSIFIÉE
                </span>
              </div>
            </div>

            {/* Informations de base */}
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-4)',
                  marginBottom: 'var(--spacing-4)',
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
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
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
                    Statut
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-1)',
                      backgroundColor: getStatusColor(),
                      color: 'white',
                      padding: 'var(--spacing-1) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)',
                      }}
                    />
                    {getStatusText()}
                  </div>
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
                    Spécialisation
                  </p>
                  <p
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      margin: 0,
                    }}
                  >
                    {operator.specialization}
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
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      margin: 0,
                    }}
                  >
                    {operator.missions}
                  </p>
                </div>
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
                  Date d&apos;adhésion
                </p>
                <p
                  style={{
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    margin: 0,
                  }}
                >
                  {operator.joinDate}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          {operator.description && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: 0,
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Description
              </h3>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                  margin: 0,
                }}
              >
                {operator.description}
              </p>
            </div>
          )}

          {/* Compétences */}
          {operator.skills && operator.skills.length > 0 && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: 0,
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Compétences
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-2)',
                }}
              >
                {operator.skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      color: 'var(--color-text-primary)',
                      padding: 'var(--spacing-1) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      border: '1px solid var(--color-border-primary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Missions notables */}
          {operator.notableMissions && operator.notableMissions.length > 0 && (
            <div>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: 0,
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Missions notables
              </h3>
              <ul
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                  margin: 0,
                  paddingLeft: 'var(--spacing-4)',
                }}
              >
                {operator.notableMissions.map((mission, index) => (
                  <li key={index} style={{ marginBottom: 'var(--spacing-2)' }}>
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Pied du modal */}
        <div
          style={{
            padding: 'var(--spacing-4) var(--spacing-6)',
            borderTop: '1px solid var(--color-border-primary)',
            backgroundColor: 'var(--color-bg-secondary)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
}
