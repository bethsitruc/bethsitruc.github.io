import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ChipLink from '../components/ChipLink'
import ChipButton from '../components/ChipButton'

const EMAILJS_SERVICE_ID = 'service_c5m4kt6'
const EMAILJS_TEMPLATE_ID = 'template_rmu10se'
const EMAILJS_PUBLIC_KEY = '8TgJToP4JlPgIlFpK'

export default function ContactPage() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function onSubmit(e) {
    e.preventDefault()
    if (!formRef.current || status === 'sending') return

    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          formRef.current?.reset()
          setStatus('success')
        },
        () => {
          setStatus('error')
        }
      )
  }

  return (
    <main>
      <section className='section-block'>
        <div className='section-inner'>
          <div className='contact-intro' aria-label='Contact introduction'>
            <div className='contact-illustration' aria-hidden='true'>
              <img src='/images/connect.png' alt='Stylized illustration of sending a message' />
            </div>

            <div className='contact-details'>
              <h1 id='contact-title'>Let’s connect</h1>
              <p className='muted'>
                I’d love to hear from you — whether it’s about onboarding, enablement strategy, or
                thoughtful tooling. Drop me a note below, and I’ll get back quickly.
              </p>
              <div className='contact-links'>
                <ChipLink
                  href='https://linkedin.com/in/bethany-curtis-2988895a'
                  variant='ghost'
                  external
                >
                  Connect on LinkedIn
                </ChipLink>
                <ChipLink href='https://github.com/bethsitruc' variant='ghost' external>
                  See my work on GitHub
                </ChipLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-block'>
        <div className='section-inner'>
          <section className='contact-card' aria-labelledby='contact-title'>
            <form ref={formRef} className='contact-form' onSubmit={onSubmit}>
              <div className='field'>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' required disabled={status === 'sending'} />
              </div>
              <div className='field'>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className='field'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  required
                  disabled={status === 'sending'}
                ></textarea>
              </div>
              <div className='actions'>
                <ChipButton type='submit' disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </ChipButton>
              </div>
              {status === 'success' ? (
                <p className='muted' style={{ marginTop: '.75rem' }}>
                  Thanks — I got your message and will reply soon.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className='muted' style={{ marginTop: '.75rem', color: 'var(--highlight)' }}>
                  Something went wrong sending the message. Please try again shortly.
                </p>
              ) : null}
            </form>
          </section>
        </div>
      </section>
    </main>
  )
}
