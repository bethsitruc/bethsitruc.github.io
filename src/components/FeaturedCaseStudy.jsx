import React from 'react'
import { caseStudies } from '../data/caseStudies'
import ChipLink from './ChipLink'

const featuredSlugs = ['github-engineering-onboarding', 'flashcards-ios']

export default function FeaturedCaseStudy() {
  const featured = featuredSlugs.map(slug => caseStudies.find(c => c.slug === slug)).filter(Boolean)

  if (!featured.length) return null

  return (
    <section aria-labelledby='featured-title' className='section-block' id='case-studies-section'>
      <div className='section-inner'>
        <h2 id='featured-title'>Selected Case Studies</h2>
        <div className='featured-grid'>
          {featured.map(item => (
            <article key={item.slug} className='featured-card'>
              <div className='featured-card__header'>
                <h3>{item.title}</h3>
                <p className='muted'>{item.subtitle}</p>
              </div>
              <p className='featured-card__summary'>{item.summary}</p>
              <ChipLink to={`/case-studies/${item.slug}`}>Read case study</ChipLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
