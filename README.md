# Lexxes Group — Frontend

A Next.js website for Lexxes Group, a premium network marketing company offering Tourism, Real Estate, and Stock Market services.

---
## Project Structure

```
frontend/
├── app/
│   ├── globals.css          ← Design system (colors, fonts, components)
│   ├── layout.tsx           ← Root layout with AuthProvider
│   ├── page.tsx             ← Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── dashboard/page.tsx   ← Member dashboard (auth protected)
│   ├── admin/page.tsx       ← Admin panel (auth protected)
│   └── services/
│       ├── tourism/page.tsx
│       ├── real-estate/page.tsx
│       └── stock-market/page.tsx
├── components/
│   └── layout/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── LayoutWrapper.tsx
├── context/
│   └── AuthContext.tsx      ← JWT auth, login/register/logout
└── public/
    ├── logo1.png            ← Main logo
    ├── favicon.ico
    ├── fonts/
    │   └── Relieve.ttf      ← Custom display font
    └── heroimg/             ← Hero carousel images
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Auth | JWT (localStorage) |
| Deployment | Vercel |

---

## Auth Flow

1. User registers → saved to MongoDB → JWT returned
2. JWT stored in `localStorage` as `lexxes_token` and `lexxes_user`
3. On login → role check → admin goes to `/admin`, member goes to `/dashboard`
4. Member needs to be manually activated by Amit (admin) after payment
5. Dashboard shows pending banner with WhatsApp + Call button if `isActive: false`

### Admin Accounts
- `amit@lexxesgroup.com` / `Lexxes@2024`
- `admin@lexxesgroup.com` / `Lexxes@2024`

### Packages
- **Starter** — ₹4,600 (Goa trip)
- **Premium** — ₹30,000 (Switzerland trip)

---

## Color Palette

All colors are defined in `app/globals.css` under `@theme`.

### Base (Backgrounds)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-base` | `#E8E8F2` | Main page background |
| `--color-base-secondary` | `#D8D8E6` | Cards, alternate sections |
| `--color-base-white` | `#FFFFFF` | Inputs, dropdowns |

### Text

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-ink` | `#011840` | All headings, body text |
| `--color-ink-secondary` | `#4A6080` | Subtitles, descriptions, captions |
| `--color-ink-light` | `#8FA3B8` | Placeholders, minor labels |

### Accent — Gold (Premium)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-gold-primary` | `#C9A84C` | Prices, highlights, premium labels |
| `--color-gold-light` | `#E8D5A3` | Tint backgrounds behind gold |
| `--color-gold-dark` | `#A8892E` | Gold button hover state |

### Accent — Blue (Logo color)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-blue` | `#1E4D8C` | CTA buttons, active states, links |
| `--color-blue-light` | `#EBF1FA` | Icon backgrounds, badge tints |
| `--color-blue-dark` | `#153866` | Blue button hover state |

### Border

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-border` | `#C8C8D8` | All card borders, input borders, dividers |

---

## Typography

### Font Families

| Font | Variable | Source |
|------|----------|--------|
| **Relieve** | `font-relieve` | Local — `/public/fonts/Relieve.ttf` |
| **Playfair Display** | `font-playfair` | Google Fonts (via next/font) |
| **Inter** | `font-inter` | Google Fonts (via next/font) |

### Font Usage Rules

| Font | Used For |
|------|----------|
| Relieve | Hero headlines, section headings (`h1`, `h2`, `h3`), card titles |
| Playfair Display | Subheadings, quotes, editorial text (`h4`, `h5`, `h6`) |
| Inter | Body text, buttons, labels, nav links, everything else |

### Typography Classes

```tsx
<h1 className="heading-hero">Big hero text</h1>        // Relieve, 5xl–7xl
<h2 className="heading-section">Section title</h2>     // Relieve, 3xl–5xl
<h3 className="heading-card">Card title</h3>           // Relieve, xl–2xl
<h4 className="heading-sub">Subheading</h4>            // Playfair, lg–xl
<p className="label-upper">Small label</p>             // Inter, 10px uppercase
<p className="body-text">Description text</p>          // Inter, base, ink-secondary
```

---

## Design System

### Border Radius

| Token | Value | Used For |
|-------|-------|----------|
| `--radius-sm` | `8px` | Inputs, small elements |
| `--radius-md` | `12px` | Cards |
| `--radius-lg` | `16px` | Large cards, modals |
| `--radius-xl` | `24px` | Hero sections |
| `--radius-full` | `9999px` | Pills, tags, navbar |

### Cards

Two card styles available:

```tsx
// On base-secondary background
<div className="card p-6">...</div>

// On white background
<div className="card-white p-6">...</div>
```

Both cards have:
- `1.5px` border in `--color-border`
- `12px` border radius
- Soft shadow always visible
- Lifted shadow + slight upward translate on hover

### Buttons

All buttons use a **slide/fill animation** on hover. Always wrap text in `<span>`:

```tsx
<button className="btn-primary"><span>Join Now</span></button>
<button className="btn-gold"><span>View Packages</span></button>
<button className="btn-blue"><span>Learn More</span></button>
<button className="btn-outline"><span>Contact Us</span></button>
```

| Class | Background | Text | Hover |
|-------|-----------|------|-------|
| `btn-primary` | `ink` (#011840) | white | slides to `blue` |
| `btn-gold` | `gold-primary` | `ink` | slides to `gold-dark` |
| `btn-blue` | `blue` | white | slides to `blue-dark` |
| `btn-outline` | transparent | `ink` | fills with `ink`, text turns white |

---

## Navbar

- Floating pill design, `75% width`, centered
- Dark ink background (`#011840`) on light page — intentional contrast
- Desktop: logo + full name + nav links + login/profile
- Mobile: logo only in pill → hamburger → fullscreen menu with full name + links + profile
- Active link has animated white pill (Framer Motion `layoutId`)
- Company name uses `font-relieve`
- Login button: `bg-gold-primary text-ink`
- Hidden on: `/login`, `/register`, `/dashboard`, `/admin`

---

## Pages — Theme Guide

### Public pages (new light theme)
Use `bg-base`, `text-ink`, `card`, `btn-primary` etc.
- Homepage (`/`)
- About (`/about`)
- Contact (`/contact`)
- Tourism (`/services/tourism`)
- Real Estate (`/services/real-estate`)
- Stock Market (`/services/stock-market`)

### Auth + Dashboard pages (hardcoded dark theme)
These pages have their own hardcoded styles and do NOT use the global palette.
- Login (`/login`)
- Register (`/register`)
- Dashboard (`/dashboard`)
- Admin (`/admin`)

---

## Deployment

### Frontend — Vercel
- Domain: `lexxesgroup.com` (purchased by Amit on GoDaddy, connected to Vercel)
- Auto-deploys on every push to `master` branch

### Backend — Render
- URL: `https://lexxes-group-backend.onrender.com`
- Free tier — spins down after 15 min of inactivity (first request takes ~30s to wake)
- Upgrade to Starter ($7/month) when business grows for always-on

---
