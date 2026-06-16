# 🏃‍♀️ RunReady: Your Intelligent Running Companion

**RunReady** web application that provides real-time running recommendations based on localized weather data. By analyzing temperature and atmospheric conditions via geolocation, it delivers an instant "run verdict" to ensure athlete safety and performance.

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
