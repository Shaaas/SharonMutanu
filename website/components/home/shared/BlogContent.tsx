import React from 'react';

interface Props {
  text: string;
}

export function BlogContent({ text }: Props) {
  return (
    <div>
      {text.split('\n\n').map((block, i) => {
        if (block.startsWith('## ')) return (
          <h2
            key={i}
            className="font-bebas"
            style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', textTransform: 'uppercase', margin: '3rem 0 1.25rem', lineHeight: 1 }}
          >
            {block.slice(3)}
          </h2>
        );
        const parts = block.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} style={{ color: '#777', fontSize: '.95rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            {parts.map((part, j) =>
              part.startsWith('**') && part.endsWith('**')
                ? <strong key={j} style={{ color: '#bbb', fontWeight: 600 }}>{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        );
      })}
    </div>
  );
}