# 🌴 Roots & Harvest — Artisan Food Website

A modern, fully responsive marketing website for a Caribbean artisan food brand, built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **Full-screen parallax hero** with animated overlay
- **6 sections**: Hero, About, Products, Video, Engagement, Contact
- **Smooth scroll animations** powered by Framer Motion
- **Mobile-first responsive** design
- **WhatsApp order integration** — all CTAs route to WhatsApp
- **Like + Share buttons** (WhatsApp & Facebook share)
- **Embedded YouTube players** with custom thumbnails
- **Single content file** — edit all text, images, and links in `lib/content.ts`
- **Vercel-ready** — deploy in one click

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
open http://localhost:3000
```

---

## 📝 How to Customise

**Everything you need to edit is in one file:**

```
lib/content.ts
```

Open it and you'll find labelled sections for:

| Section       | What to edit                                      |
|---------------|---------------------------------------------------|
| `SITE`        | Brand name, tagline, URL                          |
| `HERO`        | Headline, subheadline, CTA text, background image |
| `ABOUT`       | Story paragraphs, mission quote, stats            |
| `PRODUCTS`    | Product names, descriptions, images               |
| `VIDEOS`      | YouTube video IDs, titles, descriptions           |
| `ENGAGEMENT`  | Share text, share URL, WhatsApp message           |
| `CONTACT`     | WhatsApp number, email, address, form labels      |
| `FOOTER`      | Tagline, copyright, nav links                     |

---

## 🖼️ Adding Real Images

All images use placeholder gradients with emoji. Replace them by:

1. Add your images to `/public/images/`
2. In each component, replace the `<div>` placeholder with:

```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Your description"
  fill
  className="object-cover"
  priority  // add for above-the-fold images
/>
```

### Image filenames used (from `lib/content.ts`):
```
/public/images/hero-bg.jpg           ← Hero background
/public/images/about-farmer.jpg      ← About section photo
/public/images/product-peanuts.jpg   ← Peanuts card
/public/images/product-coconut-oil.jpg
/public/images/product-guava.jpg
/public/images/product-vegetables.jpg
/public/images/video-thumb-peanuts.jpg
/public/images/video-thumb-coconut.jpg
```

---

## 📹 Connecting Real Videos

In `lib/content.ts`, replace the `youtubeId` values with real YouTube video IDs:

```ts
// YouTube URL: https://www.youtube.com/watch?v=ABC123xyz
// Use the part after v=:
youtubeId: 'ABC123xyz',
```

---

## 📱 WhatsApp Setup

Update the phone number in `lib/content.ts`:

```ts
export const CONTACT = {
  whatsappNumber: '12687246624', // Country code + number, no spaces or +
}
```

---

## 🗃️ Optional: Supabase Integration (Likes)

The like button uses local React state. To persist likes across sessions:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a table: `likes (id serial, count int, page text)`
3. Install: `npm install @supabase/supabase-js`
4. Create `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
5. In `components/EngagementSection.tsx`, replace the local state with a Supabase query

---

## 🚢 Deploy to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Push to GitHub and import at vercel.com
git init && git add . && git commit -m "Initial commit"
# Then import repo at vercel.com/new
```

---

## 📁 Project Structure

```
artisan-site/
├── app/
│   ├── layout.tsx        ← Root layout, fonts, metadata
│   ├── page.tsx          ← Main page (assembles all sections)
│   └── globals.css       ← Global styles, CSS variables
├── components/
│   ├── Navbar.tsx        ← Sticky nav with mobile menu
│   ├── HeroSection.tsx   ← Full-screen parallax hero
│   ├── AboutSection.tsx  ← Story + stats
│   ├── ProductsSection.tsx ← Product cards grid
│   ├── VideoSection.tsx  ← YouTube embeds
│   ├── EngagementSection.tsx ← Like + Share
│   ├── ContactSection.tsx ← WhatsApp + form
│   └── Footer.tsx        ← Footer
├── lib/
│   └── content.ts        ← ⭐ ALL EDITABLE CONTENT LIVES HERE
└── public/
    └── images/           ← Drop your photos here
```

---

## 🎨 Design System

| Token         | Value          | Usage                  |
|---------------|----------------|------------------------|
| `earth-500`   | `#c07a20`      | Primary brand colour   |
| `forest-500`  | `#3d7535`      | Accent green           |
| `terracotta`  | `#c94a28`      | Likes / alerts         |
| `cream`       | `#fef9f0`      | Background             |
| `ink`         | `#1a1208`      | Text                   |
| Font: Display | Playfair Display | Headlines            |
| Font: Body    | Lato           | Body text              |
| Font: Accent  | Dancing Script | Quotes, taglines       |
