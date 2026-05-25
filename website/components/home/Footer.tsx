'use client';

import React from 'react';
import { Page } from '@/types';

interface Props {
  goTo: (p: Page) => void;
}

const FOOTER_LINKS: { label: string; page: Page }[] = [
  { label: 'Work',     page: 'work'    },
  { label: 'Services', page: 'services'},
  { label: 'About',    page: 'about'   },
  { label: 'Blog',     page: 'blog'    },
  { label: 'FAQ',      page: 'faq'     },
  { label: 'Contact',  page: 'contact' },
];

const SOCIALS = [
  { label: 'Twitter / X', url: 'https://x.com/Sharon_Mutan' },
  { label: 'LinkedIn',    url: 'https://www.linkedin.com/in/sharonmutanu/' },
  { label: 'Instagram',   url: 'https://www.instagram.com/sha.ta.nu/' },
];

export function Footer({ goTo }: Props) {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.06)', padding: '4rem 2.5rem 2.5rem', background: '#050505' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }} className="three-col">
          {/* Brand */}
          <div>
            <button
              onClick={() => goTo('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.5rem' }}
            >
              <div style={{ width: 28, height: 28, border: '1.5px solid #2D5BFF', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 10, height: 10, background: '#2D5BFF', borderRadius: 2 }} />
              </div>
              <span className="font-mono" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.45em', color: '#fff', textTransform: 'uppercase' }}>MYSA</span>
            </button>
            <p style={{ color: '#444', fontSize: '.82rem', lineHeight: 1.8, maxWidth: 280 }}>
              Architecting high-fidelity digital infrastructure for ambitious businesses. Based in Nairobi, working globally.
            </p>
            <button
              onClick={() => goTo('contact')}
              className="font-mono"
              style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: '1.5rem', fontSize: '9px', color: '#2D5BFF', letterSpacing: '.3em', textTransform: 'uppercase', borderBottom: '1px solid rgba(45,91,255,.35)', paddingBottom: 2 }}
            >
              START A PROJECT →
            </button>
          </div>

          {/* Nav */}
          <div>
            <div className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.45em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Pages</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {FOOTER_LINKS.map(({ label, page }) => (
                <li key={label}>
                  <button
                    onClick={() => goTo(page)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '.82rem', color: '#444', transition: 'color .2s', fontFamily: 'inherit' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.45em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Connect</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '.82rem', color: '#444', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span className="font-mono" style={{ fontSize: '8px', color: '#1e1e1e', letterSpacing: '.3em', textTransform: 'uppercase' }}>© 2025 MYSA</span>
          <span className="font-mono" style={{ fontSize: '8px', color: '#1e1e1e', letterSpacing: '.3em', textTransform: 'uppercase' }}>NAIROBI, KENYA</span>
        </div>
      </div>
    </footer>
  );
}