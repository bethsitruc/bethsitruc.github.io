import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header({ variant = 'home' }) {
  const location = useLocation()
  const isHome = variant === 'home'
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' },
  ]

  if (isHome) {
    // Minimal topbar on home; intro lives in main content
    return (
      <header className={'topbar'} id='top'>
        <div className={'topbar-inner'}>
          <div className='brand'>
            <Link to='/' className='brand-link'>
              Bethany Curtis
            </Link>
          </div>
          <nav aria-label='Primary' className='main-nav'>
            {navItems.map(item => (
              <Link key={item.label} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className={'topbar'} id='top'>
      <div className={'topbar-inner'}>
        <div className='brand'>
          <Link to='/' className='brand-link'>
            Bethany Curtis
          </Link>
        </div>
        <nav aria-label='Primary' className='main-nav'>
          {navItems.map(item => (
            <NavLink
              key={item.label}
              to={item.path}
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
