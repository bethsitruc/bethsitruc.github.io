import React from 'react'

export default function AboutOverview() {
  return (
    <section className='section-block about-overview' aria-labelledby='about-title'>
      <div className='section-inner'>
        <div className='about-overview-grid'>
          <div className='about-overview-content'>
            <h2 id='about-title'>My Approach</h2>
            <p>
              I help engineers feel confident with clear onboarding, intuitive tools, and team
              rhythms that work.
            </p>
            <p>
              My background spans program management, engineering leadership, curriculum design, and
              full-stack development. In every role, I focus on how people experience the systems we
              build.
            </p>
            <p>
              I’m at my best simplifying, humanizing, and scaling the systems that support people.
            </p>
          </div>
          <div className='about-overview-photo' aria-hidden='true'>
            <img src='/images/about.png' alt='Bethany Curtis' />
          </div>
        </div>
      </div>
    </section>
  )
}
