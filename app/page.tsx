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
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        <header className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-black leading-none">
            RunReady
          </h1>
          <p className="text-black/40 text-base mt-3">
            Daily performance forecast.
          </p>
        </header>

        <section className="mb-16">
          {loading && (
            <div className="py-16 text-center">
              <p className="text-black/30 text-sm uppercase tracking-widest animate-pulse">Loading...</p>
            </div>
          )}

          {error && (
            <div className="border-l-[3px] border-red-500 pl-4">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && data && (
            <div className="bg-white rounded">
              <RunStatusCard {...data} />
            </div>
          )}
        </section>

        <section>
          <h2 className="border-t-[3px] border-black pt-6 text-sm font-semibold text-black uppercase tracking-widest mb-6">
            Reference
          </h2>
          <div className="divide-y divide-black/10">
            <AccordionItem title="Optimal Conditions">
              <div className="bg-white rounded">
                <RunStatusCard status="Optimal" message="Perfect conditions for a morning sprint." temp={18} />
              </div>
            </AccordionItem>
            <AccordionItem title="Cautionary Conditions">
              <div className="bg-white rounded">
                <RunStatusCard status="Caution" message="High humidity detected. Stay hydrated." temp={29} />
              </div>
            </AccordionItem>
            <AccordionItem title="Avoid Conditions">
              <div className="bg-white rounded">
                <RunStatusCard status="Avoid" message="Extreme heat warning. Exercise indoors today." temp={36} />
              </div>
            </AccordionItem>
          </div>
        </section>
      </div>
    </main>
  );
}