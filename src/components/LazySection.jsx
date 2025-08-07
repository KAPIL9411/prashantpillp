import React, { Suspense } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { SectionLoader } from './Loaders';
import '../styles/loaders.css';

const LazySection = ({ 
  children, 
  fallback, 
  height = '400px',
  className = '',
  threshold = 0.1,
  rootMargin = '200px',
  skeletonType = 'generic'
}) => {
  const [ref, isInView] = useLazyLoad({ 
    threshold, 
    rootMargin, 
    triggerOnce: true 
  });

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <Suspense fallback={fallback || <SectionLoader height={height} type={skeletonType} />}>
          {children}
        </Suspense>
      ) : (
        fallback || <SectionLoader height={height} type={skeletonType} className={className} />
      )}
    </div>
  );
};

export default LazySection;
