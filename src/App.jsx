import './App.css';
import './styles/header.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import { FullPageSkeleton } from './components/SkeletonLoaders';
import AppInitializer from './components/AppInitializer';
import './styles/loaders.css';
import './styles/skeleton.css';

import Hero from './pages/hero';
const AboutUs = lazy(() => import('./pages/about-us'));
const AboutExtended = lazy(() => import('./pages/about-extended'));
const Identity = lazy(() => import('./pages/identity'));
const Industries = lazy(() => import('./pages/industries'));
const Products = lazy(() => import('./pages/products'));
const ManufacturingProcess = lazy(() => import('./pages/manufacturing-process'));
const QualityCertifications = lazy(() => import('./pages/quality-certifications'));
const OurTeam = lazy(() => import('./pages/ourteam'));
const Projects = lazy(() => import('./pages/projects'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Resources = lazy(() => import('./pages/Resources'));
const Awards = lazy(() => import('./pages/Awards'));
const Contact = lazy(() => import('./pages/Contact'));

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="identity">
          <Identity />
        </div>
        <div id="industries">
          <Industries />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="manufacturing-process">
          <ManufacturingProcess />
        </div>
        <div id="quality-certifications">
          <QualityCertifications />
        </div>
        <div id="ourteam">
          <OurTeam />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="sustainability">
          <Sustainability />
        </div>
        <div id="resources">
          <Resources />
        </div>
        <div id="awards">
          <Awards />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Suspense>
    </div>
  );
};

export default function App() {
  return (
    <AppInitializer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-extended" element={
            <Suspense fallback={<FullPageSkeleton />}>
              <AboutExtended />
            </Suspense>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppInitializer>
  );
}
