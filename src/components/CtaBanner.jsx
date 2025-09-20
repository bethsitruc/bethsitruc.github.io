import React from 'react'
import ChipLink from './ChipLink'

export default function CtaBanner() {
  return (
    <section className='section-block' id='contact-section' aria-labelledby='cta-title'>
      <div className='section-inner'>
        <div className='cta-row'>
          <div>
            <h2 id='cta-title'>Let’s build confident engineers, faster.</h2>
          </div>
          <ChipLink href='/contact'>Work together</ChipLink>
        </div>
      </div>
    </section>
  )
}
