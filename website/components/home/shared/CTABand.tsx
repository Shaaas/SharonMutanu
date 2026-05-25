'use client';

import React from 'react';
import { Page } from '@/types';
import { ScrambleText } from '@/components/home/shared/ScrambleText';

interface Props {
  goTo: (p: Page) => void;
}

export function CTABand({ goTo }: Props) {
  return (
    <section className="page-section section-divider" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '80vw', height: '80vw', maxWidth: 600, maxHeight: 600, background: 'radial-gradient(circle,rgba(45,91,255,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div className="sect-label reveal" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}><span className="dot" />READY TO BUILD?</div>
      <h2 className="display-section reveal" style={{ marginBottom: '.5rem' }}><ScrambleText text="LET'S MAKE SOMETHING" /></h2>
      <h2 className="display-section reveal text-outline" style={{ marginBottom: '2.5rem', fontSize: 'clamp(2rem,6vw,5rem)' }}>EXTRAORDINARY.</h2>
      <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => goTo('contact')}><span className="btn-inner">START A PROJECT</span></button>
        <button className="btn" onClick={() => goTo('work')}><span className="btn-inner">VIEW OUR WORK</span></button>
      </div>
    </section>
  );
}