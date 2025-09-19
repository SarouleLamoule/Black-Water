'use client';

import { useState } from 'react';

interface Operation {
  id: string;
  title: string;
  date: string;
  status: 'success' | 'failure' | 'ongoing' | 'classified';
  description: string;
  location: string;
  participants?: string[];
  classification: 'public' | 'classified' | 'secret' | 'top-secret';
}

interface OperationsTimelineProps {
  operations: Operation[];
  className?: string;
}

export default function OperationsTimeline({
  operations,
  className = '',
}: OperationsTimelineProps) {
  const [selectedOperation, setSelectedOperation] = useState<Operation | null>(
    null
  );

  const getStatusColor = (status: Operation['status']) => {
    switch (status) {
      case 'success':
        return 'var(--color-success)';
      case 'failure':
        return 'var(--color-error)';
      case 'ongoing':
        return 'var(--color-warning)';
      case 'classified':
        return 'var(--color-accent-red)';
      default:
        return 'var(--color-text-tertiary)';
    }
  };

  const getStatusText = (status: Operation['status']) => {
    switch (status) {
      case 'success':
        return 'SUCCÈS';
      case 'failure':
        return 'ÉCHEC';
      case 'ongoing':
        return 'EN COURS';
      case 'classified':
        return 'CLASSIFIÉ';
      default:
        return 'INCONNU';
    }
  };

  const getClassificationColor = (
    classification: Operation['classification']
  ) => {
    switch (classification) {
      case 'public':
        return 'var(--color-text-tertiary)';
      case 'classified':
        return 'var(--color-accent-red)';
      case 'secret':
        return 'var(--color-warning)';
      case 'top-secret':
        return 'var(--color-error)';
      default:
        return 'var(--color-text-tertiary)';
    }
  };

  const getClassificationText = (
    classification: Operation['classification']
  ) => {
    switch (classification) {
      case 'public':
        return 'PUBLIC';
      case 'classified':
        return 'CLASSIFIED';
      case 'secret':
        return 'SECRET';
      case 'top-secret':
        return 'TOP SECRET';
      default:
        return 'UNKNOWN';
    }
  };

  return (
    <div className={`operations-timeline ${className}`}>
      <div className="container">
        <h2
          style={{
            color: 'var(--color-text-primary)',
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-8)',
            textAlign: 'center',
            fontFamily: 'var(--font-family-display)',
          }}
        >
          Chronologie des Opérations
        </h2>

        <div
          style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {/* Ligne de temps */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--color-accent-red)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px rgba(180, 35, 45, 0.3)',
            }}
          />

          {/* Opérations */}
          {operations.map((operation, index) => (
            <div
              key={operation.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 'var(--spacing-8)',
                position: 'relative',
              }}
            >
              {/* Contenu de l'opération */}
              <div
                style={{
                  flex: 1,
                  marginRight: index % 2 === 0 ? 'var(--spacing-8)' : '0',
                  marginLeft: index % 2 === 1 ? 'var(--spacing-8)' : '0',
                  order: index % 2 === 0 ? 1 : 2,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all var(--duration-200) var(--ease-in-out)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onClick={() => setSelectedOperation(operation)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
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
                  {/* En-tête de l'opération */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    <h3
                      style={{
                        color: 'var(--color-text-primary)',
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        margin: 0,
                        fontFamily: 'var(--font-family-display)',
                      }}
                    >
                      {operation.title}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        gap: 'var(--spacing-2)',
                      }}
                    >
                      {/* Badge de classification */}
                      <div
                        style={{
                          backgroundColor: getClassificationColor(
                            operation.classification
                          ),
                          color: 'white',
                          padding: 'var(--spacing-1) var(--spacing-2)',
                          borderRadius: 'var(--radius-base)',
                          fontSize: 'var(--font-size-xs)',
                          fontWeight: 'var(--font-weight-bold)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {getClassificationText(operation.classification)}
                      </div>

                      {/* Badge de statut */}
                      <div
                        style={{
                          backgroundColor: getStatusColor(operation.status),
                          color: 'white',
                          padding: 'var(--spacing-1) var(--spacing-2)',
                          borderRadius: 'var(--radius-base)',
                          fontSize: 'var(--font-size-xs)',
                          fontWeight: 'var(--font-weight-medium)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {getStatusText(operation.status)}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: 'var(--font-size-base)',
                      lineHeight: 'var(--line-height-relaxed)',
                      margin: 0,
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    {operation.description}
                  </p>

                  {/* Informations supplémentaires */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 'var(--spacing-4)',
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
                        Date
                      </p>
                      <p
                        style={{
                          color: 'var(--color-text-primary)',
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 'var(--font-weight-medium)',
                          margin: 0,
                        }}
                      >
                        {operation.date}
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
                        Localisation
                      </p>
                      <p
                        style={{
                          color: 'var(--color-text-primary)',
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 'var(--font-weight-medium)',
                          margin: 0,
                        }}
                      >
                        {operation.location}
                      </p>
                    </div>
                  </div>

                  {/* Participants */}
                  {operation.participants &&
                    operation.participants.length > 0 && (
                      <div style={{ marginTop: 'var(--spacing-4)' }}>
                        <p
                          style={{
                            color: 'var(--color-text-tertiary)',
                            fontSize: 'var(--font-size-xs)',
                            margin: 0,
                            marginBottom: 'var(--spacing-2)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          Participants
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-1)',
                          }}
                        >
                          {operation.participants.map((participant, idx) => (
                            <span
                              key={idx}
                              style={{
                                backgroundColor: 'var(--color-bg-tertiary)',
                                color: 'var(--color-text-primary)',
                                padding: 'var(--spacing-1) var(--spacing-2)',
                                borderRadius: 'var(--radius-base)',
                                fontSize: 'var(--font-size-xs)',
                                fontWeight: 'var(--font-weight-medium)',
                                border: '1px solid var(--color-border-primary)',
                              }}
                            >
                              {participant}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>

              {/* Point de temps */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  backgroundColor: getStatusColor(operation.status),
                  borderRadius: '50%',
                  border: '3px solid var(--color-bg-primary)',
                  boxShadow: '0 0 10px rgba(180, 35, 45, 0.3)',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Date */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: '30px',
                  backgroundColor: 'var(--color-bg-primary)',
                  color: 'var(--color-text-secondary)',
                  padding: 'var(--spacing-1) var(--spacing-2)',
                  borderRadius: 'var(--radius-base)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  border: '1px solid var(--color-border-primary)',
                  whiteSpace: 'nowrap',
                }}
              >
                {operation.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de détail de l'opération */}
      {selectedOperation && (
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
          onClick={() => setSelectedOperation(null)}
        >
          <div
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
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête du modal */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--spacing-6)',
                borderBottom: '1px solid var(--color-border-primary)',
              }}
            >
              <h2
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  margin: 0,
                  fontFamily: 'var(--font-family-display)',
                }}
              >
                {selectedOperation.title}
              </h2>
              <button
                onClick={() => setSelectedOperation(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-xl)',
                  cursor: 'pointer',
                  padding: 'var(--spacing-2)',
                }}
              >
                ✕
              </button>
            </div>

            {/* Contenu du modal */}
            <div style={{ padding: 'var(--spacing-6)' }}>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                  margin: 0,
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                {selectedOperation.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-4)',
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
                    Date
                  </p>
                  <p
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      margin: 0,
                    }}
                  >
                    {selectedOperation.date}
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
                    Localisation
                  </p>
                  <p
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      margin: 0,
                    }}
                  >
                    {selectedOperation.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
