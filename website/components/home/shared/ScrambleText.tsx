'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

export function ScrambleText({ text, className, style, delay = 0 }: Props) {
  const [displayed, setDisplayed] = useState('');
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const duration = 900;
    const start = performance.now() + delay;

    const tick = (now: number) => {
      if (now < start) { rafRef.current = requestAnimationFrame(tick); return; }
      const progress = Math.min((now - start) / duration, 1);
      const revealCount = Math.floor(progress * text.length);
      const result = text.split('').map((c, i) => {
        if (c === ' ') return ' ';
        if (i < revealCount) return c;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      setDisplayed(result);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setDisplayed(text);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [text, delay]);

  return (
    <span className={className} style={style} aria-label={text}>
      {displayed}
    </span>
  );
}