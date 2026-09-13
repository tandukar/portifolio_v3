# Pragyo Tandukar — Portfolio

A React + Vite + Tailwind CSS conversion of the fullstack developer portfolio, split into reusable components.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx                 # Composes all sections, tracks active nav section
  navLinks.jsx             # Shared nav link data (id, label, icon) for desktop + mobile nav
  hooks/
    useActiveSection.js    # Scroll listener: active section + nav opacity state
  components/
    DesktopNav.jsx         # Right-edge floating dock (desktop)
    MobileNav.jsx           # Bottom floating pill (mobile)
    Hero.jsx                # Intro, tagline, social links
    Skills.jsx              # Tech stack pills
    Experience.jsx          # Work history (data-driven from `roles` array)
    Projects.jsx            # Client project cards (data-driven from `projects` array)
    Contact.jsx             # Closing CTA
    Footer.jsx
  index.css                # Tailwind directives + custom styles (blob shape, dock transitions)
  main.jsx                 # React entry point
```

## Editing content

- **Skills:** edit the `techStack` array in `src/components/Skills.jsx`.
- **Experience:** edit the `roles` array in `src/components/Experience.jsx`.
- **Projects:** edit the `projects` array in `src/components/Projects.jsx`.
- **Nav sections:** edit `src/navLinks.jsx` (keep `id`s in sync with each section's `id` attribute).

## Notes

- Active-section highlighting and nav-opacity-on-scroll are handled by the `useActiveSection` hook (a React port of the original vanilla-JS scroll listener).
- The hero illustration uses a placeholder image URL — swap `src/components/Hero.jsx`'s `<img>` `src` for your own asset.
- Social links (LinkedIn, GitHub, mailto) and the email address in `Hero.jsx` / `Contact.jsx` are placeholders — update with real URLs.
