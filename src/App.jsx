import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import CtaBanner from './components/CtaBanner'
import AboutPage from './pages/AboutPage'
import SplitIntroHero from './components/SplitIntroHero'
import CaseStudies from './components/CaseStudies'
import CaseStudyDetail from './components/CaseStudyDetail'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

function Home() {
  return (
    <>
      <Header variant='home' />
      <main>
        <SplitIntroHero />
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
    </Routes>
  )
}
