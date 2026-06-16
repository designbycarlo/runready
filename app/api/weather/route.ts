import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    // 1. Fetch from Weather API (e.g., OpenWeather or Open-Meteo)
    const weatherData = await fetch(
        `https://api.example.com/data?lat=${lat}&lon=${lon}&apikey=${process.env.WEATHER_API_KEY}`
    ).then(res => res.json());

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
        // ... other metrics
    });
}