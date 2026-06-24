import { expect, test } from '@playwright/test'

const routes = [
  {
    path: '/',
    text: ['Bethany Curtis', 'Apps'],
  },
  {
    path: '/apps',
    text: ['Apps', 'Grounded: Affirmation App', 'Family Flashcards', 'Friendly Competitions'],
  },
  {
    path: '/apps/grounded',
    text: ['Grounded: Affirmation App', 'View in App Store', 'Current Focus'],
  },
  {
    path: '/apps/flashcards-ios',
    text: ['Family Flashcards', 'Kid Mode', 'Release Readiness'],
  },
  {
    path: '/privacy-policy',
    text: ['Privacy Policies', 'Grounded: Affirmation App', 'Family Flashcards'],
  },
  {
    path: '/privacy-policy/grounded',
    text: ['Privacy Policy', 'Grounded: Affirmation App', 'Data the Developer Collects'],
  },
  {
    path: '/privacy-policy/flashcards-ios',
    text: ['Privacy Policy', 'Family Flashcards', 'Children’s Privacy'],
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

    await expect(page.getByRole('link', { name: 'View in App Store' })).toHaveAttribute(
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
  })
})
