import React from 'react'

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
              <a href='/contact'>Let’s connect.</a>
            </p>
          </div>
          <div className='footer-bottom'>
            <p>&copy; 2025 Bethany Curtis</p>
          </div>
        </div>
      </footer>
    </>
  )
}
