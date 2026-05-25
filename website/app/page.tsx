'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '@/types/index';

// Layout
import { Footer }         from '@/components/home/Footer';

// Page views
import { Hero }           from '@/components/home/Hero';
import { FeaturedWork }   from '@/components/home/FeaturedWork';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { WhyUs }          from '@/components/home/WhyUs';
import { Testimonials }   from '@/components/home/shared/Testimonials';
import { CTABand }        from '@/components/home/shared/CTABand';

// Shared
import { ScrambleText }   from '@/components/home/shared/ScrambleText';
import { FAQItem }        from '@/components/home/shared/FAQItem';
import { ContactForm }    from '@/components/home/shared/ContactForm';
import { BlogContent }    from '@/components/home/shared/BlogContent';

// Data
import { PROJECTS }       from '@/constants/projects';
import { SERVICES, TECH_STACK, TESTIMONIALS as _T, TIMELINE } from '@/constants/services';
import { PRICING }        from '@/constants/pricing';
import { FAQS }           from '@/constants/faqs';
import { BLOG_POSTS }     from '@/constants/blog';

// Hooks
import { useReveal }      from '@/hooks/useReveal';

// ─────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home',     page: 'home'     },
  { label: 'Work',     page: 'work'     },
  { label: 'Services', page: 'services' },
  { label: 'About',    page: 'about'    },
  { label: 'Blog',     page: 'blog'     },
  { label: 'FAQ',      page: 'faq'      },
] as const;

// ═════════════════════════════════════════════════════════════════
// PAGE VIEWS
// ═════════════════════════════════════════════════════════════════

function HomePage({ goTo }: { goTo: (p: Page, slug?: string) => void }) {
  useReveal();
  return (
    <div>
      <Hero goTo={goTo} />
      <FeaturedWork goTo={goTo} />
      <ServicesPreview goTo={goTo} />
      <WhyUs />
      <Testimonials />
      <CTABand goTo={goTo} />
    </div>
  );
}

