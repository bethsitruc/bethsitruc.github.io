import React from 'react'
import ChipLink from './ChipLink'

export default function Contact() {
  return (
    <section id='contact' className='section-block' aria-labelledby='contact-heading'>
      <div className='section-inner'>
        <div className='cta-row'>
          <div>
            <h2 id='contact-heading'>Let’s talk</h2>
            <p className='muted'>
              Need onboarding support, enablement strategy, or thoughtful tooling? I’m happy to dive
              in.
            </p>
          </div>
          <div className='contact-actions'>
            <ChipLink href='/contact'>Open contact page</ChipLink>
          </div>
        </div>
      </div>
    </section>
  )
}
