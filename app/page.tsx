'use client';

import { useEffect, useState } from 'react';
import { RunStatusCard } from '../components/RunStatusCard';
import { RunCoachChat } from '../components/RunCoachChat';

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
      <div className="mx-auto px-4 py-6 sm:px-6 sm:py-10" style={{ maxWidth: 'var(--content-max-width)' }}>
        <header className="mb-6 sm:mb-8">
          <h1 className="heading-xl" style={{ color: 'var(--color-text)' }}>
            RunReady
          </h1>
          <p className="mt-2 sm:mt-3" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-body)' }}>
            Daily performance forecast.
          </p>
        </header>

        <section className="mb-6 sm:mb-8">
          {loading && (
            <div className="py-10 text-center">
              <p className="text-sm uppercase tracking-widest animate-pulse" style={{ color: 'var(--color-text-light)' }}>Loading...</p>
            </div>
          )}

          {error && (
            <div className="border-l-[3px] pl-3" style={{ borderColor: 'var(--color-avoid)' }}>
              <p className="text-sm" style={{ color: 'var(--color-avoid)' }}>{error}</p>
            </div>
          )}

          {!loading && !error && data && (
            <div className="p-4 sm:p-6" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
              <RunStatusCard {...data} />
            </div>
          )}
        </section>

        <section className="mb-6 sm:mb-8">
          <RunCoachChat />
        </section>
      </div>
    </main>
  );
}