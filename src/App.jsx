import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import CtaBanner from './components/CtaBanner'
import AboutPage from './pages/AboutPage'
import AppsPage from './pages/AppsPage'
import SplitIntroHero from './components/SplitIntroHero'
import CaseStudies from './components/CaseStudies'
import CaseStudyDetail from './components/CaseStudyDetail'
import AppDetail from './components/AppDetail'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import Footer from './components/Footer'
import AppsShowcase from './components/AppsShowcase'

function Home() {
  return (
    <>
      <Header variant='home' />
      <main>
        <SplitIntroHero />
        <AppsShowcase
          title='Apps'
          intro='Products I am actively shipping and refining, with direct paths to privacy details and deeper writeups.'
          ctaLabel='View all apps'
          ctaTo='/apps'
          sectionId='apps'
        />
        <FeaturedCaseStudy />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/apps'
        element={
          <>
            <Header variant='compact' />
            <AppsPage />
            <Footer />
          </>
        }
      />
      <Route
        path='/apps/:slug'
        element={
          <>
            <Header variant='compact' />
            <AppDetail />
            <Footer />
          </>
        }
      />
      <Route
        path='/case-studies'
        element={
          <>
            <Header variant='compact' />
            <main>
              <CaseStudies />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path='/about'
        element={
          <>
            <Header variant='compact' />
            <AboutPage />
            <Footer />
          </>
        }
      />
      <Route
        path='/case-studies/:slug'
        element={
          <>
            <Header variant='compact' />
            <CaseStudyDetail />
            <Footer />
          </>
        }
      />
      <Route
        path='/contact'
        element={
          <>
            <Header variant='compact' />
            <ContactPage />
            <Footer />
          </>
        }
      />
      <Route
        path='/privacy-policy'
        element={
          <>
            <Header variant='compact' />
            <PrivacyPolicyPage />
            <Footer />
          </>
        }
      />
      <Route
        path='/privacy-policy/:slug'
        element={
          <>
            <Header variant='compact' />
            <PrivacyPolicyPage />
            <Footer />
          </>
        }
      />
    </Routes>
  )
}
