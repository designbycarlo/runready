import { google } from '@ai-sdk/google';
import { streamText, tool, convertToModelMessages } from 'ai';
import { z } from 'zod';

export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;

  const result = await streamText({
    model: google('gemini-2.0-flash'),
    messages: await convertToModelMessages(messages),
    system:
      "You are a friendly running coach for RunReady. Help users with training tips and workout advice based on current weather conditions. Keep answers concise and encouraging.",
    tools: {
      getRunVerdict: tool({
        description:
          'Get the current running conditions verdict (Optimal, Caution, or Avoid) for a location based on weather.',
        inputSchema: z.object({
          lat: z.number().describe('Latitude of the location'),
          lon: z.number().describe('Longitude of the location'),
        }),
        async execute({ lat, lon }) {
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
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
