import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ChipLink from '../components/ChipLink'
import SupportRequestForm from '../components/SupportRequestForm'
import { appsBySlug } from '../data/apps'
import { appSupport } from '../data/appSupport'

export default function AppSupportPage() {
  const { slug } = useParams()
  const app = appsBySlug[slug]
  const support = appSupport[slug]

  if (!app || !support) {
    return (
      <main>
        <section className='section-block'>
          <div className='section-inner privacy-policy-header'>
            <h1>Support Page Not Found</h1>
            <ChipLink to='/apps'>View all apps</ChipLink>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className='section-block'>
        <div className='section-inner privacy-policy-header'>
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Apps', to: '/apps' },
              { label: `${app.name} Support` },
            ]}
          />
          <p className='privacy-policy-kicker'>App Support</p>
          <h1>{app.name}</h1>
          <p className='muted'>{support.intro}</p>
          <p className='privacy-policy-backlink'>
            <ChipLink to={`/privacy-policy/${app.slug}`} variant='ghost'>
              View privacy policy
            </ChipLink>
          </p>
        </div>
      </section>

      <section className='section-block'>
        <div className='section-inner support-page__content'>
          <div className='support-page__faq' aria-label={`${app.name} frequently asked questions`}>
            {support.questions.map(question => (
              <article
                className='privacy-policy-card privacy-policy-card--summary'
                key={question.title}
              >
                <div className='privacy-policy-summary'>
                  <h2>{question.title}</h2>
                  <p>{question.body}</p>
                </div>
              </article>
            ))}
          </div>

          <article className='privacy-policy-card support-request-card'>
            <div className='privacy-policy-summary'>
              <p className='privacy-policy-kicker'>Contact Support</p>
              <h2>Issues, feedback, and feature ideas</h2>
              <p>
                Report a problem, share feedback, or suggest something you would like to see in{' '}
                {app.name}.
              </p>
            </div>
            <SupportRequestForm appName={app.name} />
          </article>
        </div>
      </section>
    </main>
  )
}
