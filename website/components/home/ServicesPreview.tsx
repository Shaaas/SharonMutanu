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
            From marketing sites to full digital platforms — every project engineered with precision and built to perform.
          </p>
        </div>

        {SERVICES.map((s, i) => (
          <div key={s.title} className="service-row reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1 }}>
              <span className="font-mono" style={{ fontSize: '10px', color: '#2D5BFF', minWidth: 28 }}>{s.num}</span>
              <div>
                <h3 className="service-title">{s.title}</h3>
                {s.num === '03' && (
                  <div style={{ display: 'flex', gap: '.5rem', marginTop: '.4rem', flexWrap: 'wrap' }}>
                    {['Supabase', 'M-Pesa', 'Portals', 'Auth'].map((tag) => (
                      <span key={tag} className="tag" style={{ fontSize: '6px' }}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p className="font-mono hide-mobile" style={{ fontSize: '9px', color: s.num === '03' ? '#2D5BFF' : '#444', textTransform: 'uppercase', letterSpacing: '.12em', lineHeight: 1.8, maxWidth: 220, textAlign: 'right' }}>
              {s.short}
            </p>
          </div>
        ))}

        <div className="reveal" style={{ marginTop: '2.5rem', background: 'rgba(45,91,255,.05)', border: '1px solid rgba(45,91,255,.2)', borderRadius: '1.5rem', padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div className="sect-label" style={{ marginBottom: '.5rem' }}><span className="dot" />FEATURED BUILD</div>
            <div className="font-bebas" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', textTransform: 'uppercase', marginBottom: '.35rem' }}>
              UBTA — Member Management Platform
            </div>
            <p className="font-mono" style={{ fontSize: '8px', color: '#aaa', letterSpacing: '.15em', textTransform: 'uppercase', lineHeight: 1.8 }}>
              3,900+ riders · M-Pesa payments · Admin portal · Certificate generation · Supabase backend
            </p>
          </div>
          <a href="https://ubta.co.ke" target="_blank" rel="noopener noreferrer" className="btn">
            <span className="btn-inner">VIEW LIVE →</span>
          </a>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <button className="btn reveal" onClick={() => goTo('services')}><span className="btn-inner">ALL SERVICES + PRICING →</span></button>
        </div>

      </div>
    </section>
  );
}
