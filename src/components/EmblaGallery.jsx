import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function EmblaGallery({ items = [], variant }) {
  if (!items.length) return null

  const total = items.length
  const loop = total > 1
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!emblaApi) return undefined

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit({ loop, align: 'center', containScroll: 'trimSnaps', slidesToScroll: 1 })
  }, [emblaApi, loop, items])

  const goPrev = () => emblaApi?.scrollPrev()
  const goNext = () => emblaApi?.scrollNext()

  return (
    <section className='cs-screenshots' aria-labelledby='screenshots-title'>
      <h2 id='screenshots-title'>Screenshots</h2>
      <div className={`shot-carousel${variant ? ` shot-carousel--${variant}` : ''}`}>
        {loop ? (
          <button
            type='button'
            className='shot-nav shot-nav-prev'
            onClick={goPrev}
            aria-label='View previous screenshot'
          >
            &lt;
          </button>
        ) : null}

        <div className='shot-viewport' ref={emblaRef}>
          <div className='shot-track'>
            {items.map((item, index) => (
              <figure className='shot-slide' key={index} aria-hidden={current !== index}>
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

        {loop ? (
          <button
            type='button'
            className='shot-nav shot-nav-next'
            onClick={goNext}
            aria-label='View next screenshot'
          >
            &gt;
          </button>
        ) : null}
      </div>

      {loop ? (
        <div className='shot-indicators' role='status' aria-live='polite'>
          {current + 1} of {total}
        </div>
      ) : null}
    </section>
  )
}
