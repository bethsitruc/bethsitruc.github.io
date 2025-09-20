import React, { Suspense } from 'react'

const EmblaGallery = React.lazy(() => import('./EmblaGallery'))

function StaticGallery({ items, variant }) {
  const first = items[0]

  return (
    <section className='cs-screenshots' aria-labelledby='screenshots-title'>
      <h2 id='screenshots-title'>Screenshots</h2>
      <div className={`shot-carousel${variant ? ` shot-carousel--${variant}` : ''}`}>
        <div className='shot-viewport'>
          <div className='shot-track' style={{ padding: '0' }}>
            {items.map((item, idx) => (
              <figure className='shot-slide' key={idx}>
                <div className='shot-frame'>
                  <img className='shot-img' src={item.src} alt={item.alt || ''} />
                  {item.caption ? (
                    <figcaption className='shot-caption'>{item.caption}</figcaption>
                  ) : null}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
      {first && items.length > 1 ? (
        <p className='muted' style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          Loading gallery…
        </p>
      ) : null}
    </section>
  )
}

export default function ScreenshotGallery({ items = [], variant }) {
  if (!items.length) return null

  return (
    <Suspense fallback={<StaticGallery items={items.slice(0, 1)} variant={variant} />}>
      <EmblaGallery items={items} variant={variant} />
    </Suspense>
  )
}
