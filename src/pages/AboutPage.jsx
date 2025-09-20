import React from 'react'
import AboutOverview from '../components/AboutOverview'
import WhatIDoBest from '../components/WhatIDoBest'
import DeepDives from '../components/DeepDives'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function AboutPage() {
  return (
    <main>
      <AboutOverview />
      <WhatIDoBest />
      <DeepDives />
      <Experience />
    </main>
  )
}
