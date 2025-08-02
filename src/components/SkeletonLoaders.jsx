import React from 'react';
import '../styles/skeleton.css';

export const HeroSkeleton = () => (
  <div className="hero-skeleton">
    <div className="hero-skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-subtitle"></div>
      <div className="skeleton-button"></div>
    </div>
  </div>
);

export const AboutUsSkeleton = () => (
  <div className="about-skeleton">
    <div className="skeleton-header">
      <div className="skeleton-title-large"></div>
      <div className="skeleton-subtitle-text"></div>
    </div>
    <div className="skeleton-content-grid">
      <div className="skeleton-text-block">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
      </div>
      <div className="skeleton-image-large"></div>
    </div>
  </div>
);

export const ProductsSkeleton = () => (
  <div className="products-skeleton">
    <div className="skeleton-header">
      <div className="skeleton-title-large"></div>
      <div className="skeleton-subtitle-text"></div>
    </div>
    <div className="products-grid">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="product-card-skeleton">
          <div className="skeleton-image"></div>
          <div className="skeleton-card-content">
            <div className="skeleton-card-title"></div>
            <div className="skeleton-card-text"></div>
            <div className="skeleton-card-text short"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TeamSkeleton = () => (
  <div className="team-skeleton">
    <div className="skeleton-header">
      <div className="skeleton-title-large"></div>
      <div className="skeleton-subtitle-text"></div>
    </div>
    <div className="team-grid">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="team-card-skeleton">
          <div className="skeleton-avatar"></div>
          <div className="skeleton-name"></div>
          <div className="skeleton-role"></div>
          <div className="skeleton-bio"></div>
        </div>
      ))}
    </div>
  </div>
);

export const IndustriesSkeleton = () => (
  <div className="industries-skeleton">
    <div className="skeleton-header">
      <div className="skeleton-title-large"></div>
      <div className="skeleton-subtitle-text"></div>
    </div>
    <div className="industries-grid">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="industry-card-skeleton">
          <div className="skeleton-icon"></div>
          <div className="skeleton-card-title"></div>
          <div className="skeleton-card-text"></div>
        </div>
      ))}
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="contact-skeleton">
    <div className="skeleton-header">
      <div className="skeleton-title-large"></div>
      <div className="skeleton-subtitle-text"></div>
    </div>
    <div className="contact-content">
      <div className="contact-form-skeleton">
        <div className="skeleton-input"></div>
        <div className="skeleton-input"></div>
        <div className="skeleton-input"></div>
        <div className="skeleton-textarea"></div>
        <div className="skeleton-button"></div>
      </div>
      <div className="contact-info-skeleton">
        <div className="skeleton-info-item">
          <div className="skeleton-icon-small"></div>
          <div className="skeleton-info-text"></div>
        </div>
        <div className="skeleton-info-item">
          <div className="skeleton-icon-small"></div>
          <div className="skeleton-info-text"></div>
        </div>
        <div className="skeleton-info-item">
          <div className="skeleton-icon-small"></div>
          <div className="skeleton-info-text"></div>
        </div>
      </div>
    </div>
  </div>
);

export const GenericSectionSkeleton = ({ height = '400px' }) => (
  <div className="generic-skeleton" style={{ minHeight: height }}>
    <div className="skeleton-header">
      <div className="skeleton-title-large"></div>
      <div className="skeleton-subtitle-text"></div>
    </div>
    <div className="skeleton-content">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>
      <div className="skeleton-image-placeholder"></div>
    </div>
  </div>
);

export const FullPageSkeleton = () => (
  <div className="full-page-skeleton">
    <div className="header-skeleton">
      <div className="skeleton-logo"></div>
      <div className="skeleton-nav">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="skeleton-nav-item"></div>
        ))}
      </div>
      <div className="skeleton-cta-button"></div>
    </div>
    
    {/* Hero Skeleton */}
    <HeroSkeleton />
    
    {/* Content Sections */}
    <div className="content-skeleton">
      <GenericSectionSkeleton height="300px" />
      <GenericSectionSkeleton height="400px" />
      <GenericSectionSkeleton height="350px" />
    </div>
  </div>
);

export default {
  HeroSkeleton,
  AboutUsSkeleton,
  ProductsSkeleton,
  TeamSkeleton,
  IndustriesSkeleton,
  ContactSkeleton,
  GenericSectionSkeleton,
  FullPageSkeleton
};
