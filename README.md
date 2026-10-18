# TC-Learning Studioz — Website

A production-ready website for TC-Learning Studioz, rebuilt with the structural
and visual language of the University of Warwick's site (masthead, notched
header divider, hero pattern, coloured section system, stat bars, footer
layout) applied to Learning Studioz's own content and brand.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, with
three fully working forms (Contact, Enroll, Employer/Apprenticeship inquiry)
that validate, persist to a database, and send email alerts.

---

## 1. What's real here vs. what you need to configure

Everything on the site works out of the box **except email sending**, which
needs a free API key (5-minute setup, see below). Specifically:

| Feature | Status |
|---|---|
| All pages, content, navigation | ✅ Fully built, real content |
| Contact / Enroll / Employer forms — validation | ✅ Fully working |
| Forms saving to a database | ✅ Fully working (SQLite, see caveat below) |
| Forms sending email alerts | ⚠️ Needs a free Resend API key |
| Spam protection (honeypot) | ✅ Fully working |
| SEO metadata, sitemap, robots.txt | ✅ Fully working |

---

## 2. Getting started (local development)

Requires **Node.js 22.13 or newer** (the built-in database module needs
this — see §5). Check your version with `node -v`; upgrade at
[nodejs.org](https://nodejs.org) if needed.

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY (see §4)
npm run dev
```

Visit `http://localhost:3000`. Submitting any form will save to a local
SQLite database at `data/studioz.db` even before you configure email — so you
can test the full flow immediately.

---

## 3. Editing content

**Every piece of marketing copy on the site lives in one file:**
`src/lib/content.ts`. Program details, homepage copy, about-page bios, FAQ
answers, contact info, hours — all of it. Edit that file and the whole site
updates; you should not need to touch any page or component file just to
change text.

A couple of things worth knowing:

- **Address/phone discrepancy**: the client's existing live site lists two
  different addresses — the footer says Buea, Cameroon, while the Contact
  page says Lagos, Nigeria. This site currently uses the Lagos, Nigeria
  address (from `site.address` in `content.ts`) as the single source of
  truth. **Please confirm the correct address and phone number with the
  client** and update `content.ts` accordingly — the phone number currently
  in there (`+234 800 000 0000`) is a placeholder.
- **Program images / photography**: the site currently uses colour and icon
  treatments instead of photography (the client's existing site links to
  Getty preview images via their GoDaddy hosting, which aren't licensed for
  reuse elsewhere). Drop real photography into `/public/images/` and swap
  it in as you get licensed images from the client.
- **Logo**: the header/footer currently use a text-based "TC" badge as a
  placeholder wordmark. Swap in the client's real logo file by adding it to
  `/public/` and updating `src/components/Header.tsx` and `Footer.tsx`.

---

## 4. Setting up email alerts (Resend)

Forms save to the database with zero configuration. To also get an email
whenever someone submits a form:

1. Create a free account at [resend.com](https://resend.com).
2. In the Resend dashboard, verify a sending domain you own (e.g.
   `learningstudioz.org`) — or, while testing, just use Resend's shared
   onboarding address (shown in their dashboard) as the "from" address.
3. Copy your API key from the dashboard.
4. In `.env.local` (create it from `.env.example` if you haven't), set:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   NOTIFY_FROM_EMAIL="TC-Learning Studioz <onboarding@resend.dev>"
   NOTIFY_EMAIL=info@learningstudioz.org
   ```
5. Restart the dev server. Submissions will now trigger a real email.

Until this is configured, the server just logs a note to the console and
still saves the submission — nothing breaks.

---

## 5. Database — important note before deploying

Form submissions are stored in a local SQLite file at `data/studioz.db`,
using **Node's built-in `node:sqlite` module** — not the popular
`better-sqlite3` package. This was a deliberate choice: `better-sqlite3`
compiles a native C++ addon on install, which frequently fails on Windows
machines without Visual Studio Build Tools installed (a multi-GB download).
`node:sqlite` ships inside Node.js itself (v22.5+, no extra setup needed on
v22.13+ or v23.4+), so `npm install` just works everywhere with zero native
compilation. It's marked "experimental" by Node (you'll see a harmless
console warning) but is stable enough for a small submissions table like
this, and is a Release Candidate as of newer Node versions.

This is genuinely persistent and works great if you
deploy to:

- A VPS (DigitalOcean, Linode, Hetzner, etc.)
- Render, Railway, or Fly.io
- Any host with a persistent filesystem / Docker volume

**It will NOT reliably persist on Vercel's default serverless functions**,
because their filesystem is ephemeral (a redeploy or cold start can wipe
`data/studioz.db`). If you deploy to Vercel, swap the implementation in
`src/lib/db.ts` for a hosted database instead — Vercel Postgres, Supabase,
Neon, and Turso all have generous free tiers and take about 15 minutes to
wire up. Every API route only calls the functions exported from `db.ts`
(`insertContactSubmission`, `insertEnrollSubmission`,
`insertApprenticeshipSubmission`), so that file is the only one you need to
change — no page or form component needs to know where the data goes.

To inspect submissions locally or on a VPS, you can query the SQLite file
directly:

```bash
sqlite3 data/studioz.db "SELECT * FROM contact_submissions;"
sqlite3 data/studioz.db "SELECT * FROM enroll_submissions;"
sqlite3 data/studioz.db "SELECT * FROM apprenticeship_submissions;"
```

(or use a GUI tool like [DB Browser for SQLite](https://sqlitebrowser.org/)).

---

## 6. Design system notes

- **Colour palette** is drawn from the University of Warwick's current
  (2025) brand: deep plum masthead (`#3C1053`), near-black ink (`#0C0C0C`),
  and pastel coral/lavender/pale-blue used as section accents. All tokens
  live in `src/app/globals.css`. Learning Studioz's own five program colours
  (green/blue/purple/orange/amber) are kept as-is to identify each
  discipline, the way Warwick uses coloured "spotlight" sections.
- **Typeface**: Warwick's live site uses Neue Haas Grotesk, a commercial
  Monotype family. This project uses **Inter** (self-hosted via
  `@fontsource`, free, near-identical neutral grotesque skeleton) as a
  production-safe stand-in. If the client has a Neue Haas Grotesk / Adobe
  Fonts licence, replace the `@fontsource` imports in `src/app/layout.tsx`
  with the licensed font — nothing else needs to change, since every
  component reads `var(--font-sans)` / `var(--font-heading)` rather than
  naming a font directly.
- **Signature notch divider** (`src/components/ui/NotchDivider.tsx`) is
  adapted from Warwick's id7 template — the same angled seam shape used
  under their masthead, rendered here as an SVG stroke.
- The Warwick crest/logo and exact CSS colour tokens (which live in an
  external stylesheet not captured in the site mirror you provided) were
  **not** reproduced — only the generally-observable layout, colour, and
  typographic patterns were used, applied to Learning Studioz's own name and
  branding.

---

## 7. Project structure

```
src/
  app/                    Pages (App Router)
    api/                  Form submission endpoints
    programs/[slug]/      Dynamic program detail pages
  components/
    forms/                The 3 working forms + shared field primitives
    sections/             Reusable page sections (hero, stat bar, FAQ, etc.)
    ui/                   Button, Container, notch divider, etc.
  lib/
    content.ts            ALL site copy — edit here to change text
    validations.ts         Zod schemas (shared by forms and API routes)
    db.ts                  SQLite storage layer
    email.ts               Resend email layer
```

---

## 8. Deployment checklist

- [ ] Confirm real address/phone/email with the client and update `content.ts`
- [ ] Add real logo and photography, replacing placeholders
- [ ] Set up Resend (or your preferred email provider) — see §4
- [ ] Decide on hosting: VPS/Docker (SQLite works as-is) vs. Vercel
      (swap `db.ts` for a hosted database first — see §5)
- [ ] Update `site.url` in `content.ts` to the real production domain
      (used for SEO metadata, sitemap, and Open Graph tags)
- [ ] Run `npm run build` locally to confirm a clean production build
- [ ] If a Neue Haas Grotesk licence is available, swap the font (see §6)
