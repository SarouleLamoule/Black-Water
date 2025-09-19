'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'var(--color-bg-secondary)',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border-primary)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-accent-red)',
          border: '2px solid var(--color-accent-red)',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-text-primary)',
          border: 'none',
        };
      default:
        return {
          backgroundColor: 'var(--color-accent-red)',
          color: 'white',
          border: 'none',
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: 'var(--spacing-2) var(--spacing-4)',
          fontSize: 'var(--font-size-sm)',
        };
      case 'lg':
        return {
          padding: 'var(--spacing-4) var(--spacing-8)',
          fontSize: 'var(--font-size-lg)',
        };
      default:
        return {
          padding: 'var(--spacing-3) var(--spacing-6)',
          fontSize: 'var(--font-size-base)',
        };
    }
  };

  const baseStyles = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    borderRadius: 'var(--radius-lg)',
    fontWeight: 'var(--font-weight-medium)',
    cursor: 'pointer',
    transition: 'all var(--duration-200) var(--ease-in-out)',
    boxShadow: 'var(--shadow-sm)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-2)',
    textDecoration: 'none',
    fontFamily: 'var(--font-family-primary)',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;

    if (variant === 'primary') {
      target.style.backgroundColor = 'var(--color-accent-red-light)';
      target.style.transform = 'translateY(-2px)';
      target.style.boxShadow = 'var(--shadow-lg)';
    } else if (variant === 'outline') {
      target.style.backgroundColor = 'var(--color-accent-red)';
      target.style.color = 'white';
      target.style.transform = 'translateY(-2px)';
    } else if (variant === 'secondary') {
      target.style.backgroundColor = 'var(--color-bg-tertiary)';
      target.style.transform = 'translateY(-1px)';
    } else if (variant === 'ghost') {
      target.style.backgroundColor = 'var(--color-bg-secondary)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;

    if (variant === 'primary') {
      target.style.backgroundColor = 'var(--color-accent-red)';
      target.style.transform = 'translateY(0)';
      target.style.boxShadow = 'var(--shadow-sm)';
    } else if (variant === 'outline') {
      target.style.backgroundColor = 'transparent';
      target.style.color = 'var(--color-accent-red)';
      target.style.transform = 'translateY(0)';
    } else if (variant === 'secondary') {
      target.style.backgroundColor = 'var(--color-bg-secondary)';
      target.style.transform = 'translateY(0)';
    } else if (variant === 'ghost') {
      target.style.backgroundColor = 'transparent';
    }
  };

  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      style={baseStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
