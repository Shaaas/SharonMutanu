'use client';

import React from 'react';
import { Page } from '@/types';
import { PROJECTS } from '@/constants/projects';
import { ScrambleText } from '@/components/home/shared/ScrambleText';
import { useReveal } from '@/hooks/useReveal';

interface Props {
  goTo: (p: Page, slug?: string) => void;
}

export function FeaturedWork({ goTo }: Props) {
  useReveal();
  return (
    <section className="page-section section-divider">
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
          <div>
            <div className="sect-label reveal" style={{ marginBottom: '1rem' }}><span className="dot" />SELECTED WORK</div>
            <h2 className="display-section reveal"><ScrambleText text="RECENT PROJECTS" /></h2>
          </div>
          <button className="btn reveal" onClick={() => goTo('work')}><span className="btn-inner">ALL PROJECTS →</span></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1.25rem' }}>
          {PROJECTS.slice(0, 3).map((p, i) => (
            <div
              key={p.slug}
              className="card reveal"
              style={{ transitionDelay: `${i * .07}s`, padding: '2.5rem', display: 'flex', flexDirection: 'column', minHeight: 320, cursor: 'pointer' }}
              onClick={() => goTo('work-case', p.slug)}
            >
              <div className="label-xs" style={{ marginBottom: '.75rem', color: '#2D5BFF' }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className="display-card" style={{ color: '#2D5BFF', marginBottom: '.9rem' }}>{p.name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.1rem' }}>
                {p.tags.slice(0, 2).map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <p style={{ color: '#aaa', fontSize: '.8rem', lineHeight: 1.75, marginBottom: 'auto' }}>{p.desc}</p>
              <div style={{ marginTop: '1.75rem', fontFamily: 'var(--font-mono)', fontSize: '8px', color: '#2D5BFF', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                VIEW CASE STUDY →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}