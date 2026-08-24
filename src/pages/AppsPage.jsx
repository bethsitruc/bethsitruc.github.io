import React from 'react'
import AppsShowcase from '../components/AppsShowcase'

export default function AppsPage() {
  return (
    <main>
      <AppsShowcase
        title='Apps'
        titleAs='h1'
        intro='Released and currently testing products I designed and built. This is the quickest place to see what is live, what is in TestFlight, and where to find support, privacy details, or deeper case studies.'
        sectionId='apps-page'
      />
    </main>
  )
}
