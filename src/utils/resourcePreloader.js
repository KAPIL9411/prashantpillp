class ResourcePreloader {
  constructor() {
    this.preloadedResources = new Set();
    this.loadingPromises = new Map();
  }

  preloadImage(src, priority = 'high') {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve(img);
      };
      
      img.onerror = () => {
        reject(new Error(`Failed to preload image: ${src}`));
      };

      if (priority === 'high') {
        img.fetchPriority = 'high';
      }
      
      img.src = src;
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }
  preloadImages(sources, priority = 'high') {
    return Promise.allSettled(
      sources.map(src => this.preloadImage(src, priority))
    );
  }

  preloadCSS(href) {
    if (this.preloadedResources.has(href)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      
      link.onload = () => {
        this.preloadedResources.add(href);
        resolve();
      };
      
      link.onerror = () => {
        reject(new Error(`Failed to preload CSS: ${href}`));
      };

      document.head.appendChild(link);
    });
  }

  // Preload JavaScript modules
  preloadScript(src) {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = src;
      
      link.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      
      link.onerror = () => {
        reject(new Error(`Failed to preload script: ${src}`));
      };

      document.head.appendChild(link);
    });
  }

  prefetchResource(href, as = 'document') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }

  isPreloaded(src) {
    return this.preloadedResources.has(src);
  }

  clearCache() {
    this.preloadedResources.clear();
    this.loadingPromises.clear();
  }
}

const resourcePreloader = new ResourcePreloader();

export const preloadCriticalResources = () => {
  const criticalImages = [
  ];

  return resourcePreloader.preloadImages(criticalImages, 'high');
};

export const prefetchNextPageResources = (currentPath) => {
  const prefetchMap = {
    '/': ['/about-us', '/products', '/industries'],
    '/about-us': ['/ourteam', '/manufacturing-process'],
    '/products': ['/industries', '/quality-certifications'],
    '/industries': ['/projects', '/products'],
  };

  const nextPages = prefetchMap[currentPath] || [];
  nextPages.forEach(page => {
    resourcePreloader.prefetchResource(page);
  });
};

export default resourcePreloader;
