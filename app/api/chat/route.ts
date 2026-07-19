import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { streamText, tool, convertToModelMessages, stepCountIs } from 'ai';
import { z } from 'zod';

export const maxDuration = 30;

const openrouter = createOpenAICompatible({
  name: 'openrouter',
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function getWeatherVerdict(lat: number, lon: number) {
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) return { error: 'Weather API not configured' };

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  if (!res.ok) return { error: 'Failed to fetch weather' };

  const data = await res.json();
  const temp = data.main?.temp ?? 0;
  const windSpeed = data.wind?.speed ?? 0;
  const precipitation = data.rain?.['1h'] ?? 0;

  let status: 'Optimal' | 'Caution' | 'Avoid' = 'Optimal';
  let message = "Perfect conditions for a run!";

  if (temp >= 35 || windSpeed >= 40) {
    status = 'Avoid';
    message = "Dangerous conditions. Stay safe inside!";
  } else if (temp >= 30 || windSpeed >= 25 || precipitation > 0.5) {
    status = 'Caution';
    message = "It's getting tough out there. Take it easy and stay hydrated.";
  }

  return { status, message, temp, windSpeed, precipitation };
}

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;
  const lat = body.lat;
  const lon = body.lon;

  let locationContext = '\n\nNo location is available for the user, so answer generally.';

  if (typeof lat === 'number' && typeof lon === 'number') {
    const verdict = await getWeatherVerdict(lat, lon);
    if ('error' in verdict) {
      locationContext = `\n\nThe user's location is latitude ${lat}, longitude ${lon}, but the weather service is unavailable (${verdict.error}). Answer generally.`;
    } else {
      locationContext = `\n\nThe user's current location is latitude ${lat}, longitude ${lon}. The CURRENT real weather conditions there are: verdict "${verdict.status}" (${verdict.message}), temperature ${verdict.temp}°C, wind speed ${verdict.windSpeed} m/s, precipitation ${verdict.precipitation} mm. Base your running advice on these actual conditions. You may also call the getRunVerdict tool if the user asks about a different location.`;
    }
  }

  const result = await streamText({
    model: openrouter('openrouter/free'),
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(3),
    system:
      "You are a friendly running coach for RunReady. Help users with training tips and workout advice based on current weather conditions. Keep answers concise and encouraging." +
      locationContext,
    tools: {
      getRunVerdict: tool({
        description:
          'Get the current running conditions verdict (Optimal, Caution, or Avoid) for a location based on weather.',
        inputSchema: z.object({
          lat: z.number().describe('Latitude of the location'),
          lon: z.number().describe('Longitude of the location'),
        }),
        async execute({ lat, lon }) {
          return getWeatherVerdict(lat, lon);
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
