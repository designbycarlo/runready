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
    const isManageable =
        weatherData.temp < 30 &&
        weatherData.wind_speed < 20 &&
        weatherData.precipitation < 0.2;

    // 3. Return a clean, standardized object for your UI
    return NextResponse.json({
        verdict: isManageable ? 'Go for it!' : 'Maybe later.',
        currentTemp: weatherData.temp,
        sunrise: weatherData.sunrise,
        sunset: weatherData.sunset,
        // ... other metrics
    });
}