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

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        <header className="mb-16">
          <h1 className="heading-xl text-zinc-900 dark:text-white">
            RunReady
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base mt-4">
            Daily performance forecast.
          </p>
        </header>

        <section className="mb-16">
          {loading && (
            <div className="py-16 text-center">
              <p className="text-zinc-400 text-sm uppercase tracking-widest animate-pulse">Loading...</p>
            </div>
          )}

          {error && (
            <div className="border-l-[3px] border-red-500 pl-4">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && data && (
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
              <RunStatusCard {...data} />
            </div>
          )}
        </section>

        <section>
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-1">Reference</h2>
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Weather Conditions</h3>
          </div>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <AccordionItem title="Optimal Conditions">
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 mt-4">
                <RunStatusCard status="Optimal" message="Perfect conditions for a morning sprint." temp={18} />
              </div>
            </AccordionItem>
            <AccordionItem title="Cautionary Conditions">
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 mt-4">
                <RunStatusCard status="Caution" message="High humidity detected. Stay hydrated." temp={29} />
              </div>
            </AccordionItem>
            <AccordionItem title="Avoid Conditions">
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 mt-4">
                <RunStatusCard status="Avoid" message="Extreme heat warning. Exercise indoors today." temp={36} />
              </div>
            </AccordionItem>
          </div>
        </section>
      </div>
    </main>
  );
}