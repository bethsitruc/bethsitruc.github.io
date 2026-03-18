export const apps = [
  {
    slug: 'grounded',
    name: 'Grounded',
    subtitle: 'iOS • Affirmations • Apple Intelligence',
    status: 'Launching Soon',
    statusTone: 'launching',
    image: '/images/affirm.png',
    imageAlt: 'Grounded affirmation app screens',
    summary:
      'A calm, customizable affirmation app with Apple Intelligence-assisted drafting, favorites, share cards, and widget support.',
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
        label: 'View on GitHub',
        href: 'https://github.com/bethsitruc/AffirmationApp',
        external: true,
      },
    ],
    detail: {
      slug: 'grounded',
      title: 'Grounded',
      subtitle: 'SwiftUI • Apple Intelligence • Habit Design',
      hero: {
        src: '/images/affirm.png',
        alt: 'Grounded app screens showing daily affirmation and favorites',
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
              ],
            },
            {
              title: 'Challenges',
              body: [
                'The hardest part has been keeping the app emotionally calm while still expanding its feature set. As Apple Intelligence, widgets, personal submissions, theme settings, and sharing tools were added, the challenge became preserving a lightweight, reassuring experience instead of letting the product feel crowded or overly polished.',
              ],
              footer: {
                title: 'Next Steps',
                list: [
                  'Continue refining AI prompt controls and generated-affirmation review flows',
                  'Polish onboarding and release-readiness details for launch',
                  'Prepare App Store assets and final launch messaging',
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
                label: 'View on GitHub',
                href: 'https://github.com/bethsitruc/AffirmationApp',
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
    name: 'Flashcards',
    subtitle: 'iOS • Education • SwiftData',
    status: 'In Progress',
    statusTone: 'progress',
    image: '/images/flashcards.png',
    imageAlt: 'Flashcards iOS app screens',
    summary:
      'A family-first study app built for kids, with learner profiles, customizable decks, and a tactile, flexible study flow.',
    bullets: [
      'Multiple profiles, avatars, and learner-specific deck filtering',
      'Custom study flows backed by SwiftData and bundled JSON decks',
      'Designed to grow from early learning through more advanced practice',
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
        label: 'Request Demo',
        to: '/contact?subject=Flashcards%20App%20Demo%20Request',
      },
    ],
    detail: {
      slug: 'flashcards-ios',
      title: 'Flashcards',
      subtitle: 'SwiftUI • SwiftData • iOS',
      hero: {
        src: '/images/flashcards.png',
        alt: 'Flashcards iOS app screens',
      },
      overview: {
        title: 'Overview',
        body: [
          'I’m building a family-first study app for my kids: playful enough to keep them engaged, structured enough to grow with their learning. The app supports multiple profiles, custom decks, and a tactile study flow designed for letters, numbers, colors, and sight words.',
        ],
      },
      blocks: [
        {
          type: 'calloutRow',
          items: [
            {
              title: 'My Role',
              body: [
                'Solo designer and developer. Handling everything from data modeling to UI design, integrating SwiftUI and SwiftData end-to-end, and shaping features for both kids and parents.',
              ],
            },
            {
              title: 'Tech Stack',
              list: [
                'Swift, SwiftUI, SwiftData',
                'JSON-based deck library',
                'Asset management for images and SF Symbols',
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
                'Core data model with SwiftData',
                'Profile system with avatars and color themes',
                'Installed decks filtered by child profile',
                'Customizable study mode with front/back card flow',
                'Bundled JSON deck library',
              ],
            },
            {
              title: 'Challenges',
              body: [
                'Splitting large SwiftUI views into smaller components to improve compile times and satisfy the type checker. Added logging to trace study card flow, which surfaced bugs early.',
              ],
              footer: {
                title: 'Next Steps',
                list: [
                  'Add study statistics and progress tracking',
                  'Build richer deck library UI with subset selection',
                  'Create editing tools for parents to customize decks',
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
                'A kid-friendly flashcards app that grows with learners, from ABCs to math facts, while giving parents flexible tools to adapt content as their children advance.',
              ],
              cta: {
                label: 'Request Demo',
                href: '/contact?subject=Flashcards%20App%20Demo%20Request',
              },
            },
          ],
        },
        {
          type: 'gallery',
          variant: 'mobile',
          items: [
            {
              src: '/images/case-studies/FCCaseStudyLibrary.png',
              alt: 'Flashcards app library overview',
              caption: 'Library home with skill-based categories',
            },
            {
              src: '/images/case-studies/FCCaseStudyLibraryDrilldown.png',
              alt: 'Flashcards app library drilldown screen',
              caption: 'Category drilldown and deck preview',
            },
            {
              src: '/images/case-studies/FCCaseStudyLibraryGrade.png',
              alt: 'Flashcards library grade-level interface',
              caption: 'Library home with grade-level categories',
            },
            {
              src: '/images/case-studies/FCCaseStudyProfile.png',
              alt: 'Flashcards app profile customization screen',
              caption: 'Profile customized for each learner',
            },
            {
              src: '/images/case-studies/FCCaseStudySettings.png',
              alt: 'Flashcards app settings page',
              caption: 'Settings page for profile and deck management',
            },
          ],
        },
      ],
    },
  },
]

export const appsBySlug = Object.fromEntries(apps.map((app) => [app.slug, app]))
