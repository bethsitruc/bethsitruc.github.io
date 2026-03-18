export const privacyPolicies = [
  {
    slug: 'grounded',
    appName: 'Grounded: Affirmation App',
    effectiveDate: 'March 2026',
    intro: 'Grounded: Affirmation App ("we", "our", or "us") respects your privacy.',
    summary:
      'A simple, device-only privacy policy for Grounded, which stores affirmations and preferences locally and does not transmit personal data.',
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: [
          'We do not collect, store, or share any personal information.',
          'All data, including saved affirmations and preferences, is stored locally on your device and is not transmitted to any external servers.',
        ],
      },
      {
        title: 'Third-Party Services',
        paragraphs: [
          'This app does not use third-party analytics, tracking, or advertising services.',
        ],
      },
      {
        title: 'Data Security',
        paragraphs: [
          'Because no personal data is collected or transmitted, your information remains private on your device.',
        ],
      },
      {
        title: 'Children’s Privacy',
        paragraphs: [
          'Grounded does not knowingly collect any personal information from children.',
        ],
      },
      {
        title: 'Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Any changes will be reflected on this page.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'If you have any questions about this Privacy Policy, you can contact us at:',
        ],
      },
    ],
    contactEmail: 'bethanycurtis.builds@gmail.com',
  },
  {
    slug: 'flashcards-ios',
    appName: 'Flashcards iOS App',
    effectiveDate: 'March 2026',
    intro: 'Flashcards iOS App ("we", "our", or "us") respects your privacy.',
    summary:
      'A draft app-specific privacy policy for Flashcards iOS App, assuming learner profiles, deck preferences, and study settings remain stored only on device.',
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: [
          'We do not collect, store, or share any personal information.',
          'All data, including learner profiles, saved decks, progress preferences, and app settings, is stored locally on your device and is not transmitted to any external servers.',
        ],
      },
      {
        title: 'Third-Party Services',
        paragraphs: [
          'This app does not use third-party analytics, tracking, advertising, or external data-processing services.',
        ],
      },
      {
        title: 'Data Security',
        paragraphs: [
          'Because no personal data is collected or transmitted, your information remains private on your device.',
        ],
      },
      {
        title: 'Children’s Privacy',
        paragraphs: [
          'Flashcards iOS App is designed for family use and does not knowingly collect any personal information from children.',
        ],
      },
      {
        title: 'Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Any changes will be reflected on this page.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'If you have any questions about this Privacy Policy, you can contact us at:',
        ],
      },
    ],
    contactEmail: 'bethanycurtis.builds@gmail.com',
  },
]

export const privacyPoliciesBySlug = Object.fromEntries(
  privacyPolicies.map((policy) => [policy.slug, policy])
)
