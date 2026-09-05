import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header({ variant = 'home' }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Apps', path: '/apps' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = event => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className='topbar' id='top'>
      <div className='topbar-inner'>
        <div className='brand'>
          <Link to='/' className='brand-link'>
            Bethany Curtis
          </Link>
        </div>
        <button
          type='button'
          className={`nav-toggle${isMenuOpen ? ' nav-toggle--open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls='primary-navigation'
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id='primary-navigation'
          aria-label='Primary'
          className={`main-nav${isMenuOpen ? ' main-nav--open' : ''}`}
        >
          {navItems.map(item => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive || location.pathname === item.path ? 'is-active' : undefined
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