// ── WORK ─────────────────────────────────────────────────────────
function WorkPage({ goTo }: { goTo: (p: Page, slug?: string) => void }) {
  useReveal();
  const [filter, setFilter] = useState('All');
  const cats = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div>
      <section style={{ padding: '10rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="page-hero-glow" />
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="sect-label anim-fadeIn d1" style={{ marginBottom: '1.5rem' }}><span className="dot" />PORTFOLIO</div>
          <div className="display-section anim-fadeUp d2"><ScrambleText text="SELECTED" delay={200} /></div>
          <div className="display-section text-outline anim-fadeUp d3">WORK</div>
          <p className="anim-fadeUp d4 font-mono" style={{ marginTop: '2rem', fontSize: '10px', color: '#555', letterSpacing: '.4em', textTransform: 'uppercase', lineHeight: 2 }}>
            {PROJECTS.length} projects across web design, development, e-commerce, SaaS, and strategy.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div style={{ padding: '0 2.5rem 3rem', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '.25em', textTransform: 'uppercase', padding: '.5rem 1.25rem', borderRadius: 999, border: '1px solid', background: filter === cat ? '#2D5BFF' : 'transparent', borderColor: filter === cat ? '#2D5BFF' : 'rgba(255,255,255,.12)', color: filter === cat ? '#fff' : '#555', cursor: 'pointer', transition: 'all .25s' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="page-section">
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '1.25rem' }}>
          {filtered.map((p, i) => (
            <div
              key={p.slug}
              className="card reveal"
              style={{ transitionDelay: `${i * .05}s`, padding: '2.5rem', display: 'flex', flexDirection: 'column', minHeight: 360, cursor: 'pointer' }}
              onClick={() => goTo('work-case', p.slug)}
            >
              <div style={{ height: 3, background: `linear-gradient(90deg,${p.color},#2D5BFF)`, borderRadius: '2rem 2rem 0 0', margin: '-2.5rem -2.5rem 2rem' }} />
              {p.url && (
                <div style={{ height: 200, borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem', position: 'relative', pointerEvents: 'none' }}>
                  <iframe src={p.url} style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left', border: 'none', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', inset: 0 }} />
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div className="label-xs" style={{ color: '#2D5BFF' }}>{String(i + 1).padStart(2, '0')}</div>
                <div className="label-xs">{p.year}</div>
              </div>
              <h2 className="display-card" style={{ color: '#2D5BFF', marginBottom: '.9rem' }}>{p.name}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.1rem' }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <p style={{ color: '#555', fontSize: '.8rem', lineHeight: 1.75, marginBottom: 'auto' }}>{p.desc}</p>
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '8px', color: '#333', letterSpacing: '.2em', textTransform: 'uppercase' }}>{p.category}</span>
                <span className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.2em', textTransform: 'uppercase' }}>VIEW CASE STUDY →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section section-divider" style={{ textAlign: 'center' }}>
        <div className="sect-label reveal" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}><span className="dot" />START SOMETHING NEW</div>
        <h2 className="display-section reveal" style={{ marginBottom: '2rem' }}>Your project<br /><span className="text-outline">could be next.</span></h2>
        <button className="btn btn-primary reveal" onClick={() => goTo('contact')}><span className="btn-inner">GET IN TOUCH</span></button>
      </section>
    </div>
  );
}

// ── CASE STUDY ───────────────────────────────────────────────────
function CaseStudyPage({ slug, goTo }: { slug: string; goTo: (p: Page, slug?: string) => void }) {
  useReveal();
  const project = PROJECTS.find((p) => p.slug === slug)!;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div>
      <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 0%,${project.color}80 0%,transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom,transparent,#050505)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative' }}>
          <button onClick={() => goTo('work')} className="font-mono" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '8px', color: '#555', letterSpacing: '.3em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '.5rem', marginBottom: '2.5rem', transition: 'color .2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2D5BFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}>← BACK TO WORK</button>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.25rem' }}>
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <h1 className="font-bebas" style={{ fontSize: 'clamp(3.5rem,9vw,8rem)', lineHeight: .85, textTransform: 'uppercase', marginBottom: '1.5rem' }}>{project.name}</h1>
          <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: 560, lineHeight: 1.6 }}>{project.tagline}</p>
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['Year', project.year], ['Category', project.category], ['Stack', project.tech.join(' · ')]].map(([l, v]) => (
              <div key={l}>
                <div className="label-xs" style={{ marginBottom: '.25rem' }}>{l}</div>
                <div className="font-mono" style={{ fontSize: '10px', color: '#fff', letterSpacing: '.1em' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-divider">
        <div className="case-study-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,.07)', borderRadius: '1.5rem', aspectRatio: '16/9', marginBottom: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg,${project.color}30 0%,transparent 60%)` }} />
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div className="font-bebas" style={{ fontSize: '4rem', color: 'rgba(45,91,255,.3)', letterSpacing: '.05em' }}>{project.name}</div>
                <div className="font-mono" style={{ fontSize: '8px', color: '#2a2a2a', letterSpacing: '.3em', textTransform: 'uppercase', marginTop: '.5rem' }}>PROJECT PREVIEW</div>
              </div>
            </div>
            {[['THE CHALLENGE', project.challenge], ['THE SOLUTION', project.solution]].map(([label, text]) => (
              <div key={label} style={{ marginBottom: '3rem' }}>
                <div className="sect-label" style={{ marginBottom: '1.25rem' }}><span className="dot" />{label}</div>
                <p style={{ color: '#888', fontSize: '.95rem', lineHeight: 1.9 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ position: 'sticky', top: '7rem' }}>
            <div style={{ background: '#0a0a0a', border: '1px solid rgba(45,91,255,.2)', borderRadius: '1.5rem', padding: '2rem', marginBottom: '1.5rem' }}>
              <div className="sect-label" style={{ marginBottom: '1.5rem' }}><span className="dot" />RESULTS</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.results.map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#2D5BFF', marginTop: '.45rem', flexShrink: 0 }} />
                    <span style={{ color: '#bbb', fontSize: '.85rem', lineHeight: 1.6 }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,.06)', borderRadius: '1.5rem', padding: '2rem', marginBottom: '2rem' }}>
              <div className="sect-label" style={{ marginBottom: '1.5rem' }}><span className="dot" />TECH STACK</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {project.tech.map((t) => <span key={t} className="font-mono" style={{ fontSize: '8px', color: '#555', border: '1px solid rgba(255,255,255,.08)', padding: '4px 10px', borderRadius: 999, letterSpacing: '.1em', textTransform: 'uppercase' }}>{t}</span>)}
              </div>
            </div>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', marginBottom: '1rem', display: 'flex' }}>
                <span className="btn-inner">VIEW LIVE SITE ↗</span>
              </a>
            )}
            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }} onClick={() => goTo('contact')}><span className="btn-inner">START A SIMILAR PROJECT</span></button>
            <button className="btn" style={{ width: '100%' }} onClick={() => goTo('work')}><span className="btn-inner">VIEW ALL WORK</span></button>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <button onClick={() => goTo('work-case', prev.slug)} className="case-nav-link" style={{ textAlign: 'left', background: 'none', border: 'none', borderRight: '1px solid rgba(255,255,255,.06)', cursor: 'pointer', color: '#fff' }}>
          <div className="label-xs" style={{ marginBottom: '.75rem' }}>← PREVIOUS</div>
          <div className="font-bebas" style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', textTransform: 'uppercase', lineHeight: 1, padding: '3rem 2.5rem' }}>{prev.name}</div>
        </button>
        <button onClick={() => goTo('work-case', next.slug)} className="case-nav-link" style={{ textAlign: 'right', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}>
          <div className="label-xs" style={{ marginBottom: '.75rem' }}>NEXT →</div>
          <div className="font-bebas" style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', textTransform: 'uppercase', lineHeight: 1, padding: '3rem 2.5rem' }}>{next.name}</div>
        </button>
      </div>
    </div>
  );
}

// ── SERVICES ─────────────────────────────────────────────────────
function ServicesPage({ goTo }: { goTo: (p: Page) => void }) {
  useReveal();
  return (
    <div>
      <section style={{ padding: '10rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="page-hero-glow" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sect-label anim-fadeIn d1" style={{ marginBottom: '1.5rem' }}><span className="dot" />WHAT I BUILD</div>
          <div className="display-section anim-fadeUp d2"><ScrambleText text="SERVICES" delay={200} /></div>
          <div className="display-section text-outline anim-fadeUp d3">& SOLUTIONS</div>
        </div>
      </section>

      <section className="page-section section-divider">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className="services-grid-row reveal" style={{ transitionDelay: `${i * .07}s`, display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '3rem', padding: '3.5rem 0', borderBottom: '1px solid rgba(255,255,255,.06)', alignItems: 'start' }}>
              <div className="font-mono" style={{ fontSize: '10px', color: '#2D5BFF', letterSpacing: '.3em', paddingTop: '.5rem' }}>{s.num}</div>
              <div>
                <h2 className="display-service" style={{ marginBottom: '1.25rem' }}>{s.title}</h2>
                <p style={{ color: '#666', fontSize: '.9rem', lineHeight: 1.8, maxWidth: 420 }}>{s.desc}</p>
              </div>
              <div>
                <div className="label-xs" style={{ marginBottom: '1rem' }}>DELIVERABLES</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                  {s.deliverables.map((d) => (
                    <li key={d} style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#2D5BFF', flexShrink: 0 }} />
                      <span className="font-mono" style={{ fontSize: '8.5px', color: '#555', letterSpacing: '.12em', textTransform: 'uppercase' }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="page-section page-section-dark">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="sect-label reveal" style={{ marginBottom: '1rem' }}><span className="dot" />TOOLS & TECHNOLOGIES</div>
            <h2 className="display-section reveal"><ScrambleText text="THE TECH STACK" /></h2>
            <p className="reveal" style={{ color: '#555', fontSize: '.88rem', lineHeight: 1.8, marginTop: '1.25rem', maxWidth: 440 }}>Every tool chosen for performance, scalability, and developer experience. No bloat, no compromise.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: '1rem' }}>
            {TECH_STACK.map((t, i) => (
              <div key={t.name} className="tech-item reveal-scale" style={{ transitionDelay: `${i * .04}s` }}>
                <div className="label-xs" style={{ color: '#2D5BFF' }}>{t.cat}</div>
                <div className="font-bebas" style={{ fontSize: '1.4rem', letterSpacing: '.02em', textTransform: 'uppercase' }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="page-section">
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="sect-label reveal" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span className="dot" />INVESTMENT</div>
            <h2 className="display-section reveal"><ScrambleText text="TRANSPARENT PRICING" /></h2>
            <p className="reveal" style={{ color: '#555', fontSize: '.85rem', marginTop: '1.25rem', maxWidth: 420, margin: '1.25rem auto 0' }}>No hidden fees, no surprises. Clear packages designed to deliver maximum value at every stage of your growth.</p>
          </div>
          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem' }}>
            {PRICING.map((plan, i) => (
              <div key={plan.title} className={`pricing-card reveal-scale${plan.highlight ? ' highlight' : ''}`} style={{ transitionDelay: `${i * .08}s` }}>
                {plan.highlight && <div className="price-corner" />}
                {plan.highlight && <div className="font-mono" style={{ fontSize: '7px', color: '#2D5BFF', letterSpacing: '.3em', textTransform: 'uppercase', marginBottom: '1rem', background: 'rgba(45,91,255,.1)', padding: '4px 10px', borderRadius: 999, width: 'fit-content' }}>MOST POPULAR</div>}
                <div className="sect-label" style={{ marginBottom: '1rem' }}>{plan.title.toUpperCase()}</div>
                <div style={{ marginBottom: '.5rem', lineHeight: 1 }}>
                  <span className="font-bebas" style={{ fontSize: '3.5rem' }}>{plan.price}</span>
                  <span className="font-mono" style={{ fontSize: '11px', color: '#555' }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '.78rem', color: '#444', marginBottom: '1.5rem', lineHeight: 1.6 }}>{plan.desc}</p>
                <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#2D5BFF', flexShrink: 0 }} />
                      <span className="font-mono" style={{ fontSize: '8.5px', color: '#555', letterSpacing: '.12em', textTransform: 'uppercase' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`btn${plan.highlight ? ' btn-primary' : ''}`} style={{ width: '100%' }} onClick={() => goTo('contact')}>
                  <span className="btn-inner">Initialize</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────
function AboutPage({ goTo }: { goTo: (p: Page) => void }) {
  useReveal();
  const VALUES = [
    { num: '01', title: 'Craft Over Templates',    body: 'Every site is built from scratch, in code. No Squarespace, no page builders. The difference is measurable in performance and visible in the result.' },
    { num: '02', title: 'Business-First Design',   body: 'A beautiful site that does not convert is just expensive art. I design with business outcomes in mind first, aesthetics second — ideally both.' },
    { num: '03', title: 'Radical Transparency',    body: 'You will always know where your project stands. I do not overpromise, disappear, or invoice for things not agreed upfront.' },
    { num: '04', title: 'Continuous Improvement',  body: 'The web moves fast. I spend time every week learning — new tools, new techniques, new thinking. Your project benefits from that.' },
  ];
  return (
    <div>
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="page-hero-glow" />
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end' }}>
          <div>
            <div className="sect-label anim-fadeIn d1" style={{ marginBottom: '1.5rem' }}><span className="dot" />ABOUT</div>
            <div className="display-section anim-fadeUp d2"><ScrambleText text="THE STUDIO" delay={200} /></div>
            <div className="display-section text-outline anim-fadeUp d3">& THE PERSON</div>
          </div>
          <div className="anim-fadeUp d4">
            <p style={{ fontSize: '1.05rem', color: '#777', lineHeight: 1.9, marginBottom: '1.5rem' }}>MYSA is a one-person web design and development practice based in Nairobi, Kenya. I work directly with founders, business owners, and marketing teams who need digital infrastructure that actually performs.</p>
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9 }}>Not an agency. Not a freelancer-with-templates. The quality control and intentionality of a boutique studio, with the speed and directness of working with one person.</p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="page-section section-divider">
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '5rem', alignItems: 'start' }}>
          <div className="reveal-left" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,.07)', borderRadius: '2rem', aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
            <img src="/me2.png" alt="Sharon Mutanu" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="reveal-right">
            <div className="sect-label" style={{ marginBottom: '1.5rem' }}><span className="dot" />THE PERSON BEHIND THE WORK</div>
            <h2 className="font-bebas" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: .9 }}>Building the web<br /><span style={{ color: '#2D5BFF' }}>from Nairobi.</span></h2>
            <p style={{ color: '#777', fontSize: '.9rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>I build websites from Nairobi with a simple goal. Make them feel as good as the businesses behind them. Too many sites look like afterthoughts. Slow, generic, and hard to trust.</p>
            <p style={{ color: '#777', fontSize: '.9rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>I care about clarity, speed, and restraint. No unnecessary noise. No bloated layouts. Every element should earn its place. The result is work that feels modern, calm, and built to last.</p>
            <p style={{ color: '#555', fontSize: '.9rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>When I'm not building client projects, I'm studying design systems, refining ideas, and reworking details most people would never notice. It's a bit obsessive. It works.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => goTo('contact')}><span className="btn-inner">WORK WITH ME</span></button>
              <button className="btn" onClick={() => goTo('work')}><span className="btn-inner">SEE MY WORK</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-section page-section-dark">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sect-label reveal" style={{ marginBottom: '1rem' }}><span className="dot" />HOW I WORK</div>
          <h2 className="display-section reveal" style={{ marginBottom: '4rem' }}><ScrambleText text="VALUES" /></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal-scale" style={{ transitionDelay: `${i * .08}s`, background: '#0a0a0a', border: '1px solid rgba(255,255,255,.06)', borderRadius: '1.5rem', padding: '2rem' }}>
                <div className="label-xs" style={{ color: '#2D5BFF', marginBottom: '.75rem' }}>{v.num}</div>
                <h3 className="font-bebas" style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: '.75rem' }}>{v.title}</h3>
                <p style={{ color: '#555', fontSize: '.82rem', lineHeight: 1.8 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="sect-label reveal" style={{ marginBottom: '1rem', justifyContent: 'center' }}><span className="dot" />THE JOURNEY</div>
          <h2 className="display-section reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}><ScrambleText text="ORIGIN STORY" /></h2>
          <div style={{ position: 'relative' }}>
            <div className="timeline-line" />
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="reveal" style={{ transitionDelay: `${i * .08}s`, display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2.5rem', marginBottom: '3rem', alignItems: 'start' }}>
                <div style={{ textAlign: 'right', paddingRight: '1.5rem', position: 'relative' }}>
                  <span className="font-mono" style={{ fontSize: '10px', color: '#2D5BFF', letterSpacing: '.15em' }}>{item.year}</span>
                  <div className="timeline-dot" />
                </div>
                <div style={{ paddingTop: '.15rem' }}>
                  <h3 className="font-bebas" style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: 1.8 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── BLOG ─────────────────────────────────────────────────────────
function BlogPage({ goTo }: { goTo: (p: Page, slug?: string) => void }) {
  useReveal();
  const [filter, setFilter] = useState('All');
  const cats = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.cat)))];
  const filtered = filter === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.cat === filter);

  return (
    <div>
      <section style={{ padding: '10rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="page-hero-glow" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sect-label anim-fadeIn d1" style={{ marginBottom: '1.5rem' }}><span className="dot" />INSIGHTS</div>
          <div className="display-section anim-fadeUp d2"><ScrambleText text="BLOG" delay={200} /></div>
          <div className="display-section text-outline anim-fadeUp d3">& THINKING</div>
          <p className="anim-fadeUp d4 font-mono" style={{ marginTop: '2rem', fontSize: '10px', color: '#555', letterSpacing: '.4em', textTransform: 'uppercase', lineHeight: 2 }}>Design, development, business strategy.<br />Things worth writing down.</p>
        </div>
      </section>
      <div style={{ padding: '0 2.5rem 3rem', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          {cats.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '.25em', textTransform: 'uppercase', padding: '.5rem 1.25rem', borderRadius: 999, border: '1px solid', background: filter === cat ? '#2D5BFF' : 'transparent', borderColor: filter === cat ? '#2D5BFF' : 'rgba(255,255,255,.12)', color: filter === cat ? '#fff' : '#555', cursor: 'pointer', transition: 'all .25s' }}>{cat}</button>
          ))}
        </div>
      </div>
      <section className="page-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {filter === 'All' && filtered.length > 0 && (
            <div className="two-col reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '3rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,.06)', borderRadius: '2rem', marginBottom: '2rem', cursor: 'pointer', transition: 'border-color .3s,transform .3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(45,91,255,.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              onClick={() => goTo('blog-post', filtered[0].slug)}
            >
              <div style={{ background: '#111', borderRadius: '1.25rem', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(45,91,255,.12) 0%,transparent 60%)' }} />
                <div className="font-mono" style={{ fontSize: '8px', color: '#2a2a2a', letterSpacing: '.3em', position: 'relative' }}>FEATURED</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1.25rem', alignItems: 'center' }}><span className="tag">{filtered[0].cat}</span><span className="font-mono" style={{ fontSize: '7px', color: '#333', letterSpacing: '.2em' }}>FEATURED</span></div>
                <h2 className="font-bebas" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>{filtered[0].title}</h2>
                <p style={{ color: '#555', fontSize: '.85rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{filtered[0].excerpt}</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}><span className="font-mono" style={{ fontSize: '8px', color: '#333', letterSpacing: '.2em' }}>{filtered[0].date}</span><span className="font-mono" style={{ fontSize: '8px', color: '#333', letterSpacing: '.2em' }}>{filtered[0].readTime}</span></div>
                <div style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '8px', color: '#2D5BFF', letterSpacing: '.2em', textTransform: 'uppercase' }}>READ ARTICLE →</div>
              </div>
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1.25rem' }}>
            {(filter === 'All' ? filtered.slice(1) : filtered).map((post, i) => (
              <div key={post.slug} className="blog-card reveal" style={{ transitionDelay: `${i * .06}s` }} onClick={() => goTo('blog-post', post.slug)}>
                <div style={{ background: '#111', borderRadius: '.75rem', aspectRatio: '16/9', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(45,91,255,.08) 0%,transparent 60%)' }} />
                  <div className="font-mono" style={{ fontSize: '7px', color: '#1e1e1e', letterSpacing: '.3em', position: 'relative' }}>{post.cat}</div>
                </div>
                <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1rem', alignItems: 'center' }}><span className="tag">{post.cat}</span><span className="font-mono" style={{ fontSize: '7px', color: '#2a2a2a', letterSpacing: '.2em' }}>{post.readTime}</span></div>
                <h2 className="font-bebas" style={{ fontSize: '1.6rem', textTransform: 'uppercase', marginBottom: '.75rem', lineHeight: 1.05 }}>{post.title}</h2>
                <p style={{ color: '#555', fontSize: '.8rem', lineHeight: 1.7, marginBottom: 'auto' }}>{post.excerpt}</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-mono" style={{ fontSize: '7px', color: '#2a2a2a', letterSpacing: '.2em' }}>{post.date}</span>
                  <span className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.2em' }}>READ →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── BLOG POST ────────────────────────────────────────────────────
function BlogPostPage({ slug, goTo }: { slug: string; goTo: (p: Page, s?: string) => void }) {
  useReveal();
  const post = BLOG_POSTS.find((p) => p.slug === slug)!;
  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const next = BLOG_POSTS[(idx + 1) % BLOG_POSTS.length];

  return (
    <div>
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 400, background: 'radial-gradient(ellipse at 50% -20%,rgba(45,91,255,.1) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <button onClick={() => goTo('blog')} className="font-mono" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '8px', color: '#555', letterSpacing: '.3em', textTransform: 'uppercase', transition: 'color .2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2D5BFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}>← BLOG</button>
            <span className="tag">{post.cat}</span>
          </div>
          <h1 className="font-bebas" style={{ fontSize: 'clamp(2.5rem,7vw,6rem)', textTransform: 'uppercase', lineHeight: .9, marginBottom: '2rem' }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <span className="font-mono" style={{ fontSize: '8px', color: '#444', letterSpacing: '.2em' }}>{post.date}</span>
            <span className="font-mono" style={{ fontSize: '8px', color: '#444', letterSpacing: '.2em' }}>{post.readTime}</span>
          </div>
        </div>
      </section>
      <article className="page-section">
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.8, marginBottom: '3rem', fontStyle: 'italic', borderLeft: '2px solid #2D5BFF', paddingLeft: '1.5rem' }}>{post.excerpt}</p>
          <BlogContent text={post.content} />
          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', margin: '4rem 0 3rem' }} />
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.3em', marginBottom: '.5rem' }}>WRITTEN BY</div>
              <div className="font-bebas" style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>MYSA</div>
              <div className="font-mono" style={{ fontSize: '8px', color: '#444', letterSpacing: '.2em', marginTop: '.25rem' }}>NAIROBI, KENYA</div>
            </div>
            <div style={{ textAlign: 'right' }}><button className="btn btn-primary" onClick={() => goTo('contact')}><span className="btn-inner">START A PROJECT</span></button></div>
          </div>
        </div>
      </article>
      <section style={{ borderTop: '1px solid rgba(255,255,255,.06)', padding: '3rem 2.5rem' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div className="label-xs" style={{ marginBottom: '.5rem' }}>NEXT ARTICLE</div>
            <button onClick={() => goTo('blog-post', next.slug)} className="font-bebas" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'clamp(1.5rem,3vw,2.5rem)', textTransform: 'uppercase', color: '#fff', lineHeight: 1, transition: 'color .2s', textAlign: 'left' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2D5BFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>{next.title}</button>
          </div>
          <button className="btn" onClick={() => goTo('blog-post', next.slug)}><span className="btn-inner">READ →</span></button>
        </div>
      </section>
    </div>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────
function FAQPage({ goTo }: { goTo: (p: Page) => void }) {
  useReveal();
  return (
    <div>
      <section style={{ padding: '10rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="page-hero-glow" />
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="sect-label anim-fadeIn d1" style={{ marginBottom: '1.5rem' }}><span className="dot" />QUESTIONS</div>
          <div className="display-hero anim-fadeUp d2"><ScrambleText text="FAQ" delay={200} /></div>
          <p className="anim-fadeUp d3 font-mono" style={{ marginTop: '2rem', fontSize: '10px', color: '#555', letterSpacing: '.4em', textTransform: 'uppercase', lineHeight: 2 }}>Everything you need to know before we start working together.</p>
        </div>
      </section>
      <section className="page-section section-divider">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {FAQS.map((section, si) => (
            <div key={section.cat} className="reveal" style={{ transitionDelay: `${si * .1}s`, marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <span className="sect-label"><span className="dot" />{section.cat}</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.06)' }} />
              </div>
              {section.items.map((item, i) => <FAQItem key={item.q} q={item.q} a={item.a} index={i} />)}
            </div>
          ))}
          <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid rgba(45,91,255,.2)', borderRadius: '2rem', padding: '3rem', textAlign: 'center', marginTop: '2rem' }}>
            <div className="sect-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span className="dot" />STILL HAVE QUESTIONS?</div>
            <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>Just ask directly.</h2>
            <p style={{ color: '#555', fontSize: '.88rem', lineHeight: 1.8, maxWidth: 360, margin: '0 auto 2rem' }}>I respond to every inquiry personally, usually within 24 hours.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => goTo('contact')}><span className="btn-inner">SEND A MESSAGE</span></button>
              <a href="mailto:mutanu.sharon@yahoo.com" className="btn"><span className="btn-inner">EMAIL DIRECTLY</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────
function ContactPage() {
  useReveal();
  return (
    <div>
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="page-hero-glow" />
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end' }}>
          <div>
            <div className="sect-label anim-fadeIn d1" style={{ marginBottom: '1.5rem' }}><span className="dot" />START A PROJECT</div>
            <div className="anim-fadeUp d2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem,12vw,10rem)', lineHeight: .82, letterSpacing: '-.02em', textTransform: 'uppercase' }}><ScrambleText text="LET'S BUILD" delay={200} /></div>
            <div className="anim-fadeUp d3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem,12vw,10rem)', lineHeight: .82, letterSpacing: '-.02em', textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.17)' }}>TOGETHER.</div>
          </div>
          <div className="anim-fadeUp d4">
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.9, marginBottom: '2.5rem' }}>Have a project in mind? Fill out the form and I will get back to you within 24 hours with a custom proposal. No sales call required, no commitment to proceed.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[{ label: 'Email', value: 'mutanu.sharon@yahoo.com' }, { label: 'Location', value: 'Nairobi, Kenya' }, { label: 'Response Time', value: 'Within 24 hours' }, { label: 'Availability', value: 'Open to new projects' }].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                  <span className="font-mono" style={{ fontSize: '8px', color: '#2D5BFF', letterSpacing: '.3em', textTransform: 'uppercase', minWidth: 100 }}>{item.label}</span>
                  <span style={{ fontSize: '.85rem', color: '#777' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="page-section section-divider">
        <div className="contact-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 560px', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div className="sect-label" style={{ marginBottom: '1.5rem' }}><span className="dot" />WHAT HAPPENS NEXT</div>
            {[{ s: '01', title: 'You fill the form', body: 'Tell me about your project, budget, and goals. The more detail, the better.' }, { s: '02', title: 'I review and respond', body: 'Within 24 hours with an initial proposal and any clarifying questions.' }, { s: '03', title: 'We get on a call', body: '30-minute discovery call to align on scope, timeline, and vision.' }, { s: '04', title: 'Work begins', body: '50% deposit to kick off, then I build while you run your business.' }].map((item) => (
              <div key={item.s} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, border: '1px solid rgba(45,91,255,.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: '8px', color: '#2D5BFF', letterSpacing: '.1em' }}>{item.s}</div>
                <div>
                  <h3 className="font-bebas" style={{ fontSize: '1.3rem', textTransform: 'uppercase', marginBottom: '.4rem' }}>{item.title}</h3>
                  <p style={{ color: '#555', fontSize: '.82rem', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,.07)', borderRadius: '2rem', padding: '2.5rem' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════
// ROOT
// ═════════════════════════════════════════════════════════════════
export default function MysaStudio() {
  const [page, setPage] = useState<Page>('home');
  const [slug, setSlug] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const goTo = useCallback((p: Page, s?: string) => {
    setPage(p);
    if (s) setSlug(s);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isActive = (p: Page) => {
    if (p === 'work') return page === 'work' || page === 'work-case';
    if (p === 'blog') return page === 'blog' || page === 'blog-post';
    return page === p;
  };

  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: '#fff', fontFamily: 'var(--font-sans)', overflowX: 'hidden' }}>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!menuOpen}>
        <div className="sect-label" style={{ marginBottom: '1.5rem' }}><span className="dot" />NAVIGATION</div>
        {NAV_ITEMS.map(({ label, page: p }) => (
          <button key={p} className="mobile-nav-btn" onClick={() => goTo(p as Page)} style={{ color: isActive(p as Page) ? '#2D5BFF' : '#fff' }}>{label}</button>
        ))}
        <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => goTo('contact')}><span className="btn-inner">Start a Project</span></button>
      </div>

      {/* Nav */}
      <nav
        className="nav-bar"
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
          background: scrolled ? 'rgba(5,5,5,.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,.06)' : '0.3px solid transparent',
          padding: '1.25rem 2.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          transition: 'background .4s,border-color .4s',
        }}
      >
        <button onClick={() => goTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.75rem' }} aria-label="Home">
          <img src="/logo2.png" alt="MYSA" style={{ height: 100, width: 400, objectFit: 'contain', transform: 'scale(2.5)' }} />
        </button>

        <ul className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV_ITEMS.filter((n) => n.page !== 'home').map(({ label, page: p }) => (
            <li key={p}>
              <button className={`nav-link${isActive(p as Page) ? ' active' : ''}`} onClick={() => goTo(p as Page)} style={{ color: isActive(p as Page) ? '#fff' : '#2D5BFF' }}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontFamily: 'var(--font-mono)', fontSize: '8px', color: '#222', letterSpacing: '.2em' }}>
            <span className="dot" />ONLINE
          </div>
          <button className="btn btn-primary btn-sm hide-mobile" onClick={() => goTo('contact')}><span className="btn-inner">Start a Project</span></button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', zIndex: 70, position: 'relative' }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? '#2D5BFF' : '#fff', transition: 'transform .3s,opacity .3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? '#2D5BFF' : '#fff', transition: 'opacity .3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? '#2D5BFF' : '#fff', transition: 'transform .3s,opacity .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Page content */}
      <main key={`${page}-${slug}`} className="anim-pageIn">
        {page === 'home'      && <HomePage goTo={goTo} />}
        {page === 'work'      && <WorkPage goTo={goTo} />}
        {page === 'work-case' && <CaseStudyPage slug={slug} goTo={goTo} />}
        {page === 'services'  && <ServicesPage goTo={goTo} />}
        {page === 'about'     && <AboutPage goTo={goTo} />}
        {page === 'blog'      && <BlogPage goTo={goTo} />}
        {page === 'blog-post' && <BlogPostPage slug={slug} goTo={goTo} />}
        {page === 'faq'       && <FAQPage goTo={goTo} />}
        {page === 'contact'   && <ContactPage />}
      </main>

      <Footer goTo={goTo} />

      {/* WhatsApp */}
      <a
        href="https://wa.me/254115013612"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, boxShadow: '0 4px 20px rgba(37,211,102,.4)', transition: 'transform .25s,box-shadow .25s', textDecoration: 'none' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(37,211,102,.6)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(37,211,102,.4)'; }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}