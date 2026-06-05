# BC CourseFinder™ — Design System

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Colour Palette](#2-colour-palette)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Page Architecture & Routing](#5-page-architecture--routing)
6. [Landing Page Components](#6-landing-page-components) _(index.html)_
7. [Auth Page Components](#7-auth-page-components) _(login.html)_
8. [Chat Interface Components](#8-chat-interface-components) _(login.html + chat.html)_
9. [Shared Components](#9-shared-components)
10. [Interaction & State Patterns](#10-interaction--state-patterns)
11. [Content Sources](#11-content-sources)
12. [Decisions Log](#12-decisions-log)

---

## 1. Design Philosophy

The product is built on a single principle: **clarity earns trust**.

Belgium Campus is an accredited, 25-year-old institution. BC CourseFinder serves students making one of the most consequential decisions of their lives — choosing a qualification. Every design decision is grounded in that responsibility.

### What was deliberately avoided

| Avoided | Reason |
|---|---|
| Emoji icons (🎯💬🧮) | Signals a template, not a considered product. Emoji are inconsistently rendered across platforms, inaccessible without explicit `aria-label`, and signal low production value. |
| Invented data (salary ranges, demand bars) | No source. Presenting made-up figures as fact is a trust liability. |
| Three-card "feature" grids | The generic SaaS template pattern — adds no information value on a page the user has already chosen to visit. |
| Decorative `✦` spark symbols | Overused AI-generated flourish. Removed from landing page; retained on the auth hero panel where it was already embedded in the existing design. |
| Gradient-filled UI everywhere | Decoration for its own sake. Depth comes from spacing and typography, not colour effects. |
| Assumed or extrapolated content | All factual content is sourced directly from belgiumcampus.ac.za. |

### What was prioritised instead

- **Editorial typography** as the primary design element — the headline IS the design.
- **Real programme data** with actual NQF levels, SAQA IDs, and entry requirements.
- **A table-style qualifications layout** — precise, scannable, professional. Mirrors how a university prospectus presents programmes.
- **A single sourced hero stat** (`8%+`) — one number, earned, not invented.
- **Colour restraint** — gold only on primary CTAs and essential accents.
- **Generous whitespace** — breathing room communicates institutional confidence.
- **A complete, working user journey** — every button leads somewhere intentional.

---

## 2. Colour Palette

Both `style.css` and `auth.css` define their own token sets. This document normalises them into a single reference.

| Token (landing / chat) | Token (auth) | Hex | Usage |
|---|---|---|---|
| `--navy` | `--bc-navy` | `#0f2847` | Hero/calculator/CTA backgrounds; nav mark; NQF badges; auth submit button |
| `--navy-deep` | — | `#091c34` | Final CTA section — one step deeper than navy for visual progression |
| `--blue` | `--bc-blue` | `#1b4f8a` | Auth submit hover; interactive link colour |
| `--blue-mid` | `--bc-blue-mid` | `#2563b0` | Link hover on auth helper text |
| `--gold` | `--bc-gold` | `#c9a84c` | Primary CTAs; nav mark letter; admission bullet dots; NQF badge text; focus ring on auth inputs |
| `--gold-lt` | `--bc-gold-light` | `#e8c96e` | Large display text on dark backgrounds (hero stat, APS score, auth hero headings) |
| `--cream` | `--bc-cream` | `#faf8f4` | Primary page background |
| `--warm` | `--bc-warm` | `#f2ede3` / `#f5f0e8` | Trust strip (landing); warm surface tints |
| `--white` / `--surface` | `--surface` | `#ffffff` | Content cards; auth card background; admission section |
| `--surface-2` | `--surface-2` | `#f9f8f6` | Auth input default background |
| `--text` | `--text-primary` | `#0f1f35` | Primary body text |
| `--text-2` | `--text-secondary` | `#4a5568` | Secondary body text; form labels |
| `--text-3` | `--text-muted` | `#8a96a8` | Muted labels; placeholders; metadata |
| `--line` | `--border` | `rgba(15,40,71,.08–.09)` | All borders and dividers on light backgrounds |
| `--line-w` | — | `rgba(255,255,255,.09)` | Borders on dark (navy) backgrounds |
| — | `--error` | `#dc2626` | Form validation error state |
| — | `--error-bg` | `#fef2f2` | Error input background tint |
| — | `--success` | `#16a34a` | Success alert (login confirmed, profile created) |

### Colour usage rules

- **Gold is scarce.** It appears on: primary CTAs, nav mark letters, hero stat text, APS score display, admission bullet dots, qualification row hover accent, and auth input focus rings. Nowhere else.
- **Cream as the base, not white.** `#faf8f4` reduces eye strain and makes the navy sections read as stronger contrast anchors.
- **Footer is darker than hero.** `#07111f` signals "end of document" without any additional design element.
- **Error red is isolated to the auth form.** It never appears on the landing page or chat interface — those surfaces have no user-input validation.

---

## 3. Typography

### Typefaces

| Family | Role | Source |
|---|---|---|
| DM Serif Display | All display headings, programme names, stat figures, card titles | Google Fonts |
| DM Sans | All body copy, form labels, UI elements, buttons | Google Fonts |

`auth.css` additionally declares `system-ui` as a fallback after DM Sans. The landing page loads both typefaces via `<link>` in `<head>`. The auth page inherits them from `style.css` which also references both (Google Fonts must be available or cached).

### Scale

| Name | Size | Line height | Letter spacing | Used on |
|---|---|---|---|---|
| Hero display | `clamp(46px, 5.5vw, 70px)` | 1.02 | −2.5px | `index.html` H1 |
| Auth hero heading | 42px | 1.15 | — | `login.html` `.auth-hero h2` |
| Section title | `clamp(28px, 3.2vw, 40px)` | 1.14 | −0.7px | `index.html` section H2 |
| Auth card heading | 28px | — | — | `login.html` `.auth-card h2` |
| Programme name | 17.5px | 1.2 | −0.2px | Qualification table rows |
| Hero panel stat | 92px | 0.88 | −4px | Landing page `8%+` |
| Auth stat value | 24px | 1.0 | — | Auth hero stats bar |
| CTA title | `clamp(30px, 4vw, 46px)` | 1.14 | −0.9px | Final CTA section |
| Body (large) | 16–17px | 1.6–1.78 | — | Hero body, auth hero body |
| Body (standard) | 15–15.5px | 1.78 | — | Section body copy |
| Form label | 13px | — | — | Auth input labels |
| Input text | 15px | — | — | Auth form inputs |
| Label / eyebrow | 10–10.5px | — | +1.2–1.5px | Section overlines; form field labels on calculator |
| Small / metadata | 11–12px | — | — | Trust strip; footer; SAQA IDs |

### Typography rules

- Headings always use `DM Serif Display` at `font-weight: 400`. Weight comes from size, not boldness.
- Body copy never goes below `13px` in the main content flow.
- Eyebrow labels are always `uppercase`, `letter-spacing: 1.5px`, `color: var(--text-3)` on light surfaces (or the appropriate white-opacity equivalent on dark surfaces).
- Do not apply `font-weight: 700` to DM Serif Display — it was not designed for it.
- Auth form labels use `font-weight: 600` at `13px` in `var(--text-secondary)` — the only `600`-weight body text in the system.

---

## 4. Spacing System

Base unit: **8px**

| Scale | Value | Usage |
|---|---|---|
| xs | 4px | Inline gaps (dot to text; badge internal padding) |
| sm | 6–8px | Form field gap between label and input; button internal gap |
| md | 12–16px | Component internal spacing; tab gap; alert padding |
| lg | 20–28px | Card padding; form group margin; auth card section spacing |
| xl | 40–52px | Section header bottom margin; auth card padding |
| 2xl | 72–88px | Section vertical padding |
| hero | 108–148px | Landing hero top padding (60px fixed nav + 88px breathing room) |
| auth-layout | 20–30px | Auth container gap and side padding |

---

## 5. Page Architecture & Routing

The product is three HTML pages. The routing is entirely client-side, managed through direct `href` navigation and a `localStorage` session.

```
index.html (Landing)
  │
  ├── "Sign in" nav link       → login.html
  ├── "Get matched" hero CTA   → login.html
  ├── Programme row click      → login.html  (stores bc_prog_pending in sessionStorage)
  ├── APS "Get recommendations"→ login.html  (stores bc_aps_pending in sessionStorage)
  └── "Sign in and get matched"→ login.html

login.html (Auth + Chat)
  │
  ├── Nav brand logo           → index.html
  ├── Login form submit        → reveals #chatSection (within same page)
  ├── Register form submit     → shows success → switches to Login tab
  ├── Logout button            → clears session → shows #authContainer
  └── [Session already active] → shows #chatSection immediately on load

chat.html (Standalone chat — legacy)
  │
  ├── Nav brand logo           → index.html
  ├── Session guard (head)     → login.html  (if no valid session)
  └── Logout button            → clears session → index.html
```

### Key architectural notes

- **`login.html` is the primary app shell.** Both the auth forms (`#authContainer`) and the full chat interface (`#chatSection`) live in `login.html`. `auth.js` toggles visibility between them based on session state. `#chatSection` carries `class="hidden"` on page load; `auth.js` removes it upon successful authentication.

- **`chat.html` is a legacy standalone page.** It contains only the chat interface with no auth container. `auth.js` runs on it but its `showAuthSection()` / `showChatSection()` calls find no matching elements — the chat is always visible. A session guard script in `<head>` redirects unauthenticated users before the page renders.

- **sessionStorage hand-off.** When a user interacts with the landing page before signing in (APS calculator or programme row), the relevant query is stored in `sessionStorage` under `bc_aps_pending` or `bc_prog_pending`. After authentication, a `MutationObserver` on `#chatSection` detects when the class `hidden` is removed and auto-fires the query via `sendMessage()` with a 900ms delay (to allow the boot greeting to appear first).

### Session model

- Storage: `localStorage`, key `bc_session`
- Shape: `{ userId, name, email, expiresAt }` where `expiresAt = Date.now() + 7 days`
- Set on: successful login or registration
- Cleared on: logout button, expired session detected on `chat.html` load
- On `login.html`: if session exists on load, `#chatSection` is shown immediately, bypassing the auth forms

---

## 6. Landing Page Components

_File: `index.html` · Stylesheet: inline `<style>` block_

### Navigation (`.nav`)

- Fixed, 60px tall, frosted glass: `rgba(255,255,255,.92)` background + `backdrop-filter: blur(18px)`
- Children: BC monogram mark → brand name → institution name → divider → AI status dot + label → spacer → "Sign in" pill
- **BC mark** (`32×32px`, `border-radius: 7px`): navy background, gold "BC" text — the only place in the product where gold text appears on a light surface
- **"Sign in" button**: uses a quiet `border: 1px solid var(--line)` pill that fills to navy on hover. No colour in the resting state keeps the nav visually minimal
- **Nav brand** (`<a href="index.html">`): the entire mark + brand text area is a home link on `login.html` and `chat.html` — not on `index.html` (already home)
- On `≤ 640px`: institution name, divider, and AI status are hidden; only mark, product name, and sign-in remain

### Hero (`.hero-shell` + `.hero`)

- Full-viewport navy section with two ambient radial light effects (gold top-right, blue bottom-left) and a subtle 28px dot grid overlay
- Two-column CSS Grid: `1fr 420px` — text left, stat panel right
- The stat panel is `display: none` below 1020px; the text column expands to fill without layout breakage
- **Eyebrow**: 10.5px uppercase label in `rgba(201,168,76,.65)` — muted gold, never the full `--gold` value
- **H1**: `clamp(46px, 5.5vw, 70px)`, `letter-spacing: -2.5px`. The tightest tracking in the product.
- **Hero panel**: frosted glass card showing the `8%+` stat at 92px in `--gold-lt`. This is the only display-scale number on a dark surface outside of the APS score. The stat is sourced verbatim from belgiumcampus.ac.za.

### Trust Strip (`.trust`)

A single horizontal band between the hero and the qualifications section on the `--warm` background. Contains four verifiable facts separated by `1px` pipe dividers. On mobile the pipes are hidden and items wrap with `gap: 18px`.

The trust strip exists specifically to replace the invented stats grid from the previous version. Every item here has a source URL in Section 11.

### Qualification Table (`.prog-table`)

- A CSS Grid list, not a card grid
- Column structure: `72px | 1fr | 120px | 24px` (badge | info | duration | arrow)
- **Hover state**: `border-left: 3px solid var(--gold)` replaces the default `transparent` border. A negative left margin (`margin-left: -15px`) pre-absorbs the border width so no content shifts on hover. Background tints to `rgba(15,40,71,.025)`.
- **Arrow** (`→`): transitions from `var(--text-3)` to `var(--gold)` and translates 3px right on hover. Communicates clickability without a button element.
- **Click action**: each row calls `goToProgInfo(programmeName)`, stores the name in `sessionStorage` as `bc_prog_pending`, and redirects to `login.html`. After login the chat auto-fires *"Tell me about the [Programme] at Belgium Campus..."*
- Table header row is `aria-hidden="true"` — it's visual scaffolding only; the rows are self-describing
- `cursor: pointer` on all rows

### NQF Badge (`.nqf-badge`)

- Navy background, gold text, `border-radius: 5px`, `font-weight: 700`
- Shows only the NQF level ("NQF 7", "NQF 8"). SAQA IDs and credit counts are rendered in `.prog-detail` lines at `11.5px` in `var(--text-3)` — visible but subordinate
- This badge uses the same colour combination (navy background + gold text) as the BC monogram in the nav, creating visual coherence across the product

### Admission Cards (`.req-card`)

- Two-column grid on desktop, single column on mobile
- Each card: navy header band containing a `DM Serif Display` title + subtitle in white; white body with a bullet list
- **Bullet dots** (`5×5px`, `border-radius: 50%`, `background: var(--gold)`): the only decorative use of gold on a white surface anywhere in the product
- A `req-note` section at the bottom of each card surfaces contextual facts (RPL availability; the 2023 Deaf graduates milestone)

### APS Calculator (`.calc-shell`)

- Placed on a navy background section — the dark/light alternation across the page creates rhythm without requiring explicit visual dividers
- The `<section>` has `id="calculator"` — the "Calculate APS" ghost button in the hero smooth-scrolls to it
- Score display (`#aps-display`): `DM Serif Display` at 30px in `var(--gold-lt)` — shows `—` until any subject is selected
- Selects styled for dark background: semi-transparent fill, low-opacity white border, 80%-opacity white text. `option` elements carry `background: #0f2847` to prevent browser default white popups.
- Focus state: `border-color: rgba(201,168,76,.45)`
- **Submit button**: calls `recommendFromAPS()`, which is overridden by an inline `<script>` after `javaScript.js` loads. The override stores the APS in `sessionStorage` and navigates to `login.html`

### Campus Cards (`.campus-card`)

- White cards on cream — the subtle depth difference avoids shadow while still creating separation
- Hover: `border-color` darkens slightly + a small `box-shadow` appears. No `transform` — understated
- The fourth card repurposes the component to display intake months and contact number, keeping the four-column grid balanced

### Final CTA (`.cta-shell`)

- Background `var(--navy-deep)` (`#091c34`) — marginally darker than the hero navy. This progression (hero navy → content cream/white → calculator navy → campus cream → CTA deep navy → footer darkest) creates a deliberate darkening gradient toward the bottom of the page
- A centred radial glow in the background adds depth without competing with the text
- Primary button uses `style="display:inline-flex"` to override the block-level default in context

---

## 7. Auth Page Components

_File: `login.html` · Stylesheets: `style.css` + `auth.css`_

### Page Layout (`.auth-container`)

A two-column CSS Grid: `1fr 500px` — hero panel left, auth card right. The hero panel (`display: none` at `≤ 900px`) shows a navy marketing panel. The card is always visible.

```
┌──────────────────────────────┬─────────────────────┐
│  .auth-hero (navy panel)     │  .auth-card         │
│  Brand statement, stats      │  Login / Register   │
│  Decorative glows            │  form               │
│  [hidden ≤ 900px]            │                     │
└──────────────────────────────┴─────────────────────┘
```

### Auth Hero Panel (`.auth-hero`)

- Full navy background, `border-radius: 28px` (`--r-xl`), decorative radial glows via `::before` (gold, top-right) and `::after` (blue-mid, bottom-left)
- Contains: pill tag (`✦ Powered by Hybrid AI Engine`), heading, body copy, three-stat row
- **Pill tag** (`.hero-tag`): `background: rgba(201,168,76,.15)`, gold border, `--bc-gold-light` text, uppercase, `letter-spacing: 0.5px`. Note: this element retains the `✦` symbol from the original design — it is embedded in the existing `login.html` and was not part of the landing page redesign scope.
- **Stats row** (`.hero-stats`): three items showing `12+`, `4`, and `APS` with labels. These figures are carried over from the original design — see Decisions Log for a note on the `12+` figure.
- Hidden on `≤ 900px` screens; the card fills the full width

### Auth Card (`.auth-card`)

- White background, `border-radius: 28px`, large shadow (`--shadow-xl`: `0 24px 64px rgba(15,40,71,.12)`)
- Entrance animation: `fadeIn` keyframe — `opacity: 0 → 1` with `translateY(8px → 0)` over 400ms ease-out
- `align-self: start` so it doesn't stretch to the panel height on short content
- Padding: `40px` desktop → `32px 24px` at 900px → `28px 20px` at 480px

### Tab Switcher (`.form-tabs`)

Two pill-shaped buttons: "Login" and "Create profile".

| State | Background | Text | Border |
|---|---|---|---|
| Default | `--surface` (white) | `--text-primary` | `1px solid --border` |
| Active | `--bc-navy` | white | `rgba(15,40,71,.2)` |

Switching tabs is handled by `auth.js` — it toggles `active` class on the buttons and `hidden` class on the form containers. No animation; the switch is instant.

### Form Inputs (`.input-group input`)

- Default state: `border: 1.5px solid var(--border)`, `background: var(--surface-2)` (off-white)
- **Focus**: `border-color: var(--bc-gold)`, `background: white`, `box-shadow: 0 0 0 4px rgba(201,168,76,.12)`. The gold focus ring is the clearest instance of gold being used for a functional (not decorative) purpose.
- **Error**: `border-color: var(--error)` (#dc2626), `background: var(--error-bg)` (#fef2f2), `box-shadow: 0 0 0 4px rgba(220,38,38,.08)`. The error red is isolated entirely to this context.
- **Error hint** (`.input-hint`): `display: none` by default. Shown (`display: block`) when the sibling input has class `error` — handled by CSS sibling selector `input.error + .input-hint`. Can also be made visible via class `visible` from JavaScript.
- Placeholder text: `color: var(--text-muted)` at `opacity: 0.7`

### Password Toggle (`.pw-toggle`)

- Absolutely positioned inside `.password-wrap`, right-aligned, vertically centred
- SVG eye icon toggles between open/closed paths when clicked
- Button has no background in resting state; hover: subtle navy tint (`rgba(15,40,71,.05)`)
- Input gets `padding-right: 44px` to prevent text running under the button
- Three instances: login password, register password, register confirm password

### Submit Button (`.auth-btn`)

- Full-width, `border-radius: 14px`, navy background
- Hover: `background: var(--bc-blue)` (#1b4f8a)
- Active: `transform: scale(0.995)` — minimal tactile feedback
- Disabled (during async submit): `opacity: 0.6–0.7`, `cursor: not-allowed`, no transform
- During loading: `auth.js` sets `btn.textContent = "Signing in..."` / `"Creating account..."` via `setLoading()`, restoring on failure via `setIdle()`

### Alert Banner (`.alert`)

Appears above the form content.

| Variant | Background | Text | Border |
|---|---|---|---|
| `.error` | `#fef2f2` | `#dc2626` | `rgba(220,38,38,.15)` |
| `.success` | `#f0fdf4` | `#16a34a` | `rgba(22,163,74,.15)` |

- `display: none` by default; `.visible` adds `display: flex`
- Success message appears after login ("Login successful! Opening chatbot...") and after registration ("Profile created! Please log in now.") before the view automatically transitions

### Form Validation Logic

Handled entirely in `auth.js`. No HTML5 `required` validation is relied upon — all checks are in JavaScript.

| Field | Validation rule |
|---|---|
| Login email | Must contain `@` and not be empty |
| Login password | Must not be empty |
| Register name | Must not be empty |
| Register email | Must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| Register password | Must be ≥ 8 characters |
| Register confirm | Must match password field |

On failure: `markInvalid()` adds `error` class to the input (triggers red state + hint) and `showAlert()` displays the banner. On correction: `clearInvalid()` removes the error state on `input` event (real-time clearing as the user types).

### Auth → Chat Transition

On successful login, `auth.js` calls `showChatSection()` after an 800ms delay (during which the success alert is visible). `showChatSection()` hides `#authContainer` and removes `hidden` from `#chatSection`. The `MutationObserver` in the inline script detects this class change and fires the pending sessionStorage query if one exists.

---

## 8. Chat Interface Components

_Both `login.html` (`#chatSection`) and `chat.html` contain the chat interface. The markup is structurally identical; the styling comes from `style.css`._

### Prompt Pills (`.prompt-pill` / `.chip`)

Quick-start buttons docked above the chat container. Each calls a function defined in `javaScript.js`:

| Label | Function |
|---|---|
| All courses & APS | `showCourseList()` |
| Diploma vs Degree | `showDiplomaVsDegree()` |
| Career paths | `showCareerPaths()` |
| Learnerships & bursaries | `showLearnerships()` |
| Cybersecurity requirements | `showCybersecurity()` |
| Online study | `showOnlineStudy()` |

Each function calls `addMessage()` with a pre-built response object from `ResponseBuilder` in `javaScript.js`. No API call is made — these are instant, rule-based responses.

### Chat Toolbar (`.chat-toolbar`)

Contains:
- **Engine badge** (`Hybrid AI Engine` + green dot): always visible. The dot pulses with the same `pulse-dot` keyframe used in the nav.
- **Thinking badge** (`#thinking-badge`): hidden by default; `display: inline-flex` when class `active` is added during an API call. Contains a CSS spinner (rotating border trick).
- **Logout button** (`#logoutBtn`): behaviour differs by page — see Section 5.

### Message Bubbles

| Role | Background | Border radius |
|---|---|---|
| Bot (`.bubble.bot`) | `var(--surface-2)` + 1px border | `18px 18px 18px 4px` (flat bottom-left) |
| User (`.bubble.user`) | `var(--bc-navy)` | `18px 18px 4px 18px` (flat bottom-right) |

Avatars: `28×28px` circles. Bot: navy background, gold-light "BC" text. User: light grey background, muted "You" text.

Entrance animation: `bubbleIn` keyframe — `opacity: 0, translateY(10px), scale(0.96)` → normal state — 280ms with a spring cubic-bezier.

### Recommendation Cards (`.rec-card`)

Rendered inside bot bubbles when the AI returns course recommendations. Each card:
- White background, 1px border, `border-left: 3px solid var(--bc-blue)` — shifts to `var(--bc-gold)` on hover
- Contains: programme name, metadata line, match pill, confidence bar
- **Match pill**: colour-coded — green for `high`, amber for `mid`, grey for `low`
- **Confidence bar**: animates from `width: 0` to the score percentage (300ms to 600ms after render via `setTimeout`)
- Clicking a card calls `ask()` with a follow-up question about the specific programme

### Typing Indicator (`.typing-bubble`)

Three dots animating with the `bounce` keyframe at 0ms, 150ms, 300ms offsets. Shown while waiting for an API response; removed on `removeTyping()` when the response arrives.

### Input Area (`.input-pill`)

- Rounded pill container: `border-radius: 22px`, `border: 1.5px solid var(--border)`
- Focus-within: border darkens, `box-shadow: 0 0 0 3px rgba(15,40,71,.06)`
- `<textarea>` auto-resizes via JavaScript (`scrollHeight` measurement on `input` event), capped at `max-height: 100px`
- Enter (without Shift) submits; Shift+Enter inserts a newline
- **Send button**: `36×36px` circle, navy background. Hover: `scale(1.1)`. Active: `scale(0.95)`. Disabled (during request): grey background, `cursor: not-allowed`, no transform.

### Boot Greeting

`javaScript.js` fires `addMessage()` 400ms after the script loads. On `login.html` this fires immediately when the page loads — the message is inserted into `#messages` even while `#chatSection` is hidden. It becomes visible when the user authenticates and `#chatSection` is revealed.

---

## 9. Shared Components

### BC Monogram Mark

A `32–44px` square element with `background: var(--navy)`, gold "BC" text, and a slightly rounded corner (`border-radius: 7–12px`). Appears in every nav bar. Size varies slightly: `32px` on landing page, `44px` on auth page nav.

### Logout Button (`.logout-btn`)

Pill-shaped, white background, default border, navy text. On `login.html` it is inside `#chatSection` (shown only after auth). On `chat.html` it is in the nav. Behaviour differs:

| Page | What logout does |
|---|---|
| `login.html` | `auth.js`: clears `bc_session` from localStorage → calls `showAuthSection()` → hides `#chatSection`, shows `#authContainer`, resets tabs to Login |
| `chat.html` | Inline override script: clears `bc_session` from localStorage → `window.location.href = 'index.html'` |

### Hidden Class

`.hidden { display: none !important }` is defined in `auth.css`. It is the sole mechanism for toggling the auth/chat views in `login.html`. The `!important` prevents any specificity conflicts from other rules overriding the hide.

### AI Status Dot

`6–7px` circle, `background: #34d399` (emerald green). Pulses with `pulse-dot` keyframe (shadow expands and contracts). Present in the nav on the landing page and chat page; present in the chat toolbar's engine badge on the auth page.

---

## 10. Interaction & State Patterns

### sessionStorage Hand-off

When a user on the landing page takes an action before signing in:

```
User action on index.html
  │
  ├── Clicks APS "Get recommendations" button
  │     └── recommendFromAPS() stores bc_aps_pending = "<score>"
  │           → window.location.href = 'login.html'
  │
  └── Clicks a programme row
        └── goToProgInfo(name) stores bc_prog_pending = "<programme name>"
              → window.location.href = 'login.html'

On login.html load:
  └── Inline script checks sessionStorage
        ├── If chatSection already visible (existing session) → fireQuery() after 900ms
        └── If chatSection hidden:
              MutationObserver watches for class="hidden" removal
                → fireQuery() after 900ms once revealed

fireQuery():
  1. Clear both sessionStorage keys
  2. Build query string from whichever key was set
  3. Set inputEl.value = query
  4. Call sendMessage()
```

Query strings built:
- APS: `"My APS score is 28. What IT courses at Belgium Campus would suit me?"`
- Programme: `"Tell me about the Bachelor of Computing at Belgium Campus — entry requirements, duration, and career outcomes."`

### Form Loading States

During async form submission (`auth.js`):
1. `setLoading(btn, "Signing in...")` — disables button, stores original text in `dataset.originalText`, sets loading label
2. On failure: `setIdle(btn)` — restores original text, re-enables button
3. On success: button remains disabled (page transitions away within 800ms)

### Real-time Validation Clearing

`auth.js` binds `input` event listeners to all form fields. When a user begins correcting a field after it was marked invalid, `clearInvalid()` removes the error class and hides the hint immediately — the error clears as they type, not only after re-submission.

### Smooth Scroll

`html { scroll-behavior: smooth }` is set on `index.html`. The "Calculate APS" ghost button in the hero (`href="#calculator"`) and the "Try APS Calculator" ghost button (previous version) both use this for the scroll. No JavaScript is required.

---

## 11. Content Sources

All factual content on this product is sourced from belgiumcampus.ac.za. Nothing has been invented or assumed.

| Content | Source |
|---|---|
| "South Africa's first dedicated ITversity · Est. 1999" | belgiumcampus.ac.za — homepage |
| "8%+ of South Africa's ICT graduates come from Belgium Campus" | belgiumcampus.ac.za — homepage |
| DHET Registration No. 2003/HE08/001 | belgiumcampus.ac.za — homepage / about |
| Campuses: Pretoria, Kempton Park, Stellenbosch | belgiumcampus.ac.za — homepage |
| Online study available | belgiumcampus.ac.za — homepage |
| Contact: 010 593 5368 | belgiumcampus.ac.za — homepage |
| Intakes: May, July, September | belgiumcampus.ac.za — homepage |
| BComp — NQF 8, SAQA 62689, 506 credits, 3+1 yrs, Data Science / Software Engineering | belgiumcampus.ac.za/qualifications/bachelor-of-computing |
| BIT — NQF 7, SAQA 94121, 360 credits, 3 yrs, Software Development | belgiumcampus.ac.za/qualifications/bachelor-of-information-technology |
| BIT Part-Time — NQF 7, SAQA 94121, flexible | belgiumcampus.ac.za/qualifications/bachelor-of-information-technology |
| Diploma IT — NQF 6, Infrastructure / Software Development | belgiumcampus.ac.za/qualifications/diploma-in-information-technology |
| Diploma for Deaf Students — Software Development, aptitude test + audiogram | belgiumcampus.ac.za/qualifications/diploma-in-information-technology |
| Advanced Diploma Cybersecurity — NQF 7, SAQA 124166, 120 credits, 1 yr, Online | belgiumcampus.ac.za/qualifications/advanced-diploma-in-cybersecurity |
| Degree entry: NSC for Degree, 50%+ English, 50%+ Pure Maths | belgiumcampus.ac.za/admission-requirements |
| Diploma entry: NSC endorsed for Diploma studies | belgiumcampus.ac.za/admission-requirements |
| Mathematics Bridging Course option (50%+ to qualify for degree) | belgiumcampus.ac.za/admission-requirements |
| RPL (Recognition of Prior Learning) pathways available | belgiumcampus.ac.za/admission-requirements |
| Deaf Diploma: 50%+ aptitude test + audiogram ≤ 6 months | belgiumcampus.ac.za/admission-requirements |
| "National first" — six Deaf students graduated BIT in 2023 | belgiumcampus.ac.za — homepage / news |
| BRICS Skills Competition podium finishers, 2024 | belgiumcampus.ac.za/news |
| SAPHE Excellence Awards recognition, 2025 | belgiumcampus.ac.za/news |
| Participative Development Model | belgiumcampus.ac.za — about |
| Industry partnerships: finance, engineering, telecoms, tech | belgiumcampus.ac.za — about |

### Content not used (and why)

| Removed content | Reason |
|---|---|
| Career salary ranges (e.g. R450k–R900k) | Not sourced from Belgium Campus. External salary benchmarks require attribution and are outside the product's data scope. |
| Career demand bars | No verified source. Presented as fact in the previous version but entirely made up. |
| "12+ Qualifications" stat | Belgium Campus lists 8 qualifications on its website. 12+ was incorrect. Note: this figure was retained on the auth hero panel (`login.html`) because it is part of the existing auth page design, which was not within scope of the landing page redesign. It should be corrected in a future pass. |
| "HEQSF levels" as a standalone hero stat | HEQSF and NQF are the same framework. Using both was redundant and misleading. |
| "APS Smart Matching" as a standalone stat | A feature of the CourseFinder tool, not a Belgium Campus credential. Moved to the hero body copy where it describes the product's capability. |

---

## 12. Decisions Log

**No emojis on the landing page.** Every emoji in the previous version (🎯💬🧮 as section icons, 🎓 in the APS calculator) was replaced with typography, badges, or nothing. The auth page retains the `✦` decorative element in the hero tag — this was an existing design element not in scope for replacement, and is a CSS character (`✦`), not an emoji.

**Programme rows, not feature cards.** The previous landing page showed a three-card "What We Offer" grid. A student visiting this page already knows they want to study IT at Belgium Campus — telling them the product has "AI Career Guidance" adds nothing. Replaced with a qualifications table that immediately answers the real question: what can I study, what do I need to get in?

**Programme rows are clickable.** The `→` affordance on hover implied interactivity that didn't exist in the original design. Clicking a row now stores the programme name and redirects to login, where the AI auto-fires a detailed query about that programme. The cursor was changed from `default` to `pointer` to match.

**Trust strip, not stats grid.** The previous hero had a four-stat frosted glass bar containing invented numbers. The trust strip uses only verifiable facts from the BC website: registration number, intake dates, phone number, and a real award.

**Auth card entrance animation.** `fadeIn` is the only entrance animation in the product (outside of the chat's bubble animations). It is subtle — `8px` vertical offset, 400ms — and exists to give the auth card a sense of arrival without being distracting. No other page elements animate on load.

**Left-border hover on programme rows, not card lift.** `transform: translateY(-6px)` on cards is overused and creates an distracting physicality. A 3px left border colour change and a background tint communicates hover state without motion.

**Footer darker than hero.** `#07111f` (footer) is visually deeper than `--navy` (`#0f2847`, hero) and `--navy-deep` (`#091c34`, final CTA). This three-step darkening toward the bottom of the landing page creates a natural visual terminus without any horizontal rule or separator.

**Logout on `chat.html` redirects to `index.html`, not `login.html`.** After logging out, sending the user back to the login form feels like a dead end. The landing page is a more natural destination — it re-contextualises the product and gives the user a clear path forward (sign back in, or explore the qualifications).

**Session guard in `<head>` on `chat.html`.** Placing the session check before the `<body>` renders prevents a flash of authenticated UI for unauthenticated users. `window.location.replace()` is used (not `href`) so the browser's back button does not return to the protected page.
