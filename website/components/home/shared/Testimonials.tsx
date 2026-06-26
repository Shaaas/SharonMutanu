'use client';
import React, { useState } from 'react';
import { TESTIMONIALS } from '@/constants/services';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  const initials = (name: string) => name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <section className="page-section page-section-dark">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="sect-label reveal" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span className="dot" />CLIENT FEEDBACK</div>
        </div>

        <div className="reveal" style={{ background: '#111', border: '1px solid rgba(255,255,255,.1)', borderRadius: '2rem', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '2rem', left: '2.5rem', fontFamily: 'Georgia, serif', fontSize: '6rem', color: 'rgba(45,91,255,.15)', lineHeight: 1 }}>"</div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: 'clamp(.95rem, 2vw, 1.1rem)', color: '#ccc', lineHeight: 1.9, marginBottom: '2.5rem', fontStyle: 'italic', paddingTop: '2rem' }}>
              {t.quote}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(45,91,255,.2)', border: '1px solid rgba(45,91,255,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#2D5BFF', letterSpacing: '.05em', flexShrink: 0 }}>
                {initials(t.name)}
              </div>
              <div>
                <div className="font-bebas" style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '.05em', color: '#fff' }}>{t.name}</div>
                <div className="font-mono" style={{ fontSize: '8px', color: '#555', letterSpacing: '.2em', textTransform: 'uppercase' }}>{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '.75rem', marginTop: '2rem' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{ width: i === active ? 24 : 6, height: 6, borderRadius: 999, background: i === active ? '#2D5BFF' : 'rgba(255,255,255,.15)', border: 'none', cursor: 'pointer', transition: 'all .3s', padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
