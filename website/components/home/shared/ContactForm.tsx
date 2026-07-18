'use client';

import React, { useState } from 'react';
import { FormData, FormKey } from '@/types';

const FIELDS: { label: string; key: FormKey; type: string; placeholder?: string; options?: string[] }[] = [
  { label: 'Name',             key: 'name',        type: 'text',     placeholder: 'Your full name' },
  { label: 'Email',            key: 'email',       type: 'email',    placeholder: 'email@example.com' },
  { label: 'Company / Brand',  key: 'company',     type: 'text',     placeholder: 'Company or brand name' },
  { label: 'Project Type',     key: 'projectType', type: 'select',   options: ['Website', 'Landing Page', 'Redesign', 'E-Commerce', 'Web App / Platform', 'SACCO System', 'Delivery App', 'Brand Identity / Logo', 'Social Media Management'] },
  { label: 'Budget',           key: 'budget',      type: 'select',   options: ['$350+', '$750+', '$1200+', "Let's discuss"] },
  { label: 'Project Details',  key: 'details',     type: 'textarea', placeholder: 'Tell me about your project, goals, and timeline...' },
];

const INIT: FormData = { name: '', email: '', company: '', projectType: 'Website', budget: '$350+', details: '' };

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INIT);
  const [dir, setDir] = useState<'right' | 'left'>('right');
  const [formKey, setFormKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const f = FIELDS[step];
    const v = formData[f.key];
    const errs: Partial<FormData> = {};
    if (!v.trim()) errs[f.key] = `${f.label} is required`;
    else if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errs[f.key] = 'Enter a valid email';
    setErrors(errs);
    return !Object.keys(errs).length;
  };

  const next = () => { if (!validate()) return; setDir('right'); setFormKey((k) => k + 1); setStep((s) => Math.min(s + 1, FIELDS.length - 1)); };
  const back = () => { setErrors({}); setDir('left'); setFormKey((k) => k + 1); setStep((s) => Math.max(s - 1, 0)); };
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setFormData((p) => ({ ...p, [FIELDS[step].key]: e.target.value })); setErrors({}); };
  const [sending, setSending] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/xeebgrdz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          details: formData.details,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please email mutanu.sharon@yahoo.com directly.');
      }
    } catch {
      alert('Something went wrong. Please email mutanu.sharon@yahoo.com directly.');
    } finally {
      setSending(false);
    }
  };

  const f = FIELDS[step];
  const ferr = errors[f.key];

  if (submitted) return (
    <div className="anim-scaleIn" style={{ textAlign: 'center', padding: '3rem 0' }}>
      <div style={{ width: 60, height: 60, border: '1.5px solid #2D5BFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.25rem' }}>✓</div>
      <div className="font-bebas" style={{ fontSize: '2rem', color: '#2D5BFF', marginBottom: '.75rem', textTransform: 'uppercase', letterSpacing: '.02em' }}>TRANSMISSION RECEIVED</div>
      <p className="font-mono" style={{ fontSize: '9px', color: '#444', letterSpacing: '.3em', textTransform: 'uppercase', lineHeight: 2 }}>I'll be in touch within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ display: 'flex', gap: 4, marginBottom: '2rem' }} role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={FIELDS.length}>
        {FIELDS.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 2, borderRadius: 1, background: i <= step ? '#2D5BFF' : 'rgba(255,255,255,.07)', transition: 'background .4s' }} />
        ))}
      </div>
      <div className="font-mono" style={{ fontSize: '8px', color: '#666', letterSpacing: '.3em', marginBottom: '1.75rem' }}>
        STEP {step + 1} / {FIELDS.length}
      </div>
      <div key={formKey} className={dir === 'right' ? 'anim-slideR' : 'anim-slideL'} style={{ minHeight: 180 }}>
        <label
          htmlFor={`f-${f.key}`}
          className="font-mono"
          style={{ display: 'block', fontSize: '9px', color: '#888', letterSpacing: '.3em', textTransform: 'uppercase', marginBottom: '.75rem' }}
        >
          {f.label} // INPUT
        </label>
        {f.type === 'textarea' ? (
          <textarea id={`f-${f.key}`} className="input" rows={4} placeholder={f.placeholder} value={formData[f.key]} onChange={change} aria-invalid={!!ferr} />
        ) : f.type === 'select' ? (
          <select id={`f-${f.key}`} className="input" value={formData[f.key]} onChange={change}>
            {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : (
          <input
            id={`f-${f.key}`} type={f.type} className="input"
            placeholder={f.placeholder} value={formData[f.key]}
            onChange={change} aria-invalid={!!ferr}
            autoComplete={f.type === 'email' ? 'email' : f.key === 'name' ? 'name' : 'off'}
          />
        )}
        {ferr && (
          <p role="alert" className="font-mono" style={{ fontSize: '8px', color: '#ff4d4d', letterSpacing: '.2em', marginTop: '.5rem', textTransform: 'uppercase' }}>
            ⚠ {ferr}
          </p>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.75rem' }}>
        <button
          type="button" onClick={back} disabled={step === 0}
          className="font-mono"
          style={{ background: 'none', border: 'none', cursor: step === 0 ? 'default' : 'pointer', fontSize: '9px', letterSpacing: '.3em', textTransform: 'uppercase', color: step === 0 ? 'transparent' : '#888', transition: 'color .2s', pointerEvents: step === 0 ? 'none' : 'auto' }}
        >
          [ BACK ]
        </button>
        {step < FIELDS.length - 1 ? (
          <button type="button" onClick={next} className="font-mono" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '9px', color: '#2D5BFF', letterSpacing: '.3em', textTransform: 'uppercase' }}>
            [ NEXT ]
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled={sending}><span className="btn-inner">{sending ? 'SENDING...' : 'SEND MESSAGE'}</span></button>
        )}
      </div>
    </form>
  );
}