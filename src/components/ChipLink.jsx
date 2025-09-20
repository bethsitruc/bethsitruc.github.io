import React from 'react'
import { Link } from 'react-router-dom'

function classNames(variant) {
  return `btn-chip${variant === 'ghost' ? ' btn-chip-ghost' : ''}`
}

export default function ChipLink({
  children,
  to,
  href,
  variant = 'solid',
  external = false,
  rel,
  target,
  ...rest
}) {
  const className = classNames(variant)

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  const finalTarget = external ? '_blank' : target
  const finalRel = external ? 'noopener' : rel

  return (
    <a href={href} className={className} target={finalTarget} rel={finalRel} {...rest}>
      {children}
    </a>
  )
}
