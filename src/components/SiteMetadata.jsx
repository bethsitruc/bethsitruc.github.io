import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { appsBySlug } from '../data/apps'
import { privacyPoliciesBySlug } from '../data/privacyPolicies'

const SITE_NAME = 'Bethany Curtis'
const DEFAULT_TITLE = 'Bethany Curtis — Building Engineers, Teams, and Tools That Thrive'
const DEFAULT_DESCRIPTION =
  'I bring structure, empathy, and technical strategy to every team and tool I build. Case studies in enablement leadership and thoughtful apps.'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
}

function getMetadata(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const slug = segments[1]
  const app = appsBySlug[slug]

  if (segments[0] === 'apps' && app) {
    return {
      title: `${app.name} — iOS App | ${SITE_NAME}`,
      description: app.summary,
      image: app.image,
    }
  }

  if (segments[0] === 'support' && app) {
    return {
      title: `${app.name} Support | ${SITE_NAME}`,
      description: `Help, frequently asked questions, privacy information, and contact options for ${app.name}.`,
      image: app.image,
    }
  }

  const policy = privacyPoliciesBySlug[slug]
  if (segments[0] === 'privacy-policy' && policy) {
    return {
      title: `${policy.appName} Privacy Policy | ${SITE_NAME}`,
      description: policy.summary,
      image: appsBySlug[slug]?.image,
    }
  }

  const pages = {
    '/apps': [
      'Apps | Bethany Curtis',
      'Released iOS apps designed and built by Bethany Curtis, with App Store links, support resources, and product details.',
    ],
    '/about': [
      'About | Bethany Curtis',
      'Engineering leadership, developer enablement, product work, and experience from Bethany Curtis.',
    ],
    '/contact': [
      'Contact | Bethany Curtis',
      'Contact Bethany Curtis about apps, software, teams, and thoughtful tooling.',
    ],
    '/case-studies': [
      'Case Studies | Bethany Curtis',
      'Case studies in engineering enablement, developer experience, and product design.',
    ],
    '/privacy-policy': [
      'App Privacy Policies | Bethany Curtis',
      'Privacy policies for apps designed and developed by Bethany Curtis.',
    ],
  }

  const [title, description] = pages[pathname] || [DEFAULT_TITLE, DEFAULT_DESCRIPTION]
  return { title, description }
}

export default function SiteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getMetadata(pathname)
    const origin = window.location.origin
    const url = new URL(pathname, origin).href
    const image = new URL(metadata.image || '/images/headshot.jpeg', origin).href

    document.title = metadata.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', metadata.description)
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: metadata.title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [pathname])

  return null
}
