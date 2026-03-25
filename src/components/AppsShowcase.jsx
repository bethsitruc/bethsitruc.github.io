import React from 'react'
import ChipLink from './ChipLink'
import { apps } from '../data/apps'

function AppCard({ app }) {
  return (
    <article className='app-card'>
      <div className='app-card__content'>
        <div className='app-card__header'>
          <span className={`app-status app-status--${app.statusTone}`}>{app.status}</span>
          <h3>{app.name}</h3>
          <p className='muted'>{app.subtitle}</p>
        </div>

        <p className='app-card__summary'>{app.summary}</p>

        {app.bullets?.length ? (
          <ul className='app-card__bullets'>
            {app.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}

        <div className='app-card__actions'>
          {app.ctas?.map((cta) => (
            <ChipLink
              key={cta.label}
              to={cta.to}
              href={cta.href}
              variant={cta.variant === 'ghost' ? 'ghost' : 'solid'}
              external={cta.external}
            >
              {cta.label}
            </ChipLink>
          ))}
        </div>
      </div>

      <div className='app-card__media' aria-hidden='true'>
        <div
          className={`app-card__frame${app.imageStyle ? ` app-card__frame--${app.imageStyle}` : ''}`}
        >
          <img src={app.image} alt={app.imageAlt || ''} />
        </div>
      </div>
    </article>
  )
}

export default function AppsShowcase({
  title = 'Apps',
  intro,
  ctaLabel,
  ctaTo,
  appsToShow = apps,
  sectionId = 'apps',
  titleAs = 'h2',
}) {
  if (!appsToShow.length) return null

  const TitleTag = titleAs

  return (
    <section id={sectionId} className='section-block apps-showcase'>
      <div className='section-inner'>
        <div className='apps-showcase__header'>
          <div>
            <TitleTag>{title}</TitleTag>
            {intro ? <p className='muted apps-showcase__intro'>{intro}</p> : null}
          </div>
          {ctaLabel && ctaTo ? <ChipLink to={ctaTo}>{ctaLabel}</ChipLink> : null}
        </div>

        <div className='apps-grid'>
          {appsToShow.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}
