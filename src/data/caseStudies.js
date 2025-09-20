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
  {
    slug: 'flashcards-ios',
    title: 'Flashcards iOS App',
    subtitle: 'SwiftUI • SwiftData • iOS',
    summary:
      'In-progress: A playful, customizable study app for kids with SwiftUI + SwiftData, designed to grow with learners.',
  },
  {
    slug: 'affirmation-app',
    title: 'Affirmation App (iOS)',
    subtitle: 'SwiftUI • Habit Design',
    summary:
      'In-progress: A minimal iOS app delivering daily affirmations, with upcoming AI-powered personalization.',
  },
]

export const caseStudyDetails = {
  'affirmation-app': {
    slug: 'affirmation-app',
    title: 'Affirmation App (iOS)',
    subtitle: 'SwiftUI • Habit Design',
    hero: {
      src: '/images/affirm.png',
      alt: 'Affirmation app daily card and saved affirmations screens',
    },
    overview: {
      title: 'Overview',
      body: [
        'I’m creating a simple, uplifting iOS app to deliver daily affirmations. The focus is on frictionless habit formation: fast startup, clean typography, gentle motion, and a content pipeline that makes updating affirmations effortless.',
      ],
    },
    blocks: [
      {
        type: 'calloutRow',
        items: [
          {
            title: 'My Role',
            body: [
              'Designer and developer. Leading UI design, building the app in SwiftUI, and creating the content pipeline for ongoing affirmation updates.',
            ],
          },
          {
            title: 'Tech Stack',
            list: [
              'Swift, SwiftUI',
              'Simple state management',
              'Content system for affirmation delivery',
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
              'Minimal UI with accessible typography',
              'Daily affirmation card view',
              'Saved affirmations list',
              'Light animations for transitions and modality',
              'Basic content pipeline for updating affirmations',
            ],
          },
          {
            title: 'Challenges',
            body: [
              'Balancing simplicity with delight. Many affirmation apps feel cluttered; I wanted something lightweight that encourages quick, positive daily use without distractions.',
            ],
          },
          {
            title: 'Next Steps',
            list: [
              'Add an editable home screen widget',
              'Incorporate Apple Foundation Models to refresh and generate new affirmations',
              'Expand personalization options (themes, categories)',
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
              'A minimal, calming experience that supports habit-building through consistency and tone — encouraging people to pause, reflect, and carry affirmations into their daily life.',
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
            src: '/images/case-studies/ACaseStudyHome.png',
            alt: 'Affirmation App home screen showing daily card and prompt',
            caption: 'Daily affirmation home',
          },
          {
            src: '/images/case-studies/ACaseStudyFavorites.png',
            alt: 'Affirmation App favorites list view',
            caption: 'Saved favorites library',
          },
          {
            src: '/images/case-studies/ACaseStudyMyAffirmationsPage.png',
            alt: 'Affirmation App My Affirmations management page',
            caption: 'Manage personal affirmations',
          },
          {
            src: '/images/case-studies/ACaseStudyCreate.png',
            alt: 'Affirmation App create affirmation screen',
            caption: 'Create new affirmation',
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
