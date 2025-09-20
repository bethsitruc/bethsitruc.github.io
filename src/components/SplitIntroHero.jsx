import React from 'react'
import { highlightItems } from './Highlights'

export default function SplitIntroHero() {
  return (
    <section
      className='split-hero section-block'
      id='about-section'
      aria-labelledby='split-hero-title'
    >
      <div className='section-inner'>
        <div className='hero-grid'>
          <div className='hero-left'>
            <div className='hero-photo-panel' aria-hidden='true'>
              <img src='/images/headshot.jpeg' alt='Bethany Curtis' />
            </div>
            <div className='hero-text'>
              <h1 id='split-hero-title' className='intro-title'>
                Bethany Curtis
              </h1>
            </div>
          </div>
          <div className='hero-right'>
            <div className='hero-highlight-list'>
              {highlightItems.map(item => (
                <div className='hero-highlight' key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
