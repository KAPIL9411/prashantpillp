import React, { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate app initialization
    const initializeApp = async () => {
      // Simulate loading critical resources
      const steps = [
        { name: 'Loading fonts', duration: 200 },
        { name: 'Loading images', duration: 300 },
        { name: 'Initializing components', duration: 400 },
        { name: 'Loading data', duration: 300 },
        { name: 'Finalizing', duration: 200 }
      ];

      let progress = 0;
      const progressStep = 100 / steps.length;

      for (const step of steps) {
        await new Promise(resolve => setTimeout(resolve, step.duration));
        progress += progressStep;
        setLoadingProgress(Math.round(progress));
      }

      // Add a small delay to show completion
      await new Promise(resolve => setTimeout(resolve, 100));
      setIsAppLoading(false);
    };

    initializeApp();
  }, []);

  const value = {
    isAppLoading,
    loadingProgress,
    setIsAppLoading,
    setLoadingProgress
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};
