import React from 'react';
import { 
  HeroSkeleton, 
  AboutUsSkeleton, 
  ProductsSkeleton, 
  TeamSkeleton, 
  IndustriesSkeleton, 
  ContactSkeleton, 
  GenericSectionSkeleton,
  FullPageSkeleton 
} from './SkeletonLoaders';

// Main page loader with company branding
export const PageLoader = ({ message = "Loading..." }) => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="text-center">
      {/* Animated logo/spinner */}
      <div className="relative mb-8">
        <div className="w-16 h-16 mx-auto">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-blue-100 rounded-full animate-spin-slow"></div>
          {/* Inner rotating ring */}
          <div className="absolute inset-2 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          {/* Center dot */}
          <div className="absolute inset-6 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Loading text with animation */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 animate-fade-in">
          {message}
        </h3>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  </div>
);

// Enhanced Section loader for lazy-loaded components with specific skeleton types
export const SectionLoader = ({ height = '400px', className = '', type = 'generic' }) => {
  const getSkeletonComponent = () => {
    switch (type) {
      case 'hero':
        return <HeroSkeleton />;
      case 'about':
        return <AboutUsSkeleton />;
      case 'products':
        return <ProductsSkeleton />;
      case 'team':
        return <TeamSkeleton />;
      case 'industries':
        return <IndustriesSkeleton />;
      case 'contact':
        return <ContactSkeleton />;
      default:
        return <GenericSectionSkeleton height={height} />;
    }
  };

  return (
    <div className={className}>
      {getSkeletonComponent()}
    </div>
  );
};

// Legacy simple section loader (kept for backward compatibility)
export const SimpleSectionLoader = ({ height = '400px', className = '' }) => (
  <div className={`flex items-center justify-center ${className}`} style={{ height }}>
    <div className="text-center">
      {/* Skeleton loader with shimmer effect */}
      <div className="space-y-4 w-full max-w-md mx-auto">
        {/* Title skeleton */}
        <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-shimmer bg-[length:200%_100%]"></div>
        
        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%] w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%] w-4/6"></div>
        </div>
        
        {/* Image skeleton */}
        <div className="h-32 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-shimmer bg-[length:200%_100%]"></div>
      </div>
    </div>
  </div>
);

// Minimal inline loader for small components
export const InlineLoader = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
};

// Image loading placeholder
export const ImageLoader = ({ width, height, className = '' }) => (
  <div 
    className={`bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center ${className}`}
    style={{ width, height }}
  >
    <svg 
      className="w-8 h-8 text-gray-400 animate-pulse" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
        clipRule="evenodd" 
      />
    </svg>
  </div>
);

// Progress bar loader
export const ProgressLoader = ({ progress = 0, message = "Loading..." }) => (
  <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center">
    <div className="text-center max-w-md w-full px-6">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto mb-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{ 
                clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((progress * 3.6 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((progress * 3.6 - 90) * Math.PI / 180)}%, 50% 50%)` 
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{message}</h3>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

// Card skeleton loader
export const CardLoader = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="space-y-3">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="mt-6 h-32 bg-gray-200 rounded"></div>
      </div>
    ))}
  </div>
);

export default {
  PageLoader,
  SectionLoader,
  InlineLoader,
  ImageLoader,
  ProgressLoader,
  CardLoader
};
