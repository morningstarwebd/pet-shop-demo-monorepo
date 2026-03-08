# 🐾 Naaz Kool Pet Shop — Product Requirements Document
**Version:** 1.0  
**Date:** March 2026  
**Brand:** Naaz Kool Pet Shop  
**Status:** Ready for Development & Design  

---

## 📋 Table of Contents

1. [Brand Identity & Vision](#1-brand-identity--vision)
2. [How This Differs from PawMarket](#2-how-this-differs-from-pawmarket)
3. [Core Features](#3-core-features)
4. [Tech Stack](#4-tech-stack)
5. [Design System](#5-design-system)
6. [Google Fonts Specification](#6-google-fonts-specification)
7. [Page Architecture](#7-page-architecture)
8. [Page-by-Page Design Spec](#8-page-by-page-design-spec)
9. [AI Design Prompts (Google Stitch / Figma AI / Midjourney)](#9-ai-design-prompts)
10. [Component Library](#10-component-library)
11. [Database Schema (Firebase)](#11-database-schema-firebase)
12. [Folder Structure](#12-folder-structure)
13. [Development Phases](#13-development-phases)

---

## 1. Brand Identity & Vision

### Brand Name
**Naaz Kool Pet Shop** — নাজ কুল পেট শপ

### Brand Personality
```
শব্দে বলতে গেলে Naaz Kool হল:
COOL + PREMIUM + PLAYFUL + TRUSTWORTHY

Think of it like this:
→ Louis Vuitton এর luxury
→ Supreme এর street cool
→ Glossier এর youthful vibe
→ সব মিলিয়ে একটা Pet Shop!
```

### Tagline Options
- **"Pets. Reimagined."**
- **"Born to be different. Born to be loved."**
- **"Where cool meets care."**

### Target Audience
```
PRIMARY   → 20-35 বছর, শহুরে, Instagram-savvy, trend-conscious
SECONDARY → 35-50 বছর, premium buyer, quality-first মানসিকতা
TERTIARY  → প্রথমবার pet কিনছে, guide দরকার
```

### Brand Values
1. **Kool** — আধুনিক, stylish, social media-worthy
2. **Kare** — প্রতিটি পোষা প্রাণীর জন্য genuine care
3. **Kurated** — সেরা breed, সেরা product, carefully selected
4. **Kommunity** — pet lovers এর একটা community

---

## 2. How This Differs from PawMarket

```
┌─────────────────────────────────────────────────────────────┐
│           NAAZ KOOL  vs  PAWMARKET — FULL CONTRAST          │
├─────────────────┬──────────────────┬────────────────────────┤
│ Element         │ PawMarket        │ Naaz Kool              │
├─────────────────┼──────────────────┼────────────────────────┤
│ Color Mood      │ Light + Green    │ DARK + Terracotta      │
│ Feel            │ Professional     │ Editorial / Magazine   │
│ Typography      │ Clean Modern     │ Bold Expressive        │
│ Layout          │ Grid-based       │ Asymmetric / Diagonal  │
│ Hero Style      │ Split layout     │ Full-bleed cinematic   │
│ Cards           │ Rounded, soft    │ Sharp corners, bold    │
│ Animations      │ Subtle reveals   │ Dramatic entrances     │
│ Target          │ Everyone         │ Young premium buyers   │
│ Grooming        │ ❌               │ ✅ Full service         │
│ Vibe            │ "Trusted shop"   │ "The coolest pet shop" │
└─────────────────┴──────────────────┴────────────────────────┘
```

### Design Philosophy
> PawMarket is a **marketplace**. Naaz Kool is a **brand experience**.
> 
> যেখানে PawMarket-এ customer একটা pet খোঁজে, 
> সেখানে Naaz Kool-এ customer একটা lifestyle choose করে।

---

## 3. Core Features

### 🐾 Pet Listings (Enhanced)
- Breed + Price + Age + Gender + Color filter
- **"Vibe Filter"** — Energetic / Calm / Playful / Cuddly (নতুন!)
- Pet personality cards — তোমার lifestyle-এর সাথে কোন pet মানাবে
- 360° pet photo gallery
- Video preview of each pet
- "Meet the Parents" — parent breed photos

### 🛍️ Product Shop
- Categories: Food, Grooming, Accessories, Beds, Toys, Apparel
- **Styled product photography** — editorial look
- Bundle offers — "Starter Kit" packages
- Subscription model — monthly pet food delivery

### ✂️ Grooming Services (Naaz Kool Exclusive!)
- At-home grooming booking
- Salon-style grooming packages
- Before/After photo gallery
- Groomer profiles

### 🛒 Shopping Cart & Booking
- Smooth multi-step booking (pet + grooming)
- Razorpay — UPI, Card, EMI, Net Banking
- Order tracking with real-time updates

### 👤 User Features
- Profile with "My Pets" section
- Wishlist with shareable links
- Loyalty points — "Paw Points"
- Referral program

### 🔔 Notifications (Firebase FCM)
- Booking confirmed
- Grooming appointment reminder
- Flash sale alerts
- New exotic breed available

### 📱 PWA
- Android home screen install
- Offline browsing
- Push notifications
- App-like transitions

---

## 4. Tech Stack

```
┌─────────────────────────────────────────────────────────┐
│               NAAZ KOOL — TECH STACK                    │
├─────────────────────┬───────────────────────────────────┤
│ Framework           │ Next.js 15 (App Router)           │
│ Language            │ TypeScript 5.x                    │
│ Styling             │ Tailwind CSS v4                   │
│ Animations          │ Framer Motion                     │
│ Database            │ Firebase Firestore                │
│ Auth                │ Firebase Authentication           │
│ Storage             │ Firebase Storage                  │
│ Notifications       │ Firebase FCM                      │
│ Payment             │ Razorpay                          │
│ PWA                 │ next-pwa                          │
│ Icons               │ Lucide React                      │
│ Hosting             │ Render.com (Free, Commercial OK)  │
└─────────────────────┴───────────────────────────────────┘
```

---

## 5. Design System

### 5.1 Color Palette — "Dark Luxury Terracotta"

> **Philosophy:** Deep, warm darkness — like a cozy, premium pet boutique at night. 
> Gold accents feel like spotlight on the pets. Terracotta warms the soul.

```css
/* ── PRIMARY DARK (Background) ── */
--ink-950:    #0C0A08;   /* Deepest dark — main background */
--ink-900:    #1A1612;   /* Dark sections */
--ink-800:    #2A2218;   /* Card backgrounds */
--ink-700:    #3D3024;   /* Elevated surfaces */
--ink-600:    #524030;   /* Borders, dividers */

/* ── TERRACOTTA (Brand Primary) ── */
--terra-700:  #8B3A2A;   /* Deep terracotta */
--terra-600:  #B04A35;   /* Main brand color */
--terra-500:  #D4593F;   /* Primary CTA */  ← MAIN BRAND
--terra-400:  #E07A5F;   /* Hover states */
--terra-300:  #F0A898;   /* Light accents */
--terra-100:  #FDF0EC;   /* Tint backgrounds */

/* ── GOLD (Accent / Premium) ── */
--gold-500:   #E8B84B;   /* Primary accent */  ← MAIN ACCENT
--gold-400:   #F2CB70;   /* Secondary accent */
--gold-200:   #F8E5B0;   /* Subtle highlights */
--gold-100:   #FDF7E6;   /* Tinted backgrounds */

/* ── CREAM (Text on Dark) ── */
--cream-100:  #FAF6F0;   /* Primary text on dark */
--cream-200:  #EDE6DC;   /* Secondary text */
--cream-400:  #C5B9A8;   /* Muted text */
--cream-600:  #8C7D6E;   /* Disabled text */

/* ── SEMANTIC ── */
--success:    #4CAF78;
--warning:    #F59E0B;
--error:      #EF4444;
--info:       #60A5FA;

/* ── SECTION BACKGROUNDS ── */
--bg-dark:    #0C0A08;   /* Hero, dark sections */
--bg-card:    #1E1A14;   /* Pet/product cards */
--bg-raised:  #2A2218;   /* Elevated cards */
--bg-light:   #FAF6F0;   /* Light sections (contrast) */
```

### 5.2 Typography System

> **Strategy:** একটা dramatic, editorial pair।
> Display font-এ CHARACTER, body font-এ CLARITY।

```css
/* ── DISPLAY FONT: Syne ── */
/* Bold, geometric, editorial — makes headlines POP */
font-family: 'Syne', sans-serif;
/* Weights: 700, 800 */
/* Use: Hero headings, Section titles, Logo text */
/* Google Fonts: https://fonts.google.com/specimen/Syne */

/* ── BODY FONT: Outfit ── */  
/* Modern, warm, extremely readable */
font-family: 'Outfit', sans-serif;
/* Weights: 300, 400, 500, 600 */
/* Use: Body text, UI labels, descriptions */
/* Google Fonts: https://fonts.google.com/specimen/Outfit */

/* ── ACCENT FONT: Playfair Display ── */
/* Elegant serif for special moments */
font-family: 'Playfair Display', serif;
/* Weights: 400 italic, 600 italic */
/* Use: Pull quotes, testimonials, "Kool" taglines */
/* Google Fonts: https://fonts.google.com/specimen/Playfair+Display */

/* ── Google Fonts Import URL ── */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=Playfair+Display:ital,wght@1,400;1,600&display=swap');

/* ── Type Scale ── */
--text-xs:   0.7rem;    /* 11px — Labels, badges */
--text-sm:   0.813rem;  /* 13px — Captions */
--text-base: 1rem;      /* 16px — Body */
--text-lg:   1.125rem;  /* 18px — Large body */
--text-xl:   1.375rem;  /* 22px — Sub headings */
--text-2xl:  1.75rem;   /* 28px — Section titles mobile */
--text-3xl:  2.25rem;   /* 36px — Section titles desktop */
--text-4xl:  3rem;      /* 48px — Hero sub */
--text-5xl:  4rem;      /* 64px — Hero main */
--text-6xl:  5.5rem;    /* 88px — Mega hero */
```

### 5.3 Spacing & Layout

```css
/* 8px grid system */
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */

/* Border Radius — Naaz Kool has SHARPER corners than PawMarket */
--radius-xs:  4px;
--radius-sm:  8px;
--radius-md:  12px;
--radius-lg:  16px;
--radius-xl:  20px;
--radius-full: 9999px;

/* Shadows — warmer, deeper */
--shadow-sm:    0 2px 8px rgba(0,0,0,0.4);
--shadow-md:    0 8px 24px rgba(0,0,0,0.5);
--shadow-lg:    0 16px 48px rgba(0,0,0,0.6);
--shadow-terra: 0 8px 24px rgba(212,89,63,0.35);
--shadow-gold:  0 8px 24px rgba(232,184,75,0.3);
--shadow-glow:  0 0 40px rgba(212,89,63,0.2);
```

### 5.4 Visual Language

```
Naaz Kool এর ৫টি Visual DNA:

1. FULL-BLEED IMAGES  → পুরো screen জুড়ে stunning pet photos
2. OVERLAPPING ELEMENTS → text/cards image-এর উপরে আসে
3. EDITORIAL GRID → magazine-এর মতো asymmetric layout
4. WARM GRAIN TEXTURE → background-এ subtle film grain
5. BOLD TYPOGRAPHY → headline গুলো অনেক বড়, dramatic
```

---

## 6. Google Fonts Specification

### Import Code (copy into layout.tsx)

```html
<!-- In <head> of layout.tsx -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet" />
```

### Next.js Font Setup (next/font)

```typescript
// src/app/layout.tsx
import { Syne, Outfit, Playfair_Display } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['italic'],
  variable: '--font-accent',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html className={`${syne.variable} ${outfit.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

### CSS Variables

```css
:root {
  --font-display: var(--font-syne), 'Syne', sans-serif;
  --font-body:    var(--font-outfit), 'Outfit', sans-serif;
  --font-accent:  var(--font-playfair), 'Playfair Display', serif;
}
```

---

## 7. Page Architecture

```
naaz-kool/
├── / (Home)
├── /pets (Listings)
│   ├── /pets/[breed]
│   └── /pets/[id] (Detail)
├── /products (Shop)
│   ├── /products/[category]
│   └── /products/[id]
├── /grooming (Grooming Services) ← Naaz Kool Exclusive
│   └── /grooming/book
├── /booking (Pet Booking)
├── /cart
├── /checkout
├── /order-success
├── /community (Pet owner community) ← Naaz Kool Exclusive
├── /about
├── /contact
├── /blog
│   └── /blog/[slug]
└── /auth
    ├── /auth/login
    └── /auth/signup
```

---

## 8. Page-by-Page Design Spec

### 8.1 HOME PAGE — Cinematic & Editorial

---

**NAVBAR (Dark Glass)**
```
Background: rgba(12,10,8,0.85) + backdrop-blur(20px)
Border-bottom: 1px solid rgba(255,255,255,0.06)
Height: 68px

[LEFT]  🐾 NAAZ KOOL  (Syne font, cream, logo with subtle terra glow)
[MID]   Pets  Shop  Grooming  Community  Blog  (Outfit, cream/60%)
[RIGHT] 🔍  🤍  🛒(3)  [Book Now → ] (terra CTA button)

Mobile: Logo + Cart icon + Hamburger (NO bottom nav initially)
Note: Mobile uses side drawer instead of bottom nav (different from PawMarket)
```

---

**SECTION 1 — HERO: Full Bleed Cinematic**
```
Height: 100vh (full screen)
Background: Dark gradient overlay on stunning pet photo

Layout: ASYMMETRIC — text bottom-left, image fills screen

┌────────────────────────────────────────────────────────┐
│                                                        │
│  [FULL SCREEN PET PHOTO — Dark overlay 40% opacity]   │
│                                                        │
│                                                        │
│                          ┌─────────────────────┐      │
│                          │  Floating breed tag  │      │
│                          │  "Golden Retriever"  │      │
│                          └─────────────────────┘      │
│                                                        │
│  ┌──────────────────────────────────────────┐         │
│  │                                          │         │
│  │  WHERE EVERY PET                         │         │  ← Syne 800
│  │  FINDS THEIR                             │         │
│  │  *FOREVER HOME.*                         │         │  ← italic gold
│  │                                          │         │
│  │  The most curated pet experience         │         │  ← Outfit 300
│  │  in India. Certified. Kool. Yours.       │         │
│  │                                          │         │
│  │  [Explore Pets →]  [Book Grooming]       │         │
│  │                                          │         │
│  └──────────────────────────────────────────┘         │
│                                                        │
│  ══ Scroll indicator (animated line) ════════════════ │
└────────────────────────────────────────────────────────┘

Design Notes:
• Pet image is full-bleed, no rounded corners, edge-to-edge
• Text sits ON the image with glass background
• "FOREVER HOME." — the period is terra colored
• Hero rotates between 3-4 different pet photos (auto-carousel)
• Subtle film grain texture over entire hero
• Animated: text slides up from bottom on load
```

---

**SECTION 2 — MARQUEE TICKER**
```
Background: var(--terra-500)
Height: 44px

Scrolling text ticker (left to right, auto):
"🐾 CERTIFIED BREEDS  •  PAN INDIA DELIVERY  •  
FREE GROOMING WITH FIRST PET  •  RAZORPAY EMI  •  
24/7 WHATSAPP SUPPORT  •  4.9★ RATED  •  "
(repeats infinitely)

Font: Outfit 600, white, 13px, uppercase, letter-spacing 1px
```

---

**SECTION 3 — FEATURED PETS: Magazine Grid**
```
Background: #0C0A08 (deep dark)

Title layout:
  ┌──────────────────────────────────────────┐
  │  THE ONES               [Browse All →]   │
  │  EVERYONE'S             ─────────────    │
  │  TALKING ABOUT.                          │
  └──────────────────────────────────────────┘
  (Syne 800, cream, massive, left-aligned)

Pet Grid — EDITORIAL ASYMMETRIC LAYOUT:

Desktop:
  ┌─────────────────┬──────┬──────┐
  │                 │  B   │  C   │
  │   Pet A (BIG)   ├──────┴──────┤
  │                 │   Pet D     │
  └─────────────────┴─────────────┘

Each pet card:
  • Image fills card completely (no padding)
  • Info overlay slides up on hover (dark gradient)
  • Name in Syne, price in terra color
  • Badges: "CERTIFIED" in terra, "NEW" in gold
  • ❤️ top right (minimal, white icon)

Mobile:
  • Vertical stacked cards, full-width
  • Swipeable horizontal scroll for featured section
```

---

**SECTION 4 — NAAZ KOOL PROMISE: Dark Cards**
```
Background: #1A1612 (slightly lighter dark)

Layout: 4 columns (2x2 on mobile)

Each card:
  ┌──────────────────────────────────┐
  │                                  │
  │  [Terra colored icon, 40px]      │
  │                                  │
  │  HEALTH CERTIFIED                │  ← Syne 700
  │                                  │
  │  Every pet passes our 25-point   │  ← Outfit 400
  │  health check before joining     │
  │  the Naaz Kool family.           │
  │                                  │
  │  ────────────────────            │  ← terra line
  └──────────────────────────────────┘

Cards: dark background (#2A2218), terra left-border (3px)
Hover: card lifts up, terra glow appears
```

---

**SECTION 5 — PRODUCT SHOP: Contrast Light Section**
```
Background: #FAF6F0 (cream — maximum contrast with dark sections)

Title:
  "Shop for your         [View All Products →]
   best friend."
   (Syne 800, ink-950, massive)

  Italic subtitle: "Everything they need, nothing they don't."
  (Playfair Display italic, terra-600)

Product Grid: 4 columns desktop, 2 columns mobile

Product Card (different from pet card):
  ┌──────────────────────────────┐
  │  [Product Image — white bg]  │
  │  🏷️ 25% OFF  (terra badge)   │
  ├──────────────────────────────┤
  │  ROYAL CANIN                 │  ← brand, outfit 600, gray
  │  Adult Dog Food 3kg          │  ← Outfit 500, ink
  │  ⭐ 4.8  (120 reviews)       │
  │  ₹1,920  ~~₹2,400~~          │
  │  [Add to Bag +]              │  ← "Bag" not "Cart" (brand voice)
  └──────────────────────────────┘
Note: Light cards on light bg — minimal, apple-store feel
```

---

**SECTION 6 — GROOMING (Naaz Kool Exclusive)**
```
Background: Diagonal split — left dark (#0C0A08), right terra (#D4593F)

┌───────────────────┬──────────────────────────┐
│                   │                          │
│  [Grooming photo  │  GLOW UP                 │
│   — dog being     │  YOUR PET.               │  ← Syne 800, cream
│   groomed,        │                          │
│   before/after]   │  Professional grooming   │  ← Outfit 300
│                   │  at your doorstep or at  │
│                   │  our premium salon.       │
│                   │                          │
│                   │  ✓ Bath & Blow Dry       │
│                   │  ✓ Full Groom Package    │
│                   │  ✓ Nail Trim             │
│                   │  ✓ Ear Cleaning          │
│                   │  ✓ Teeth Brushing        │
│                   │                          │
│                   │  Starting ₹499           │  ← gold colored price
│                   │  [Book Grooming →]       │
│                   │                          │
└───────────────────┴──────────────────────────┘
```

---

**SECTION 7 — BREEDS CAROUSEL**
```
Background: #0C0A08

Title: "FIND YOUR         ← left
BREED MATCH."             ← right (asymmetric)

Horizontal scroll carousel — each breed item:
  ┌────────────────────────────────┐
  │  [Full bleed breed photo]      │
  │  with dark overlay at bottom   │
  │                                │
  │  GOLDEN RETRIEVER              │  ← Syne 700, cream
  │  ₹25,000 — ₹40,000            │  ← Outfit, terra
  │  [→]                           │  ← terra arrow
  └────────────────────────────────┘
Width: 280px, border-radius: 16px
On hover: image zooms in subtly, arrow turns gold
```

---

**SECTION 8 — SOCIAL PROOF / TESTIMONIALS**
```
Background: #1A1612

Title: "THE NAAZ KOOL    ← left aligned
FAMILY."                  ← indent right (staggered)

Layout: 3 column card grid

Each testimonial card:
  ┌──────────────────────────────────────────┐
  │  ❝                                       │  ← large quote mark, terra
  │                                          │
  │  "Best experience ever. Our husky        │  ← Playfair italic
  │  arrived healthy and absolutely          │
  │  adorable. Will never buy elsewhere."   │
  │                                          │
  │  ──────────────────────────────          │
  │  [Photo]  Priya Sharma                  │
  │           Mumbai • Bought: Husky 🐺      │
  │           ⭐⭐⭐⭐⭐                       │
  └──────────────────────────────────────────┘
Cards: #2A2218 background, gold left-border 2px
```

---

**SECTION 9 — COMMUNITY TEASER**
```
Background: terra-to-gold gradient (135deg)
Height: 400px (full-width banner)

CENTER ALIGNED:
  🐾
  JOIN THE NAAZ KOOL COMMUNITY    ← Syne 800, white
  *10,000+ pet lovers & counting* ← Playfair italic, gold-200
  
  Share your pet stories, get expert advice,
  exclusive deals, and much more.            ← Outfit 300, white/80%
  
  [Join Free →]   [View Community]
```

---

**SECTION 10 — BLOG PREVIEW**
```
Background: #FAF6F0 (light — contrast)

Title: "From the
Naaz Kool Blog"    ← Syne 800, ink

3 featured blog posts — horizontal cards:
  ┌──────────────────────────────────────────────┐
  │ [Wide blog image]  │ Category tag (terra)     │
  │                    │ Title (Syne 700)          │
  │                    │ Excerpt (Outfit 400)      │
  │                    │ Read more →               │
  └──────────────────────────────────────────────┘
```

---

**FOOTER — Dark & Branded**
```
Background: #0C0A08
Border-top: 1px solid rgba(255,255,255,0.05)

TOP SECTION:
  ┌─────────────────────────────────────────────────┐
  │  🐾 NAAZ KOOL          Got a question?          │
  │  Where cool meets care.  [Chat on WhatsApp →]  │
  └─────────────────────────────────────────────────┘

LINKS:
  Explore          Services          Company          Social
  ─────────        ─────────         ─────────        ──────
  All Pets         Grooming          About Us         Instagram
  Products         Pet Delivery      Blog             Facebook
  Breeds           Adoption Help     Careers          YouTube
  Grooming         Training Tips     Contact          Pinterest

BOTTOM BAR:
  © 2026 Naaz Kool Pet Shop. All rights reserved.
  [Privacy]  [Terms]  [Refund Policy]
  
  "Made with ❤️ for pet lovers everywhere"
```

---

### 8.2 PET DETAIL PAGE

```
Layout: Full-bleed hero image at top, info below

┌──────────────────────────────────────────────────┐
│                                                  │
│   [FULL WIDTH PET PHOTO — 60vh height]           │
│                                                  │
│   [← Back]                        [❤️]  [Share] │
│                                                  │
│   Overlay gradient at bottom                     │
│                                                  │
│   ┌──────────────────────────────────────┐       │
│   │  GOLDEN RETRIEVER                    │       │  ← breed, outfit 500
│   │  Buddy                               │       │  ← name, Syne 800
│   │  ₹35,000          Male • 8 weeks     │       │
│   └──────────────────────────────────────┘       │
│                                                  │
└──────────────────────────────────────────────────┘

Below: tabbed content
[About]  [Health]  [Breed Info]  [Reviews]

Sticky bottom bar on mobile:
┌──────────────────────────────────────────────────┐
│  ₹35,000        [💬 WhatsApp]  [Book Now →]      │
└──────────────────────────────────────────────────┘
```

---

### 8.3 GROOMING PAGE

```
Hero: Split diagonal design

Service Cards (3 tiers):
  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────────┐
  │  BASIC          │  │  SIGNATURE       │  │  ROYAL           │
  │  ─────          │  │  ─────────       │  │  ─────           │
  │  Bath & Dry     │  │  Full Groom      │  │  Spa Treatment   │
  │  Nail Trim      │  │  Styling         │  │  Everything +    │
  │                 │  │  Ear Clean       │  │  Aromatherapy    │
  │  From ₹499      │  │  From ₹899       │  │  From ₹1,499     │
  │  [Book →]       │  │  [Book →]        │  │  [Book →]        │
  └─────────────────┘  └─────────────────┘  └──────────────────┘

Highlighted: Signature (most popular — terra border)

Booking form:
  • Pet name + Breed
  • Service selection
  • Date & Time (calendar picker)
  • Location (home/salon)
  • Special notes
  • Razorpay advance booking deposit
```

---

## 9. AI Design Prompts

> এই prompts গুলো **Google Stitch, Figma AI, Midjourney, DALL-E, Adobe Firefly** যেকোনো AI tool-এ দাও। Naaz Kool এর exact visual এর জন্য।

---

### 9.1 Google Stitch Prompts

```
PROMPT 1 — HERO SECTION:
"Design a full-screen hero section for a premium Indian pet shop 
called 'Naaz Kool Pet Shop'. Dark cinematic aesthetic with deep 
charcoal (#0C0A08) background. A stunning full-bleed photo of a 
Golden Retriever puppy with dark overlay. Large bold white headline 
'WHERE EVERY PET FINDS THEIR FOREVER HOME.' using Syne font weight 
800. Terracotta (#D4593F) accent on period. Glassy CTA button. 
Scrolling breed ticker in terracotta below. Film grain texture overlay. 
Mobile-first responsive design."

PROMPT 2 — PET CARD:
"Design a dark-themed pet listing card for 'Naaz Kool Pet Shop'. 
Dark card background (#1E1A14), full-bleed pet photo (16:11 ratio), 
terracotta 'CERTIFIED' badge top-left, white heart icon top-right. 
Info section: breed name in small caps Outfit 500, pet name in Syne 700 
large, price in terracotta, vaccination badge in muted green. 
Sharp corners (border-radius 12px). Hover state shows info overlay 
from bottom with gradient. Premium feel."

PROMPT 3 — GROOMING SECTION:
"Design a full-width split section for pet grooming services. 
Left half: dark charcoal background with before/after grooming photos 
in a polaroid-style stack. Right half: terracotta (#D4593F) background 
with 'GLOW UP YOUR PET.' headline in Syne 800 white font, service 
checklist with white checkmarks, price starting text in gold (#E8B84B), 
cream CTA button. Diagonal divider between sections. Editorial magazine style."

PROMPT 4 — HOMEPAGE FULL:
"Create a complete dark luxury pet shop homepage for 'Naaz Kool Pet Shop' 
India. Color palette: deep charcoal (#0C0A08) background, terracotta 
(#D4593F) primary, gold (#E8B84B) accent, cream (#FAF6F0) text. 
Fonts: Syne (headings), Outfit (body). Sections: dark navbar with logo, 
full-bleed hero with puppy, scrolling ticker, editorial pet grid, 
contrast light product section, grooming diagonal split, testimonials, 
community banner, footer. Magazine editorial layout. Indian pet shop context."

PROMPT 5 — MOBILE APP VIEW:
"Design mobile screens for 'Naaz Kool Pet Shop' PWA app. Dark theme 
(#0C0A08). Show: 1) Home screen with full-bleed hero and floating info 
card, 2) Pet listing page with filter chips and grid cards, 3) Pet detail 
page with full-screen image and sliding info panel, 4) Grooming booking 
form with date picker. Use terracotta (#D4593F) and gold (#E8B84B) 
accents. Syne + Outfit fonts. Bottom tab navigation. Premium Indian brand."
```

---

### 9.2 Figma AI / Framer AI Prompts

```
PROMPT — COMPONENT SET:
"Generate a dark luxury design system for Naaz Kool Pet Shop:
- Color tokens: ink-950 (#0C0A08), terra-500 (#D4593F), gold-500 (#E8B84B), cream-100 (#FAF6F0)
- Typography: Syne 700/800 for headings, Outfit 300-600 for body, Playfair Display italic for accents
- Components needed: navbar (dark glass), hero section, pet card (dark), product card (light), 
  grooming card, testimonial card, bottom sticky CTA, breed carousel item, footer
- Style: editorial magazine meets premium Indian pet boutique
- Include hover states and mobile variants for each component"
```

---

### 9.3 Midjourney / DALL-E Image Prompts

```
HERO BACKGROUND:
"Stunning Golden Retriever puppy portrait, professional photography, 
dark moody lighting, bokeh background, warm cinematic tones, 
editorial style, 16:9 ratio, high resolution, premium pet photography, 
for website background use, dark vignette edges --ar 16:9 --style raw"

PET CARD IMAGES:
"[Breed name] puppy, professional white studio photography, 
top-down angle, warm lighting, clean background for card image, 
high detail fur, cute expression --ar 4:3 --style raw"

GROOMING SECTION:
"Dog being groomed at premium pet salon, professional groomer, 
warm lighting, editorial photography, before and after concept, 
happy dog, luxury spa aesthetic --ar 1:1"

LIFESTYLE SHOT (Community Section):
"Young Indian woman with her Golden Retriever in urban setting, 
lifestyle photography, warm sunset light, candid, modern city background, 
premium lifestyle brand aesthetic --ar 3:2"
```

---

## 10. Component Library

### 10.1 Button Variants

```css
/* Primary — Terracotta */
.btn-terra {
  background: var(--terra-500);
  color: white;
  padding: 13px 28px;
  border-radius: 8px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  box-shadow: var(--shadow-terra);
  transition: all 0.2s ease;
}
.btn-terra:hover {
  background: var(--terra-400);
  transform: translateY(-1px);
  box-shadow: 0 12px 28px rgba(212,89,63,0.45);
}

/* Accent — Gold outline */
.btn-gold-outline {
  background: transparent;
  color: var(--gold-500);
  border: 1.5px solid var(--gold-500);
  padding: 12px 26px;
}
.btn-gold-outline:hover {
  background: var(--gold-500);
  color: var(--ink-950);
}

/* Ghost — Light on dark */
.btn-ghost-light {
  background: rgba(250,246,240,0.08);
  color: var(--cream-100);
  border: 1px solid rgba(250,246,240,0.15);
  padding: 12px 26px;
}

/* Dark — For light sections */
.btn-dark {
  background: var(--ink-950);
  color: var(--cream-100);
  padding: 13px 28px;
}
```

### 10.2 Badge Variants

```css
/* Certified — Terra */
.badge-certified { background: var(--terra-500); color: white; }

/* New — Gold */
.badge-new { background: var(--gold-500); color: var(--ink-950); }

/* Vaccinated — Green */
.badge-vaccinated { background: #1A3D2B; color: #4CAF78; border: 1px solid #2D6B47; }

/* Hot/Trending — Dark terra */
.badge-hot { background: #3D1510; color: var(--terra-300); border: 1px solid var(--terra-700); }

/* Sold Out — Gray */
.badge-sold { background: rgba(255,255,255,0.06); color: var(--cream-400); }
```

### 10.3 Section Pattern

```
Every major section follows this structure:

DARK section → LIGHT section → DARK section → LIGHT section

This alternating contrast is the NAAZ KOOL visual signature.
It creates dramatic visual rhythm — like flipping magazine pages.

Dark sections: bg = var(--ink-950) or var(--ink-900)
Light sections: bg = var(--bg-light) = #FAF6F0
```

### 10.4 Animation Tokens

```typescript
// Framer Motion variants — Naaz Kool style
// More dramatic than PawMarket

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

// Page transition — dramatic
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" }
}
```

---

## 11. Database Schema (Firebase)

```
firestore/
├── pets/
│   └── {petId}
│       ├── name: string
│       ├── breed: string
│       ├── price: number
│       ├── age_weeks: number
│       ├── gender: 'male' | 'female'
│       ├── color: string
│       ├── weight_kg: number
│       ├── vibe: 'energetic' | 'calm' | 'playful' | 'cuddly'  ← NEW
│       ├── description: string
│       ├── personality_traits: string[]                         ← NEW
│       ├── images: string[]
│       ├── video_url?: string                                   ← NEW
│       ├── parent_photos?: string[]                             ← NEW
│       ├── is_vaccinated: boolean
│       ├── is_certified: boolean
│       ├── is_available: boolean
│       ├── location: string
│       ├── health_certificate_url?: string
│       ├── created_at: timestamp
│       └── featured: boolean
│
├── products/
│   └── {productId}
│       ├── name: string
│       ├── brand: string
│       ├── category: string
│       ├── subcategory?: string
│       ├── price: number
│       ├── discount_price?: number
│       ├── description: string
│       ├── ingredients?: string                                  ← NEW (for food)
│       ├── images: string[]
│       ├── variants?: [{size, flavor, price}]                   ← NEW
│       ├── stock: number
│       ├── suitable_breeds: string[]
│       ├── rating: number
│       ├── review_count: number
│       ├── is_subscription_available: boolean                    ← NEW
│       └── created_at: timestamp
│
├── grooming_services/                                            ← NEW
│   └── {serviceId}
│       ├── name: 'basic' | 'signature' | 'royal'
│       ├── description: string
│       ├── includes: string[]
│       ├── price_small: number
│       ├── price_medium: number
│       ├── price_large: number
│       ├── duration_minutes: number
│       ├── is_home_service: boolean
│       └── image: string
│
├── grooming_bookings/                                            ← NEW
│   └── {bookingId}
│       ├── user_id: string
│       ├── service_id: string
│       ├── pet_name: string
│       ├── pet_breed: string
│       ├── pet_size: 'small' | 'medium' | 'large'
│       ├── service_type: 'home' | 'salon'
│       ├── address?: string
│       ├── date: timestamp
│       ├── time_slot: string
│       ├── status: 'pending'|'confirmed'|'in_progress'|'done'
│       ├── payment_id: string
│       ├── amount: number
│       └── notes?: string
│
├── pet_bookings/
│   └── {bookingId}
│       ├── pet_id: string
│       ├── user_id: string
│       ├── customer_name: string
│       ├── phone: string
│       ├── email: string
│       ├── city: string
│       ├── address: string
│       ├── preferred_date: timestamp
│       ├── status: 'pending'|'confirmed'|'shipped'|'delivered'
│       ├── payment_id: string
│       ├── amount: number
│       └── created_at: timestamp
│
├── orders/
│   └── {orderId}
│       ├── user_id: string
│       ├── items: [{product_id, qty, price, variant?}]
│       ├── total: number
│       ├── status: 'pending'|'processing'|'shipped'|'delivered'
│       ├── payment_id: string
│       ├── address: object
│       ├── paw_points_earned: number                             ← NEW
│       └── created_at: timestamp
│
├── users/
│   └── {userId}
│       ├── name: string
│       ├── email: string
│       ├── phone: string
│       ├── wishlist: string[]
│       ├── my_pets: [{name, breed, age, photo}]                 ← NEW
│       ├── paw_points: number                                    ← NEW
│       ├── fcm_token: string
│       └── created_at: timestamp
│
├── community_posts/                                              ← NEW
│   └── {postId}
│       ├── user_id: string
│       ├── user_name: string
│       ├── user_photo: string
│       ├── pet_name: string
│       ├── pet_breed: string
│       ├── caption: string
│       ├── images: string[]
│       ├── likes: number
│       ├── comments_count: number
│       └── created_at: timestamp
│
└── reviews/
    └── {reviewId}
        ├── entity_id: string
        ├── entity_type: 'pet' | 'product' | 'grooming'
        ├── user_id: string
        ├── user_name: string
        ├── rating: number
        ├── comment: string
        ├── images?: string[]
        ├── verified_purchase: boolean
        └── created_at: timestamp
```

---

## 12. Folder Structure

```
src/
├── app/
│   ├── layout.tsx                 # Syne + Outfit + Playfair fonts
│   ├── page.tsx                   # Home
│   ├── pets/
│   │   ├── page.tsx               # Listings
│   │   └── [id]/page.tsx          # Detail
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── grooming/                  ← NEW
│   │   ├── page.tsx
│   │   └── book/page.tsx
│   ├── community/                 ← NEW
│   │   └── page.tsx
│   ├── booking/page.tsx
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── order-success/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── api/
│       ├── payment/create-order/route.ts
│       └── notifications/send/route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Dark glass navbar
│   │   ├── Footer.tsx             # Dark footer
│   │   ├── SideDrawer.tsx         # Mobile side menu (not bottom nav)
│   │   ├── MarqueeTicker.tsx      # Terra scrolling ticker
│   │   └── WhatsAppButton.tsx
│   ├── home/
│   │   ├── HeroSection.tsx        # Full-bleed cinematic
│   │   ├── FeaturedPets.tsx       # Editorial grid
│   │   ├── NaazKoolPromise.tsx    # 4 dark cards
│   │   ├── ProductShop.tsx        # Light contrast section
│   │   ├── GroomingTeaser.tsx     # Diagonal split
│   │   ├── BreedsCarousel.tsx     # Horizontal scroll
│   │   ├── Testimonials.tsx       # Dark cards
│   │   ├── CommunityBanner.tsx    # Terra-gold gradient
│   │   └── BlogPreview.tsx        # Light section
│   ├── pets/
│   │   ├── PetCard.tsx            # Dark editorial card
│   │   ├── PetGrid.tsx
│   │   ├── PetFilters.tsx         # Includes vibe filter
│   │   └── VibeFilter.tsx         ← NEW
│   ├── products/
│   │   ├── ProductCard.tsx        # Light minimal card
│   │   ├── ProductGrid.tsx
│   │   └── ProductDetail.tsx
│   ├── grooming/                  ← NEW
│   │   ├── ServiceCard.tsx
│   │   ├── BookingForm.tsx
│   │   └── GroomingGallery.tsx
│   ├── community/                 ← NEW
│   │   ├── PostCard.tsx
│   │   └── PostGrid.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── SearchBar.tsx          # Dark styled
│       ├── Rating.tsx
│       ├── ImageGallery.tsx
│       ├── BottomStickyBar.tsx    # Mobile sticky CTA
│       ├── Toast.tsx
│       └── GrainOverlay.tsx       # Film grain texture ← NEW
│
├── lib/
│   ├── firebase/
│   │   ├── config.ts
│   │   ├── pets.ts
│   │   ├── products.ts
│   │   ├── grooming.ts
│   │   ├── orders.ts
│   │   ├── community.ts
│   │   └── notifications.ts
│   ├── razorpay/index.ts
│   └── utils/
│       ├── formatPrice.ts
│       └── whatsapp.ts
│
├── hooks/
│   ├── useCart.ts
│   ├── useWishlist.ts
│   ├── usePets.ts
│   ├── useProducts.ts
│   ├── usePawPoints.ts           ← NEW
│   └── useFirebaseAuth.ts
│
├── store/
│   ├── cartStore.ts
│   └── wishlistStore.ts
│
└── types/
    ├── pet.ts
    ├── product.ts
    ├── booking.ts
    ├── grooming.ts                ← NEW
    └── order.ts
```

---

## 13. Development Phases

### Phase 1 — Foundation (Week 1-2)
```
✅ Next.js 15 + TypeScript + Tailwind v4 setup
✅ Google Fonts: Syne + Outfit + Playfair Display
✅ Dark design system (CSS variables, tokens)
✅ Dark Navbar + Footer + Marquee Ticker
✅ PWA setup
✅ Firebase config
```

### Phase 2 — Core Pages (Week 3-4)
```
✅ Home page — all 10 sections
✅ Pet listing page (with vibe filter)
✅ Pet detail page (full-bleed layout)
✅ Product listing + detail
```

### Phase 3 — Exclusive Features (Week 5-6)
```
✅ Grooming service page
✅ Grooming booking system
✅ Community page (basic)
✅ Paw Points system (basic)
```

### Phase 4 — Commerce (Week 7)
```
✅ Booking flow — pet
✅ Cart + Checkout
✅ Razorpay integration
✅ Order confirmation
✅ WhatsApp integration
```

### Phase 5 — Polish & Launch (Week 8)
```
✅ Framer Motion animations (dramatic, editorial)
✅ Push notifications (FCM)
✅ Performance optimization (Lighthouse 90+)
✅ Mobile experience polish
✅ Deploy → Render.com
✅ Go Live! 🚀
```

---

## 🎯 Final Summary

| Item | Decision |
|---|---|
| Brand Name | Naaz Kool Pet Shop |
| Design Mood | Dark Luxury + Terracotta (editorial) |
| Primary Color | #D4593F (Terracotta) |
| Accent Color | #E8B84B (Gold) |
| Background | #0C0A08 (Deep dark ink) |
| Display Font | **Syne** 700/800 (Google Fonts) |
| Body Font | **Outfit** 300-600 (Google Fonts) |
| Accent Font | **Playfair Display** italic (Google Fonts) |
| Framework | Next.js 15 + TypeScript + Tailwind v4 |
| Backend | Firebase (Firestore + Auth + Storage + FCM) |
| Payment | Razorpay |
| Hosting | Render.com (Free, commercial OK) |
| PWA | ✅ Android installable |
| Unique Feature | Grooming Service + Paw Points + Community |
| Mobile Nav | Side Drawer (different from PawMarket) |
| Layout Style | Asymmetric, editorial, magazine-inspired |

### vs PawMarket — Key Differences
```
PawMarket  → Light theme, green, professional, bottom nav
Naaz Kool  → Dark luxury, terracotta, editorial, side drawer

PawMarket  → Grid layout, rounded cards
Naaz Kool  → Magazine layout, sharp elegant cards

PawMarket  → "Trusted marketplace"
Naaz Kool  → "Premium brand experience"
```

---

*PRD prepared for Naaz Kool Pet Shop — v1.0 — March 2026*  
*AI Design Prompts: Section 9 — Google Stitch, Figma AI, Midjourney*  
*Next step: Use Section 9 prompts in Google Stitch for initial design generation*
