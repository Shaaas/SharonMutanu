'use client';

import React from 'react';
import { Page } from '@/types';
import { SERVICES } from '@/constants/services';
import { ScrambleText } from '@/components/home/shared/ScrambleText';

interface Props {
  goTo: (p: Page) => void;
}

export function ServicesPreview({ goTo }: Props) {
  return (
    <section className="page-section page-section-dark">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem', alignItems: 'end' }}>
          <div>
            <div className="sect-label reveal" style={{ marginBottom: '1rem' }}><span className="dot" />WHAT I BUILD</div>
            <h2 className="display-section reveal"><ScrambleText text="SERVICES" /></h2>
          </div>
          <p className="reveal-right" style={{ color: '#2D5BFF', fontSize: '.88rem', lineHeight: 1.9, alignSelf: 'end', maxWidth: 380 }}>
            From initial concept to final deployment — every project built with precision engineering and creative intentionality.
          </p>
        </div>
        {SERVICES.slice(0, 4).map((s, i) => (
          <div key={s.title} className="service-row reveal" style={{ transitionDelay: `${i * .07}s` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1 }}>
              <span className="font-mono" style={{ fontSize: '10px', color: '#2D5BFF', minWidth: 28 }}>{s.num}</span>
              <h3 className="service-title">{s.title}</h3>
            </div>
            <p className="font-mono hide-mobile" style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '.12em', lineHeight: 1.8, maxWidth: 220, textAlign: 'right' }}>
              {s.short}
            </p>
          </div>
        ))}
        <div style={{ marginTop: '3rem' }}>
          <button className="btn reveal" onClick={() => goTo('services')}><span className="btn-inner">ALL SERVICES + PRICING →</span></button>
        </div>
      </div>
    </section>
  );
}