import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ChipLink from '../components/ChipLink'
import { privacyPolicies, privacyPoliciesBySlug } from '../data/privacyPolicies'

export default function PrivacyPolicyPage() {
  const { slug } = useParams()

  if (!slug) {
    return (
      <main>
        <section className='section-block'>
          <div className='section-inner privacy-policy-header'>
            <p className='privacy-policy-kicker'>App Privacy</p>
            <h1>Privacy Policies</h1>
            <p className='muted'>
              Each app should have a policy that matches its actual data behavior. These pages
              live here so future app releases only require a new data entry, not a new page
              build.
            </p>
          </div>
        </section>

        <section className='section-block'>
          <div className='section-inner privacy-policy-list'>
            {privacyPolicies.map((policy) => (
              <article key={policy.slug} className='privacy-policy-card privacy-policy-card--summary'>
                <div className='privacy-policy-summary'>
                  <p className='privacy-policy-kicker'>{policy.appName}</p>
                  <h2>{policy.appName}</h2>
                  <p className='muted'>Effective Date: {policy.effectiveDate}</p>
                  <p>{policy.summary}</p>
                </div>
                <div className='card-actions'>
                  <ChipLink to={`/privacy-policy/${policy.slug}`}>Read policy</ChipLink>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    )
  }

  const policy = privacyPoliciesBySlug[slug]

  if (!policy) {
    return (
      <main>
        <section className='section-block'>
          <div className='section-inner privacy-policy-header'>
            <p className='privacy-policy-kicker'>App Privacy</p>
            <h1>Privacy Policy Not Found</h1>
            <p className='muted'>
              That policy page does not exist yet. You can return to the privacy policy index
              to see the apps currently published here.
            </p>
            <div className='card-actions'>
              <ChipLink to='/privacy-policy'>View all privacy policies</ChipLink>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className='section-block'>
        <div className='section-inner privacy-policy-header'>
          <p className='privacy-policy-kicker'>{policy.appName}</p>
          <h1>Privacy Policy</h1>
          <p className='muted'>Effective Date: {policy.effectiveDate}</p>
          <p className='privacy-policy-backlink'>
            <Link to='/privacy-policy'>All privacy policies</Link>
          </p>
        </div>
      </section>

      <section className='section-block'>
        <div className='section-inner'>
          <article className='privacy-policy-card'>
            <p>{policy.intro}</p>

            {policy.sections.map((section) => (
              <section key={section.title} className='privacy-policy-section'>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                ) : null}
                {section.title === 'Contact' ? (
                  <p>
                    <a href={`mailto:${policy.contactEmail}`}>{policy.contactEmail}</a>
                  </p>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  )
}
