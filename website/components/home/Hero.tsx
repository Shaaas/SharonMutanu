'use client';

import React from 'react';
import { Page } from '@/types';
import { ScrambleText } from '@/components/home/shared/ScrambleText';
import { Stat } from '@/components/home/shared/Stat';

interface Props {
  goTo: (p: Page) => void;
}

export function Hero({ goTo }: Props) {
  return (
    <section
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 3rem',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Large glowing orb */}
        <div style={{
          position: 'absolute', right: '-10%', top: '-20%',
          width: '70vw', height: '70vw', maxWidth: 900, maxHeight: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,91,255,0.25) 0%, rgba(45,91,255,0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        {/* Secondary orb */}
        <div style={{
          position: 'absolute', right: '15%', top: '30%',
          width: '30vw', height: '30vw', maxWidth: 400, maxHeight: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,91,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        {/* Geometric grid lines */}
        <svg style={{ position: 'absolute', right: 0, top: 0, width: '55%', height: '100%', opacity: 0.04 }} viewBox="0 0 500 800" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="800" stroke="#2D5BFF" strokeWidth="1" />
          ))}
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 45} x2="500" y2={i * 45} stroke="#2D5BFF" strokeWidth="1" />
          ))}
          <circle cx="360" cy="200" r="120" stroke="#2D5BFF" strokeWidth="0.5" fill="none" />
          <circle cx="360" cy="200" r="80" stroke="#2D5BFF" strokeWidth="0.5" fill="none" />
          <circle cx="360" cy="200" r="40" stroke="#2D5BFF" strokeWidth="0.5" fill="none" />
          <line x1="240" y1="200" x2="480" y2="200" stroke="#2D5BFF" strokeWidth="1" />
          <line x1="360" y1="80" x2="360" y2="320" stroke="#2D5BFF" strokeWidth="1" />
        </svg>
        {/* Corner accent */}
        <div style={{
          position: 'absolute', right: '5%', bottom: '10%',
          width: 200, height: 200,
          border: '1px solid rgba(45,91,255,0.12)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', right: '7%', bottom: '12%',
          width: 140, height: 140,
          border: '1px solid rgba(45,91,255,0.08)',
          borderRadius: '50%',
        }} />
      </div>

      <div
        className="anim-fadeIn d1 font-mono hide-mobile"
        style={{
          position: 'absolute', left: '2rem', top: '50%',
          transform: 'rotate(-90deg) translateX(-50%)', transformOrigin: 'left center',
          fontSize: '8px', color: '#1a1a1a', letterSpacing: '.4em',
          textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}
      >
        NAIROBI — KE — EST. 2023
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        {/* Status */}
        <div className="anim-fadeIn d1" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div className="sect-label"><span className="dot" />OPERATIONAL STATUS: ONLINE</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', background: 'rgba(45,91,255,.08)', border: '1px solid rgba(45,91,255,.2)', borderRadius: 999, padding: '.5rem 1.25rem' }}>
            <span className="dot" />
            <span className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.3em', textTransform: 'uppercase' }}>ACCEPTING NEW PROJECTS — 2026</span>
          </div>
        </div>

        {/* Wordmark */}
        <div
          className="anim-fadeUp d2 display-hero"
          style={{ background: 'linear-gradient(90deg, #B8960C 0%, #F5D78E 50%, #B8960C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          <ScrambleText text="MYSA" delay={300} />
        </div>
        <div className="anim-fadeUp d3 display-hero text-outline">STUDIO</div>

        {/* Marquee */}
        <div
          className="marquee-wrap anim-fadeIn d4"
          style={{ margin: '2rem 0', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)', padding: '.6rem 0' }}
          aria-hidden="true"
        >
          <div className="marquee-track font-mono" style={{ fontSize: '8px', color: '#2D5BFFc', letterSpacing: '.4em' }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>WEB DESIGN &nbsp;// &nbsp;DEVELOPMENT &nbsp;// &nbsp;DIGITAL STRATEGY &nbsp;// &nbsp;UI/UX &nbsp;// &nbsp;LANDING PAGES &nbsp;// &nbsp;SAAS PRODUCTS &nbsp;// &nbsp;</span>
            ))}
          </div>
        </div>

        {/* Tagline + CTAs */}
        <div className="anim-fadeUp d4" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '4rem' }}>
          <p className="font-mono" style={{ fontSize: '10px', color: '#555', letterSpacing: '.5em', textTransform: 'uppercase', lineHeight: 2, maxWidth: 360 }}>
            ARCHITECTING HIGH-FIDELITY<br />DIGITAL INFRASTRUCTURE<br />FOR AMBITIOUS BUSINESSES
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => goTo('contact')}><span className="btn-inner">INITIALIZE SESSION</span></button>
            <button className="btn" onClick={() => goTo('work')}><span className="btn-inner">VIEW WORK</span></button>
          </div>
        </div>

        {/* Stats */}
        <div className="anim-fadeIn d5" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: '2.5rem', alignItems: 'center' }}>
          <Stat value={20} suffix="+" label="Projects Delivered" />
          <div className="v-rule hide-mobile" style={{ height: 55 }} />
          <Stat value={3} suffix="+" label="Years Active" />
          <div className="v-rule hide-mobile" style={{ height: 55 }} />
          <Stat value={100} suffix="%" label="Client Satisfaction" />
          <div className="v-rule hide-mobile" style={{ height: 55 }} />
          <Stat value={24} suffix="h" label="Response Time" />
        </div>
      </div>

      <div
        className="anim-fadeIn d6 hide-mobile"
        style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', display: 'flex', alignItems: 'center', gap: '.75rem', fontFamily: 'var(--font-mono)', fontSize: '8px', color: '#1e1e1e', letterSpacing: '.3em', textTransform: 'uppercase' }}
      >
        SCROLL
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,#2D5BFF,transparent)', animation: 'scrollLine 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}