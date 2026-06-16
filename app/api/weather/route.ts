import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const lat = searchParams.get('lat');
        const lon = searchParams.get('lon');

        if (!lat || !lon) {
            return NextResponse.json({ error: 'Missing coordinates' }, { status: 400 });
        }

        // 1. Fetch from Weather API (e.g., OpenWeather or Open-Meteo)
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            throw new Error('WEATHER_API_KEY is not configured in environment variables');
        }

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) {
            throw new Error(`Weather API failed with status: ${res.status}`);
        }

        const data = await res.json();
        const temp = data.main?.temp ?? 0;
        const windSpeed = data.wind?.speed ?? 0;
        const precipitation = data.rain?.['1h'] ?? 0;

        // 2. Logic: Define "Manageable" conditions
        let status: 'Optimal' | 'Caution' | 'Avoid' = 'Optimal';
        let message = "Perfect conditions for a run!";

        if (temp >= 35 || windSpeed >= 40) {
            status = 'Avoid';
            message = "Dangerous conditions. Stay safe inside!";
        } else if (temp >= 30 || windSpeed >= 25 || precipitation > 0.5) {
            status = 'Caution';
            message = "It's getting tough out there. Take it easy and stay hydrated.";
        }

        // 3. Return a clean, standardized object for your UI
        return NextResponse.json({
            status,
            message,
            temp,
            sunrise: data.sys?.sunrise,
            sunset: data.sys?.sunset,
        });
    } catch (error) {
        console.error('Weather Route Error:', error);
        return NextResponse.json({ error: 'Failed to retrieve weather data' }, { status: 500 });
    }
}