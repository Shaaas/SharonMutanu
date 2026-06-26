'use client';
import React from 'react';
import { ScrambleText } from '@/components/home/shared/ScrambleText';

const REASONS = [
  {
    num: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Fast Turnaround',
    body: 'Most projects delivered in 2–4 weeks. No agency bloat, just focused, efficient execution from one person who cares.',
  },
  {
    num: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Results-Focused',
    body: 'Every design decision is backed by conversion principles. Beautiful AND functional. Never one without the other.',
  },
  {
    num: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Clean Code',
    body: 'Hand-crafted code, no page builder bloat. Fast load times, SEO-ready, and a codebase you can actually maintain.',
  },
  {
    num: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Direct Access',
    body: 'You work directly with me! No account managers, no miscommunication, no delays. One point of contact, always.',
  },
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
              style={{
                transitionDelay: `${i * .08}s`,
                background: '#111',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: '1.5rem',
                padding: '2rem',
                transition: 'border-color .3s, transform .3s',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(45,91,255,.4)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.1)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(45,91,255,.1)', border: '1px solid rgba(45,91,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <span className="font-mono" style={{ fontSize: '9px', color: '#333', letterSpacing: '.2em' }}>{item.num}</span>
              </div>
              <h3 className="font-bebas" style={{ fontSize: '1.6rem', letterSpacing: '.02em', textTransform: 'uppercase', color: '#fff' }}>{item.title}</h3>
              <p style={{ color: '#888', fontSize: '.85rem', lineHeight: 1.8, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
