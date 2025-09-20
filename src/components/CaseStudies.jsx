import React from 'react'
import { caseStudies } from '../data/caseStudies'
import IconBadge from './IconBadge'
import ChipLink from './ChipLink'

export default function CaseStudies() {
  return (
    <section id='case-studies' className='section-block'>
      <div className='section-inner'>
        <h2 className='section-heading'>
          <IconBadge name='layers' />
          <span>Case Studies</span>
        </h2>
        <p className='muted case-studies-intro'>
          A selection of projects where I’ve blended technical depth, design, and human-centered
          strategy.
        </p>
        <div className='grid'>
          {caseStudies.map(cs => (
            <article className='card' key={cs.slug}>
              <h3>{cs.title}</h3>
              <p className='muted'>{cs.subtitle}</p>
              <p>{cs.summary}</p>
              <div className='card-actions'>
                <ChipLink to={`/case-studies/${cs.slug}`}>Read Case Study</ChipLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
