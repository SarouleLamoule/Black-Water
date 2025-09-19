'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTarget } from '../contexts/TargetContext';

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: 'left' | 'right';
  timestamp: number;
}

export default function TargetSystem() {
  const { incrementScore } = useTarget();
  const [targets, setTargets] = useState<Target[]>([]);
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

  // Créer une nouvelle cible
  const createTarget = useCallback(() => {
    const target: Target = {
      id: Date.now() + Math.random(),
      x: Math.random() > 0.5 ? -50 : window.innerWidth + 50,
      y: Math.random() * (window.innerHeight - 200) + 100,
      size: 30 + Math.random() * 20, // 30-50px
      speed: 1 + Math.random() * 2, // 1-3px par frame
      direction: Math.random() > 0.5 ? 'right' : 'left',
      timestamp: Date.now(),
    };

    setTargets((prev) => [...prev, target]);

    // Supprimer la cible après 8 secondes si pas touchée
    setTimeout(() => {
      setTargets((prev) => prev.filter((t) => t.id !== target.id));
    }, 8000);
  }, []);

  // Gérer le clic sur une cible
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const clickX = event.clientX;
      const clickY = event.clientY;

      // Vérifier si le clic touche une cible
      const hitTarget = targets.find((target) => {
        const targetX = target.x + target.size / 2;
        const targetY = target.y + target.size / 2;
        const distance = Math.sqrt(
          Math.pow(clickX - targetX, 2) + Math.pow(clickY - targetY, 2)
        );
        return distance <= target.size / 2;
      });

      if (hitTarget) {
        // Cible touchée !
        setTargets((prev) => prev.filter((t) => t.id !== hitTarget.id));
        incrementScore();
      }
    },
    [targets, incrementScore]
  );

  // Animation des cibles
  useEffect(() => {
    const animateTargets = () => {
      setTargets((prev) =>
        prev
          .map((target) => ({
            ...target,
            x:
              target.direction === 'right'
                ? target.x + target.speed
                : target.x - target.speed,
          }))
          .filter(
            (target) => target.x > -100 && target.x < window.innerWidth + 100
          )
      );
    };

    const animationId = setInterval(animateTargets, 16); // 60fps
    return () => clearInterval(animationId);
  }, []);

  // Créer des cibles aléatoirement
  useEffect(() => {
    const createRandomTarget = () => {
      if (Math.random() < 0.3) {
        // 30% de chance
        createTarget();
      }
    };

    const interval = setInterval(createRandomTarget, 2000); // Toutes les 2 secondes
    return () => clearInterval(interval);
  }, [createTarget]);

  // Écouter les clics
  useEffect(() => {
    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [handleClick]);

  // Ne pas rendre sur mobile
  if (isMobile) return null;

  return (
    <>
      {targets.map((target) => (
        <div
          key={target.id}
          className="target"
          style={{
            position: 'fixed',
            left: target.x,
            top: target.y,
            width: target.size,
            height: target.size,
            zIndex: 9990,
            pointerEvents: 'none',
            background: `
              radial-gradient(circle, 
                rgba(255, 68, 68, 0.9) 0%, 
                rgba(255, 68, 68, 0.7) 30%, 
                rgba(255, 68, 68, 0.3) 60%, 
                transparent 100%
              )
            `,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: `
              0 0 20px rgba(255, 68, 68, 0.6),
              inset 0 0 20px rgba(255, 255, 255, 0.3)
            `,
            animation: 'targetPulse 2s ease-in-out infinite',
          }}
        >
          {/* Croix de visée */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '60%',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                right: '0',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                transform: 'translateY(-50%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                bottom: '0',
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
