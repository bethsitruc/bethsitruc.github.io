import React from 'react'
import AppsShowcase from '../components/AppsShowcase'

export default function AppsPage() {
  return (
    <main>
      <AppsShowcase
        title='Apps'
        titleAs='h1'
        intro='Released products I designed and built. This is the quickest place to explore each app and find its App Store listing, support resources, privacy details, or deeper case study.'
        sectionId='apps-page'
      />
    </main>
  )
}
