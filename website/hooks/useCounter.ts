'use client';
import { useState, useEffect, useRef } from 'react';

export function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Try IntersectionObserver first
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            io.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
      );
      io.observe(el);

      // Fallback - if element is already in view on mount
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        startAnimation();
        io.disconnect();
      }

      return () => io.disconnect();
    } else {
      // No IntersectionObserver support - just start after delay
      const timer = setTimeout(startAnimation, 500);
      return () => clearTimeout(timer);
    }
  }, [target, duration]);

  return { count, ref };
}
