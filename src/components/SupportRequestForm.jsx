import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import ChipButton from './ChipButton'

const EMAILJS_SERVICE_ID = 'service_c5m4kt6'
const EMAILJS_TEMPLATE_ID = 'template_rmu10se'
const EMAILJS_PUBLIC_KEY = '8TgJToP4JlPgIlFpK'

export default function SupportRequestForm({ appName }) {
  const [status, setStatus] = useState('idle')

  function onSubmit(event) {
    event.preventDefault()
    if (status === 'sending') return

    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const requestType = form.get('requestType')
    const device = form.get('device')?.trim()
    const appVersion = form.get('appVersion')?.trim()
    const details = form.get('details')?.trim()
    const message = [
      `${appName} support request`,
      `Type: ${requestType}`,
      device ? `Device / OS: ${device}` : null,
      appVersion ? `App version: ${appVersion}` : null,
      '',
      details,
    ]
      .filter(line => line !== null)
      .join('\n')

    setStatus('sending')
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.get('name'),
          email: form.get('email'),
          subject: `${appName}: ${requestType}`,
          message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          formElement.reset()
          setStatus('success')
        },
        () => setStatus('error')
      )
  }

  return (
    <form className='contact-form support-form' onSubmit={onSubmit}>
      <div className='field'>
        <label htmlFor='support-name'>Name</label>
        <input id='support-name' name='name' type='text' required disabled={status === 'sending'} />
      </div>
      <div className='field'>
        <label htmlFor='support-email'>Email</label>
        <input
          id='support-email'
          name='email'
          type='email'
          required
          disabled={status === 'sending'}
        />
      </div>
      <div className='field'>
        <label htmlFor='request-type'>What would you like to share?</label>
        <select id='request-type' name='requestType' required disabled={status === 'sending'}>
          <option value='Issue'>Report an issue</option>
          <option value='Feedback'>Share feedback</option>
          <option value='Feature request'>Request a feature</option>
        </select>
      </div>
      <div className='support-form__optional-fields'>
        <div className='field'>
          <label htmlFor='support-device'>Device and OS (optional)</label>
          <input
            id='support-device'
            name='device'
            type='text'
            placeholder='e.g. iPhone 17, iOS 26'
            disabled={status === 'sending'}
          />
        </div>
        <div className='field'>
          <label htmlFor='app-version'>App version (optional)</label>
          <input
            id='app-version'
            name='appVersion'
            type='text'
            placeholder='Found in the app settings'
            disabled={status === 'sending'}
          />
        </div>
      </div>
      <div className='field'>
        <label htmlFor='support-details'>Details</label>
        <textarea
          id='support-details'
          name='details'
          rows={7}
          placeholder='Tell me what happened, what you expected, or what would make the app better.'
          required
          disabled={status === 'sending'}
        />
      </div>
      <div className='actions'>
        <ChipButton type='submit' disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send request'}
        </ChipButton>
      </div>
      {status === 'success' ? (
        <p className='muted support-form__status'>Thanks — your request was sent.</p>
      ) : null}
      {status === 'error' ? (
        <p className='support-form__status support-form__status--error'>
          Something went wrong. Please try again shortly.
        </p>
      ) : null}
    </form>
  )
}
