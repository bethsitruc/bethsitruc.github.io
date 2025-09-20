import React from 'react'
import CaseStudyLayout from './CaseStudyLayout'
import CaseStudySection from './CaseStudySection'
import ScreenshotGallery from './ScreenshotGallery'
import ChipLink from './ChipLink'

function SectionContent({ item }) {
  if (!item) return null
  const { title, icon, body, list, cta, footer } = item

  return (
    <CaseStudySection title={title} icon={icon}>
      {body?.map((paragraph, idx) => (
        <p key={`p-${idx}`}>{paragraph}</p>
      ))}
      {list ? (
        <ul>
          {list.map((entry, idx) => (
            <li key={`li-${idx}`}>{entry}</li>
          ))}
        </ul>
      ) : null}
      {footer ? (
        <div className='cs-subsection'>
          <h3>{footer.title}</h3>
          {footer.body?.map((paragraph, idx) => (
            <p key={`fp-${idx}`}>{paragraph}</p>
          ))}
          {footer.list ? (
            <ul>
              {footer.list.map((entry, idx) => (
                <li key={`fl-${idx}`}>{entry}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      {cta ? (
        <div className='card-actions'>
          <ChipLink
            href={cta.href}
            to={cta.to}
            variant={cta.variant === 'ghost' ? 'ghost' : 'solid'}
            external={cta.external}
          >
            {cta.label}
          </ChipLink>
        </div>
      ) : null}
    </CaseStudySection>
  )
}

function CaseStudyIntro({ title, subtitle, hero, overview }) {
  if (!hero || !overview) return null

  return (
    <section className='section-block'>
      <div className='section-inner case-study-intro'>
        <div className='case-study-hero'>
          <img src={hero.src} alt={hero.alt} />
        </div>

        <div className='case-study-summary'>
          <header className='case-study-meta'>
            <h1>{title}</h1>
            {subtitle ? <p className='cs-subtitle muted'>{subtitle}</p> : null}
          </header>
          <SectionContent item={overview} />
        </div>
      </div>
    </section>
  )
}

function CaseStudyBlock({ block }) {
  const { type } = block

  if (type === 'calloutRow') {
    return (
      <section className='section-block'>
        <div className='section-inner'>
          <div className='case-study-duo'>
            {block.items.map((item, idx) => (
              <div className='case-study-callout' key={idx}>
                <SectionContent item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (type === 'callout') {
    return (
      <section className='section-block'>
        <div className='section-inner'>
          {block.items.map((item, idx) => (
            <div className='case-study-callout' key={idx}>
              <SectionContent item={item} />
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (type === 'duo') {
    return (
      <section className='section-block'>
        <div className='section-inner'>
          <div className='case-study-duo'>
            {block.items.map((item, idx) => (
              <SectionContent item={item} key={idx} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (type === 'single') {
    return (
      <section className='section-block'>
        <div className='section-inner'>
          <SectionContent item={block.item} />
        </div>
      </section>
    )
  }

  if (type === 'gallery') {
    return (
      <section className='section-block'>
        <div className='section-inner'>
          <ScreenshotGallery items={block.items} variant={block.variant} />
        </div>
      </section>
    )
  }

  return null
}

export default function CaseStudyTemplate({ study }) {
  if (!study) return null

  const { title, subtitle, hero, overview, blocks = [] } = study

  return (
    <CaseStudyLayout title={title}>
      <CaseStudyIntro title={title} subtitle={subtitle} hero={hero} overview={overview} />
      {blocks.map((block, idx) => (
        <CaseStudyBlock block={block} key={idx} />
      ))}
    </CaseStudyLayout>
  )
}
