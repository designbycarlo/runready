'use client';

import { useEffect, useState } from 'react';
import { AccordionItem } from '../components/AccordionItem';
import { RunStatusCard } from '../components/RunStatusCard';

interface WeatherVerdict {
  status: 'Optimal' | 'Caution' | 'Avoid';
  message: string;
  temp: number;
}

export default function DashboardPage() {
  const [data, setData] = useState<WeatherVerdict | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Persist theme changes and apply to document element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
          if (!res.ok) throw new Error("Failed to fetch weather data");

          const weatherData = await res.json();
          setData(weatherData);
        } catch (err) {
          setError("Could not retrieve weather details.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Please enable location access to see your run verdict.");
        setLoading(false);
      }
    );
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 p-4 sm:p-8">
      <div className="max-w-xl mx-auto space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-y-2">
          <div className="flex-grow"> {/* This div will take available space, pushing the button right */}
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">🏃‍♀️RunReady</h1>
            <p className="text-slate-400 text-sm font-medium">Daily performance forecast.</p>
          </div>
          <button
            onClick={toggleTheme}
            className="text-2xl hover:opacity-60 transition-opacity"
            aria-label="Toggle light/dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </header>

        <section>
          {loading && <div className="p-12 text-center animate-pulse text-slate-300 uppercase tracking-widest text-xs">Scanning...</div>}

          {error && <div className="p-4 border-l-2 border-red-500 text-red-500 text-sm">{error}</div>}

          {!loading && !error && data && <RunStatusCard {...data} />}
        </section>

        {/* UI Preview Section - Great for rapid styling/debugging */}
        <section className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900">
          <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-widest">Reference</h3>
          <div className="divide-y divide-slate-100 dark:divide-slate-900">
            <AccordionItem title="Optimal Conditions">
              <RunStatusCard status="Optimal" message="Perfect conditions for a morning sprint." temp={18} />
            </AccordionItem>
            <AccordionItem title="Cautionary Conditions">
              <RunStatusCard status="Caution" message="High humidity detected. Stay hydrated." temp={29} />
            </AccordionItem>
            <AccordionItem title="Avoid Conditions">
              <RunStatusCard status="Avoid" message="Extreme heat warning. Exercise indoors today." temp={36} />
            </AccordionItem>
          </div>
        </section>
      </div>
    </main>
  );
}
