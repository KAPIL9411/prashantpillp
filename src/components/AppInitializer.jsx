import React, { useState, useEffect } from 'react';
import { FullPageSkeleton } from './SkeletonLoaders';
import { PageLoader } from './Loaders';

const AppInitializer = ({ children, showProgress = false }) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const initializeApp = async () => {
      // Simulate critical resource loading
      const loadingSteps = [
        { name: 'Loading critical styles', progress: 20, duration: 150 },
        { name: 'Loading fonts and assets', progress: 40, duration: 200 },
        { name: 'Initializing components', progress: 60, duration: 250 },
        { name: 'Loading page data', progress: 80, duration: 200 },
        { name: 'Finalizing setup', progress: 100, duration: 100 }
      ];

      for (const step of loadingSteps) {
        setLoadingProgress(step.progress);
        await new Promise(resolve => setTimeout(resolve, step.duration));
      }

      // Small delay to show completion
      await new Promise(resolve => setTimeout(resolve, 200));
      setIsInitializing(false);
    };

    // Only run initialization on first load
    const hasInitialized = sessionStorage.getItem('app-initialized');
    if (!hasInitialized) {
      initializeApp();
      sessionStorage.setItem('app-initialized', 'true');
    } else {
      // Skip initialization if already done in this session
      setIsInitializing(false);
    }
  }, []);

  if (isInitializing) {
    return showProgress ? (
      <PageLoader message={`Loading... ${loadingProgress}%`} />
    ) : (
      <FullPageSkeleton />
    );
  }

  return children;
};

export default AppInitializer;
