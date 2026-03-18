import React from 'react'
import AppsShowcase from '../components/AppsShowcase'

export default function AppsPage() {
  return (
    <main>
      <AppsShowcase
        title='Apps'
        titleAs='h1'
        intro='Released and in-progress products I am designing and building. This is the quickest place to see what is live, what is shipping soon, and where to go next for privacy details or deeper case studies.'
        sectionId='apps-page'
      />
    </main>
  )
}
