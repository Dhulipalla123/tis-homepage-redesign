# Tulas International School — Homepage Redesign

A modern, animated, responsive homepage redesign for Tulas International School (TIS), Dehradun.

## Tech Stack

- React 18
- Vite
- Framer Motion
- Lucide React
- CSS Variables + responsive CSS
- Vercel / Netlify compatible

## Standout Features

1. **Scroll-triggered reveals** — sections animate into view with Framer Motion.
2. **Animated dark/light theme** — preference is stored in localStorage.
3. **Scroll progress bar** — fixed progress indicator at the top of the page.
4. **Custom cursor** — desktop-only cursor ring that reacts to interactive elements.
5. **Responsive navigation** — mobile menu with touch-friendly controls.
6. **Sports marquee** — continuously moving sports list.
7. **Responsive layouts** — desktop, tablet and mobile breakpoints.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel
1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify
1. Push to GitHub.
2. Import the repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

## Component / Code Architecture

The project follows a modular React structure:

```text
src/
├── components/
│   ├── animation/
│   │   └── Reveal.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Academics.jsx
│       ├── Campus.jsx
│       ├── Sports.jsx
│       └── Admissions.jsx
├── data/
│   └── siteData.js
├── App.jsx
├── main.jsx
└── styles.css
```

### Why this structure?

- **App.jsx** controls global state and page composition.
- **layout/** contains reusable site-wide elements.
- **sections/** contains individual landing-page sections.
- **animation/** contains reusable animation logic.
- **data/** keeps repeated static content separate from UI code.
- **styles.css** contains responsive styling and theme variables.

## Brand / Content

The redesign uses the current TIS positioning and publicly listed homepage information, including the Dehradun location, CBSE curriculum, boarding/day school model, sports and campus statistics.

Official website: https://tis.edu.in/
Admissions: https://admission.tis.edu.in/

## Accessibility Notes

- Semantic `header`, `main`, `section` and `footer` elements are used.
- Interactive elements have accessible labels where needed.
- Navigation targets are keyboard accessible.
- Custom cursor is hidden on small/touch layouts.
- Contrast and touch target sizes were considered for the responsive layout.
