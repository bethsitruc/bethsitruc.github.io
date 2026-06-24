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
            </p>
            <ul>
              <li>
                <strong>Family Flashcards</strong> - a parent-managed study app for kids built with
                SwiftUI, SwiftData, and CloudKit
              </li>
              <li>
                <strong>Grounded: Affirmation App</strong> - a live iOS affirmation app with
                widgets, share cards, and Apple Intelligence-assisted drafting
              </li>
              <li>
                <strong>Author Website Rebuild</strong> - modernized a legacy Wix site with React,
                Vite, and Markdown publishing
              </li>
            </ul>
          </details>

          <details>
            <summary>
              <IconBadge name='bot' aria-hidden={true} />
              <span>AI in Practice</span>
            </summary>
            <p>
              I weave AI into everyday engineering work, from Codex and GitHub Copilot for software
              delivery to Microsoft Copilot and ChatGPT for planning, documentation, and synthesis.
              I focus on using AI to accelerate iteration, reduce admin overhead, and improve
              quality.
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
