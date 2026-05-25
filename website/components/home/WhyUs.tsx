'use client';

import React from 'react';
import { ScrambleText } from '@/components/home/shared/ScrambleText';

const REASONS = [
  { icon: '⚡', title: 'Fast Turnaround',  body: 'Most projects delivered in 2–4 weeks. No agency bloat — just focused, efficient execution.' },
  { icon: '🎯', title: 'Results-Focused',  body: 'Every design decision is backed by conversion principles. Beautiful AND functional.' },
  { icon: '🔧', title: 'Clean Code',        body: 'Hand-crafted code. No page builder bloat. Fast load times and SEO-ready as default.' },
  { icon: '📞', title: 'Direct Access',     body: 'You work directly with me. No account managers, no miscommunication, no delays.' },
];

export function WhyUs() {
  return (
    <section className="page-section">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="sect-label reveal" style={{ marginBottom: '1rem', justifyContent: 'center' }}><span className="dot" />WHY MYSA</div>
          <h2 className="display-section reveal"><ScrambleText text="BUILT DIFFERENT." /></h2>
          <h2 className="display-section reveal text-outline-accent" style={{ fontSize: 'clamp(2rem,5vw,4.5rem)' }}>DELIVERED DIFFERENT.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '1.25rem' }}>
          {REASONS.map((item, i) => (
            <div
              key={item.title}
              className="reveal-scale"
              style={{ transitionDelay: `${i * .08}s`, background: '#0a0a0a', border: '1px solid rgba(255,255,255,.06)', borderRadius: '1.5rem', padding: '2rem', transition: 'border-color .3s,transform .3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(45,91,255,.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 className="font-bebas" style={{ fontSize: '1.6rem', marginBottom: '.75rem', letterSpacing: '.02em', textTransform: 'uppercase' }}>{item.title}</h3>
              <p style={{ color: '#555', fontSize: '.82rem', lineHeight: 1.8 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}