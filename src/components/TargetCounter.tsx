'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TargetCounterProps {
  score: number;
  onReset: () => void;
}

export default function TargetCounter({ score, onReset }: TargetCounterProps) {
  const [showVictory, setShowVictory] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Afficher le message de victoire à 50/50
  useEffect(() => {
    if (score >= 50) {
      setShowVictory(true);
    }
  }, [score]);

  const handleVictoryClick = () => {
    setShowVictory(false);
    onReset();
  };

  // Ne pas afficher le compteur sur mobile
  if (isMobile) return null;

  return (
    <>
      {/* Compteur dans le header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-accent-red)',
          fontFamily: 'var(--font-family-mono)',
          letterSpacing: '0.05em',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            backgroundColor: 'var(--color-accent-red)',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(255, 68, 68, 0.6)',
          }}
        />
        CIBLES: {score}/50
      </div>

      {/* Message de victoire - Image Middle-finger */}
      {showVictory && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            cursor: 'pointer',
          }}
          onClick={handleVictoryClick}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src="/Middle-finger.png"
              alt="Victory"
              width={800}
              height={600}
              priority
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 20px rgba(255, 68, 68, 0.8))',
                animation: 'victoryGlow 2s ease-in-out infinite alternate',
                pointerEvents: 'none', // Empêche l'image de capturer les clics
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
