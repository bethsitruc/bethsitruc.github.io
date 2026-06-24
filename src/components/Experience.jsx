import React from 'react'
import ChipLink from './ChipLink'

const roles = [
  'Associate Director, Tech Data Engineering — UBS',
  'Senior Technical Project Manager — GitHub',
  'Senior Engineering Manager — Kyndryl',
  'Curriculum & Delivery Lead — Maverick Solutions',
  'Technical Specialist — Apple',
  'Solution Engineer — Red Hat',
  'Systems Programmer — CACI',
]

const funFacts = [
  'Mom x4 — chaos coordinator.',
  'Baking = therapy (preferably donuts).',
  'Coffee makes me kind.',
  'Musicals are my cardio.',
  'Bobby Bones fan.',
  'From NoVA → Raleigh and staying put.',
]

export default function Experience() {
  return (
    <section id='experience' className='section-block' aria-labelledby='experience-title'>
      <div className='section-inner experience-duo'>
        <article className='experience-card experience-card--work'>
          <h2 id='experience-title'>Work</h2>
          <p className='muted'>
            A quick look at the teams and roles where I’ve led data engineering, enablement,
            delivery, and curriculum programs.
          </p>
          <ul className='experience-list'>
            {roles.map(role => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <ChipLink href='/assets/BCurtis_Resume_March2026.pdf' external>
            📄 View my resume
          </ChipLink>
        </article>
        <article className='experience-card experience-card--life' aria-labelledby='life-title'>
          <h2 id='life-title'>Life</h2>
          <p className='muted'>The things that keep me grounded outside of work.</p>
          <ul className='experience-facts'>
            {funFacts.map(fact => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
