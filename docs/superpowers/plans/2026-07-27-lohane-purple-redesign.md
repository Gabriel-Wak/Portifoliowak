# Redesign Lohane Purple — Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Gabriel portfolio UI to a Lohane-inspired layout with purple/white tokens, keeping Digital smoke, tech icons, projects, FAQ, and the mascot.

**Architecture:** Keep Vite + React + Tailwind + react-router. Replace design tokens and restyle Layout/Home sections; introduce a new `HeroBanner` (Lohane split layout + boneco). Reuse data from `src/data/projects.ts` and existing `FAQSection` / `ProjectShowcase` / `TechFloatBg` / `DigitalText`.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind 3, react-router-dom 7

## Global Constraints

- Palette: purple + white (light) / deep purple + white (dark) — no lime green, no blue/yellow accents
- Keep: `/boneco.png`, Digital smoke effect, Sobre tech icons, project cards, FAQ content
- Remove from hero: floating project cards
- Hero: Lohane-style split layout with Gabriel’s mascot (option C)
- Supabase remains optional (no throw on missing env)
- Do not commit `.env` or secrets
- Commits: conventional commits; only when asked unless plan step requires checkpoint commits during long runs — prefer batch commits when user asked for deploy later

## File map

| File | Role |
|------|------|
| `src/index.css` | Tokens, section shells, Lohane layout utilities |
| `index.html` | Fonts: Archivo Black + JetBrains Mono + Poppins |
| `src/components/HeroBanner.tsx` | New hero (create) |
| `src/components/DigitalText.tsx` | Keep smoke; colors via CSS vars |
| `src/components/Navigation.tsx` | Restyle |
| `src/components/Footer.tsx` | Restyle |
| `src/components/FAQSection.tsx` | Visual restyle only |
| `src/components/ProjectShowcase.tsx` | Visual restyle |
| `src/components/TechFloatBg.tsx` | Keep; tint for purple |
| `src/pages/Home.tsx` | New section order, drop FloatingProjects |
| `src/pages/AboutPage.tsx` / `ProjectsPage.tsx` / `ContactPage.tsx` | Align tokens/classes |
| `src/components/HeroHeading.tsx` | Stop using on Home (can keep file unused or delete) |
| `src/components/FloatingProjects.tsx` | Unused on Home |

---

### Task 1: Design tokens + fonts

**Files:**
- Modify: `index.html`
- Modify: `src/index.css` (`:root`, `.dark`, base)

- [ ] **Step 1:** Add Google fonts in `index.html`: Archivo Black, JetBrains Mono (keep Poppins).
- [ ] **Step 2:** Replace CSS variables with purple/white system:

```css
:root {
  --bg: #faf8ff;
  --surface: rgba(255, 255, 255, 0.9);
  --text: #1a1025;
  --muted: #6b5f7a;
  --border: rgba(88, 28, 135, 0.14);
  --accent: #7c3aed;
  --accent-strong: #6d28d9;
  --accent-soft: rgba(124, 58, 237, 0.14);
  --accent-block: #7c3aed;
  --accent-block-text: #0f0618;
  --digital-1: #c4b5fd;
  --digital-2: #8b5cf6;
  --digital-3: #a78bfa;
  --digital-4: #6d28d9;
  --digital-glow: rgba(124, 58, 237, 0.28);
  --font-display: 'Archivo Black', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
}
.dark {
  --bg: #0f0618;
  --surface: rgba(28, 16, 42, 0.72);
  --text: #f5f0ff;
  --muted: #b7a8c9;
  --border: rgba(196, 181, 253, 0.16);
  --accent: #a78bfa;
  --accent-strong: #c4b5fd;
  --accent-soft: rgba(167, 139, 250, 0.18);
  --accent-block: #6d28d9;
  --accent-block-text: #faf8ff;
  --digital-1: #ddd6fe;
  --digital-2: #a78bfa;
  --digital-3: #8b5cf6;
  --digital-4: #c4b5fd;
  --digital-glow: rgba(167, 139, 250, 0.32);
}
```

- [ ] **Step 3:** Wire `font-display` / mono utilities; `npm run build` must pass.

---

### Task 2: HeroBanner

**Files:**
- Create: `src/components/HeroBanner.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1:** Create split hero: left copy + CTAs, right boneco with soft purple circles; include `DigitalText` in headline.
- [ ] **Step 2:** Wire into `Home`; remove `FloatingProjects` and old `HeroHeading` from Home.
- [ ] **Step 3:** Visually verify mascot is outside SVG filter paint (no flicker).

---

### Task 3: Navigation + Footer restyle

**Files:**
- Modify: `src/components/Navigation.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/index.css` (nav/footer classes)

- [ ] **Step 1:** Nav: logo + links + theme toggle; Lohane-like density; purple accents.
- [ ] **Step 2:** Footer: comment labels + quick links + contact; purple block optional.

---

### Task 4: Home sections restyle

**Files:**
- Modify: `src/pages/Home.tsx`
- Modify: `src/components/ProjectShowcase.tsx`
- Modify: `src/components/FAQSection.tsx`
- Modify: `src/components/TechFloatBg.tsx` / `TechMarquee.tsx` / `ServicesSection.tsx` / `CTASection.tsx`
- Modify: `src/index.css`

- [ ] **Step 1:** Sobre block with `/* sobre mim */` + keep TechFloatBg.
- [ ] **Step 2:** Projetos on accent block; keep ProjectShowcase images/data.
- [ ] **Step 3:** FAQ restyle only (same questions).
- [ ] **Step 4:** CTA/contact teaser in accent block.

---

### Task 5: Secondary pages + QA

**Files:**
- Modify: `src/pages/AboutPage.tsx`, `ProjectsPage.tsx`, `ContactPage.tsx`

- [ ] **Step 1:** Align pages to new tokens/classes.
- [ ] **Step 2:** `npm run typecheck` + `npm run build`.
- [ ] **Step 3:** Smoke-check light/dark + mobile breakpoints.

---

## Spec coverage check

| Spec item | Task |
|-----------|------|
| Purple/white tokens | 1 |
| Hero Lohane + boneco | 2 |
| Keep Digital / icons / projects / FAQ | 2, 4 |
| Remove floating cards | 2 |
| Nav/footer | 3 |
| Secondary routes | 5 |

## Execution

Preferred: **Inline Execution** in this session after plan save.
