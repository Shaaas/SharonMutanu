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
        justifyContent: 'center', padding: '8rem 2.5rem 4rem',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Floating hero photo */}
      <div
        style={{
          position: 'absolute', right: '5%', top: '10%',
          width: '45vw', maxWidth: 600, height: '80vh',
          zIndex: 0, opacity: 1, pointerEvents: 'none',
        }}
      >
        <img
          src="/hero.png"
          alt=""
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
          }}
        />
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