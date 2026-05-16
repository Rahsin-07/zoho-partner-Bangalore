# ZoFlowX v6 — Zoho Partner Bangalore Website

A premium, modern rebuild of the ZoFlowX site targeting Bangalore Zoho clients.
Built with **Next.js 14 (App Router) + React 18 + Bootstrap 5**.

This v6 preserves the original v5 brand identity (tri-color palette derived from the
"X" in the ZoFlowX logo: **Blue · Red · Yellow**) and elevates every section with
polished animations, gradient borders, kinetic hover states and refined typography.

## What's new in v6 vs v5

- **All-new content & sections** mapped to the 17-section Bangalore content brief
- **6-card hero** featuring the 6 hero sub-sections (consulting, custom, migration, analytics, CRM, developer)
- **New sections**: TrustedBrands, Journey, Industries, ZohoProducts (16 apps), DeveloperHire, CustomBuild, DiscoveryCall, Contact form
- **More premium polish**: tri-color top stripes on cards, sweep effects, animated avatars, real form with `mailto` submit
- **Animated marquee** for trusted brands
- **14 Bangalore-specific FAQs**
- **Footer** with Bangalore / Mumbai / Chennai location chips

## Project structure

```
zoflowx-v6/
├── app/
│   ├── layout.js          # Global layout (fonts, bootstrap)
│   └── page.js            # Home page — composes all 17 sections
├── components/
│   ├── Navbar.jsx         # Sticky navbar w/ tri-color top stripe
│   ├── Hero.jsx           # Section 1 — 6 service intro cards + headline
│   ├── TrustedBrands.jsx  # Section 2 — marquee + stats strip
│   ├── Journey.jsx        # Section 3 — two-card "where you are"
│   ├── Problem.jsx        # Section 4 — 6 common problems
│   ├── WhyUs.jsx          # Section 5 — 3 reasons + chip bullets
│   ├── Process.jsx        # Section 6 — 6-step timeline (dark bg)
│   ├── Services.jsx       # Section 7 — 5 service cards + dark CTA
│   ├── Industries.jsx     # Section 8 — 16-industry grid
│   ├── ZohoProducts.jsx   # Section 9 — 16 Zoho apps
│   ├── DeveloperHire.jsx  # Section 10 — copy + developer mock card
│   ├── CustomBuild.jsx    # Section 11 — dark CTA banner
│   ├── CaseStudies.jsx    # Section 12 — 3 case study cards
│   ├── Testimonials.jsx   # Section 13 — 3 quote cards with star rating
│   ├── DiscoveryCall.jsx  # Section 14 — Arul Raj founder card + CTA
│   ├── Resources.jsx      # Section 15 — 3 article cards
│   ├── Contact.jsx        # Section 16 — form + channels
│   ├── FAQ.jsx            # Section 17 — 14 Bangalore-focused FAQs
│   ├── Footer.jsx         # Dark footer w/ location chips + socials
│   ├── LogoMark.jsx       # Tri-color X SVG
│   └── ScrollTop.jsx      # Floating scroll-to-top
└── styles/globals.css     # Design tokens, animations, utilities
```

## Design tokens

All in `styles/globals.css` under `:root`:

```css
--brand-blue:   #2563eb
--brand-red:    #dc2626
--brand-yellow: #f59e0b
--grad-tri:     linear-gradient(95deg, blue → red → yellow)
```

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Notes

- The contact form uses `mailto:` for the demo. Wire it to your backend, Zoho Forms,
  or a serverless endpoint for production.
- Industry & brand logos are rendered as styled text placeholders — drop in real
  image logos in `TrustedBrands.jsx` and `Industries.jsx` when ready.
- Bookings link goes to `https://arul-zoflowx.zohobookings.in/`.
- LinkedIn: `https://www.linkedin.com/in/arulraj-inboxist/`.
