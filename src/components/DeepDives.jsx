import React from 'react'
import IconBadge from './IconBadge'

export default function DeepDives() {
  return (
    <section className='section-block' aria-labelledby='deep-dives-title'>
      <div className='section-inner'>
        <h2 id='deep-dives-title'>A Bit More On…</h2>
        <div className='accordion'>
          <details>
            <summary>
              <IconBadge name='brain' aria-hidden={true} />
              <span>Leading Engineering Teams</span>
            </summary>
            <p>
              I’ve led distributed teams through complex delivery, organizational change, and
              cross-functional collaboration. My approach balances clarity, care, and
              momentum—whether running sprints, facilitating 1:1s, or building new hire programs.
            </p>
          </details>

          <details>
            <summary>
              <IconBadge name='spark' aria-hidden={true} />
              <span>Building Tools</span>
            </summary>
            <p>
              From prototype to production, I bring ideas to life with thoughtful tools. Recent
              projects include:
              <ul>
                <li>
                  <strong>Flashcards App</strong> - a personalized study tool for kids built with
                  SwiftUI and SwiftData
                </li>
                <li>
                  <strong>Affirmation App</strong> - AI-powered daily affirmations with Apple
                  Foundation Models
                </li>
                <li>
                  <strong>Author Website Rebuild</strong> – modernized a legacy Wix site with React,
                  Vite, and Markdown publishing
                </li>
              </ul>
            </p>
          </details>

          <details>
            <summary>
              <IconBadge name='bot' aria-hidden={true} />
              <span>AI in Practice</span>
            </summary>
            <p>
              I weave AI into everyday engineering work—from GitHub Copilot for refactoring, to
              Microsoft Copilot for documentation, to ChatGPT for planning. I focus on using AI to
              accelerate iteration, reduce admin overhead, and open space for strategy.
            </p>
          </details>

          <details>
            <summary>
              <IconBadge name='graduation' aria-hidden={true} />
              <span>Curriculum Design</span>
            </summary>
            <p>
              I design learning paths that blend structure, delivery, and confidence. My programs
              combine async modules, live labs, mentoring, and facilitator guides into repeatable
              systems—helping engineers ramp faster and grow stronger.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
