import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className='breadcrumbs' aria-label='Breadcrumb'>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1
        return (
          <span key={idx} className='crumb'>
            {isLast || !item.to ? (
              <span aria-current='page'>{item.label}</span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
            {!isLast && <span className='crumb-sep'>/</span>}
          </span>
        )
      })}
    </nav>
  )
}
