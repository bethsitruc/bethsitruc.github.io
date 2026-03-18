import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { appsBySlug } from '../data/apps'
import CaseStudyTemplate from './CaseStudyTemplate'
import ChipLink from './ChipLink'

export default function AppDetail() {
  const { slug } = useParams()
  const app = appsBySlug[slug]

  if (!app) {
    return (
      <main>
        <section className='section-block'>
          <div className='section-inner'>
            <p>App not found.</p>
            <p>
              <ChipLink to='/apps'>Back to Apps</ChipLink>
            </p>
          </div>
        </section>
      </main>
    )
  }

  if (!app.detail) {
    return <Navigate to='/apps' replace />
  }

  return (
    <CaseStudyTemplate
      study={app.detail}
      collectionLabel='Apps'
      collectionTo='/apps'
    />
  )
}
