'use client';

import { useState, useEffect, useCallback } from 'react';

interface Impact {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function BulletImpact() {
  const [impacts, setImpacts] = useState<Impact[]>([]);
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

  const handleClick = useCallback(
    (event: MouseEvent) => {
      // Ne pas créer d'impact sur mobile
      if (isMobile) return;

      // Créer un nouvel impact
      const newImpact: Impact = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      };

      setImpacts((prev) => [...prev, newImpact]);

      // Supprimer l'impact après 2 secondes
      setTimeout(() => {
        setImpacts((prev) =>
          prev.filter((impact) => impact.id !== newImpact.id)
        );
      }, 2000);
    },
    [isMobile]
  );

  useEffect(() => {
    // Attendre que le DOM soit prêt
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClick, { capture: true });
    }, 100);

    // Nettoyer l'écouteur
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [handleClick]);

  // Ne pas rendre les éléments sur mobile
  if (isMobile) return null;

  return (
    <>
      {impacts.map((impact) => (
        <div key={impact.id}>
          {/* Impact principal */}
          <div
            className="bullet-impact-main"
            style={{
              position: 'fixed',
              left: impact.x - 4,
              top: impact.y - 4,
              width: '8px',
              height: '8px',
              backgroundColor: '#ff4444',
              borderRadius: '50%',
              boxShadow: '0 0 20px #ff4444, 0 0 40px #ff4444',
              zIndex: 9999,
              pointerEvents: 'none',
              animation: 'bulletImpactMain 0.3s ease-out',
            }}
          />

          {/* Onde de choc */}
          <div
            className="bullet-shockwave"
            style={{
              position: 'fixed',
              left: impact.x - 25,
              top: impact.y - 25,
              width: '50px',
              height: '50px',
              border: '2px solid rgba(255, 68, 68, 0.6)',
              borderRadius: '50%',
              zIndex: 9996,
              pointerEvents: 'none',
              animation: 'bulletShockwave 0.5s ease-out',
            }}
          />

          {/* Fumée réaliste */}
          {[...Array(8)].map((_, i) => {
            const size = 15 + Math.random() * 25; // Taille variable
            const opacity = 0.4 + Math.random() * 0.3; // Opacité variable
            const delay = i * 0.08; // Délai échelonné

            return (
              <div
                key={`${impact.id}-smoke-${i}`}
                className="bullet-smoke"
                style={{
                  position: 'fixed',
                  left: impact.x - size / 2 + (Math.random() - 0.5) * 30,
                  top: impact.y - size / 2 + (Math.random() - 0.5) * 20,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: `rgba(120, 120, 120, ${opacity})`,
                  borderRadius: '50%',
                  zIndex: 9995,
                  pointerEvents: 'none',
                  animation: `bulletSmokeRealistic 2s ease-out ${delay}s`,
                  boxShadow: `0 0 ${size / 2}px rgba(120, 120, 120, ${opacity * 0.5})`,
                }}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
