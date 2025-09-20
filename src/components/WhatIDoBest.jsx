import React from 'react'

export default function WhatIDoBest() {
  const tiles = [
    {
      title: 'Building helpful tools',
      blurb:
        'I design tools that simplify complexity and make life easier — for engineers, learners, and even parents. From SwiftUI apps to GitHub Actions, my work focuses on clarity and usability.',
    },
    {
      title: 'Leading with empathy',
      blurb:
        'I create environments where people feel heard, supported, and empowered. I center psychological safety, strategy, and care in every team interaction.',
    },
    {
      title: 'Designing learning systems',
      blurb:
        'I craft scalable learning experiences — from async onboarding paths to live labs and facilitator guides. My goal is to make learning structured, repeatable, and impactful.',
    },
    {
      title: 'Using AI where it helps',
      blurb:
        'I integrate AI into daily workflows, from GitHub Copilot to Apple Foundation Models. I focus on reducing cognitive load, unlocking deeper thinking, and freeing teams to do their best work.',
    },
  ]

  return (
    <section aria-labelledby='what-best-title' className='section-block'>
      <div className='section-inner'>
        <h2 id='what-best-title'>Where I Thrive</h2>
        <div className='about-pillars'>
          {tiles.map(t => (
            <div className='about-pillar' key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
