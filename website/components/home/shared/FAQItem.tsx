'use client';

import React, { useState } from 'react';

interface Props {
  q: string;
  a: string;
  index: number;
}

export function FAQItem({ q, a, index }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span
            className="font-mono"
            style={{ fontSize: '9px', color: '#2D5BFF', letterSpacing: '.2em', minWidth: 28 }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="font-bebas"
            style={{ fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', textTransform: 'uppercase', letterSpacing: '.01em', lineHeight: 1 }}
          >
            {q}
          </span>
        </div>
        <span
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32,
            border: '1px solid rgba(255,255,255,.12)', borderRadius: '50%',
            fontFamily: 'monospace', fontSize: '1.1rem',
            color: open ? '#2D5BFF' : '#555',
            transition: 'color .25s,transform .35s',
            transform: open ? 'rotate(45deg)' : 'none',
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      <div
        className="faq-body"
        style={{ maxHeight: open ? '500px' : '0', opacity: open ? 1 : 0 }}
      >
        <div style={{ paddingLeft: 'calc(28px + 1.5rem)', paddingBottom: '1.5rem' }}>
          <p style={{ color: '#fff', fontSize: '.88rem', lineHeight: 1.85 }}>{a}</p>
        </div>
      </div>
    </div>
  );
}