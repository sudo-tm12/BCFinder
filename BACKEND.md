# BC CourseFinder — Backend Documentation

> AI-powered IT course advisor for Belgium Campus iTversity.
> Built with Node.js + Express, backed by the Groq LLM API (Llama 3.3 70B).

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [How the Hybrid AI Engine Works](#4-how-the-hybrid-ai-engine-works)
5. [API Reference](#5-api-reference)
6. [Knowledge Base](#6-knowledge-base)
7. [Rule Engine — Intent Classification](#7-rule-engine--intent-classification)
8. [Recommendation Engine — APS Matching](#8-recommendation-engine--aps-matching)
9. [Guardrail System](#9-guardrail-system)
10. [AI Fallback — Groq LLM](#10-ai-fallback--groq-llm)
11. [Environment Variables](#11-environment-variables)
12. [Running Locally](#12-running-locally)

---

## 1. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser (Client)                      │
│                                                             │
│  index.html / login.html     javaScript.js                  │
│  ─────────────────────       ──────────────────────────     │
│  Landing page · APS calc     Guardrails → Rule Engine       │
│  Auth (localStorage)         → Recommendation Engine        │
│                              → UI renderer                  │
└──────────────────────────────┬──────────────────────────────┘
                               │  POST /api/chat
                               │  { messages: [...] }
┌──────────────────────────────▼──────────────────────────────┐
│                      server.js  (Node + Express)             │
│                                                             │
│  • Validates request body                                   │
│  • Prepends SYSTEM_PROMPT to message history                │
│  • Forwards to Groq API (Llama 3.3 70b)                     │
│  • Returns { text } to client                               │
└──────────────────────────────┬──────────────────────────────┘
                               │  HTTPS
┌──────────────────────────────▼──────────────────────────────┐
│              Groq Cloud API  (api.groq.com)                  │
│              Model: llama-3.3-70b-versatile                 │
└─────────────────────────────────────────────────────────────┘
```

**Request flow for every user message:**

```
User message
    │
    ▼
[GUARDRAILS]  ──blocked──▶  Safety/scope refusal
    │ safe
    ▼
[RULE ENGINE]  ─matched──▶  Instant structured response (no API call)
    │ no match
    ▼
[AI ENGINE]  ──────────▶  POST /api/chat  ──▶  Groq LLM  ──▶  response
```

The Rule Engine handles the majority of queries instantly and for free.
The Groq LLM only fires when the query is complex or open-ended.

---

## 2. Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Runtime | Node.js ≥ 18 | Server-side JavaScript |
| Framework | Express 4 | HTTP server + static file serving |
| AI provider | Groq Cloud API | Hosted Llama 3.3 70B inference |
| LLM model | `llama-3.3-70b-versatile` | Fast, high-quality responses |
| Config | dotenv | Load `.env` at startup |
| Dev server | nodemon | Auto-restart on file changes |
| Frontend | Vanilla JS (no framework) | Rule engine + UI, runs in browser |

---

## 3. Project Structure

```
bc-coursefinder/
├── server.js          ← Express server + Groq API proxy + system prompt
├── javaScript.js      ← Knowledge base, Rule Engine, Recommendation Engine,
│                         Guardrails, UI renderer (shared across pages)
├── index.html         ← Public landing page (APS calculator, programme table)
├── login.html         ← Auth + chat interface
├── style.css          ← Shared design tokens and component styles
├── auth.css           ← Login/register page styles
├── auth.js            ← Client-side auth (localStorage)
├── images/
│   └── hero.png       ← Hero background image
├── package.json
├── .env               ← GROQ_API_KEY (never committed)
└── .gitignore         ← Excludes node_modules/, .env, .claude/
```

---

## 4. How the Hybrid AI Engine Works

The chatbot uses a **two-layer hybrid approach** that prioritises speed and accuracy:

### Layer 1 — Rule Engine (instant, free)

Pattern-based intent classification runs entirely in the browser.
Recognises **15 intents** (greeting, APS query, course list, cybersecurity, etc.)
and returns a pre-built structured response without any API call.

```
"What courses are available?" → intent: course_list → ResponseBuilder.courseList()
"I have 24 APS"              → intent: aps_query   → RecommendationEngine.recommend()
"ethical hacking career"     → intent: cybersecurity → ResponseBuilder.cybersecurity()
```

### Layer 2 — Groq LLM fallback (for complex queries)

When no rule matches (or the intent is `programme_detail`), the message is
forwarded to `POST /api/chat`. The server prepends a detailed `SYSTEM_PROMPT`
and sends the full conversation history (last 9 turns) to the Groq API.

This keeps API costs near zero for common queries while providing full
conversational depth for nuanced questions.

---

## 5. API Reference

### `POST /api/chat`

The only backend endpoint. Proxies the conversation to the Groq LLM.

**Request**

```http
POST /api/chat
Content-Type: application/json
```

```json
{
  "messages": [
    { "role": "user",      "content": "What is the BComp?" },
    { "role": "assistant", "content": "The Bachelor of Computing..." },
    { "role": "user",      "content": "What are the entry requirements?" }
  ]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `messages` | array | yes | OpenAI-compatible message history |
| `messages[].role` | string | yes | `"user"` or `"assistant"` |
| `messages[].content` | string | yes | Message text |

**Success Response — 200 OK**

```json
{ "text": "To be admitted to the BComp you need..." }
```

**Error Responses**

| Status | Condition | Body |
|---|---|---|
| 400 | Missing or empty `messages` array | `{ "error": "Invalid request: messages array is required." }` |
| 502 | Groq API returned an error | `{ "error": "AI service unavailable. Please try again." }` |
| 500 | Unexpected server exception | `{ "error": "Something went wrong. Please try again." }` |

**Limits**

- Request body capped at **10 KB** (`express.json({ limit: '10kb' })`)
- Max **1 000 tokens** generated per response (`max_tokens: 1000`)
- Conversation history trimmed to last **9 turns** before sending

---

## 6. Knowledge Base

Defined in `javaScript.js` as `KNOWLEDGE_BASE`. Contains all programme and career data that the Rule and Recommendation engines operate on.

### Programmes (7 total)

| ID | Name | NQF | Type | APS |
|---|---|---|---|---|
| `bcomp` | Bachelor of Computing | 8 | Degree | 26 |
| `bit` | Bachelor of Information Technology | 7 | Degree | 24 |
| `bit-pt` | BIT — Part-Time | 7 | Degree | 24 |
| `dip-it` | Diploma in Information Technology | 6 | Diploma | 20 |
| `adv-dip-cybersec` | Advanced Diploma in Cybersecurity | 7 | Advanced Diploma | prereq |
| `pgd-cybersec` | PGD in Cybersecurity Risk Management | 8 | Postgrad | prereq |
| `mit` | Master in Information Technology | 8 | Master's | prereq |

Each programme object carries: `name`, `level`, `duration`, `campuses`, `specialisations`, `careers`, `description`, `aps`, `mathsRequired`, `minMathsLevel`, `minEnglishLevel`, `prereq`, `keywords`.

### Careers (5 tracked)

| Career | Demand | Avg Salary |
|---|---|---|
| Software Developer | Very High | R25 000–R60 000/month |
| Cybersecurity Analyst | High | R30 000–R70 000/month |
| Data Scientist | Very High | R40 000–R90 000/month |
| Network Administrator | High | R18 000–R40 000/month |
| IT Support Technician | High | R8 000–R20 000/month |

---

## 7. Rule Engine — Intent Classification

`RuleEngine.classify(text)` iterates through 15 ordered regex patterns and returns `{ intent, match }`.

### Intents and triggers

| Intent | Example trigger phrase |
|---|---|
| `greeting` | "hi", "hello", "howzit" |
| `programme_detail` | "tell me about the BComp", "details about diploma" |
| `course_list` | "what courses do you offer?" |
| `diploma_vs_degree` | "diploma or degree?", "difference between" |
| `career_inquiry` | "how do I become a data scientist?" |
| `cybersecurity` | "cybersecurity", "ethical hacking", "security" |
| `learnership` | "bursary", "SETA", "financial aid" |
| `online_study` | "online", "part-time", "distance learning" |
| `requirements` | "admission requirements", "what subjects do I need?" |
| `aps_query` | "I have 24 APS", "my score is 26" |
| `specific_aps` | "24 APS", "APS score is 22" |
| `aps_info` | "what is APS?", "how is APS calculated?" |
| `contact_apply` | "how do I apply?", "how do I register?" |
| `postgrad` | "after my degree", "Masters", "honours" |
| `career_paths` | "career options", "salary after studying", "job prospects" |

`programme_detail` intentionally returns `null` so the AI handles it with full conversational depth.

---

## 8. Recommendation Engine — APS Matching

`RecommendationEngine.recommend(aps, mathsLevel, englishLevel)` scores every programme and returns the top 4 matches.

### Scoring algorithm

```
apsGap = userAPS - programme.minimumAPS

apsGap ≥  6  →  base score 95   (strong match)
apsGap ≥  3  →  base score 82   (good match)
apsGap ≥  0  →  base score 68   (meets minimum)
apsGap ≥ -3  →  base score 45   (slightly below)
apsGap <  -3 →  score 10        (unlikely)

Adjustments:
  mathsLevel > programme.minMathsLevel + 1  →  +5
  mathsLevel < programme.minMathsLevel      →  -20
  englishLevel < programme.minEnglishLevel  →  -15

Tier:  score ≥ 75 → "high"  |  ≥ 50 → "mid"  |  < 50 → "low"
```

Advanced Diploma, Postgrad, and Master's programmes always return score 0
— they require prior qualifications, not Matric APS.

---

## 9. Guardrail System

Three-layer safety system defined in `GUARDRAILS` in `javaScript.js`.
All checks run **client-side before** any API call.

### Layer 1 — Input safety (blocked patterns)

Immediately rejects messages matching dangerous content:

| Pattern | Reason |
|---|---|
| `how to hack`, `hack into`, `bypass security` | Malicious hacking request |
| `jailbreak`, `crack passwords` | Credential/security abuse |
| `ddos`, `denial of service` | Attack guidance |
| `bomb`, `weapon`, `explosive` | Dangerous content |
| `drugs`, `fraud`, `scam`, `steal` | Illegal activity |
| `suicide`, `kill myself`, `self-harm` | Crisis/sensitive content |
| `sex`, `porn`, `adult content` | Inappropriate content |
| `hate speech`, `racist`, `kill people` | Harmful language |

### Layer 2 — Scope control (off-topic keywords)

Redirects messages about: politics, celebrity gossip, Netflix/movies, weather, sport scores, recipes, relationship advice, horoscopes, gambling.

### Layer 3 — PII redaction

Automatically scrubs from user input before it reaches the API:

- Phone numbers (10-digit SA format) → `[PHONE NUMBER REDACTED]`
- Email addresses → `[EMAIL REDACTED]`
- SA ID numbers (13 digits) → `[ID NUMBER REDACTED]`

---

## 10. AI Fallback — Groq LLM

### Model

```
Provider : Groq Cloud (api.groq.com/openai/v1)
Model    : llama-3.3-70b-versatile
Tokens   : max_tokens = 1000
Temp     : 0.7
```

### System Prompt scope

The system prompt instructs the model to:

- Act only as a Belgium Campus IT career guidance assistant
- Use only the 6 official programmes (BComp, BIT, Diploma IT, Adv Dip Cybersecurity, PGD Cybersec Risk, MIT)
- Reference correct campus locations: Pretoria, Kempton Park, Stellenbosch
- Never invent programme names, fees, or application dates
- Always direct students to `belgiumcampus.ac.za` or `010 593 5368`

### Conversation memory

The client (`javaScript.js`) maintains `AIEngine.conversationHistory`.
On each LLM call, the last **9 messages** are sent alongside the current message so the model has short-term context.

---

## 11. Environment Variables

Create a `.env` file in the project root (never commit this file):

```env
GROQ_API_KEY=gsk_...          # Required — get from console.groq.com
PORT=3000                     # Optional — defaults to 3000
NODE_TLS_REJECT_UNAUTHORIZED=0  # Optional — set on networks with SSL proxy
```

`GROQ_API_KEY` is validated at startup. The server exits immediately if it is missing.

---

## 12. Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Create your .env file
echo "GROQ_API_KEY=gsk_your_key_here" > .env

# 3. Start (production)
npm start

# 4. Start (development — auto-restart on save)
npm run dev
```

Server starts at **http://localhost:3000**

```
BC CourseFinder running → http://localhost:3000
```

To get a free Groq API key: https://console.groq.com
