'use client';

import { useEffect, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

export function RunCoachChat() {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });
      },
      () => {}
    );
  }, []);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: coords ? { lat: coords.lat, lon: coords.lon } : {},
    }),
  });

  return (
    <div
      className="p-4 sm:p-6"
      style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '12px' }}
    >
      <p className="mono-caption mb-3">RunReady AI Coach</p>

      <div className="mb-3 space-y-2.5" style={{ maxHeight: '260px', overflowY: 'auto' }}>
        {messages.length === 0 && (
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Ask for running advice based on today&apos;s conditions.
          </p>
        )}
        {messages.map((m) => {
          const text = m.parts
            .filter((p) => p.type === 'text')
            .map((p) => (p as { text: string }).text)
            .join('');

          return (
            <div key={m.id}>
              <p
                className="mono-caption mb-0.5"
                style={{ color: m.role === 'user' ? 'var(--color-text)' : 'var(--color-optimal)' }}
              >
                {m.role === 'user' ? 'You' : 'RunReady AI'}
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text)' }}>
                {text}
              </p>
            </div>
          );
        })}
        {status === 'streaming' && (
          <p className="text-sm animate-pulse" style={{ color: 'var(--color-text-light)' }}>
            Thinking...
          </p>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const input = form.elements.namedItem('prompt') as HTMLInputElement;
          if (!input.value.trim()) return;
          sendMessage({ text: input.value });
          input.value = '';
        }}
        className="flex gap-2"
      >
        <input
          name="prompt"
          className="flex-1 p-2 rounded text-sm"
          style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
          placeholder="Ask for running advice..."
        />
        <button
          type="submit"
          className="px-3 py-2 rounded text-sm font-medium text-white"
          style={{ backgroundColor: 'var(--color-optimal)' }}
          disabled={status === 'streaming'}
        >
          Send
        </button>
      </form>
    </div>
  );
}
