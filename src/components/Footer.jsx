import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='footer-banner' aria-hidden='true'>
        <img src='/images/footer.png' alt='' loading='lazy' />
      </div>
      <footer className='site-footer'>
        <div className='section-inner footer-inner'>
          <div className='footer-cta' aria-label='Connect'>
            <p>
              Ready to build better software and stronger teams?{' '}
              <Link to='/contact'>Let’s connect.</Link>
            </p>
          </div>
          <div className='footer-bottom'>
            <p>&copy; {new Date().getFullYear()} Bethany Curtis</p>
            <p>
              <Link to='/privacy-policy'>Privacy Policies</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
