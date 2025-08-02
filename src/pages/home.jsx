import React, { lazy, useEffect } from 'react'
import Hero from './hero'
import LazySection from '../components/LazySection'
import { preloadCriticalResources, prefetchNextPageResources } from '../utils/resourcePreloader'

// Lazy load non-critical sections
const Identity = lazy(() => import('./identity'))
const AboutUs = lazy(() => import('./about-us'))
const Industries = lazy(() => import('./industries'))
const Products = lazy(() => import('./products'))
const ManufacturingProcess = lazy(() => import('./manufacturing-process'))
const QualityCertifications = lazy(() => import('./quality-certifications'))
const OurTeam = lazy(() => import('./ourteam'))
const Projects = lazy(() => import('./projects'))
const Sustainability = lazy(() => import('./Sustainability'))
const Resources = lazy(() => import('./Resources'))
const Awards = lazy(() => import('./Awards'))
const Contact = lazy(() => import('./Contact'))

export default function Home() {
  useEffect(() => {
    preloadCriticalResources()
    prefetchNextPageResources('/')
  }, [])

  return (
    <section>
      <Hero />
      <LazySection height="500px" rootMargin="300px">
        <Identity />
      </LazySection>
      
      <LazySection height="600px" rootMargin="250px">
        <AboutUs />
      </LazySection>
      
      <LazySection height="700px" rootMargin="200px">
        <Industries />
      </LazySection>
      
      <LazySection height="800px" rootMargin="200px">
        <Products />
      </LazySection>
      
      <LazySection height="600px" rootMargin="150px">
        <ManufacturingProcess />
      </LazySection>
      
      <LazySection height="500px" rootMargin="150px">
        <QualityCertifications />
      </LazySection>
      
      <LazySection height="600px" rootMargin="100px">
        <OurTeam />
      </LazySection>
      
      <LazySection height="700px" rootMargin="100px">
        <Projects />
      </LazySection>
      
      <LazySection height="500px" rootMargin="100px">
        <Sustainability />
      </LazySection>
      
      <LazySection height="600px" rootMargin="50px">
        <Resources />
      </LazySection>
      
      <LazySection height="400px" rootMargin="50px">
        <Awards />
      </LazySection>
      
      <LazySection height="500px" rootMargin="0px">
        <Contact />
      </LazySection>
    </section>
  )
}
