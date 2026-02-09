# Kalil Javaneh

A single-page product website built with Next.js for the "Kalil Javaneh" brand.
The page presents product value, nutrition details, usage guidance, and contact channels in a Persian-first layout.

## Project Scope

- Brand-focused landing page
- Content-heavy health and nutrition presentation
- Mobile-first responsive design
- Direct conversion path through contact links and order modal

## Tech Stack

- `Next.js 15` (App Router)
- `React 19` + `TypeScript`
- `Tailwind CSS`
- `Ant Design` (modal and image preview)
- `Akar Icons`
- `Framer Motion` (carousel component, currently not mounted)
- `animate.css`

## Page Composition

The homepage (`app/page.tsx`) is assembled from reusable sections:

1. `Navbar`  
   Brand header with simplified navigation layout.
2. `Hero`  
   Core product messaging, CTA button, order/contact modal, product image preview, and trust cards.
3. `About`  
   Long-form descriptive content and product background narrative.
4. `ToUse`  
   Usage instructions, health claims, nutrition breakdown tables, fatty acid details, and wheat-part explanation.
5. `Footer`  
   Contact actions (phone, Telegram, WhatsApp) and designer credit.

## UI and Interaction Highlights

- Animated stats counters triggered on viewport intersection (`Counter` component)
- Product image zoom/preview via Ant Design `Image`
- Order information modal opened from hero CTA
- Responsive content blocks with custom breakpoints (`ultraSmall`, `verySmall`, `small`)
- Reusable presentational components (`Button`, `Card`, `Counter`)

## Styling and Typography

- Global styles live in `app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Extensive local Persian font set (Sahel, Vazirmatn, and custom fonts)
- RTL utility class (`.rtl`) applied where needed for Persian text blocks

## Content Model

Most content is currently embedded directly in components as static text and in-file arrays (especially in `ToUse.tsx`), including:

- Nutrition percentages
- Fatty acid values
- Product composition breakdown
- Health/benefit bullet lists

This makes the site straightforward to edit but tightly couples content and UI.

## SEO and Metadata

- Static metadata is defined in `app/layout.tsx`
- Structured data (`application/ld+json`) is injected for website identity and author attribution

## Project Structure

```text
app/
  assets/               Images, icons, fonts
  components/           UI sections and shared components
  globals.css           Global styles + font-face declarations
  layout.tsx            Root layout + metadata + JSON-LD
  page.tsx              Homepage composition
tailwind.config.ts      Design tokens, breakpoints, font families
```
