import React from 'react'

function classNames(variant) {
  return `btn-chip${variant === 'ghost' ? ' btn-chip-ghost' : ''}`
}

export default function ChipButton({ children, variant = 'solid', type = 'button', ...rest }) {
  return (
    <button type={type} className={classNames(variant)} {...rest}>
      {children}
    </button>
  )
}
