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
        // NOTE: api.example.com is a placeholder. Replace this with a real weather service URL.
        const res = await fetch(
            `https://b256d83f7e61d780893aa4117639b3bf/data?lat=${lat}&lon=${lon}&apikey=${apiKey}`
        );

        if (!res.ok) {
            throw new Error(`Weather API failed with status: ${res.status}`);
        }

        const weatherData = await res.json();

        // 2. Logic: Define "Manageable" conditions
        let status: 'Optimal' | 'Caution' | 'Avoid' = 'Optimal';
        let message = "Perfect conditions for a run!";

        if (weatherData.temp >= 35 || weatherData.wind_speed >= 40) {
            status = 'Avoid';
            message = "Dangerous conditions. Stay safe inside!";
        } else if (weatherData.temp >= 30 || weatherData.wind_speed >= 25 || weatherData.precipitation > 0.5) {
            status = 'Caution';
            message = "It's getting tough out there. Take it easy and stay hydrated.";
        }

        // 3. Return a clean, standardized object for your UI
        return NextResponse.json({
            status,
            message,
            temp: weatherData.temp,
            sunrise: weatherData.sunrise,
            sunset: weatherData.sunset,
        });
    } catch (error) {
        console.error('Weather Route Error:', error);
        return NextResponse.json({ error: 'Failed to retrieve weather data' }, { status: 500 });
    }
}