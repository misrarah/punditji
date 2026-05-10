# Project: Pundit Alabhaya Tiwari – Portfolio Website

## Overview

A professional portfolio website for **Pandit Alabhaya Tiwari**, a Hindu Pundit providing Vedic puja and ritual services across Greater London.

## Tech Stack

- **React 18** with **Vite 6** (ESM, no CRA)
- **Tailwind CSS v3** with custom colour tokens (`maroon`, `saffron`, `gold`)
- **react-router-dom v6** for client-side routing
- No backend yet — booking form is a client-side placeholder

## Site Structure

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, highlights, about strip, ceremony feature image |
| `/services` | Services | Full grid of all puja services offered |
| `/gallery` | Gallery | Photo grid with lightbox viewer |
| `/booking` | Booking | Contact details + enquiry form (future: availability calendar) |

## Pandit Ji – Key Information

- **Name:** Pandit Alabhaya Tiwari
- **Location:** Greater London and surrounding counties (travels to client homes or venues)
- **Languages:** English, Hindi (implied)
- **Services:**
  - Satyanarayan Bhagwan Katha
  - Grah Pravesh (house blessing)
  - Grah Shanti (planetary pacification)
  - Hawan / Homam (fire ritual)
  - Annaprasan (first solid food ceremony)
  - Namkaran (naming ceremony)
  - Mundan / Chudakarana (first haircut)
  - Vivah Puja (wedding ceremonies)
  - Shradh & Pitru Paksha (ancestral rites)
  - Rudrabhishek (Shiva ritual)
  - Navratri Puja & Jagran
  - Bespoke / custom pujas

## Images

Located in `Resources/` (root) and copied to `src/assets/` for bundling:

| File | Content | Needs Rotation? |
|---|---|---|
| `IMG_5934.JPG` | Portrait of Pandit Ji in yellow kurta | Yes (90°) |
| `IMG_6144.JPG` | Hawan ceremony – fire ritual | Yes (90°) |
| `IMG_6145.JPG` | Puja with sacred flame | Yes (90°) |
| `IMG_6146.JPG` | Hawan with large flames | Yes (90°) |
| `IMG_2024.jpeg` | Puja altar arrangement | No |
| `IMG_0724.jpeg` | Pandit Ji at temple with deities | No |
| `IMG_0723.mov` | Video – in Resources only | N/A |
| `IMG_6117.MOV` | Video – in Resources only | N/A |

## Placeholder Values to Replace Before Go-Live

- Phone number: `+44 7XXX XXX XXX` → update in `Footer.jsx` and `Booking.jsx`
- Email: `pandit@example.com` → update in `Footer.jsx` and `Booking.jsx`
- Booking form `handleSubmit` → wire to email service (e.g. EmailJS, Formspree)

## Planned Future Features

1. **Availability calendar** – interactive calendar on the Booking page so visitors can check Pandit Ji's availability and submit dated requests
2. **Backend / form handler** – email notifications on form submission
3. **Video section** – embed ceremony videos from `Resources/`
4. **Testimonials section** – client reviews
5. **SEO / meta improvements** – Open Graph tags, structured data for local business
