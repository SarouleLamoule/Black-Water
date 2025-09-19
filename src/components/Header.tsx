'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

          {/* Navigation Desktop */}
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
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              À propos
            </Link>
            <Link
              href="/operations"
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              Opérations
            </Link>
            <Link
              href="/team"
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              Équipe
            </Link>
            <Link
              href="/members"
              style={{
                color: 'var(--color-accent-red)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-accent-red)';
              }}
            >
              Membres
            </Link>
            <Link
              href="/press"
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              Presse
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

        {/* Navigation Mobile */}
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
            }}
            className="mobile-nav"
          >
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-2) 0',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
            >
              À propos
            </Link>
            <Link
              href="/operations"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-2) 0',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
            >
              Opérations
            </Link>
            <Link
              href="/team"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-2) 0',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
            >
              Équipe
            </Link>
            <Link
              href="/press"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-2) 0',
                transition: 'color var(--duration-200) var(--ease-in-out)',
              }}
            >
              Presse
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
