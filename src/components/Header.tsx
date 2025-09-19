'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      id="navigation"
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-index-sticky)',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-primary)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--spacing-4) 0',
            minHeight: '60px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'var(--color-accent-red)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-bold)',
              fontFamily: 'var(--font-family-display)',
              letterSpacing: '0.05em',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--color-accent-red)',
                borderRadius: '50%',
                marginRight: 'var(--spacing-2)',
                boxShadow: 'var(--shadow-classified)',
              }}
            />
            BLACK WATER
          </Link>

          {/* Navigation Desktop avec effets spectaculaires */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'var(--spacing-8)',
            }}
            className="desktop-nav"
          >
            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              style={{
                color: isActive('/about')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-base)',
                overflow: 'hidden',
              }}
            >
              {/* Particules de survol */}
              <div
                className="nav-particles"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: `${i * 30 + 20}%`,
                      top: '50%',
                      width: '2px',
                      height: '2px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      boxShadow: '0 0 6px var(--color-accent-red)',
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              {/* Ligne de scan */}
              <div
                className="nav-scan"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent, var(--color-accent-red), transparent)',
                  opacity: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              {/* Traînée de souris */}
              <div
                className="nav-mouse-trail"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'var(--color-accent-red)',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px var(--color-accent-red)',
                  opacity: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              <span style={{ position: 'relative', zIndex: 3 }}>
                Qui sommes nous ?
              </span>
            </Link>

            <Link
              href="/members"
              className={`nav-link ${isActive('/members') ? 'active' : ''}`}
              style={{
                color: isActive('/members')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-base)',
                overflow: 'hidden',
              }}
            >
              {/* Particules de survol */}
              <div
                className="nav-particles"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: `${i * 30 + 20}%`,
                      top: '50%',
                      width: '2px',
                      height: '2px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      boxShadow: '0 0 6px var(--color-accent-red)',
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              {/* Ligne de scan */}
              <div
                className="nav-scan"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent, var(--color-accent-red), transparent)',
                  opacity: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              {/* Traînée de souris */}
              <div
                className="nav-mouse-trail"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'var(--color-accent-red)',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px var(--color-accent-red)',
                  opacity: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              <span style={{ position: 'relative', zIndex: 3 }}>Membres</span>
            </Link>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              padding: 'var(--spacing-2)',
              fontSize: 'var(--font-size-lg)',
            }}
            className="mobile-menu-toggle"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Mobile avec effets */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            role="navigation"
            aria-label="Navigation mobile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)',
              padding: 'var(--spacing-4) 0',
              borderTop: '1px solid var(--color-border-primary)',
              backgroundColor: 'var(--color-bg-secondary)',
              animation: 'navSlideIn 0.3s ease-out',
            }}
            className="mobile-nav"
          >
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              style={{
                color: isActive('/about')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                borderRadius: 'var(--radius-base)',
                margin: '0 var(--spacing-4)',
                overflow: 'hidden',
              }}
            >
              {/* Particules de survol pour mobile */}
              <div
                className="nav-particles"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: `${i * 50 + 25}%`,
                      top: '50%',
                      width: '3px',
                      height: '3px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      boxShadow: '0 0 8px var(--color-accent-red)',
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>

              {/* Ligne de scan pour mobile */}
              <div
                className="nav-scan"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background:
                    'linear-gradient(90deg, transparent, var(--color-accent-red), transparent)',
                  opacity: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              <span style={{ position: 'relative', zIndex: 3 }}>
                Qui sommes nous ?
              </span>
            </Link>

            <Link
              href="/members"
              onClick={() => setIsMenuOpen(false)}
              className={`nav-link ${isActive('/members') ? 'active' : ''}`}
              style={{
                color: isActive('/members')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                borderRadius: 'var(--radius-base)',
                margin: '0 var(--spacing-4)',
                overflow: 'hidden',
              }}
            >
              {/* Particules de survol pour mobile */}
              <div
                className="nav-particles"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: `${i * 50 + 25}%`,
                      top: '50%',
                      width: '3px',
                      height: '3px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      boxShadow: '0 0 8px var(--color-accent-red)',
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>

              {/* Ligne de scan pour mobile */}
              <div
                className="nav-scan"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background:
                    'linear-gradient(90deg, transparent, var(--color-accent-red), transparent)',
                  opacity: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              <span style={{ position: 'relative', zIndex: 3 }}>Membres</span>
            </Link>
          </nav>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
