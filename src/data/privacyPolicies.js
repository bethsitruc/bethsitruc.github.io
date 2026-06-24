export const privacyPolicies = [
  {
    slug: 'grounded',
    appName: 'Grounded: Affirmation App',
    effectiveDate: 'June 2026',
    intro: 'Grounded: Affirmation App ("we", "our", or "us") respects your privacy.',
    summary:
      'The developer does not collect personal data from Grounded. The app stores affirmations, favorites, and appearance preferences on your device, with optional iCloud sync and Apple Intelligence used only when you choose to generate an affirmation.',
    sections: [
      {
        title: 'Data the Developer Collects',
        paragraphs: [
          'The developer does not collect, receive, sell, rent, or share personal data from Grounded.',
        ],
      },
      {
        title: 'Information Stored in the App',
        paragraphs: [
          'Grounded stores limited information on your device to provide the app’s core features. This includes personal affirmations you create, affirmations you mark as favorites, and appearance preferences such as selected theme and font.',
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
          'If iCloud is enabled on your device, Grounded uses Apple’s iCloud and CloudKit services to sync your personal affirmations, favorites, and appearance preferences across your devices. The developer does not operate iCloud and does not receive or access your iCloud-synced Grounded data.',
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
          'Grounded may retrieve refreshed quote content from ZenQuotes to update the home feed. Grounded does not send your personal affirmations, favorites, or appearance preferences to ZenQuotes, and does not use your information for advertising or tracking.',
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
        paragraphs: ['If you have any questions about this Privacy Policy, you can contact us at:'],
      },
    ],
    contactEmail: 'bethanycurtis.builds@gmail.com',
  },
  {
    slug: 'flashcards-ios',
    appName: 'Family Flashcards',
    effectiveDate: 'June 2026',
    intro: 'Family Flashcards ("we", "our", or "us") respects your privacy.',
    summary:
      'Family Flashcards is a parent-managed learning app that stores study data locally on your device and can optionally sync that data through your personal iCloud account.',
    sections: [
      {
        title: 'Data the Developer Collects',
        paragraphs: [
          'The developer does not collect, receive, sell, rent, or share personal data from Family Flashcards.',
        ],
        list: [
          'advertising',
          'tracking',
          'analytics SDKs',
          'third-party data brokers',
          'developer-operated accounts',
          'developer-operated servers',
          'push notifications',
        ],
      },
      {
        title: 'Information Stored in the App',
        paragraphs: ['Family Flashcards may store the following information on your device:'],
        list: [
          'learner profiles',
          'selected and installed decks',
          'custom flashcards',
          'imported school-list text',
          'study progress',
          'app preferences',
        ],
      },
      {
        title: 'How We Use Information',
        paragraphs: ['This information is used only to provide the app’s learning features.'],
      },
      {
        title: 'iCloud Sync',
        paragraphs: [
          'If iCloud is enabled for Family Flashcards, app data may sync through Apple’s iCloud and CloudKit service to other devices signed in to the same Apple ID.',
          'The developer does not operate the iCloud service and does not receive or access your iCloud-synced Family Flashcards data. iCloud data is handled by Apple according to Apple’s privacy practices and your iCloud settings.',
        ],
      },
      {
        title: 'Camera, Photos, Images, and PDFs',
        paragraphs: [
          'Family Flashcards can help parents create custom decks from school lists, worksheets, photos, images, or PDFs.',
          'If you choose to use these features, the app may request access to the camera, selected photos, or selected files. These items are used to create flashcards in the app. The developer does not receive copies of your photos, images, PDFs, imported text, or custom flashcards.',
        ],
      },
      {
        title: 'Children’s Privacy',
        paragraphs: [
          'Family Flashcards is intended to be configured by parents or guardians and then used by children for supervised study.',
          'The developer does not knowingly collect personal information from children through Family Flashcards.',
        ],
      },
      {
        title: 'Deleting Data',
        paragraphs: [
          'You can delete learner profiles and decks inside the app. Family Flashcards also includes a reset option that deletes local app data, including learner profiles, custom decks, installed decks, and progress.',
          'If iCloud sync is enabled, deletions may sync to other devices signed in to the same iCloud account.',
        ],
      },
      {
        title: 'Changes to This Policy',
        paragraphs: [
          'This privacy policy may be updated from time to time. Updates will be posted on this page with a new effective date.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: ['If you have any questions about this Privacy Policy, you can contact us at:'],
      },
    ],
    contactEmail: 'bethanycurtis.builds@gmail.com',
  },
]

export const privacyPoliciesBySlug = Object.fromEntries(
  privacyPolicies.map(policy => [policy.slug, policy])
)
