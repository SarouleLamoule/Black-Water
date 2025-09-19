'use client';

import { useEffect, useState } from 'react';

export default function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Effet de gradient qui suit la souris */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: isVisible
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(180, 35, 45, 0.03) 0%, transparent 50%)`
            : 'transparent',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Particules qui suivent la souris */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        {isVisible && (
          <>
            {/* Particule principale */}
            <div
              style={{
                position: 'absolute',
                left: mousePosition.x - 2,
                top: mousePosition.y - 2,
                width: '4px',
                height: '4px',
                backgroundColor: 'rgba(180, 35, 45, 0.6)',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(180, 35, 45, 0.8)',
                animation: 'pulse 2s ease-in-out infinite',
                transition: 'all 0.1s ease',
              }}
            />

            {/* Traînée de particules */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: mousePosition.x - 1,
                  top: mousePosition.y - 1,
                  width: '2px',
                  height: '2px',
                  backgroundColor: `rgba(180, 35, 45, ${0.3 - i * 0.1})`,
                  borderRadius: '50%',
                  transform: `translate(${(i + 1) * -10}px, ${(i + 1) * 5}px)`,
                  transition: 'all 0.3s ease',
                  transitionDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Effet de scan qui suit la souris */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
        {isVisible && (
          <>
            {/* Ligne de scan horizontale */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: mousePosition.y,
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, rgba(180, 35, 45, 0.4), transparent)',
                boxShadow: '0 0 5px rgba(180, 35, 45, 0.6)',
                transition: 'all 0.1s ease',
              }}
            />

            {/* Ligne de scan verticale */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: mousePosition.x,
                width: '1px',
                background:
                  'linear-gradient(180deg, transparent, rgba(180, 35, 45, 0.4), transparent)',
                boxShadow: '0 0 5px rgba(180, 35, 45, 0.6)',
                transition: 'all 0.1s ease',
              }}
            />
          </>
        )}
      </div>

      {/* Effet de grille qui suit la souris */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {isVisible && (
          <div
            style={{
              position: 'absolute',
              left: mousePosition.x - 100,
              top: mousePosition.y - 100,
              width: '200px',
              height: '200px',
              backgroundImage: `
                linear-gradient(rgba(180, 35, 45, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(180, 35, 45, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              opacity: 0.3,
              transition: 'all 0.2s ease',
              animation: 'rotate 10s linear infinite',
            }}
          />
        )}
      </div>
    </>
  );
}
