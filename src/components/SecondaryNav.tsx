'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
  description?: string;
}

interface SecondaryNavProps {
  items: NavItem[];
  className?: string;
}

export default function SecondaryNav({
  items,
  className = '',
}: SecondaryNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`secondary-nav ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderBottom: '1px solid var(--color-border-primary)',
        padding: 'var(--spacing-4) 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-8)',
            overflowX: 'auto',
            paddingBottom: 'var(--spacing-2)',
          }}
        >
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textDecoration: 'none',
                  padding: 'var(--spacing-3) var(--spacing-4)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all var(--duration-200) var(--ease-in-out)',
                  minWidth: 'fit-content',
                  position: 'relative',
                  backgroundColor: isActive
                    ? 'var(--color-bg-tertiary)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid var(--color-accent-red)'
                    : '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor =
                      'var(--color-bg-tertiary)';
                    e.currentTarget.style.borderColor =
                      'var(--color-border-secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                <span
                  style={{
                    color: isActive
                      ? 'var(--color-accent-red)'
                      : 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: item.description ? 'var(--spacing-1)' : '0',
                    transition: 'color var(--duration-200) var(--ease-in-out)',
                  }}
                >
                  {item.label}
                </span>
                {item.description && (
                  <span
                    style={{
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-xs)',
                      lineHeight: 'var(--line-height-tight)',
                    }}
                  >
                    {item.description}
                  </span>
                )}

                {/* Indicateur actif */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .secondary-nav {
          scrollbar-width: thin;
          scrollbar-color: var(--color-border-primary) transparent;
        }

        .secondary-nav::-webkit-scrollbar {
          height: 4px;
        }

        .secondary-nav::-webkit-scrollbar-track {
          background: transparent;
        }

        .secondary-nav::-webkit-scrollbar-thumb {
          background-color: var(--color-border-primary);
          border-radius: var(--radius-full);
        }

        .secondary-nav::-webkit-scrollbar-thumb:hover {
          background-color: var(--color-border-secondary);
        }
      `}</style>
    </nav>
  );
}
