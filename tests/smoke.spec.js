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

  test('app cards expose expected app and privacy destinations', async ({ page }) => {
    await page.goto('/apps')

    await expect(page.getByRole('link', { name: 'View in App Store' }).first()).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/grounded-affirmation-app/id6760471241'
    )
    await expect(page.getByRole('link', { name: 'Privacy Policy' }).first()).toHaveAttribute(
      'href',
      '/privacy-policy/grounded'
    )
    await expect(page.getByRole('link', { name: 'Privacy Policy' }).nth(1)).toHaveAttribute(
      'href',
      '/privacy-policy/flashcards-ios'
    )
    await expect(page.getByRole('link', { name: 'View in App Store' }).nth(1)).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/flashcards-for-families/id6766307410'
    )
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
})
