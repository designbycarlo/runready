# 🏃‍♀️ RunReady

### Your intelligent running companion — real-time, weather-aware coaching in the browser.

> **RunReady** is a full-stack web app that turns live weather data into smart, personalized running advice. Using the browser's Geolocation API, it fetches current conditions and instantly classifies them into a **run verdict** — then an AI coach explains *why* and how to adjust your workout. Built to be fast, responsive, and genuinely useful on a phone mid-warmup.

---

## ✨ Highlights

- 🤖 **AI Running Coach** — a conversational assistant (powered by LLMs via OpenRouter) that gives advice grounded in *real* weather, not generic tips.
- 🌦️ **Weather-Aware Agent** — the coach calls the OpenWeather API live and reasons over temperature, wind, and precipitation.
- 🚦 **Run Verdict Engine** — classifies conditions as **Optimal / Caution / Avoid** from the user's geolocation.
- ⚡ **Real-Time by Design** — conditions are fetched on load via the Geolocation API, with zero manual input.
- 📱 **Mobile-First UI** — a compact, responsive interface built with Tailwind CSS 4.

---

## 🛠️ Tech Stack

A modern, production-minded stack chosen for developer experience and performance:

| Layer | Technology |
| --- | --- |
| Framework | **Next.js 16** (App Router, React 19) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS 4** |
| AI / LLM | **Vercel AI SDK** (`ai`, `@ai-sdk/openai-compatible`) → OpenRouter free models |
| Data | **OpenWeather API** (live weather) |
| Tooling | ESLint, Turbopack |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add environment variables (see .env.local)
#    OPENROUTER_API_KEY=...   (free key from https://openrouter.ai/keys)
#    WEATHER_API_KEY=...      (from https://openweathermap.org/api)

# 3. Run the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) and allow location access when prompted.

> 💡 The AI coach and weather verdict both rely on the keys above. The app runs without them, but the coach will fall back to general advice.

---

<!-- AUTO-GENERATED:START -->

> _Capabilities below are regenerated automatically by a Git post-commit hook after every commit — do not edit manually._

### Current Capabilities
- AI Running Coach - chat assistant powered by an LLM (OpenRouter free models) that gives advice based on real weather.
- Weather-Aware Agent - the coach fetches live conditions from the OpenWeather API and bases answers on temperature, wind, and precipitation.
- Run Verdict Engine - classifies conditions as Optimal / Caution / Avoid from geolocation.
- Real-time Analysis - automated weather fetching via the browser Geolocation API.
- Responsive UI - clean, mobile-first design built with Tailwind CSS.


### Technology Stack
- Next.js (App Router) - framework for optimized routing and rendering.
- React 19 - modern UI patterns and hooks.
- TypeScript - static typing for maintainability.
- Tailwind CSS 4 - utility-first styling.
- AI SDK (ai, ai-sdk/openai-compatible) - model-agnostic LLM streaming with tools.
- OpenRouter - OpenAI-compatible gateway providing free chat models.
- OpenWeather API - live weather data source.

<!-- AUTO-GENERATED:END -->
