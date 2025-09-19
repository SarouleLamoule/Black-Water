import { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

// Composant de fallback simple
const SimpleFallback = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-8)',
      color: 'var(--color-text-secondary)',
    }}
  >
    Chargement...
  </div>
);

export default function LazyComponent({
  fallback = <SimpleFallback />,
  children,
}: LazyComponentProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

// Helper pour créer des composants lazy
export function createLazyComponent<
  T extends ComponentType<Record<string, unknown>>,
>(importFunc: () => Promise<{ default: T }>) {
  return lazy(importFunc);
}
