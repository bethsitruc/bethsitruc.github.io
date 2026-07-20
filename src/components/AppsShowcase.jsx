import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ChipLink from './ChipLink'
import { apps } from '../data/apps'

function AppCard({ app, className = '', primaryActionOnly = false }) {
  const cardClassName = ['app-card', className].filter(Boolean).join(' ')
  const ctas = primaryActionOnly ? app.ctas?.slice(0, 1) : app.ctas

  return (
    <article className={cardClassName}>
      <div className='app-card__content'>
        <div className='app-card__header'>
          <span className={`app-status app-status--${app.statusTone}`}>{app.status}</span>
          <h3>{app.name}</h3>
          <p className='muted'>{app.subtitle}</p>
        </div>

        <p className='app-card__summary'>{app.summary}</p>

        {app.bullets?.length ? (
          <ul className='app-card__bullets'>
            {app.bullets.map(bullet => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}

        <div className='app-card__actions'>
          {ctas?.map(cta => (
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

function AppsCarousel({ appsToShow }) {
  const total = appsToShow.length
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: total > 1,
    align: 'center',
    slidesToScroll: 1,
  })
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!emblaApi) return undefined

    const update = () => {
      setCurrent(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', update)
    emblaApi.on('reInit', update)
    update()

    return () => {
      emblaApi.off('select', update)
      emblaApi.off('reInit', update)
    }
  }, [emblaApi])

  useEffect(() => {
    emblaApi?.reInit({ loop: total > 1, align: 'center', slidesToScroll: 1 })
  }, [emblaApi, total])

  useEffect(() => {
    if (!emblaApi || total <= 1 || isPaused) return undefined

    const intervalId = window.setInterval(() => {
      emblaApi.scrollNext()
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [emblaApi, isPaused, total])

  const goTo = index => emblaApi?.scrollTo(index)

  return (
    <div
      className='apps-carousel'
      aria-roledescription='carousel'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className='apps-carousel__viewport' ref={emblaRef}>
        <div className='apps-carousel__track'>
          {appsToShow.map(app => (
            <div className='apps-carousel__slide' key={app.slug}>
              <AppCard app={app} className='app-card--carousel' primaryActionOnly />
            </div>
          ))}
        </div>
      </div>

      {total > 1 ? (
        <div className='apps-carousel__controls'>
          <div className='apps-carousel__dots' aria-label='Choose app slide'>
            {appsToShow.map((app, index) => (
              <button
                type='button'
                className={`apps-carousel__dot${current === index ? ' apps-carousel__dot--active' : ''}`}
                key={app.slug}
                onClick={() => goTo(index)}
                aria-label={`View ${app.name}`}
                aria-current={current === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
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
  variant = 'grid',
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

        {variant === 'carousel' ? (
          <AppsCarousel appsToShow={appsToShow} />
        ) : (
          <div className='apps-grid'>
            {appsToShow.map(app => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
