// Export des composants de base (toujours chargés)
export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Button } from './Button';
export { default as Link } from './Link';

// Export des composants d'images optimisés
export { default as MemberImage } from './MemberImage';

// Export des composants de chargement
export { default as LazyComponent } from './LazyComponent';

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
export { default as OperationsTimeline } from './OperationsTimeline';
export { default as ClassifiedDocument } from './ClassifiedDocument';
