import React from 'react'
import Breadcrumbs from './Breadcrumbs'

export default function CaseStudyLayout({
  title,
  children,
  collectionLabel = 'Case Studies',
  collectionTo = '/case-studies',
}) {
  const items = [
    { label: 'Home', to: '/' },
    { label: collectionLabel, to: collectionTo },
    { label: title },
  ]

  const childArray = React.Children.toArray(children)
  const [first, ...rest] = childArray

  let enhancedFirst = first

  if (React.isValidElement(first)) {
    const existingClass = first.props.className || ''
    const className = [existingClass].filter(Boolean).join(' ').trim()
    const originalChildren = React.Children.toArray(first.props.children)

    enhancedFirst = React.cloneElement(first, { className }, [
      <div key='breadcrumbs' className='section-inner case-study-breadcrumbs'>
        <Breadcrumbs items={items} />
      </div>,
      ...originalChildren,
    ])
  }

  return (
    <main>
      {enhancedFirst || (
        <section className='section-block section-block-muted'>
          <div className='section-inner case-study-breadcrumbs'>
            <Breadcrumbs items={items} />
          </div>
        </section>
      )}
      {rest}
    </main>
  )
}
