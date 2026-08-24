import { expect, test } from '@playwright/test'

const routes = [
  {
    path: '/',
    text: ['Bethany Curtis', 'Apps'],
  },
  {
    path: '/apps',
    text: [
      'Apps',
      'Grounded: Affirmation App',
      'Flashcards for Families',
      'Until Friday',
      'Friendly Competitions',
    ],
  },
  {
    path: '/apps/grounded',
    text: ['Grounded: Affirmation App', 'View in App Store', 'Current Focus'],
  },
  {
    path: '/apps/flashcards-ios',
    text: ['Flashcards for Families', 'Kid Mode', 'Release Readiness'],
  },
  {
    path: '/apps/until-friday',
    text: ['Until Friday', 'TestFlight', 'Monthly trends'],
  },
  {
    path: '/apps/friendly-competitions',
    text: ['Friendly Competitions', 'TestFlight', 'Share polished results'],
  },
  {
    path: '/support/until-friday',
    text: ['Until Friday', 'App Support', 'How do I join the TestFlight?'],
  },
  {
    path: '/support/friendly-competitions',
    text: ['Friendly Competitions', 'App Support', 'Does judging require an account?'],
  },
  {
    path: '/privacy-policy',
    text: ['Privacy Policies', 'Grounded: Affirmation App', 'Flashcards for Families'],
  },
  {
    path: '/privacy-policy/grounded',
    text: ['Privacy Policy', 'Grounded: Affirmation App', 'Data the Developer Collects'],
  },
  {
    path: '/privacy-policy/flashcards-ios',
    text: ['Privacy Policy', 'Flashcards for Families', 'Children’s Privacy'],
  },
]

test.describe('site smoke', () => {
  for (const route of routes) {
    test(`${route.path} renders expected content`, async ({ page }) => {
      await page.goto(route.path)

      await expect(page.locator('main')).toBeVisible()
      await expect(page.locator('body')).not.toBeEmpty()

      for (const text of route.text) {
        await expect(page.getByText(text, { exact: false }).first()).toBeVisible()
      }
    })
  }

  test('app cards expose expected app and support destinations', async ({ page }) => {
    await page.goto('/apps')

    await expect(page.getByRole('link', { name: 'View in App Store' }).first()).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/grounded-affirmation-app/id6760471241'
    )
    await expect(page.getByRole('link', { name: 'Support' }).first()).toHaveAttribute(
      'href',
      '/support/grounded'
    )
    await expect(page.getByRole('link', { name: 'Support' }).nth(1)).toHaveAttribute(
      'href',
      '/support/flashcards-ios'
    )
    await expect(page.getByRole('link', { name: 'View in App Store' }).nth(1)).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/flashcards-for-families/id6766307410'
    )
    await expect(
      page.locator('.app-card', { hasText: 'Until Friday' }).getByRole('link', { name: 'Support' })
    ).toHaveAttribute('href', '/support/until-friday')
  })

  test('app routes set specific page and social metadata', async ({ page }) => {
    await page.goto('/apps/until-friday')

    await expect(page).toHaveTitle('Until Friday — iOS App | Bethany Curtis')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'http://127.0.0.1:4173/apps/until-friday'
    )
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'http://127.0.0.1:4173/images/apps/UntilFriday/icon.png'
    )
  })

  test('app details link to a focused support request form', async ({ page }) => {
    await page.goto('/apps/until-friday')
    await page.getByRole('link', { name: 'Visit app support' }).click()

    await expect(page).toHaveURL('/support/until-friday')
    await expect(page.getByLabel('What would you like to share?')).toHaveValue('Issue')
    await expect(page.getByLabel('Details')).toBeVisible()
    await expect(page.getByRole('option', { name: 'Share feedback' })).toHaveCount(1)
    await expect(page.getByRole('option', { name: 'Request a feature' })).toHaveCount(1)
  })

  test('homepage app carousel exposes dot navigation', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('.apps-carousel')).toBeVisible()
    await expect(
      page.getByRole('button', { name: 'View Grounded: Affirmation App' })
    ).toHaveAttribute('aria-current', 'true')
    await page.getByRole('button', { name: 'View Flashcards for Families' }).click()
    await expect(
      page.getByRole('button', { name: 'View Flashcards for Families' })
    ).toHaveAttribute('aria-current', 'true')
  })

  test('contact message is populated from the URL', async ({ page }) => {
    await page.goto(
      '/contact?message=I%27m%20interested%20in%20TestFlight%20access%20for%20Until%20Friday.'
    )

    await expect(page.getByLabel('Message')).toHaveValue(
      "I'm interested in TestFlight access for Until Friday."
    )
  })

  test('app detail navigation resets the page to the top', async ({ page }) => {
    await page.goto('/apps')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page
      .locator('.app-card', { hasText: 'Until Friday' })
      .getByRole('link', { name: 'View Details' })
      .click()

    await expect(page).toHaveURL('/apps/until-friday')
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
  })
})
