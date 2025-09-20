import React from 'react'
import IconBadge from './IconBadge'

export const highlightItems = [
  {
    icon: 'clipboard',
    title: 'Engineering Enablement',
    blurb: 'Helping engineers ramp faster with clear structure and repeatable systems.',
  },
  {
    icon: 'spark',
    title: 'Creative Developer & Builder',
    blurb: 'Shipping thoughtful internal tools with SwiftUI, React, and GitHub Actions.',
  },
  {
    icon: 'graduation',
    title: 'Curriculum Design',
    blurb: 'Designing async-friendly learning systems that scale with growth.',
  },
]

export default function Highlights() {
  return (
    <section aria-labelledby='highlights-title' className='section-block'>
      <div className='section-inner'>
        <h2 id='highlights-title' className='section-heading'>
          <IconBadge name='spark' />
          <span>Highlights</span>
        </h2>
        <div className='highlights-grid'>
          {highlightItems.map(it => (
            <article key={it.title} className='card highlight-card'>
              <div className='highlight-icon' aria-hidden='true'>
                <IconBadge name={it.icon} />
              </div>
              <div className='highlight-body'>
                <h3>{it.title}</h3>
                <p className='muted'>{it.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
