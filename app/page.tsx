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
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="mx-auto px-6 py-16 sm:py-24" style={{ maxWidth: 'var(--content-max-width)' }}>
        <header className="mb-16">
          <h1 className="heading-xl" style={{ color: 'var(--color-text)' }}>
            RunReady
          </h1>
          <p className="mt-4" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-body)' }}>
            Daily performance forecast.
          </p>
        </header>

        <section className="mb-16">
          {loading && (
            <div className="py-16 text-center">
              <p className="text-sm uppercase tracking-widest animate-pulse" style={{ color: 'var(--color-text-light)' }}>Loading...</p>
            </div>
          )}

          {error && (
            <div className="border-l-[3px] pl-4" style={{ borderColor: 'var(--color-avoid)' }}>
              <p className="text-sm" style={{ color: 'var(--color-avoid)' }}>{error}</p>
            </div>
          )}

          {!loading && !error && data && (
            <div className="p-6" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
              <RunStatusCard {...data} />
            </div>
          )}
        </section>

        <section>
          <div className="pb-4 mb-6" style={{ borderBottom: '2px solid var(--color-text)' }}>
            <h2 className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-light)' }}>Reference</h2>
            <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>Weather Conditions</h3>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
            <AccordionItem title="Optimal Conditions">
              <div className="mt-4 p-6" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
                <RunStatusCard status="Optimal" message="Perfect conditions for a morning sprint." temp={18} />
              </div>
            </AccordionItem>
            <AccordionItem title="Cautionary Conditions">
              <div className="mt-4 p-6" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
                <RunStatusCard status="Caution" message="High humidity detected. Stay hydrated." temp={29} />
              </div>
            </AccordionItem>
            <AccordionItem title="Avoid Conditions">
              <div className="mt-4 p-6" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
                <RunStatusCard status="Avoid" message="Extreme heat warning. Exercise indoors today." temp={36} />
              </div>
            </AccordionItem>
          </div>
        </section>
      </div>
    </main>
  );
}