import React from 'react'
import { useParams } from 'react-router-dom'
import { caseStudies, caseStudyDetails } from '../data/caseStudies'
import CaseStudyTemplate from './CaseStudyTemplate'
import ChipLink from './ChipLink'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = caseStudies.find(c => c.slug === slug)

  if (!cs) {
    return (
      <main>
        <section className='section-block'>
          <div className='section-inner'>
            <p>Case study not found.</p>
            <p>
              <ChipLink to='/case-studies'>Back to Case Studies</ChipLink>
            </p>
          </div>
        </section>
      </main>
    )
  }

  const detail = caseStudyDetails[slug]

  if (!detail) {
    return (
      <main>
        <section className='section-block'>
          <div className='section-inner'>
            <p>Case study not found.</p>
            <p>
              <ChipLink to='/case-studies'>Back to Case Studies</ChipLink>
            </p>
          </div>
        </section>
      </main>
    )
  }

  return <CaseStudyTemplate study={detail} />
}
