export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical styles for immediate rendering */
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Loading spinner styles */
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }
    
    /* Utility classes for layout */
    .flex {
      display: flex;
    }
    
    .items-center {
      align-items: center;
    }
    
    .justify-center {
      justify-content: center;
    }
    
    .min-h-screen {
      min-height: 100vh;
    }
    
    .rounded-full {
      border-radius: 9999px;
    }
    
    .h-12 {
      height: 3rem;
    }
    
    .w-12 {
      width: 3rem;
    }
    
    .border-b-2 {
      border-bottom-width: 2px;
    }
    
    .border-blue-600 {
      border-color: #2563eb;
    }
    
    .bg-gray-200 {
      background-color: #e5e7eb;
    }
    
    .bg-gray-100 {
      background-color: #f3f4f6;
    }
    
    .text-gray-400 {
      color: #9ca3af;
    }
    
    .text-gray-500 {
      color: #6b7280;
    }
    
    .text-sm {
      font-size: 0.875rem;
    }
    
    .w-8 {
      width: 2rem;
    }
    
    .h-8 {
      height: 2rem;
    }
    
    .absolute {
      position: absolute;
    }
    
    .relative {
      position: relative;
    }
    
    .inset-0 {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    
    .overflow-hidden {
      overflow: hidden;
    }
    
    .transition-opacity {
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    .duration-300 {
      transition-duration: 300ms;
    }
    
    .opacity-0 {
      opacity: 0;
    }
    
    .opacity-100 {
      opacity: 1;
    }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

export const preloadNonCriticalCSS = (href) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  link.onload = function() {
    this.onload = null;
    this.rel = 'stylesheet';
  };
  document.head.appendChild(link);
};

export const removeUnusedCSS = (cssText, usedClasses) => {
  const usedClassSet = new Set(usedClasses);
  const lines = cssText.split('\n');
  const filteredLines = [];
  let inRule = false;
  let currentRule = '';

  for (const line of lines) {
    if (line.includes('{')) {
      inRule = true;
      currentRule = line;
    } else if (line.includes('}')) {
      inRule = false;
      currentRule += line;
      
      const classMatches = currentRule.match(/\.[a-zA-Z0-9_-]+/g);
      if (classMatches && classMatches.some(cls => usedClassSet.has(cls.substring(1)))) {
        filteredLines.push(currentRule);
      }
      currentRule = '';
    } else if (inRule) {
      currentRule += line + '\n';
    } else {
      filteredLines.push(line);
    }
  }

  return filteredLines.join('\n');
};

export const optimizeFontLoading = () => {
  const fontFaces = document.querySelectorAll('style, link[rel="stylesheet"]');
  fontFaces.forEach(element => {
    if (element.textContent && element.textContent.includes('@font-face')) {
      element.textContent = element.textContent.replace(
        /@font-face\s*{([^}]*)}/g,
        (match, content) => {
          if (!content.includes('font-display')) {
            return `@font-face {${content} font-display: swap;}`;
          }
          return match;
        }
      );
    }
  });
};

export default {
  inlineCriticalCSS,
  preloadNonCriticalCSS,
  removeUnusedCSS,
  optimizeFontLoading
};
