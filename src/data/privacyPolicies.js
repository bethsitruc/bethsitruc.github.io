export const privacyPolicies = [
  {
    slug: 'grounded',
    appName: 'Grounded: Affirmation App',
    effectiveDate: 'April 2026',
    intro: 'Grounded: Affirmation App ("we", "our", or "us") respects your privacy.',
    summary:
      'Grounded stores limited app data for affirmations, favorites, and appearance preferences, with optional iCloud sync and Apple Intelligence used only when you choose to generate an affirmation.',
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: [
          'Grounded stores limited information needed to provide the app’s core features. This includes personal affirmations you create, affirmations you mark as favorites, and appearance preferences such as selected theme and font.',
        ],
      },
      {
        title: 'How We Use Information',
        paragraphs: [
          'This information is used only to provide app functionality, including saving your content, displaying your favorites, personalizing the app’s appearance, and keeping your experience consistent across your devices.',
        ],
      },
      {
        title: 'iCloud and CloudKit',
        paragraphs: [
          'If iCloud is enabled on your device, Grounded uses Apple’s iCloud and CloudKit services to sync your personal affirmations, favorites, and appearance preferences across your devices. This data is associated with your Apple account only for synchronization and app functionality.',
        ],
      },
      {
        title: 'Apple Intelligence',
        paragraphs: [
          'Grounded includes an optional affirmation generation feature. Apple Intelligence is only used when you explicitly choose to generate an affirmation while creating one. It is not used automatically in the background.',
        ],
      },
      {
        title: 'Third-Party Services',
        paragraphs: [
          'Grounded retrieves refreshed quote content from ZenQuotes to update the home feed. Grounded does not use your personal affirmations or favorites for advertising or tracking.',
        ],
      },
      {
        title: 'Advertising and Tracking',
        paragraphs: [
          'Grounded does not use your information for targeted advertising, does not sell your personal information, and does not track you across other companies’ apps or websites.',
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
