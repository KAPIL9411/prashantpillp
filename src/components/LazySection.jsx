import React, { Suspense } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { SectionLoader } from './Loaders';
import '../styles/loaders.css';

// Lazy section wrapper with intersection observer
const LazySection = ({ 
  children, 
  fallback, 
  height = '400px',
  className = '',
  threshold = 0.1,
  rootMargin = '200px'
}) => {
  const [ref, isInView] = useLazyLoad({ 
    threshold, 
    rootMargin, 
    triggerOnce: true 
  });

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <Suspense fallback={fallback || <SectionLoader height={height} />}>
          {children}
        </Suspense>
      ) : (
        fallback || <SectionLoader height={height} className={className} />
      )}
    </div>
  );
};

export default LazySection;
