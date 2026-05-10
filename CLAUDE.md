# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio website for **Pandit Alabhaya Tiwari**, a Hindu Pundit offering puja and ritual services across Greater London. Built with React + Vite + Tailwind CSS v3.

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint
```

## Architecture

Single-page React app with client-side routing via `react-router-dom`.

```
src/
  App.jsx           # BrowserRouter + route definitions
  pages/
    Home.jsx        # Hero, highlights, about strip, ceremony feature
    Services.jsx    # Grid of all puja services
    Gallery.jsx     # Photo grid with lightbox
    Booking.jsx     # Contact cards + enquiry form (form submission is a placeholder)
  components/
    Navbar.jsx      # Sticky top nav, mobile hamburger
    Footer.jsx      # Three-column footer
  assets/           # Images copied from Resources/ (JPG/jpeg)
  index.css         # Tailwind directives + global base styles
```

## Colour palette & design tokens

Custom Tailwind colours defined in `tailwind.config.js`:
- `maroon-*` – primary brand colour (navbar, headings, CTAs)
- `saffron-*` – secondary accent (backgrounds)
- `gold-*` (400/500/600) – highlights, active nav links

## Images

Source images live in `Resources/` at the repo root. They are copied into `src/assets/` for Vite to bundle. Several photos (`IMG_5934.JPG`, `IMG_6144-6146.JPG`) were taken in landscape orientation and need a `rotate(90deg)` CSS transform when displayed.

## Booking page

The enquiry form currently has no backend. The `handleSubmit` function sets `submitted = true` client-side only. Future work: wire up to an email service (e.g. EmailJS, Formspree, or a serverless function) and add an availability calendar component.

## Key content details

- **Pundit:** Pandit Alabhaya Tiwari
- **Services area:** Greater London and surrounding counties
- **Services offered:** Satyanarayan Bhagwan Katha, Grah Pravesh, Grah Shanti, Hawan/Homam, Annaprasan, Namkaran, Mundan, Vivah Puja, Shradh, Rudrabhishek, Navratri Puja, and bespoke pujas.
- Contact phone/email in `Footer.jsx` and `Booking.jsx` are placeholder values (`+44 7XXX XXX XXX`, `pandit@example.com`) — update with real details before going live.
