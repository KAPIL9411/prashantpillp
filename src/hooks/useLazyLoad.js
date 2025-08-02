import { useState, useEffect, useRef } from 'react';

export const useLazyLoad = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '100px',
    triggerOnce = true,
    delay = 0
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsInView(true);
              if (triggerOnce) {
                setHasLoaded(true);
                observer.disconnect();
              }
            }, delay);
          } else {
            setIsInView(true);
            if (triggerOnce) {
              setHasLoaded(true);
              observer.disconnect();
            }
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  return [elementRef, isInView || hasLoaded];
};

export const usePreloadOnHover = (preloadFn) => {
  const [isPreloaded, setIsPreloaded] = useState(false);

  const handleMouseEnter = () => {
    if (!isPreloaded && preloadFn) {
      preloadFn();
      setIsPreloaded(true);
    }
  };

  return { handleMouseEnter, isPreloaded };
};

export default useLazyLoad;
