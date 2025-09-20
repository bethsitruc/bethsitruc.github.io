import React from 'react'

const svgProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const iconMap = {
  rocket: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M8 16l-2 5 5-2 9-9a4 4 0 10-5.657-5.657L5 14l-2 5 5-2 8-8' />
      <path d='M12 8l4 4' />
      <circle cx='15.5' cy='8.5' r='1.5' />
    </svg>
  ),
  brain: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M9.5 4a3 3 0 00-3 3v.5A3.5 3.5 0 003 11v0a3.5 3.5 0 003.5 3.5H7' />
      <path d='M14.5 4a3 3 0 013 3v.5A3.5 3.5 0 0121 11v0a3.5 3.5 0 01-3.5 3.5H17' />
      <path d='M12 4v16' />
      <path d='M9 12h3' />
      <path d='M12 8h3' />
      <path d='M12 16h3' />
    </svg>
  ),
  tools: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M14.5 4.5l5 5L14 15l-5-5' />
      <path d='M5 13l-1 3 3-1 9-9-2-2-3 3' />
      <path d='M12 16l-2 4' />
    </svg>
  ),
  target: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <circle cx='12' cy='12' r='7' />
      <circle cx='12' cy='12' r='3' />
      <path d='M12 5V3' />
      <path d='M19 12h2' />
      <path d='M12 21v-2' />
      <path d='M3 12h2' />
    </svg>
  ),
  link: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M10 14L8 16a3 3 0 104.243 4.243l2-2A3 3 0 0012 12' />
      <path d='M14 10l2-2a3 3 0 10-4.243-4.243l-2 2A3 3 0 0012 12' />
      <path d='M9 15l6-6' />
    </svg>
  ),
  phone: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <rect x='7' y='3' width='10' height='18' rx='2' />
      <path d='M11 6h2' />
      <circle cx='12' cy='17' r='1.2' />
    </svg>
  ),
  spark: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z' />
      <path d='M5 19l1-2 1 2 2 1-2 1-1 2-1-2-2-1z' />
      <path d='M18 17l1-2 1 2 2 1-2 1-1 2-1-2-2-1z' />
    </svg>
  ),
  notebook: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <rect x='5' y='4' width='14' height='16' rx='2' />
      <path d='M9 4v16' />
      <path d='M12 8h4' />
      <path d='M12 12h4' />
      <path d='M12 16h3' />
    </svg>
  ),
  toolbox: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <rect x='3' y='8' width='18' height='11' rx='2' />
      <path d='M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2' />
      <path d='M3 12h18' />
      <path d='M10 12v4' />
      <path d='M14 12v4' />
    </svg>
  ),
  star: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M12 4l2.5 5.5L20 11l-4 4 1 5-5-2.5L7 20l1-5-4-4 5.5-1.5z' />
    </svg>
  ),
  puzzle: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M10 5a2 2 0 114 0h3a2 2 0 012 2v3a2 2 0 110 4v3a2 2 0 01-2 2h-3a2 2 0 11-4 0H7a2 2 0 01-2-2v-3a2 2 0 110-4V7a2 2 0 012-2z' />
    </svg>
  ),
  arrow: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M5 12h14' />
      <path d='M13 6l6 6-6 6' />
    </svg>
  ),
  handshake: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M3 8l5-3 4 4 4-4 5 3v3l-3 3-2 5-4-4-4 4-2-5-3-3z' />
      <path d='M9 11l3 3' />
      <path d='M15 11l-3 3' />
    </svg>
  ),
  bot: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <rect x='4' y='8' width='16' height='10' rx='3' />
      <circle cx='9' cy='13' r='1.3' />
      <circle cx='15' cy='13' r='1.3' />
      <path d='M12 8V4' />
      <rect x='10' y='2' width='4' height='2' rx='1' />
    </svg>
  ),
  clipboard: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <rect x='6' y='4' width='12' height='16' rx='2' />
      <path d='M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1' />
      <path d='M9 10h6' />
      <path d='M9 14h6' />
    </svg>
  ),
  graduation: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M3 9l9-4 9 4-9 4-9-4z' />
      <path d='M6 11v4c0 2 3 4 6 4s6-2 6-4v-4' />
      <path d='M21 9v4' />
    </svg>
  ),
  note: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M5 4h9l5 5v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z' />
      <path d='M9 12h6' />
      <path d='M9 16h4' />
      <path d='M14 4v5h5' />
    </svg>
  ),
  layers: props => (
    <svg viewBox='0 0 24 24' {...svgProps} {...props}>
      <path d='M12 4l9 5-9 5-9-5 9-5z' />
      <path d='M4 14l8 4 8-4' />
      <path d='M4 18l8 4 8-4' />
    </svg>
  ),
}

const defaultIcon = iconMap.spark

export default function IconBadge({ name, size = 24, 'aria-hidden': ariaHidden = true }) {
  const IconComponent = iconMap[name] || defaultIcon
  return (
    <span className='icon-badge' aria-hidden={ariaHidden}>
      <IconComponent width={size} height={size} className='icon-badge__svg' />
    </span>
  )
}
