// Export des composants de base (toujours chargés)
export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Button } from './Button';
export { default as Link } from './Link';
export { default as MouseEffect } from './MouseEffect';
export { default as BulletImpact } from './BulletImpact';
export { default as TargetSystem } from './TargetSystem';
export { default as TargetCounter } from './TargetCounter';

// Export des composants d'images optimisés
export { default as MemberImage } from './MemberImage';

// Export des animations (légères)
export { FadeIn, StaggeredFadeIn } from './Animations';

// Export des éléments visuels (légers)
export {
  SecurityBadge,
  RedactedStamp,
  ClassifiedWatermark,
} from './VisualElements';

// Export des composants lourds (lazy loading)
export { default as OperatorCard } from './OperatorCard';
export { default as OperatorModal } from './OperatorModal';
export { default as ClassifiedDocument } from './ClassifiedDocument';
