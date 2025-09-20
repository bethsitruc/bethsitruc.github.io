# bethsitruc.github.io

My personal portfolio, built with Vite + React. The site highlights my case studies, current projects, and ways to connect. The code lives here primarily so I can iterate quickly; feel free to browse for inspiration, but deployment is tied to my own accounts (EmailJS, GitHub Pages, etc.).

## Highlights

- **Case Study Engine** – All long-form writeups pull from structured data and a single template component, keeping content and layout in sync.
- **Responsive Carousels** – Screenshot galleries lazy-load Embla Carousel and support mobile/desktop sizing without dragging the dependency into routes that don’t need it.
- **Live Contact Form** – Uses EmailJS to deliver messages straight to my inbox. Keys live in the repo deliberately, but swap them out if you ever fork this.
- **Structured Styles** – CSS is split by concern (`styles/base`, `styles/layout`, `styles/components`, `styles/pages`) so future tweaks stay manageable.

## Running Locally (for my own tinkering)

```bash
npm install
npm run dev
```

Other scripts I use:

- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build
- `npm run style` – auto-format CSS in `src/styles`
- `npm run style:check` – Prettier check for styles only
- `npm run housekeep` – run format/style checks and a production build in one go

> **Note:** The contact form calls EmailJS with my service/template IDs (`ContactPage.jsx`). Replace those with your own keys before attempting to send mail from a fork.

## Deployment

Pushes to `main` trigger a GH Actions workflow that builds and deploys to GitHub Pages. Static assets live under `public/`, and a custom `404.html` keeps React routes working on hard refresh.

## Project Structure

- `index.html` – Vite entry file
- `src/App.jsx` – main application shell
- `src/main.jsx` – React mount point + global CSS imports
- `src/components/` – section and utility components (`ChipLink`, `CaseStudyTemplate`, etc.)
- `src/pages/` – routed views (e.g. `/contact`)
- `src/data/caseStudies.js` – content model for case studies
- `src/styles/` – base/layout/component/page CSS separation
- `public/` – static assets served at `/`

## Miscellany

- Update the Open Graph/social preview image by placing a card at `/images/social-card.jpg` and adjusting the meta tag in `index.html`.
- Font Awesome icons load via the script tag in `index.html`.
- Case-study galleries live in `ScreenshotGallery.jsx` / `EmblaGallery.jsx` and only load Embla when needed.
