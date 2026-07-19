# 🏃‍♀️ RunReady: Your Intelligent Running Companion

**RunReady** a simple web application that provides real-time running recommendations based on localized weather data. By analyzing temperature and atmospheric conditions via geolocation, it delivers an instant "run verdict" to ensure athlete safety and performance.

---

## ✨ Key Features

*   **Real-time Analysis**: Automated weather fetching via browser Geolocation API.
*   **Data-Driven Verdicts**: Logic-based recommendations categorized into:
    *   🟢 **Optimal**: Perfect conditions for peak performance.
    *   🟠 **Caution**: Advisories for moderate environmental challenges.
    *   🔴 **Avoid**: Safety warnings for extreme weather.
*   **Responsive UI**: Clean, mobile-first design built with Tailwind CSS.
*   **Component Style Guide**: Built-in preview section for rapid UI development and debugging.

---

## 🛠️ Technology Stack

RunReady is built on a robust and modern technology stack, ensuring high performance, scalability, and maintainability:

*   **Next.js (App Router)**: Framework for optimized routing and rendering.
*   **React 19**: Modern UI patterns and hooks.
*   **TypeScript**: Static typing for enhanced maintainability and developer experience.
*   **Tailwind CSS 4**: Utility-first styling for rapid, consistent design.

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!-- AUTO-GENERATED:START -->

## Project Status (auto-updated)

> This section is regenerated automatically by a Git post-commit hook after every commit - do not edit manually.

**Branch:** main  **|**  **Commits:** 35  **|**  **Last commit:** 20a95d4 (2026-07-19)

### Recent Commits
- 2026-07-19 20a95d4 chore(docs): sync README commit history and stats via post-commit hook
- 2026-07-19 c717621 chore(docs): sync README commit history via post-commit hook
- 2026-07-19 a69bdec docs: update README with latest commit history
- 2026-07-19 12717cf chore: verify post-commit README auto-update hook
- 2026-07-19 2506ccc feat(ui): add RunCoachChat component and AI chat functionality

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
