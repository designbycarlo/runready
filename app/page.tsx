'use client';

import { useEffect, useState } from 'react';
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
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-black text-slate-900 italic uppercase">RunReady</h1>
          <p className="text-slate-500 font-medium">Your daily performance forecast.</p>
        </header>

        <section>
          {loading && <div className="p-12 text-center animate-pulse bg-white border rounded-xl text-slate-400">Checking conditions...</div>}

          {error && <div className="p-6 bg-red-50 border border-red-200 text-red-600 rounded-lg">{error}</div>}

          {!loading && !error && data && <RunStatusCard {...data} />}
        </section>

        {/* UI Preview Section - Great for rapid styling/debugging */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-[0.2em]">Component Style Guide</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400">Optimal State</p>
              <RunStatusCard status="Optimal" message="Perfect conditions for a morning sprint." temp={18} />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400">Caution State</p>
              <RunStatusCard status="Caution" message="High humidity detected. Stay hydrated." temp={29} />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400">Avoid State</p>
              <RunStatusCard status="Avoid" message="Extreme heat warning. Exercise indoors today." temp={36} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
