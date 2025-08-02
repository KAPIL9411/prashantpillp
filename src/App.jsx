import './App.css';
import './styles/header.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/home';
import { PageLoader } from './components/Loaders';
import './styles/loaders.css';

// Lazy load all route components for better code splitting
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

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-extended" element={<AboutExtended />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturing-process" element={<ManufacturingProcess />} />
          <Route path="/quality-certifications" element={<QualityCertifications />} />
          <Route path="/ourteam" element={<OurTeam/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/sustainability" element={<Sustainability/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/awards" element={<Awards/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
