export const caseStudies = [
  {
    slug: 'github-engineering-onboarding',
    title: 'GitHub Engineering Onboarding',
    subtitle: 'Program Management • Curriculum Design • Automation',
    summary:
      'Scaled and streamlined global onboarding with automated labs, updated curriculum, and consistent, accessible resources.',
  },
  {
    slug: 'jeemes-akers-website',
    title: 'JeemesAkers.com Website Rebuild',
    subtitle: 'React • Vite • Markdown Publishing',
    summary:
      'Rebuilt an author’s website in React with a Markdown publishing system for a faster, writing-first experience.',
  },
]

export const caseStudyDetails = {
  'affirmation-app': {
    slug: 'affirmation-app',
    title: 'Affirmation App (iOS)',
    subtitle: 'SwiftUI • Apple Intelligence • Habit Design',
    hero: {
      src: '/images/affirm.png',
      alt: 'Affirmation app daily card and saved affirmations screens',
    },
    overview: {
      title: 'Overview',
      body: [
        'I’m building a calm, polished iOS app for daily affirmations that supports both quick encouragement and deeper personalization. The experience now includes Apple Intelligence-assisted drafting, favorites, personal affirmations, shareable cards, widget support, and visual customization through themes and typography.',
      ],
    },
    blocks: [
      {
        type: 'calloutRow',
        items: [
          {
            title: 'My Role',
            body: [
              'Designer and developer. I am shaping the interaction design, visual system, SwiftUI implementation, content model, personalization flow, and the new Apple Intelligence-assisted affirmation experience.',
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
              'The hardest part has been keeping the app emotionally calm while still expanding its feature set. As Apple Intelligence, widgets, personal submissions, theme settings, and sharing tools were added, the challenge became preserving a lightweight, reassuring experience instead of letting the product feel crowded or overly “wellness app” polished.',
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
  'flashcards-ios': {
    slug: 'flashcards-ios',
    title: 'Flashcards iOS App',
    subtitle: 'SwiftUI • SwiftData • iOS',
    hero: {
      src: '/images/flashcards.png',
      alt: 'Flashcards iOS app screens',
    },
    overview: {
      title: 'Overview',
      body: [
        'I’m building a family-first study app for my kids — playful enough to keep them engaged, structured enough to grow with their learning. The app supports multiple profiles, custom decks, and a tactile study flow designed for letters, numbers, colors, and sight words.',
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
          },
          {
            title: 'Next Steps',
            list: [
              'Add study statistics and progress tracking',
              'Build richer deck library UI with subset selection',
              'Create editing tools for parents to customize decks',
            ],
          },
        ],
      },
      {
        type: 'callout',
        items: [
          {
            title: 'Vision',
            body: [
              'A kid-friendly flashcards app that grows with learners — from ABCs to math facts — while giving parents flexible tools to adapt content as their children advance.',
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
  'github-engineering-onboarding': {
    slug: 'github-engineering-onboarding',
    title: 'GitHub Engineering Onboarding',
    subtitle: 'Program Management • Curriculum Design • Automation',
    hero: {
      src: '/images/github.png',
      alt: 'Overview of the GitHub engineering onboarding curriculum',
    },
    overview: {
      title: 'Overview',
      body: [
        'GitHub’s global engineering onboarding needed to evolve alongside new product features and a rapidly growing engineering team. My work focused on streamlining the experience for new hires, scaling delivery, and ensuring alignment with quarterly feature releases.',
      ],
    },
    blocks: [
      {
        type: 'calloutRow',
        items: [
          {
            title: 'My Role',
            body: [
              'Senior Technical Project Manager — led engineering onboarding operations and curriculum. Partnered with Product, SRE, and L&D to design, update, and automate key elements of the program.',
            ],
          },
          {
            title: 'Contributions',
            list: [
              'Audited and updated Ruby on Rails and React training content',
              'Consolidated onboarding steps across functions to reduce complexity',
              'Automated lab environment prep with GitHub Actions and Python',
              'Shifted feedback collection from live sessions to automated surveys',
              'Improved onboarding transcript accessibility and documentation',
            ],
          },
        ],
      },
      {
        type: 'duo',
        items: [
          {
            title: 'Challenges',
            body: [
              'Balancing scale with personalization. As onboarding expanded globally, the challenge was to reduce manual overhead without losing the clarity and empathy that make engineers feel supported from day one.',
            ],
          },
          {
            title: 'Outcomes',
            list: [
              'Reduced manual prep and delivery effort for facilitators',
              'Created consistent, accessible resources for global onboarding',
              'Supported faster alignment between onboarding and quarterly feature releases',
            ],
          },
        ],
      },
      {
        type: 'callout',
        items: [
          {
            title: 'Vision',
            body: [
              'An onboarding system that’s scalable, automated where it should be, and always grounded in clarity, empathy, and developer experience.',
            ],
          },
        ],
      },
    ],
  },
  'jeemes-akers-website': {
    slug: 'jeemes-akers-website',
    title: 'JeemesAkers.com Website Rebuild',
    subtitle: 'React • Vite • Markdown Publishing',
    hero: {
      src: '/images/website.png',
      alt: 'JeemesAkers.com homepage preview',
    },
    overview: {
      title: 'Overview',
      body: [
        'My father’s author website was built in Wix, but the design needed a refresh and the publishing process was clunky. I rebuilt the site from scratch in React with Vite, focusing on performance, maintainability, and a writing-first workflow.',
      ],
    },
    blocks: [
      {
        type: 'calloutRow',
        items: [
          {
            title: 'My Role',
            body: [
              'Designer and developer. Handled design translation, frontend build, and content system setup.',
            ],
          },
          {
            title: 'Contributions',
            list: [
              'Replicated Wix design in React and Tailwind, modernizing UI for responsiveness',
              'Built a Markdown-driven publishing system for essays and “Missives”',
              'Structured file system for easy content management without a CMS',
              'Optimized site with Vite for fast load times and easy deployment',
            ],
          },
        ],
      },
      {
        type: 'duo',
        items: [
          {
            title: 'Challenges',
            body: [
              'Balancing fidelity to the original design (which readers were used to) with modernizing the stack and making future updates simple for a non-technical user.',
            ],
          },
          {
            title: 'Outcomes',
            list: [
              'Cleaner, faster website aligned to the original look-and-feel',
              'Simple publishing process: drop in Markdown → deploy',
              'Future-ready foundation that can scale with new content or features',
            ],
          },
        ],
      },
      {
        type: 'callout',
        items: [
          {
            title: 'Vision',
            body: [
              'A lightweight, maintainable platform that lets an author focus on writing, not web management.',
            ],
            cta: {
              label: 'Visit Site',
              href: 'https://www.jeemesakers.com',
              variant: 'ghost',
              external: true,
            },
          },
        ],
      },
      {
        type: 'gallery',
        items: [
          {
            src: '/images/case-studies/JACaseStudyHome.png',
            alt: 'JeemesAkers.com redesigned homepage',
            caption: 'Redesigned homepage hero',
          },
          {
            src: '/images/case-studies/JACaseStudyArtwork.png',
            alt: 'JeemesAkers.com artwork showcase page',
            caption: 'Artwork gallery layout',
          },
          {
            src: '/images/case-studies/JACaseStudyBooks.png',
            alt: 'Books listing for Jeemes Akers',
            caption: 'Books catalog grid',
          },
          {
            src: '/images/case-studies/JACaseStudyMissives.png',
            alt: 'Missives index page on JeemesAkers.com',
            caption: 'Missives index overview',
          },
          {
            src: '/images/case-studies/JACaseStudyMissiveExample.png',
            alt: 'Detailed missive entry example',
            caption: 'Individual missive detail view',
          },
        ],
      },
    ],
  },
}
