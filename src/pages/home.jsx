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
      <div id="home">
        <Hero />
      </div>
      <div id="identity">
        <LazySection height="500px" rootMargin="300px">
          <Identity />
        </LazySection>
      </div>
      
      <div id="about-us">
        <LazySection height="600px" rootMargin="250px">
          <AboutUs />
        </LazySection>
      </div>
      
      <div id="industries">
        <LazySection height="700px" rootMargin="200px">
          <Industries />
        </LazySection>
      </div>
      
      <div id="products">
        <LazySection height="800px" rootMargin="200px">
          <Products />
        </LazySection>
      </div>
      
      <div id="manufacturing">
        <LazySection height="600px" rootMargin="150px">
          <ManufacturingProcess />
        </LazySection>
      </div>
      
      <div id="quality">
        <LazySection height="500px" rootMargin="150px">
          <QualityCertifications />
        </LazySection>
      </div>
      
      <div id="team">
        <LazySection height="600px" rootMargin="100px">
          <OurTeam />
        </LazySection>
      </div>
      
      <div id="projects">
        <LazySection height="700px" rootMargin="100px">
          <Projects />
        </LazySection>
      </div>
      
      <div id="sustainability">
        <LazySection height="500px" rootMargin="100px">
          <Sustainability />
        </LazySection>
      </div>
      
      <div id="resources">
        <LazySection height="600px" rootMargin="50px">
          <Resources />
        </LazySection>
      </div>
      
      <div id="awards">
        <LazySection height="400px" rootMargin="50px">
          <Awards />
        </LazySection>
      </div>
      
      <div id="contact">
        <LazySection height="500px" rootMargin="0px">
          <Contact />
        </LazySection>
      </div>
    </section>
  )
}
