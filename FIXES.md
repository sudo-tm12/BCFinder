# BC CourseFinder — Bug Fixes, Changes & Setup

---

## Issue 1 — "Get Personalised Course Recommendation" Button Broken

**Root cause:** `recommendFromAPS()` called `ask()`, a function that does not exist anywhere in the codebase. Every click silently crashed with no response.

**Fix:** Replaced the function with direct logic:
- Reads APS, maths level, and English level from `AIEngine.userContext`
- Calls `RecommendationEngine.recommend()` to score all programmes
- Renders `ResponseBuilder.apsResult()` immediately via `addMessage()`
- If no APS has been entered, shows a prompt to fill in the calculator first

---

## Issue 2 — "All Courses & APS" Cards Don't Expand

**Root cause:** The course cards in `courseList()` and `apsResult()` had `onclick` handlers that also called the non-existent `ask()` function. Clicking any card crashed silently.

**Fix:**
- Added a new `ResponseBuilder.programmeDetails(programme)` method that displays full programme information: type, NQF level, duration, minimum APS, description, specialisations, career paths, and entry requirements
- Updated all card `onclick` handlers to call `addMessage(ResponseBuilder.programmeDetails(...), "bot")` directly
- Updated card list headings to include "Click any card to see full details" so users know the cards are interactive

---

## Issue 3 — Guardrails Not Flagging Out-of-Scope Questions

**Root cause:** `GUARDRAILS.offTopicKeywords` only contained 14 entries covering 3 narrow categories (politics, celebrity, weather). Questions about sports, food, relationships, and other topics were never caught.

**Fix:** Expanded the keyword list to cover:
- Politics & government: `parliament`, `government policy`, etc.
- Entertainment & social media: `gossip`, `series`, `tiktok`, `kpop`, etc.
- Sports: made phrase-based (e.g. `"soccer score"`, `"rugby score"`) to avoid blocking legitimate messages like "I play sport but want to study IT"
- Food & lifestyle: `recipe`, `how to cook`, `best restaurant`, `food delivery`
- Personal: `relationship advice`, `horoscope`, `zodiac sign`, `lottery numbers`, `gambling tips`

---

## Issue 4 — Most Inputs Return the Same Introductory Response

**Root causes (two combined):**

**1. The API was completely broken** — the original code called the Claude API directly from the browser with no `Authorization` header. Every single API call failed silently. This meant that any question not matched by the rule engine had no AI to fall back on.

**2. The fallback was too narrow** — `getFallbackResponse()` only had 6 hardcoded patterns. Anything not matched by those 6 patterns returned the generic greeting ("Hi! I'm BC CourseFinder..."), regardless of what the user actually asked.

The result: the rule engine handled greeting, course list, diploma vs degree, careers, cybersecurity, learnerships, online study, requirements, and APS queries. Everything else — questions about APS explained, how to apply, specific programme details, programming languages, fees, durations, and more — hit the broken API, got no response, and fell through to the generic greeting.

**Fix — Part 1: Replaced the broken API with a working one**
Set up a proper Express backend (`server.js`) that securely calls Groq AI (Llama 3.3 70B) server-side, with the API key stored in `.env`. The frontend calls `/api/chat` on the local server instead of hitting an AI API directly. This means genuinely complex or unexpected questions now get a real, contextual AI response.

**Fix — Part 2: Expanded the Rule Engine:**
Added 4 new intent patterns to `RuleEngine.patterns`:

| Intent | Triggers on |
|---|---|
| `aps_info` | "what is APS", "how does APS work", "explain APS", "how to calculate APS" |
| `contact_apply` | "how do I apply", "application process", "contact the campus", "where to apply" |
| `postgrad` | "postgraduate", "honours", "after my degree", "further studies" |
| `programme_detail` | "tell me more about", "more about the diploma", "details about the BSc" |

