'use client';

import React from 'react';
import { TESTIMONIALS } from '@/constants/services';
import { ScrambleText } from '@/components/home/shared/ScrambleText';

export function Testimonials() {
  return (
    <section className="page-section page-section-dark">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="sect-label reveal" style={{ marginBottom: '1rem', justifyContent: 'center' }}><span className="dot" />CLIENT FEEDBACK</div>
        <h2 className="display-section reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <ScrambleText text="WHAT CLIENTS SAY" />
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="t-card reveal-scale" style={{ transitionDelay: `${i * .08}s` }}>
              <div style={{ color: '#2D5BFF', fontSize: '1.75rem', marginBottom: '.75rem', fontFamily: 'Georgia,serif', lineHeight: 1 }}>"</div>
              <p style={{ color: '#777', fontSize: '.85rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: '1rem' }}>
                <div className="font-mono" style={{ fontSize: '9px', color: '#fff', letterSpacing: '.15em' }}>{t.name}</div>
                <div className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.15em', marginTop: '.25rem' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}