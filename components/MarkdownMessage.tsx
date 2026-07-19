import { Fragment } from 'react';

type Token =
  | { type: 'text'; value: string }
  | { type: 'bold'; value: string }
  | { type: 'code'; value: string };

function parseInline(text: string): Token[] {
  const tokens: Token[] = [];
  const regex = /(\*\*([^*]+)\*\*|`([^`]+)`)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      tokens.push({ type: 'text', value: text.slice(last, match.index) });
    }
    if (match[2] !== undefined) {
      tokens.push({ type: 'bold', value: match[2] });
    } else if (match[3] !== undefined) {
      tokens.push({ type: 'code', value: match[3] });
    }
    last = regex.lastIndex;
  }
  if (last < text.length) {
    tokens.push({ type: 'text', value: text.slice(last) });
  }
  return tokens;
}

function renderInline(text: string, keyBase: string) {
  return parseInline(text).map((token, i) => {
    if (token.type === 'bold') {
      return <strong key={`${keyBase}-${i}`}>{token.value}</strong>;
    }
    if (token.type === 'code') {
      return <code key={`${keyBase}-${i}`}>{token.value}</code>;
    }
    return <Fragment key={`${keyBase}-${i}`}>{token.value}</Fragment>;
  });
}

export function MarkdownMessage({ text }: { text: string }) {
  const lines = text.split('\n');
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  let key = 0;

  const flushList = () => {
    if (list.length === 0) return;
    const items = list;
    blocks.push(
      <ul key={`ul-${key++}`}>
        {items.map((item, i) => (
          <li key={i}>{renderInline(item, `li-${key}-${i}`)}</li>
        ))}
      </ul>
    );
    list = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const bullet = line.match(/^[-*]\s+(.*)$/);

    if (bullet) {
      list.push(bullet[1]);
      continue;
    }

    flushList();
    if (line.trim() === '') continue;

    blocks.push(<p key={`p-${key++}`}>{renderInline(line, `p-${key}`)}</p>);
  }
  flushList();

  return <div className="coach-message">{blocks}</div>;
}