Added new `ResponseBuilder` methods:
- `programmeDetails(programme)` — full details for any programme card click
- `apsInfo()` — explains the APS system and Belgium Campus minimums
- `contactInfo()` — step-by-step application guide and contact details
- `postgrad()` — Postgraduate Diploma details pulled from the knowledge base

**Fix — expanded `getFallbackResponse()`:**
Replaced the 6-pattern fallback with 12 targeted patterns covering: APS explanation, how to apply, postgrad options, subject combinations, Mathematical Literacy, Diploma vs Degree, software development, data science, networking, fees, programme durations, Matric requirements, short courses, and specific programmes (BSc IT, Diploma IT, Higher Certificate).

---

## Architecture Upgrade — Proper Backend Setup

**Problem:** The original codebase called the AI API directly from the browser (client-side JavaScript), which:
- Exposed the API key in DevTools to anyone who opened the page
- Was blocked by CORS policy (browsers reject direct calls to most AI APIs)
- Had no way to securely store secrets

**Solution:** A proper client–server architecture was implemented.

### New files created

| File | Purpose |
|---|---|
| `server.js` | Express backend — holds the API key, system prompt, and all Groq communication |
| `package.json` | Node.js project config with dependencies and npm scripts |
| `.env` | API key and environment config — **never commit this file** |
| `.env.example` | Safe template to share with teammates (no real key) |
| `.gitignore` | Excludes `.env` and `node_modules/` from version control |

### How it works

```
Browser (javaScript.js)
    │
    │  POST /api/chat  { messages: [...] }
    ▼
Express server (server.js)         ← API key lives here only
    │
    │  POST api.groq.com/openai/v1/chat/completions
    ▼
Groq AI (Llama 3.3 70B)
```

- The browser never sees the API key
- The system prompt is defined in `server.js` and never sent to the client
- The frontend sends only the conversation history to `/api/chat`

### What moved server-side
- API key (was hardcoded in `javaScript.js`, now in `.env`)
- System prompt (was in `AIEngine.systemPrompt`, now in `server.js`)
- All AI API communication (was a direct browser fetch, now a proxied server call)

---

## API Provider — Switched from Claude/Gemini to Groq

**Why not Claude (Anthropic)?**
The Anthropic API requires an `Authorization` header that cannot safely be included in browser-side JavaScript.

**Why not Google Gemini?**
A Gemini API key was obtained and tested. The key authenticated successfully and could list available models, but every model returned `"limit": 0` for the free tier. Google AI Studio's free tier is not available in South Africa — billing must be enabled for any usage.

**Why Groq?**
- Completely free globally — no credit card, no regional restrictions
- 14,400 requests/day on the free tier
- Uses Llama 3.3 70B — a highly capable open-source model
- OpenAI-compatible API format (simple to integrate)
- Fast inference on specialised hardware

### Additional fixes discovered during setup

**SSL proxy issue:** The network intercepts HTTPS with its own certificate, causing `UNABLE_TO_VERIFY_LEAF_SIGNATURE` errors for both `npm install` and outbound API calls. Fixed by:
- Adding `NODE_TLS_REJECT_UNAUTHORIZED=0` to `.env`
- Reading and applying it in `server.js` before any fetch calls
- Running `npm config set strict-ssl false` once for npm installs

---

## How to Run

### First time setup
```bash
npm install
```

### Start the server
```bash
npm start
```

Then open `http://localhost:3000` in your browser.

### Development (auto-restart on file save)
```bash
npm run dev
```

---

## Files Changed Summary

| File | What changed |
|---|---|
| `javaScript.js` | Fixed 4 bugs, removed API key and system prompt, `_callGemini` → `_callAI` using `/api/chat` |
| `index.html` | Updated engine badge label |
| `server.js` | New — Express backend with Groq integration and system prompt |
| `package.json` | New — Node.js project config |
| `.env` | New — Groq API key and environment settings (not in version control) |
| `.env.example` | New — Safe template |
| `.gitignore` | New — Excludes `.env` and `node_modules/` |
