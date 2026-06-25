# Collaborating on Bethany Curtis Portfolio

This repository is not open for public contribution. Please do not fork this repository, submit unsolicited pull requests, or use the source code, content, or design in another project.

Approved collaborators should work from the private project plan or issue assigned by the maintainer.

## Project Notes

This is a Vite + React portfolio site with app pages, case studies, privacy policy pages, and a contact form.

## Local Development

Authorized collaborators can use:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Other maintainer scripts:

- `npm run style` formats CSS in `src/styles`.
- `npm run style:check` checks CSS formatting.
- `npm run housekeep` runs formatting checks and a production build.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow that builds and deploys to GitHub Pages.

## Maintenance Notes

- App pages are managed in `src/data/apps.js`.
- Privacy policies are managed in `src/data/privacyPolicies.js`.
- Case studies are managed in `src/data/caseStudies.js`.
- Static assets live under `public/`.
- The contact form uses EmailJS configuration in `ContactPage.jsx`.
