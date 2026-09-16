# Capsa — redesign concept

A premium, enterprise-leaning redesign concept for capsa.ai, built with Vite + React + TypeScript + Tailwind.

This is an **original design concept** — layout, copy, and the "trusted by" names are placeholders,
not copies of the live capsa.ai site. Swap in real client logos only once you have the rights to use them.

## Stack
- Vite
- React 18 + TypeScript
- Tailwind CSS
- React Router (Home, Product, Security, Company, News, Careers, Contact)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Navbar, Footer, Hero, TrustedBy, Features, Stats, CTA
  pages/        Home, Product, Security, Company, News, Careers, Contact
```

## Brand tokens (edit in `tailwind.config.js`)

| Token       | Hex       | Use                        |
|-------------|-----------|-----------------------------|
| `ink`       | `#080B14` | Page background             |
| `panel`     | `#0F1424` | Cards / raised panels        |
| `line`      | `#1B2136` | Borders / dividers           |
| `accent`    | `#2B4BF2` | CTAs, links, highlights       |
| `paper`     | `#F4F6FB` | Primary text                |
| `muted`     | `#8790A8` | Secondary text              |

Fonts: **Fraunces** (headlines) + **Inter** (body/UI), loaded from Google Fonts in `index.html`.
