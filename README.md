# suryeah.github.io

Personal portfolio of **Surya Vardhan**, embedded firmware engineer. Live at <https://suryeah.github.io/>.

The site presents professional experience, products and solutions, project case studies, open-source contributions, skills, education, and a downloadable resume for recruiters and engineering leaders.

## Tech stack

From `package.json`:

- React 19 and React DOM
- React Router 7 (single page with section anchors)
- Vite 6 with `@vitejs/plugin-react`
- ESLint 9 with React Hooks and React Refresh plugins
- `gh-pages` for deployment
- CSS Modules per component plus shared styles in `src/global.css` and design tokens in `src/index.css`

## Project structure

```
public/
  resume.pdf          Resume served at /resume.pdf
  404.html            GitHub Pages SPA fallback
src/
  data/
    portfolioData.js  All editable portfolio content
    README.md         Content maintenance guide
  components/         Section components and their *.module.css files
  pages/              Experience and Education sections
  assets/             Company logos
  App.jsx             Page layout, routing, footer
  main.jsx            Entry point; loads index.css and global.css
  index.css           Theme tokens (light and dark)
  global.css          Shared layout, buttons, tags, footer
```

To change content, edit `src/data/portfolioData.js`. See [`src/data/README.md`](src/data/README.md) for field definitions and publishing rules.

## Local development

Requires Node.js and npm.

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
```

## Build and validation

```bash
npm run build     # production build into dist/
npm run lint      # ESLint
npm run preview   # serve the production build locally
```

## Deployment

The site is published to the `gh-pages` branch with the `gh-pages` package:

```bash
npm run deploy    # runs the build (predeploy), then publishes dist/ to gh-pages
```

GitHub Pages serves the `gh-pages` branch. To update the resume, replace `public/resume.pdf` before deploying.
