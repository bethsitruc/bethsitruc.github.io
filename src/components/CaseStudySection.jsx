import React from 'react'
import IconBadge from './IconBadge'

export default function CaseStudySection({ title, icon, children }) {
  return (
    <section className='cs-section'>
      {title ? (
        <h2 className='cs-section-title'>
          {icon ? <IconBadge name={icon} /> : null}
          <span>{title}</span>
        </h2>
      ) : null}
      <div className='cs-section-body'>{children}</div>
    </section>
  )
}
