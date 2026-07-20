export const apps = [
  {
    slug: 'grounded',
    name: 'Grounded: Affirmation App',
    subtitle: 'iOS • Affirmations • Apple Intelligence',
    status: 'Now Available',
    statusTone: 'released',
    image: '/images/apps/Grounded/icon.png',
    imageAlt: 'Grounded app icon',
    imageStyle: 'icon',
    summary:
      'A calm, customizable affirmation app with daily encouragement, favorites, share cards, widget support, and optional Apple Intelligence-assisted drafting.',
    bullets: [
      'Daily affirmations with a clean, lightweight home feed',
      'Apple Intelligence flow for tone- and focus-based drafting',
      'Themes, typography, widgets, and shareable affirmation cards',
    ],
    ctas: [
      {
        label: 'View Details',
        to: '/apps/grounded',
      },
      {
        label: 'Privacy Policy',
        to: '/privacy-policy/grounded',
        variant: 'ghost',
      },
      {
        label: 'View in App Store',
        href: 'https://apps.apple.com/us/app/grounded-affirmation-app/id6760471241',
        external: true,
      },
    ],
    detail: {
      slug: 'grounded',
      title: 'Grounded: Affirmation App',
      subtitle: 'SwiftUI • Apple Intelligence • Habit Design',
      hero: {
        src: '/images/apps/Grounded/icon.png',
        alt: 'Grounded app icon',
        style: 'icon',
      },
      overview: {
        title: 'Overview',
        body: [
          'Grounded is a calm, polished iOS app for daily affirmations that supports both quick encouragement and deeper personalization. The experience includes Apple Intelligence-assisted drafting, favorites, personal affirmations, shareable cards, widget support, and visual customization through themes and typography.',
        ],
      },
      blocks: [
        {
          type: 'calloutRow',
          items: [
            {
              title: 'My Role',
              body: [
                'Designer and developer. I am shaping the interaction design, visual system, SwiftUI implementation, content model, personalization flow, and the Apple Intelligence-assisted affirmation experience.',
              ],
            },
            {
              title: 'Tech Stack',
              list: [
                'Swift, SwiftUI',
                'Apple Foundation Models / Apple Intelligence integration',
                'Local-first data and content management',
                'Widget and share-card support',
                'Xcode toolchain',
              ],
            },
          ],
        },
        {
          type: 'duo',
          items: [
            {
              title: 'Progress So Far',
              list: [
                'Home feed with a featured daily affirmation and supporting cards',
                'Apple Intelligence flow for generating personalized affirmations with focus and tone controls',
                'Favorites, personal affirmations, and editing flows',
                'Theme and typography customization with live preview',
                'Share-card generation and widget support for lightweight daily visibility',
                'Live on the App Store as a free Health & Fitness app for iPhone and iPad',
              ],
            },
            {
              title: 'Challenges',
              body: [
                'The hardest part has been keeping the app emotionally calm while still expanding its feature set. As Apple Intelligence, widgets, personal submissions, theme settings, and sharing tools were added, the challenge became preserving a lightweight, reassuring experience instead of letting the product feel crowded or overly polished.',
              ],
              footer: {
                title: 'Current Focus',
                list: [
                  'Keep the App Store listing, screenshots, and privacy details aligned with shipped features',
                  'Continue refining AI prompt controls and generated-affirmation review flows',
                  'Iterate on the daily home feed, widgets, and share-card experience based on real usage',
                ],
              },
            },
          ],
        },

        {
          type: 'callout',
          items: [
            {
              title: 'Vision',
              body: [
                'A quiet, beautifully designed affirmation app that feels personal rather than generic: something people can open for a grounded daily reset, customize to their own taste, and carry into their day through favorites, widgets, and shareable moments.',
              ],
              cta: {
                label: 'View in App Store',
                href: 'https://apps.apple.com/us/app/grounded-affirmation-app/id6760471241',
                variant: 'ghost',
                external: true,
              },
            },
          ],
        },
        {
          type: 'gallery',
          variant: 'mobile',
          items: [
            {
              src: '/images/apps/Grounded/Home.png',
              alt: 'Grounded home screen with a featured daily affirmation and Apple Intelligence entry point',
              caption: 'Home feed with daily affirmation and AI entry point',
            },
            {
              src: '/images/apps/Grounded/Favorites.png',
              alt: 'Grounded favorites screen showing pinned encouragement cards',
              caption: 'Favorites keeps saved encouragement close at hand',
            },
            {
              src: '/images/apps/Grounded/My Affirmations.png',
              alt: 'Grounded My Affirmations screen showing a user-submitted affirmation',
              caption: 'My Affirmations stores user-written and generated entries',
            },
            {
              src: '/images/apps/Grounded/My Affirmations - Empty.png',
              alt: 'Grounded empty state for My Affirmations before any personal entries have been added',
              caption: 'Empty state guides the first personal affirmation',
            },
            {
              src: '/images/apps/Grounded/Edit Affirmation.png',
              alt: 'Grounded edit affirmation screen with text editing and save and delete actions',
              caption: 'Editing flow for personal affirmations',
            },
            {
              src: '/images/apps/Grounded/Apple Intelligence.png',
              alt: 'Grounded Apple Intelligence prompt screen with focus and tone controls',
              caption: 'Apple Intelligence drafting with focus and tone controls',
            },
            {
              src: '/images/apps/Grounded/Generated Affirmation.png',
              alt: 'Grounded generated affirmation preview showing AI generation details and save options',
              caption: 'Generated affirmation preview before saving',
            },
            {
              src: '/images/apps/Grounded/Share Choice.png',
              alt: 'Grounded share selection screen listing favorite and all affirmations to choose from',
              caption: 'Choose which affirmation to turn into a share card',
            },
            {
              src: '/images/apps/Grounded/Share.png',
              alt: 'Grounded share card editor with app badge toggle and share image button',
              caption: 'Share-card generation for exporting encouragement',
            },
            {
              src: '/images/apps/Grounded/Theme.png',
              alt: 'Grounded appearance screen showing color theme and typography customization options',
              caption: 'Theme and typography customization',
            },
            {
              src: '/images/apps/Grounded/Settings.png',
              alt: 'Grounded settings screen showing refresh options, appearance settings, and widget guidance',
              caption: 'Settings for refresh cadence, appearance, and widgets',
            },
            {
              src: '/images/apps/Grounded/Widgets.png',
              alt: 'iPhone home screen showing Grounded widgets in large and medium sizes',
              caption: 'Widgets extend affirmations to the home screen',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'flashcards-ios',
    name: 'Flashcards for Families',
    subtitle: 'iOS • Parent-Managed Learning • SwiftData',
    status: 'Now Available',
    statusTone: 'released',
    image: '/images/apps/Flashcards/icon.png',
    imageAlt: 'Flashcards for Families app icon',
    imageStyle: 'icon',
    summary:
      'A parent-managed flashcard app for focused early learning practice, with learner profiles, curated decks, custom imports, Kid Mode, and progress tracking.',
    bullets: [
      'Create separate learner profiles and choose focused practice decks for each child',
      'Customize deck subsets and study order for alphabet, numbers, shapes, sight words, phonics, and math facts',
      'Import school lists from typed text, photos, images, or PDFs and hand off a simple Kid Mode experience',
    ],
    ctas: [
      {
        label: 'View Details',
        to: '/apps/flashcards-ios',
      },
      {
        label: 'Privacy Policy',
        to: '/privacy-policy/flashcards-ios',
        variant: 'ghost',
      },
      {
        label: 'View in App Store',
        href: 'https://apps.apple.com/us/app/flashcards-for-families/id6766307410',
        external: true,
      },
    ],
    detail: {
      slug: 'flashcards-ios',
      title: 'Flashcards for Families',
      subtitle: 'SwiftUI • SwiftData • CloudKit • iOS',
      hero: {
        src: '/images/apps/Flashcards/icon.png',
        alt: 'Flashcards for Families app icon',
        style: 'icon',
      },
      overview: {
        title: 'Overview',
        body: [
          'Flashcards for Families is a parent-managed iPhone and iPad app for focused early learning practice. Parents create learner profiles, choose ready-made decks, adjust exactly which cards are included, and hand the device to a child in Kid Mode for a simpler study experience.',
          'The app is built around smaller, intentional practice sets instead of one giant mixed deck. It supports early learning topics like alphabet recognition, numbers, colors, shapes, sight words, phonics, skip counting, and math facts, with ordered or mixed study options depending on the deck.',
        ],
      },
      blocks: [
        {
          type: 'calloutRow',
          items: [
            {
              title: 'My Role',
              body: [
                'Solo designer and developer. I designed the parent and kid workflows, built the SwiftUI interface, modeled local learning data in SwiftData, configured CloudKit sync, created the bundled deck library, and shipped the app to the App Store.',
              ],
            },
            {
              title: 'Tech Stack',
              list: [
                'Swift, SwiftUI, SwiftData',
                'CloudKit-backed persistence',
                'JSON-based deck library with subset rules',
                'Vision and document import flows for school lists',
                'Fastlane snapshot automation for App Store screenshots',
                'Xcode toolchain',
              ],
            },
          ],
        },
        {
          type: 'duo',
          items: [
            {
              title: 'What It Supports',
              list: [
                'Separate learner profiles with per-child decks and progress',
                'Curated preschool, reading, and math decks',
                'Deck subsets for smaller focused practice groups',
                'Ordered or mixed study modes',
                'Kid Mode for a simplified handoff experience',
                'Custom deck creation from typed cards',
                'Photo, image, and PDF import for school lists',
                'Local-first data with optional iCloud sync',
                'Reset option for clearing learning data',
              ],
            },
            {
              title: 'Product Direction',
              body: [
                'The biggest design challenge has been balancing flexibility for parents with simplicity for kids. Parents need enough control to choose the right cards, deck subsets, and study order, while the child-facing mode needs to stay calm, direct, and hard to misconfigure.',
              ],
              footer: {
                title: 'Release Readiness',
                list: [
                  'Live on the App Store as a free Education app for iPhone and iPad',
                  'Privacy policy and App Store metadata are aligned with shipped local-first, parent-managed features',
                  'Current focus is post-release polish, screenshots, and ongoing deck improvements',
                ],
              },
            },
          ],
        },
        {
          type: 'callout',
          items: [
            {
              title: 'Vision',
              body: [
                'A practical, parent-managed learning tool that helps kids practice exactly what they need right now: small sets, clear cards, simple study sessions, and enough flexibility to grow from preschool basics into reading and math facts.',
              ],
              cta: {
                label: 'View in App Store',
                href: 'https://apps.apple.com/us/app/flashcards-for-families/id6766307410',
                variant: 'ghost',
                external: true,
              },
            },
          ],
        },
        {
          type: 'gallery',
          variant: 'mobile',
          items: [
            {
              src: '/images/apps/Flashcards/profiles.png',
              alt: 'Flashcards for Families profile selection screen',
              caption: 'Profiles keep each learner separate',
            },
            {
              src: '/images/apps/Flashcards/library-my-decks.png',
              alt: 'Flashcards for Families library and My Decks view',
              caption: 'Parents choose and manage focused decks',
            },
            {
              src: '/images/apps/Flashcards/kid-mode.png',
              alt: 'Flashcards for Families Kid Mode setup screen',
              caption: 'Kid Mode checks that cards are ready before handoff',
            },
            {
              src: '/images/apps/Flashcards/kid-home.png',
              alt: 'Flashcards for Families child home screen',
              caption: 'A simple study home tailored to the learner',
            },
            {
              src: '/images/apps/Flashcards/study-card.png',
              alt: 'Flashcards for Families study card screen',
              caption: 'Clear flashcard practice with front and back cards',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'until-friday',
    name: 'Until Friday',
    subtitle: 'iOS • Budget Buckets • Family Sharing',
    status: 'In Progress',
    statusTone: 'progress',
    image: '/images/apps/UntilFriday/icon.png',
    imageAlt: 'Until Friday app icon',
    imageStyle: 'icon',
    summary:
      'A SwiftUI budgeting app for tracking flexible spending buckets until the next refill, with spend logging, trends, widgets, low-balance alerts, and optional iCloud family sharing.',
    bullets: [
      'Create budget buckets with weekly, biweekly, monthly, or custom refill cadences',
      'Log spending, edit entries, undo deletes, and see what is left until the next refill',
      'Track trends, surface widget snapshots, and share a household budget through iCloud',
    ],
    ctas: [
      {
        label: 'View Details',
        to: '/apps/until-friday',
      },
      {
        label: 'Privacy Policy',
        to: '/privacy-policy/until-friday',
        variant: 'ghost',
      },
      {
        label: 'Request Preview',
        to: '/contact?subject=Until%20Friday%20Preview',
      },
    ],
    detail: {
      slug: 'until-friday',
      title: 'Until Friday',
      subtitle: 'SwiftUI • SwiftData • CloudKit • Budgeting',
      hero: {
        src: '/images/apps/UntilFriday/icon.png',
        alt: 'Until Friday app icon',
        style: 'icon',
      },
      overview: {
        title: 'Overview',
        body: [
          'Until Friday is a practical iOS budgeting app built around spending buckets that refill on a schedule. Instead of treating budgets as static monthly categories, the app focuses on the short-term question that comes up in real life: how much is left until the next refill?',
          'The app supports custom buckets, refill cadences, spend history, trend comparisons, low-balance alerts, widget snapshots, and an iCloud-backed family sharing flow for household budgets.',
        ],
      },
      blocks: [
        {
          type: 'calloutRow',
          items: [
            {
              title: 'My Role',
              body: [
                'Solo designer and developer. I am defining the product model, SwiftUI interface, SwiftData persistence, CloudKit sharing flow, notification behavior, widget snapshot logic, and the app icon and visual direction.',
              ],
            },
            {
              title: 'Tech Stack',
              list: [
                'Swift, SwiftUI, SwiftData',
                'CloudKit sharing for household budget records',
                'UserNotifications for low-balance alerts',
                'Widget snapshot data for lightweight home-screen visibility',
                'Xcode toolchain',
              ],
            },
          ],
        },
        {
          type: 'duo',
          items: [
            {
              title: 'What It Supports',
              list: [
                'Budget buckets with weekly, biweekly, monthly, and custom refill schedules',
                'Optional rollover for bucket balances between refill periods',
                'Spend logging with edit, delete, and undo flows',
                'Per-bucket detail views showing remaining amount, refill timing, and period spending',
                'Trend comparisons across refills and months',
                'Low-balance alerts for buckets at or below a configured threshold',
                'iCloud family sharing so another Apple ID can join the same household budget records',
              ],
            },
            {
              title: 'Product Direction',
              body: [
                'The main design challenge is making budgeting feel immediate instead of administrative. The app keeps the interface centered on remaining money, refill timing, and simple logging, while still supporting harder behind-the-scenes needs like shared records, recurring budget periods, and trend comparison.',
              ],
              footer: {
                title: 'Current Focus',
                list: [
                  'Polish the bucket setup and logging flow for quick daily use',
                  'Validate family sharing and CloudKit sync behavior across devices',
                  'Refine widget, notification, and trend surfaces before broader testing',
                ],
              },
            },
          ],
        },
        {
          type: 'callout',
          items: [
            {
              title: 'Vision',
              body: [
                'A low-friction budget companion for people who think in payday cycles, grocery runs, dinners out, and household spending limits: clear enough to open in seconds, flexible enough to match real refill rhythms, and shareable when more than one person is spending from the same buckets.',
              ],
              cta: {
                label: 'Request Preview',
                href: '/contact?subject=Until%20Friday%20Preview',
              },
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'friendly-competitions',
    name: 'Friendly Competitions',
    subtitle: 'iOS • Offline-first • Event Scoring',
    status: 'In Progress',
    statusTone: 'progress',
    image: '/images/apps/FriendlyCompetitions/icon.png',
    imageAlt: 'Friendly Competitions app icon',
    imageStyle: 'icon',
    summary:
      'An offline-first iOS app for hosting lighthearted competitions, collecting votes, and settling the friendly debate with clear standings.',
    bullets: [
      'Create events with unlimited entries, default or custom categories, and configurable medal points',
      'Supports pass-the-phone judging and invite-code judging on the same device',
      'Shows participation, standings, ties, and shareable results in one polished flow',
    ],
    ctas: [
      {
        label: 'View Details',
        to: '/apps/friendly-competitions',
      },
      {
        label: 'Privacy Policy',
        to: '/privacy-policy/friendly-competitions',
        variant: 'ghost',
      },
      {
        label: 'Request Preview',
        to: '/contact?subject=Friendly%20Competitions%20Preview',
      },
    ],
    detail: {
      slug: 'friendly-competitions',
      title: 'Friendly Competitions',
      subtitle: 'SwiftUI • SwiftData • Offline-first Scoring',
      hero: {
        src: '/images/apps/FriendlyCompetitions/icon.png',
        alt: 'Friendly Competitions app icon',
        style: 'icon',
      },
      overview: {
        title: 'Overview',
        body: [
          'Friendly Competitions is an offline-first iOS app for hosting lighthearted contests and collecting everyone’s favorites without turning the experience into spreadsheet work. It helps a host set up an event, define entries and categories, collect votes, and view clear standings on the same device.',
        ],
      },
      blocks: [
        {
          type: 'calloutRow',
          items: [
            {
              title: 'My Role',
              body: [
                'Designer and developer. I am shaping the event flow, SwiftUI interface, scoring model, local persistence, and the host and judge experiences for a product that needs to feel simple under real-world pressure.',
              ],
            },
            {
              title: 'Tech Stack',
              list: [
                'Swift, SwiftUI, SwiftData',
                'Offline-first local persistence',
                'Scoring and tie-resolution logic',
                'Share and export helpers for recaps and results',
                'Xcode toolchain',
              ],
            },
          ],
        },
        {
          type: 'duo',
          items: [
            {
              title: 'Progress So Far',
              list: [
                'Competition creation with unlimited entries',
                'Default categories plus custom category support',
                'Configurable Gold, Silver, and Bronze points per category',
                'Pass-the-phone and invite-code judging modes on one device',
                'Participation tracking, standings, category winners, overall winners, and tie handling',
              ],
            },
            {
              title: 'Challenges',
              body: [
                'The product has to stay playful and fast while still handling real scoring complexity. The hard part is making setup, voting, lock/finalize states, and result interpretation feel obvious for casual users without oversimplifying the underlying rules.',
              ],
              footer: {
                title: 'Next Steps',
                list: [
                  'Refine the host dashboard and judge handoff flow',
                  'Add stronger export and recap options for finished events',
                  'Polish the visual system and capture screenshots for the portfolio page',
                ],
              },
            },
          ],
        },
        {
          type: 'gallery',
          variant: 'mobile',
          items: [
            {
              src: '/images/apps/FriendlyCompetitions/screenshots/iphone-home.png',
              alt: 'Friendly Competitions iPhone home screen showing event setup and recent competitions',
              caption: 'Start and manage competitions from the home screen',
            },
            {
              src: '/images/apps/FriendlyCompetitions/screenshots/iphone-host-dashboard.png',
              alt: 'Friendly Competitions iPhone host dashboard showing competition progress',
              caption: 'Host dashboard keeps entries, judging, and results organized',
            },
            {
              src: '/images/apps/FriendlyCompetitions/screenshots/iphone-vote.png',
              alt: 'Friendly Competitions iPhone voting screen for ranking entries',
              caption: 'Simple voting flow for choosing winners by category',
            },
            {
              src: '/images/apps/FriendlyCompetitions/screenshots/iphone-standings.png',
              alt: 'Friendly Competitions iPhone standings screen with ranked results',
              caption: 'Standings make overall and category results easy to scan',
            },
            {
              src: '/images/apps/FriendlyCompetitions/screenshots/iphone-share-results.png',
              alt: 'Friendly Competitions iPhone share results screen',
              caption: 'Share polished results after a competition wraps',
            },
          ],
        },
        {
          type: 'callout',
          items: [
            {
              title: 'Vision',
              body: [
                'A joyful utility for bake-offs, classroom contests, family voting, or team events: structured enough to keep scoring fair, but light enough that the event still feels social and fun.',
              ],
              cta: {
                label: 'Request Preview',
                href: '/contact?subject=Friendly%20Competitions%20Preview',
              },
            },
          ],
        },
      ],
    },
  },
]

export const appsBySlug = Object.fromEntries(apps.map(app => [app.slug, app]))
