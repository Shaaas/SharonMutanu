'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// ════════════════════════════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════════════════════════════

const PROJECTS = [
  { slug:'soma-health', name:'Soma Health', url:'https://somahealthapp.netlify.app/', tagline:'Bridging patients and providers through digital infrastructure.', tags:['HEALTH-TECH','SAAS','PATIENT PORTAL'], desc:'A comprehensive healthcare management platform designed to streamline communication between patients and providers.', challenge:'The client needed a HIPAA-compliant platform simultaneously intuitive for elderly patients and powerful for clinical staff. Legacy systems were fragmented across 3 different tools.', solution:'A unified portal with role-based dashboards — a simplified patient-facing UI and a feature-rich clinician dashboard. Built on Next.js with a secure Node.js backend.', results:['40% reduction in appointment no-shows','Staff admin time cut by 6 hours/week','94% patient satisfaction in first 3 months'], tech:['Next.js','TypeScript','Node.js','PostgreSQL','Tailwind CSS'], year:'2024', category:'Web Application', color:'#0a4a3a', hasDoc:true },
  { slug:'chic-fashion', name:'Chic Fashion House', url:'https://chicfashionhouse.netlify.app/', tagline:'Visual storytelling for a luxury clothing brand.', tags:['E-COMMERCE','UI/UX'], desc:'A stylish e-commerce platform for high-end clothing collections, focusing on visual storytelling and an immersive brand experience.', challenge:'The brand had a strong offline presence but a dated website that failed to communicate their luxury positioning. Conversion rates were under 1%.', solution:'Full redesign with editorial-style product pages, a custom collection showcase, and a streamlined 3-step checkout. Photography-first layout.', results:['Conversion rate improved from 0.8% to 3.4%','Average order value increased by 22%','Bounce rate dropped from 68% to 41%'], tech:['Next.js','Shopify API','Framer Motion','Sanity CMS'], year:'2024', category:'E-Commerce', color:'#2a1a0a' },
  { slug:'velora-airlines', name:'Velora Airlines', url:'https://veloraairlines.netlify.app/', tagline:'A booking experience as smooth as the flight.', tags:['BOOKING SYSTEM','JAVASCRIPT','UI/UX'], desc:'A complex flight booking interface emphasising user flow, speed, and clarity across a multi-step reservation process.', challenge:'Airline booking flows are notoriously complex. The goal was to reduce time-to-booking and eliminate cognitive overload.', solution:'A linear step-by-step flow with persistent progress tracking, smart defaults, and real-time seat visualisation.', results:['Booking completion rate up 28%','Average time-to-book under 4 minutes','Mobile bookings increased by 55%'], tech:['JavaScript','CSS3','HTML5','REST APIs'], year:'2023', category:'Web Application', color:'#0a1a3a' },
  { slug:'la-belle', name:'La Belle Cuisine', url:'https://labellecuisine.netlify.app/', tagline:'Where food meets editorial design.', tags:['CULINARY','RESPONSIVE','CMS'], desc:'A recipe and menu showcase with clean typography and appetising layout structures for a high-end culinary brand.', challenge:'The client wanted a site as refined as their food. They also needed staff to update menus without a developer.', solution:'Editorial-style layout with a custom Sanity CMS integration. Full responsive design with print-optimised recipe pages.', results:['Table reservations up 35% in first month','Staff update menus in under 5 minutes','Featured in 2 local food publications'], tech:['Next.js','Sanity CMS','Tailwind CSS','Vercel'], year:'2023', category:'Website', color:'#1a0a0a' },
  { slug:'luxeestates', name:'Luxeestates', url:'https://luxeestates.netlify.app/', tagline:'Premium property. Premium digital experience.', tags:['REAL ESTATE','PREMIUM UI'], desc:'High-end real estate listings with interactive galleries, virtual tour integration, and a luxury-first aesthetic.', challenge:'Most real estate sites prioritise quantity over quality of presentation. Luxeestates needed to position as the premium Nairobi alternative.', solution:'Full-screen photography, a curated listing format, and a map-based search with custom markers. Integrated with their existing CRM.', results:['Avg time on site increased to 6.5 minutes','Inquiry submissions up 80%','Positioned as top-tier agency in market'], tech:['Next.js','Mapbox GL','Prisma','PostgreSQL','Cloudinary'], year:'2024', category:'Website', color:'#1a1a0a' },
  { slug:'aether-weather', name:'Aether Weather', url:'https://aethereather.netlify.app/', tagline:'Live meteorological data, beautifully rendered.', tags:['API INTEGRATION','REAL-TIME','LIVE DATA'], desc:'A sleek weather interface that fetches live meteorological data globally, with dynamic backgrounds driven by real conditions.', challenge:'Weather apps are either data-heavy and ugly, or pretty and useless. The challenge was building something genuinely useful that felt like art.', solution:'Real-time OpenWeatherMap integration with a generative background system — gradients and colour palettes driven entirely by live weather data.', results:['4.9/5 rating on Product Hunt launch','12,000 active users in first 6 weeks','Featured in CSS Design Awards'], tech:['React','TypeScript','OpenWeatherMap API','Canvas API'], year:'2023', category:'Web Application', color:'#0a1a2a' },
  { slug:'velora-analytics', name:'Velora Analytics', url:'https://velora-saas-analytics-dashboard.netlify.app/', tagline:'Data that tells a story, not just numbers.', tags:['SAAS','DASHBOARD','DATA VIZ'], desc:'A modern analytics dashboard for SaaS products, visualising key metrics in a clean, dark-mode interface.', challenge:'The client used 4 different tools to track their SaaS metrics — churning through exports and manual compilation every Monday morning.', solution:'A unified dashboard with real-time charts, cohort analysis, and a custom metric builder. White-label ready.', results:['Reporting time cut from 3 hours to 15 minutes','Shipped to 200 beta users in 6 weeks','40% beta-to-paid conversion'], tech:['Next.js','Recharts','Prisma','tRPC','Tailwind CSS'], year:'2024', category:'SaaS Product', color:'#0a0a2a' },
  { slug:'progress-logic', name:'Progress Logic', url:'https://shaaas.github.io/experimental-portal-progress/', tagline:'Project metrics, visualised with precision.', tags:['WEB UTILITY','DATA UI','JAVASCRIPT'], desc:'A specialised portal for capturing and visualising project metrics for a construction and engineering consultancy.', challenge:'The firm tracked project progress in spreadsheets, making it nearly impossible to spot delays or communicate status in real time.', solution:'A custom portal with Gantt-style progress bars, milestone tracking, and client-facing status dashboards.', results:['Project delays identified 2 weeks earlier','Completely eliminated weekly status emails','Client satisfaction scores improved significantly'], tech:['JavaScript','D3.js','Express','MongoDB','Chart.js'], year:'2023', category:'Web Application', color:'#1a0a2a' },
  { slug:'liyai-maina', name:'Liyai Maina', url:'https://mainaliyai.netlify.app/', tagline:'A portfolio as bold as the person behind it.', tags:['PORTFOLIO','HTML','CSS'], desc:'A personal portfolio built with precision and intent — clean structure, bold typography, crafted to leave a lasting professional impression.', challenge:'The client needed a portfolio to stand out to international creative agencies. Generic templates were not an option.', solution:'Fully custom design with a strong typographic system, subtle animations, and case study format that positioned the work in narrative context.', results:['3 international client inquiries within 2 weeks','Featured by a design community newsletter','Used as a reference site by 2 other designers'], tech:['HTML5','CSS3','JavaScript','GSAP'], year:'2023', category:'Portfolio', color:'#0a1a0a' },
];

const SERVICES = [
  { num:'01', title:'Website Design', short:'Clean, modern websites that convert.', desc:'Every pixel is intentional. I design websites that communicate your brand clearly, guide visitors naturally, and convert browsers into customers.', deliverables:['Brand-aligned visual design','Mobile-first responsive layouts','Interactive prototypes','Design system & style guide'] },
  { num:'02', title:'Website Development', short:'Custom-built for your business.', desc:'Hand-coded with modern tooling — no bloated page builders. Fast, accessible, SEO-ready websites built on Next.js that you can actually own.', deliverables:['Next.js / React development','CMS integration (Sanity, Contentful)','API integrations','Performance optimisation'] },
  { num:'03', title:'Website Redesign', short:'Modernise and boost performance.', desc:'Your existing site is holding you back. A strategic redesign modernises your brand, improves conversion rates, and gives you a technical foundation that scales.', deliverables:['Full audit & competitor analysis','Conversion-focused redesign','Content migration','SEO preservation strategy'] },
  { num:'04', title:'Landing Pages', short:'Built to convert, engineered to impress.', desc:'Single-page experiences built around one goal — sign ups, sales, or leads. Every element earns its place. Proven to perform.', deliverables:['Conversion-focused layout','A/B testing ready','Analytics integration','48hr turnaround available'] },
  { num:'05', title:'Website Maintenance', short:'Ongoing partnership, zero stress.', desc:'Your website is a living business asset. Monthly retainer packages cover updates, performance monitoring, and direct access to me.', deliverables:['Monthly content updates','Performance & security monitoring','Priority support','Monthly report'] },
];

const TECH_STACK = [
  { name:'Next.js', cat:'FRAMEWORK' },{ name:'React', cat:'LIBRARY' },{ name:'TypeScript', cat:'LANGUAGE' },
  { name:'Tailwind CSS', cat:'STYLING' },{ name:'Framer Motion', cat:'ANIMATION' },{ name:'Sanity CMS', cat:'CMS' },
  { name:'PostgreSQL', cat:'DATABASE' },{ name:'Prisma', cat:'ORM' },{ name:'Vercel', cat:'DEPLOYMENT' },
  { name:'Figma', cat:'DESIGN' },{ name:'Node.js', cat:'BACKEND' },{ name:'Stripe', cat:'PAYMENTS' },
];

const PRICING = [
  { title:'Starter', price:'$350', period:'', desc:'For solo founders getting their first professional site.', features:['3 page website','Mobile responsive','Contact form','Basic SEO setup','2 revision rounds'], highlight:false },
  { title:'Business', price:'$750', period:'', desc:'For growing businesses that need a full web presence with polish.', features:['5–7 pages','Custom animations','SEO foundation','CMS integration','3 revision rounds'], highlight:false },
  { title:'Custom', price:'$1200', period:'+', desc:'Full-scale digital experiences — apps, e-commerce, SaaS products.', features:['Unlimited pages','Advanced features','Full design freedom','Priority build','Unlimited revisions'], highlight:true },
  { title:'Retainer', price:'$120', period:'/mo', desc:'Ongoing partnership keeping your site fast, updated, and secure.', features:['Monthly maintenance','Content updates','Priority support','Monthly report','Direct Slack access'], highlight:false },
];

const FAQS = [
  { cat:'PROCESS', items:[
    { q:'How long does a project typically take?', a:'Starter sites take 1–2 weeks. Business packages 2–4 weeks. Custom projects 4–8 weeks. Landing pages can turn around in 48 hours.' },
    { q:'What does the process look like from my side?', a:'Discovery call → written brief → design mockups (your review) → build → staging link → launch. You review before anything goes live.' },
    { q:'How many revisions do I get?', a:'Starter gets 2 rounds, Business gets 3, Custom gets unlimited. A revision round means a consolidated batch of feedback, not endless back-and-forth.' },
    { q:'Do I need to prepare anything before we start?', a:'Ideally: brand assets (logo, colours), any copy and photos you have, and examples of sites you like. Need help with those? I can refer trusted partners.' },
  ]},
  { cat:'TECHNICAL', items:[
    { q:'Will I be able to update the site myself?', a:'Yes — Business and Custom projects include a CMS (Sanity or similar) so you can update content without touching code. I also provide a walkthrough video.' },
    { q:'Who hosts the website?', a:'I recommend Vercel — fast, reliable, free tier for most sites. The domain and hosting accounts are always in your name. You own everything.' },
    { q:'Will my site be fast and SEO-friendly?', a:'Yes. All sites are built on Next.js with performance as a default — image optimisation, lazy loading, semantic HTML, proper meta tags. Most sites score 90+ on Lighthouse.' },
    { q:'Can you work with my existing branding?', a:'Absolutely. If you have brand guidelines I follow them precisely. If your branding needs work I can help — just scope it upfront.' },
  ]},
  { cat:'BUSINESS', items:[
    { q:'How does payment work?', a:'50% upfront to begin, 50% on final delivery. I accept M-Pesa, bank transfer, and PayPal. The quote you receive is the price you pay — no hidden fees.' },
    { q:'Do you work with international clients?', a:'Yes. Most of my workflow is remote-first — calls over Google Meet, files via Notion or Google Drive. I have worked with clients in Kenya, UK, Canada, and the US.' },
    { q:'What happens after the site launches?', a:'30 days of free post-launch support for bugs or small tweaks. After that, a maintenance retainer is optional but recommended.' },
    { q:"What if I need something not in a package?", a:"Most projects are scoped custom anyway — the packages are starting points. Tell me what you need and I'll price it fairly." },
  ]},
];

const BLOG_POSTS = [
  { slug:'custom-vs-template', title:'Why Your Business Needs a Custom Website (Not a Template)', excerpt:'Template sites look fine — until they don\'t. Here is why a custom-built site is a business investment, not a luxury.', cat:'BUSINESS', readTime:'5 min', date:'Feb 28, 2025',
    content:`Template websites have never been more accessible. So why would any business choose to spend more on a custom site? The answer is not aesthetic. It is strategic.\n\n## The Template Ceiling\n\nEvery template is designed to work for everyone, which means it is optimised for no one. Your competitor can buy the same theme. Your brand gets diluted the moment a visitor recognises the layout from another site they visited last week.\n\nMore practically: templates are built around the features they include, not the problems you need to solve. When your business grows, you will hit the ceiling.\n\n## What Custom Actually Means\n\nA custom site is built from a clear brief: your customers, your goals, your brand. Every layout decision is a deliberate choice made in the context of your business.\n\nThis means **faster performance**, no unused code or plugin bloat. **Better SEO**, clean semantic HTML from day one. **Real differentiation**, a site visitors remember. **Scalability**, built to grow with you.\n\n## The Real Cost Comparison\n\nA Squarespace Business plan runs ~$276/year, plus your time. A custom site might cost $750–$1200 upfront. But over 3 years, the template often costs more — in time spent fighting limitations, in conversions lost to generic design, in developer costs when you eventually need to migrate.\n\nThe businesses that win online are not the ones who spent least to get there.` },
  { slug:'landing-page-anatomy', title:'The Anatomy of a High-Converting Landing Page', excerpt:'Every element on a landing page is either earning its place or costing you conversions. Here is how to structure one that works.', cat:'DESIGN', readTime:'7 min', date:'Feb 14, 2025',
    content:`A landing page has one job: convert a specific visitor into a specific action. Not inform. Not impress. Convert.\n\n## The Hero: 5 Seconds to Win or Lose\n\nThe average visitor decides whether to stay within 5 seconds. Your hero has to answer three questions immediately: What is this? Who is it for? Why should I care?\n\nBe direct. "Book a same-day plumber in Nairobi" beats "Your plumbing solution" every time.\n\n## Social Proof: The Trust Engine\n\nA single specific testimonial outperforms a generic five-star rating. Place social proof immediately below your hero — not at the bottom where most visitors never scroll.\n\n## The CTA: Specificity Wins\n\n"Get Started" is a placeholder. **"Get My Free Quote"** is a call to action. The more specific the button copy, the lower the psychological friction.\n\nOne primary CTA per page. Repeat it 2–3 times as you scroll.\n\n## What to Remove\n\nMost landing pages fail from addition, not subtraction. Remove navigation menus, vague mission statements, stock photography of people pointing at laptops, and any paragraph that starts with "We are a leading provider of..."\n\nSimplicity is not laziness. It is respect for your visitor's time.` },
  { slug:'web-performance', title:'Web Performance: Why Speed Is a Business Metric', excerpt:'Every second of load time costs you money. The data is clear — here is what it means for your business and how to fix it.', cat:'TECHNICAL', readTime:'6 min', date:'Jan 30, 2025',
    content:`Google's data is unambiguous: a 1-second delay in mobile load time can reduce conversions by up to 20%. Performance is not a developer concern. It is a business concern.\n\n## Why Sites Get Slow\n\n**Unoptimised images** cause more slow sites than anything else. A 4MB hero image that could be a 200KB WebP.\n\n**Render-blocking scripts** — third-party analytics, chat widgets, and advertising scripts that pause the browser before showing content.\n\n**Page builder bloat** — Elementor, Divi, and similar builders load enormous amounts of CSS and JavaScript regardless of what you use.\n\n## The Core Web Vitals Framework\n\n- **LCP (Largest Contentful Paint)** — how fast does the main content appear? Target: under 2.5s\n- **INP (Interaction to Next Paint)** — how responsive to clicks? Target: under 200ms\n- **CLS (Cumulative Layout Shift)** — does the page jump around? Target: under 0.1\n\nA site built on Next.js with proper image handling will score 90+ on all three by default.\n\n## The Simple Audit\n\nRun your site through PageSpeed Insights right now. If your mobile score is below 70, you have a problem that is actively costing you traffic and conversions.` },
  { slug:'nairobi-digital', title:'Why Nairobi Businesses Are Still Leaving Money on the Table Online', excerpt:'The digital gap between Nairobi businesses and their potential is closing — but not fast enough. Here is the opportunity.', cat:'BUSINESS', readTime:'4 min', date:'Jan 15, 2025',
    content:`Kenya has one of the most sophisticated mobile internet markets on the continent. M-Pesa changed how money moves. Mobile-first has been the reality here for over a decade.\n\nAnd yet: a significant portion of Nairobi businesses — including established, profitable ones — still have websites that would have looked dated in 2015.\n\n## The Gap Is Not Awareness\n\nMost business owners know they need a better website. The gap is conviction — a belief that the return will justify the cost, combined with a shortage of local providers who can deliver genuinely world-class work.\n\nThe result: businesses outsource to cheap template providers, get something mediocre, and conclude that "websites don't really work for us."\n\n**The website did not fail. The website was never given a fair chance.**\n\n## The Window Is Closing\n\nIn a market moving this fast, the advantage of being early is real. The businesses investing in quality digital infrastructure now are building moats that will be expensive for competitors to cross.\n\nThis is not a prediction. It is already happening.` },
];

const TESTIMONIALS = [
  { quote:'Mutanu delivered our healthcare platform ahead of schedule. The attention to UX detail was exceptional — our patients and clinical staff both love it. Best investment we have made in our digital infrastructure.', name:'Dr. A. Mwangi', role:'Founder, Soma Health' },
  { quote:'Our conversion rate went from 0.8% to 3.4% after the redesign. The site finally looks as premium as our products. Worth every cent.', name:'F. Ochieng', role:'Creative Director, Chic Fashion House' },
  { quote:'Finally a developer who understands both design AND business. Mutanu asked questions that made us think harder about our own product. The results speak for themselves.', name:'J. Kamau', role:'CEO, Luxeestates' },
];

const TIMELINE = [
  { year:'2019', title:'First Lines of Code', body:'Started learning web development out of frustration with how bad most websites looked. Built my first site for a local restaurant — for free, just for the experience.' },
  { year:'2020', title:'First Paid Project', body:'Landed a $150 freelance job. Spent 3× the estimated time on it. Learned more in those weeks than in months of tutorials.' },
  { year:'2021', title:'Going Deeper', body:'Committed fully to the craft. Studied design systems, performance engineering, and conversion optimisation. Built obsessively.' },
  { year:'2022', title:'Mutanu Studio Founded', body:'Formalised the practice. Started taking on clients with intention — fewer projects, done properly. Quality over quantity.' },
  { year:'2023', title:'Building Reputation', body:'First international clients. First SaaS project. First featured mention. The work started speaking for itself.' },
  { year:'2024', title:'Now', body:'Working with ambitious businesses across Kenya and globally. Still obsessed with the craft. Still building things that matter.' },
];

const NAV_ITEMS = [
  { label:'Home', page:'home' },{ label:'Work', page:'work' },{ label:'Services', page:'services' },
  { label:'About', page:'about' },{ label:'Blog', page:'blog' },{ label:'FAQ', page:'faq' },
];

type Page = 'home'|'work'|'work-case'|'services'|'about'|'blog'|'blog-post'|'faq'|'contact';
type FormKey = 'name'|'email'|'company'|'projectType'|'budget'|'details';
interface FormData { name:string; email:string; company:string; projectType:string; budget:string; details:string; }

// ════════════════════════════════════════════════════════════════════
// HOOKS
// ════════════════════════════════════════════════════════════════════

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold:0.08, rootMargin:'0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function useCounter(target:number, duration=1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now:number) => {
          const p = Math.min((now-t0)/duration,1);
          setCount(Math.round((1-Math.pow(1-p,3))*target));
          if (p<1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },{ threshold:0.5 });
    io.observe(el);
    return () => io.disconnect();
  },[target,duration]);
  return {count,ref};
}

// ════════════════════════════════════════════════════════════════════
// SMALL COMPONENTS
// ════════════════════════════════════════════════════════════════════

function Stat({value,suffix,label}:{value:number;suffix:string;label:string}) {
  const {count,ref} = useCounter(value);
  return (
    <div ref={ref} className="reveal-scale" style={{textAlign:'center'}}>
      <div className="stat-num">{count}{suffix}</div>
      <div className="label-xs" style={{marginTop:'.35rem'}}>{label}</div>
    </div>
  );
}

// Text scramble on mount
function ScrambleText({text,className,style,delay=0}:{text:string;className?:string;style?:React.CSSProperties;delay?:number}) {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
  const [displayed, setDisplayed] = useState('');
  const rafRef = useRef<number>(0);
  useEffect(() => {
    const duration = 900;
    const start = performance.now() + delay;
    const end = start + duration;
    const tick = (now:number) => {
      if (now < start) { rafRef.current = requestAnimationFrame(tick); return; }
      const progress = Math.min((now-start)/duration,1);
      const revealCount = Math.floor(progress*text.length);
      const result = text.split('').map((c,i) => {
        if (c===' ') return ' ';
        if (i<revealCount) return c;
        return CHARS[Math.floor(Math.random()*CHARS.length)];
      }).join('');
      setDisplayed(result);
      if (progress<1) rafRef.current = requestAnimationFrame(tick);
      else setDisplayed(text);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  },[text,delay]);
  return <span className={className} style={style} aria-label={text}>{displayed}</span>;
}

// FAQ accordion item
function FAQItem({q,a,index}:{q:string;a:string;index:number}) {
  const [open,setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={()=>setOpen(o=>!o)} aria-expanded={open}>
        <div style={{display:'flex',gap:'1.5rem',alignItems:'center'}}>
          <span className="font-mono" style={{fontSize:'9px',color:'#2D5BFF',letterSpacing:'.2em',minWidth:28}}>{String(index+1).padStart(2,'0')}</span>
          <span className="font-bebas" style={{fontSize:'clamp(1.2rem,2.5vw,1.6rem)',textTransform:'uppercase',letterSpacing:'.01em',lineHeight:1}}>{q}</span>
        </div>
        <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,border:'1px solid rgba(255,255,255,.12)',borderRadius:'50%',fontFamily:'monospace',fontSize:'1.1rem',color:open?'#2D5BFF':'#555',transition:'color .25s,transform .35s',transform:open?'rotate(45deg)':'none',flexShrink:0}}>+</span>
      </button>
      <div className="faq-body" style={{maxHeight:open?'500px':'0',opacity:open?1:0}}>
        <div style={{paddingLeft:'calc(28px + 1.5rem)',paddingBottom:'1.5rem'}}>
          <p style={{color:'#fff',fontSize:'.88rem',lineHeight:1.85}}>{a}</p>
        </div>
      </div>
    </div>
  );
}

// Multi-step contact form (used on Contact page and in CTA)
function ContactForm() {
  const FIELDS:{label:string;key:FormKey;type:string;placeholder?:string;options?:string[]}[] = [
    {label:'Name',key:'name',type:'text',placeholder:'Your full name'},
    {label:'Email',key:'email',type:'email',placeholder:'email@example.com'},
    {label:'Company / Brand',key:'company',type:'text',placeholder:'Company or brand name'},
    {label:'Project Type',key:'projectType',type:'select',options:['Website','Landing Page','Redesign','E-Commerce','Web App']},
    {label:'Budget',key:'budget',type:'select',options:['$350+','$750+','$1200+',"Let's discuss"]},
    {label:'Project Details',key:'details',type:'textarea',placeholder:'Tell me about your project, goals, and timeline...'},
  ];
  const INIT:FormData = {name:'',email:'',company:'',projectType:'Website',budget:'$350+',details:''};
  const [step,setStep] = useState(0);
  const [formData,setFormData] = useState<FormData>(INIT);
  const [dir,setDir] = useState<'right'|'left'>('right');
  const [formKey,setFormKey] = useState(0);
  const [submitted,setSubmitted] = useState(false);
  const [errors,setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const f=FIELDS[step]; const v=formData[f.key]; const errs:Partial<FormData>={};
    if (!v.trim()) errs[f.key]=`${f.label} is required`;
    else if (f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errs[f.key]='Enter a valid email';
    setErrors(errs); return !Object.keys(errs).length;
  };
  const next=()=>{ if(!validate()) return; setDir('right'); setFormKey(k=>k+1); setStep(s=>Math.min(s+1,FIELDS.length-1)); };
  const back=()=>{ setErrors({}); setDir('left'); setFormKey(k=>k+1); setStep(s=>Math.max(s-1,0)); };
  const change=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>{ setFormData(p=>({...p,[FIELDS[step].key]:e.target.value})); setErrors({}); };
  const submit=(e:React.FormEvent)=>{ e.preventDefault(); if(!validate()) return; console.log('Form submitted:',formData); setSubmitted(true); };

  const f=FIELDS[step]; const ferr=errors[f.key];
  if (submitted) return (
    <div className="anim-scaleIn" style={{textAlign:'center',padding:'3rem 0'}}>
      <div style={{width:60,height:60,border:'1.5px solid #2D5BFF',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.5rem',fontSize:'1.25rem'}}>✓</div>
      <div className="font-bebas" style={{fontSize:'2rem',color:'#2D5BFF',marginBottom:'.75rem',textTransform:'uppercase',letterSpacing:'.02em'}}>TRANSMISSION RECEIVED</div>
      <p className="font-mono" style={{fontSize:'9px',color:'#444',letterSpacing:'.3em',textTransform:'uppercase',lineHeight:2}}>I'll be in touch within 24 hours.</p>
    </div>
  );
  return (
    <form onSubmit={submit} noValidate>
      <div style={{display:'flex',gap:4,marginBottom:'2rem'}} role="progressbar" aria-valuenow={step+1} aria-valuemin={1} aria-valuemax={FIELDS.length}>
        {FIELDS.map((_,i)=><div key={i} style={{flex:1,height:2,borderRadius:1,background:i<=step?'#2D5BFF':'rgba(255,255,255,.07)',transition:'background .4s'}} />)}
      </div>
      <div className="font-mono" style={{fontSize:'8px',color:'#2a2a2a',letterSpacing:'.3em',marginBottom:'1.75rem'}}>STEP {step+1} / {FIELDS.length}</div>
      <div key={formKey} className={dir==='right'?'anim-slideR':'anim-slideL'} style={{minHeight:180}}>
        <label htmlFor={`f-${f.key}`} className="font-mono" style={{display:'block',fontSize:'9px',color:'#444',letterSpacing:'.3em',textTransform:'uppercase',marginBottom:'.75rem'}}>{f.label} // INPUT</label>
        {f.type==='textarea'
          ? <textarea id={`f-${f.key}`} className="input" rows={4} placeholder={f.placeholder} value={formData[f.key]} onChange={change} aria-invalid={!!ferr} />
          : f.type==='select'
          ? <select id={`f-${f.key}`} className="input" value={formData[f.key]} onChange={change}>{f.options?.map(o=><option key={o} value={o}>{o}</option>)}</select>
          : <input id={`f-${f.key}`} type={f.type} className="input" placeholder={f.placeholder} value={formData[f.key]} onChange={change} aria-invalid={!!ferr} autoComplete={f.type==='email'?'email':f.key==='name'?'name':'off'} />
        }
        {ferr&&<p role="alert" className="font-mono" style={{fontSize:'8px',color:'#ff4d4d',letterSpacing:'.2em',marginTop:'.5rem',textTransform:'uppercase'}}>⚠ {ferr}</p>}
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'1.75rem'}}>
        <button type="button" onClick={back} disabled={step===0} className="font-mono" style={{background:'none',border:'none',cursor:step===0?'default':'pointer',fontSize:'9px',letterSpacing:'.3em',textTransform:'uppercase',color:step===0?'transparent':'#444',transition:'color .2s',pointerEvents:step===0?'none':'auto'}}>[ BACK ]</button>
        {step<FIELDS.length-1
          ? <button type="button" onClick={next} className="font-mono" style={{background:'none',border:'none',cursor:'pointer',fontSize:'9px',color:'#2D5BFF',letterSpacing:'.3em',textTransform:'uppercase'}}>[ NEXT ]</button>
          : <button type="submit" className="btn btn-primary"><span className="btn-inner">TRANSMIT DATA</span></button>
        }
      </div>
    </form>
  );
}

// Blog content renderer (parses ## headings and **bold**)
function BlogContent({text}:{text:string}) {
  return (
    <div>
      {text.split('\n\n').map((block,i)=>{
        if (block.startsWith('## ')) return (
          <h2 key={i} className="font-bebas" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',textTransform:'uppercase',margin:'3rem 0 1.25rem',lineHeight:1}}>{block.slice(3)}</h2>
        );
        const parts = block.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} style={{color:'#777',fontSize:'.95rem',lineHeight:1.9,marginBottom:'1.5rem'}}>
            {parts.map((part,j)=>part.startsWith('**')&&part.endsWith('**')
              ? <strong key={j} style={{color:'#bbb',fontWeight:600}}>{part.slice(2,-2)}</strong>
              : part
            )}
          </p>
        );
      })}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// PAGE VIEWS
// ════════════════════════════════════════════════════════════════════

// ── HOME ──────────────────────────────────────────────────────────
function HomePage({goTo}:{goTo:(p:Page,slug?:string)=>void}) {
  useReveal();
  return (
    <div>
      {/* Hero */}
      <section style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',padding:'8rem 2.5rem 4rem',position:'relative',overflow:'hidden'}}>
{/* Floating photo behind text */}
<div style={{
  position:'absolute',
  right:'5%',
  top:'10%',
  transform:'translateY(0)',
  width:'45vw',
  maxWidth:600,
  height:'80vh',
  zIndex:0,
  opacity:1,
  pointerEvents:'none',
}}>
  <img 
    src="/me.png" 
    alt="" 
    style={{
      width:'100%',
      height:'100%',
      objectFit:'cover',
      objectPosition:'center top',
      maskImage:'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
      WebkitMaskImage:'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
    }}
  />
</div>       
        <div className="anim-fadeIn d1 font-mono hide-mobile" style={{position:'absolute',left:'2rem',top:'50%',transform:'rotate(-90deg) translateX(-50%)',transformOrigin:'left center',fontSize:'8px',color:'#1a1a1a',letterSpacing:'.4em',textTransform:'uppercase',whiteSpace:'nowrap'}}>NAIROBI — KE — EST. 2022</div>
        <div style={{maxWidth:1400,margin:'0 auto',width:'100%'}}>
          {/* Status + availability */}
          <div className="anim-fadeIn d1" style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'1rem',marginBottom:'2.5rem'}}>
            <div className="sect-label"><span className="dot"/>OPERATIONAL STATUS: ONLINE</div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'.75rem',background:'rgba(45,91,255,.08)',border:'1px solid rgba(45,91,255,.2)',borderRadius:999,padding:'.5rem 1.25rem'}}>
              <span className="dot"/><span className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.3em',textTransform:'uppercase'}}>ACCEPTING NEW PROJECTS — 2025</span>
            </div>
          </div>
          <div className="anim-fadeUp d2 display-hero"><ScrambleText text="MUTANU" delay={300}/></div>
          <div className="anim-fadeUp d3 display-hero text-outline">STUDIO</div>
          <div className="marquee-wrap anim-fadeIn d4" style={{margin:'2rem 0',borderTop:'1px solid rgba(255,255,255,.05)',borderBottom:'1px solid rgba(255,255,255,.05)',padding:'.6rem 0'}} aria-hidden="true">
            <div className="marquee-track font-mono" style={{fontSize:'8px',color:'#2D5BFFc',letterSpacing:'.4em'}}>
              {Array.from({length:4}).map((_,i)=><span key={i}>WEB DESIGN &nbsp;// &nbsp;DEVELOPMENT &nbsp;// &nbsp;DIGITAL STRATEGY &nbsp;// &nbsp;UI/UX &nbsp;// &nbsp;LANDING PAGES &nbsp;// &nbsp;SAAS PRODUCTS &nbsp;// &nbsp;</span>)}
            </div>
          </div>
          <div className="anim-fadeUp d4" style={{display:'flex',flexWrap:'wrap',alignItems:'flex-end',justifyContent:'space-between',gap:'2rem',marginBottom:'4rem'}}>
            <p className="font-mono" style={{fontSize:'10px',color:'#555',letterSpacing:'.5em',textTransform:'uppercase',lineHeight:2,maxWidth:360}}>ARCHITECTING HIGH-FIDELITY<br/>DIGITAL INFRASTRUCTURE<br/>FOR AMBITIOUS BUSINESSES</p>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <button className="btn btn-primary" onClick={()=>goTo('contact')}><span className="btn-inner">INITIALIZE SESSION</span></button>
              <button className="btn" onClick={()=>goTo('work')}><span className="btn-inner">VIEW WORK</span></button>
            </div>
          </div>
          <div className="anim-fadeIn d5" style={{display:'flex',gap:'3rem',flexWrap:'wrap',borderTop:'1px solid rgba(255,255,255,.06)',paddingTop:'2.5rem',alignItems:'center'}}>
            <Stat value={20} suffix="+" label="Projects Delivered"/>
            <div className="v-rule hide-mobile" style={{height:55}}/>
            <Stat value={3} suffix="+" label="Years Active"/>
            <div className="v-rule hide-mobile" style={{height:55}}/>
            <Stat value={100} suffix="%" label="Client Satisfaction"/>
            <div className="v-rule hide-mobile" style={{height:55}}/>
            <Stat value={24} suffix="h" label="Response Time"/>
          </div>
        </div>
        <div className="anim-fadeIn d6 hide-mobile" style={{position:'absolute',bottom:'2.5rem',right:'2.5rem',display:'flex',alignItems:'center',gap:'.75rem',fontFamily:'var(--font-mono)',fontSize:'8px',color:'#1e1e1e',letterSpacing:'.3em',textTransform:'uppercase'}}>
          SCROLL<div style={{width:1,height:40,background:'linear-gradient(to bottom,#2D5BFF,transparent)',animation:'scrollLine 2s ease-in-out infinite'}}/>
        </div>
      </section>

      {/* Featured Work */}
      <section className="page-section section-divider">
        <div style={{maxWidth:1400,margin:'0 auto'}}>
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:'1.5rem',marginBottom:'4rem'}}>
            <div>
              <div className="sect-label reveal" style={{marginBottom:'1rem'}}><span className="dot"/>SELECTED WORK</div>
              <h2 className="display-section reveal"><ScrambleText text="RECENT PROJECTS"/></h2>
            </div>
            <button className="btn reveal" onClick={()=>goTo('work')}><span className="btn-inner">ALL PROJECTS →</span></button>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:'1.25rem'}}>
            {PROJECTS.slice(0,3).map((p,i)=>(
              <div key={p.slug} className="card reveal" style={{transitionDelay:`${i*.07}s`,padding:'2.5rem',display:'flex',flexDirection:'column',minHeight:320,cursor:'pointer'}} onClick={()=>goTo('work-case',p.slug)}>
                <div className="label-xs" style={{marginBottom:'.75rem',color:'#2D5BFF'}}>{String(i+1).padStart(2,'0')}</div>
                <h3 className="display-card" style={{color:'#2D5BFF',marginBottom:'.9rem'}}>{p.name}</h3>
                <div style={{display:'flex',flexWrap:'wrap',gap:5,marginBottom:'1.1rem'}}>{p.tags.slice(0,2).map(t=><span key={t} className="tag">{t}</span>)}</div>
                <p style={{color:'#555',fontSize:'.8rem',lineHeight:1.75,marginBottom:'auto'}}>{p.desc}</p>
                <div style={{marginTop:'1.75rem',fontFamily:'var(--font-mono)',fontSize:'8px',color:'#2D5BFF',letterSpacing:'.2em',textTransform:'uppercase'}}>VIEW CASE STUDY →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="page-section page-section-dark">
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',marginBottom:'4rem',alignItems:'end'}}>
            <div>
              <div className="sect-label reveal" style={{marginBottom:'1rem'}}><span className="dot"/>WHAT I BUILD</div>
              <h2 className="display-section reveal"><ScrambleText text="SERVICES"/></h2>
            </div>
            <p className="reveal-right" style={{color:'#2D5BFF',fontSize:'.88rem',lineHeight:1.9,alignSelf:'end',maxWidth:380}}>From initial concept to final deployment — every project built with precision engineering and creative intentionality.</p>
          </div>
          {SERVICES.slice(0,4).map((s,i)=>(
            <div key={s.title} className="service-row reveal" style={{transitionDelay:`${i*.07}s`}}>
              <div style={{display:'flex',alignItems:'center',gap:'2rem',flex:1}}>
                <span className="font-mono" style={{fontSize:'10px',color:'#2D5BFF',minWidth:28}}>{s.num}</span>
                <h3 className="service-title">{s.title}</h3>
              </div>
              <p className="font-mono hide-mobile" style={{fontSize:'9px',color:'#444',textTransform:'uppercase',letterSpacing:'.12em',lineHeight:1.8,maxWidth:220,textAlign:'right'}}>{s.short}</p>
            </div>
          ))}
          <div style={{marginTop:'3rem'}}><button className="btn reveal" onClick={()=>goTo('services')}><span className="btn-inner">ALL SERVICES + PRICING →</span></button></div>
        </div>
      </section>

      {/* Why us */}
      <section className="page-section">
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'4rem'}}>
            <div className="sect-label reveal" style={{marginBottom:'1rem',justifyContent:'center'}}><span className="dot"/>WHY MUTANU STUDIO</div>
            <h2 className="display-section reveal"><ScrambleText text="BUILT DIFFERENT."/></h2>
            <h2 className="display-section reveal text-outline-accent" style={{fontSize:'clamp(2rem,5vw,4.5rem)'}}>DELIVERED DIFFERENT.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'1.25rem'}}>
            {[{icon:'⚡',title:'Fast Turnaround',body:'Most projects delivered in 2–4 weeks. No agency bloat — just focused, efficient execution.'},{icon:'🎯',title:'Results-Focused',body:'Every design decision is backed by conversion principles. Beautiful AND functional.'},{icon:'🔧',title:'Clean Code',body:'Hand-crafted code. No page builder bloat. Fast load times and SEO-ready as default.'},{icon:'📞',title:'Direct Access',body:'You work directly with me. No account managers, no miscommunication, no delays.'}].map((item,i)=>(
              <div key={item.title} className="reveal-scale" style={{transitionDelay:`${i*.08}s`,background:'#0a0a0a',border:'1px solid rgba(255,255,255,.06)',borderRadius:'1.5rem',padding:'2rem',transition:'border-color .3s,transform .3s'}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(45,91,255,.3)';(e.currentTarget as HTMLElement).style.transform='translateY(-4px)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,.06)';(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}>
                <div style={{fontSize:'1.5rem',marginBottom:'1rem'}}>{item.icon}</div>
                <h3 className="font-bebas" style={{fontSize:'1.6rem',marginBottom:'.75rem',letterSpacing:'.02em',textTransform:'uppercase'}}>{item.title}</h3>
                <p style={{color:'#555',fontSize:'.82rem',lineHeight:1.8}}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-section page-section-dark">
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="sect-label reveal" style={{marginBottom:'1rem',justifyContent:'center'}}><span className="dot"/>CLIENT FEEDBACK</div>
          <h2 className="display-section reveal" style={{textAlign:'center',marginBottom:'3.5rem'}}><ScrambleText text="WHAT CLIENTS SAY"/></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.25rem'}}>
            {TESTIMONIALS.map((t,i)=>(
              <div key={i} className="t-card reveal-scale" style={{transitionDelay:`${i*.08}s`}}>
                <div style={{color:'#2D5BFF',fontSize:'1.75rem',marginBottom:'.75rem',fontFamily:'Georgia,serif',lineHeight:1}}>"</div>
                <p style={{color:'#777',fontSize:'.85rem',lineHeight:1.8,marginBottom:'1.5rem',fontStyle:'italic'}}>{t.quote}</p>
                <div style={{borderTop:'1px solid rgba(255,255,255,.06)',paddingTop:'1rem'}}>
                  <div className="font-mono" style={{fontSize:'9px',color:'#fff',letterSpacing:'.15em'}}>{t.name}</div>
                  <div className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.15em',marginTop:'.25rem'}}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="page-section section-divider" style={{textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'80vw',height:'80vw',maxWidth:600,maxHeight:600,background:'radial-gradient(circle,rgba(45,91,255,.06) 0%,transparent 65%)',pointerEvents:'none'}}/>
        <div className="sect-label reveal" style={{justifyContent:'center',marginBottom:'1.5rem'}}><span className="dot"/>READY TO BUILD?</div>
        <h2 className="display-section reveal" style={{marginBottom:'.5rem'}}><ScrambleText text="LET'S MAKE SOMETHING"/></h2>
        <h2 className="display-section reveal text-outline" style={{marginBottom:'2.5rem',fontSize:'clamp(2rem,6vw,5rem)'}}>EXTRAORDINARY.</h2>
        <div className="reveal" style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <button className="btn btn-primary" onClick={()=>goTo('contact')}><span className="btn-inner">START A PROJECT</span></button>
          <button className="btn" onClick={()=>goTo('work')}><span className="btn-inner">VIEW OUR WORK</span></button>
        </div>
      </section>
    </div>
  );
}

// ── WORK (portfolio grid) ─────────────────────────────────────────
function WorkPage({goTo}:{goTo:(p:Page,slug?:string)=>void}) {
  useReveal();
  const [filter,setFilter] = useState('All');
  const cats = ['All',...Array.from(new Set(PROJECTS.map(p=>p.category)))];
  const filtered = filter==='All' ? PROJECTS : PROJECTS.filter(p=>p.category===filter);
  return (
    <div>
      <section style={{padding:'10rem 2.5rem 4rem',position:'relative',overflow:'hidden'}}>
        <div className="page-hero-glow"/>
        <div style={{maxWidth:1400,margin:'0 auto'}}>
          <div className="sect-label anim-fadeIn d1" style={{marginBottom:'1.5rem'}}><span className="dot"/>PORTFOLIO</div>
          <div className="display-hero anim-fadeUp d2"><ScrambleText text="SELECTED" delay={200}/></div>
          <div className="display-hero text-outline anim-fadeUp d3">WORK</div>
          <p className="anim-fadeUp d4 font-mono" style={{marginTop:'2rem',fontSize:'10px',color:'#555',letterSpacing:'.4em',textTransform:'uppercase',lineHeight:2}}>{PROJECTS.length} projects across web design, development, e-commerce, SaaS, and strategy.</p>
        </div>
      </section>
      <div style={{padding:'0 2.5rem 3rem',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
        <div style={{maxWidth:1400,margin:'0 auto',display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
          {cats.map(cat=>(
            <button key={cat} onClick={()=>setFilter(cat)} style={{fontFamily:'var(--font-mono)',fontSize:'8px',letterSpacing:'.25em',textTransform:'uppercase',padding:'.5rem 1.25rem',borderRadius:999,border:'1px solid',background:filter===cat?'#2D5BFF':'transparent',borderColor:filter===cat?'#2D5BFF':'rgba(255,255,255,.12)',color:filter===cat?'#fff':'#555',cursor:'pointer',transition:'all .25s'}}>{cat}</button>
          ))}
        </div>
      </div>
      <section className="page-section">
        <div style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:'1.25rem'}}>
          {filtered.map((p,i)=>(
            <div key={p.slug} className="card reveal" style={{transitionDelay:`${i*.05}s`,padding:'2.5rem',display:'flex',flexDirection:'column',minHeight:360,cursor:'pointer'}} onClick={()=>goTo('work-case',p.slug)}>
              <div style={{height:3,background:`linear-gradient(90deg,${p.color},#2D5BFF)`,borderRadius:'2rem 2rem 0 0',margin:'-2.5rem -2.5rem 2rem'}}/>
              {/* Live site preview */}
{p.url && (
  <div style={{
    height:200,
    borderRadius:'1rem',
    overflow:'hidden',
    marginBottom:'1.5rem',
    position:'relative',
    pointerEvents:'none',
  }}>
    <iframe
      src={p.url}
      style={{
        width:'200%',
        height:'200%',
        transform:'scale(0.5)',
        transformOrigin:'top left',
        border:'none',
        pointerEvents:'none',
      }}
    />
    {/* Overlay to block interaction */}
    <div style={{position:'absolute',inset:0}}/>
  </div>
)}
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'1rem'}}>
                <div className="label-xs" style={{color:'#2D5BFF'}}>{String(i+1).padStart(2,'0')}</div>
                <div className="label-xs">{p.year}</div>
              </div>
              <h2 className="display-card" style={{color:'#2D5BFF',marginBottom:'.9rem'}}>{p.name}</h2>
              <div style={{display:'flex',flexWrap:'wrap',gap:5,marginBottom:'1.1rem'}}>{p.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
              <p style={{color:'#555',fontSize:'.8rem',lineHeight:1.75,marginBottom:'auto'}}>{p.desc}</p>
              <div style={{marginTop:'2rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span className="font-mono" style={{fontSize:'8px',color:'#333',letterSpacing:'.2em',textTransform:'uppercase'}}>{p.category}</span>
                <span className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.2em',textTransform:'uppercase'}}>VIEW CASE STUDY →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="page-section section-divider" style={{textAlign:'center'}}>
        <div className="sect-label reveal" style={{justifyContent:'center',marginBottom:'1.5rem'}}><span className="dot"/>START SOMETHING NEW</div>
        <h2 className="display-section reveal" style={{marginBottom:'2rem'}}>Your project<br/><span className="text-outline">could be next.</span></h2>
        <button className="btn btn-primary reveal" onClick={()=>goTo('contact')}><span className="btn-inner">GET IN TOUCH</span></button>
      </section>
    </div>
  );
}

// ── CASE STUDY ────────────────────────────────────────────────────
function CaseStudyPage({slug,goTo}:{slug:string;goTo:(p:Page,slug?:string)=>void}) {
  useReveal();
  const project = PROJECTS.find(p=>p.slug===slug)!;
  const idx = PROJECTS.findIndex(p=>p.slug===slug);
  const next = PROJECTS[(idx+1)%PROJECTS.length];
  const prev = PROJECTS[(idx-1+PROJECTS.length)%PROJECTS.length];
  return (
    <div>
      <section style={{minHeight:'60vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'10rem 2.5rem 5rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 0%,${project.color}80 0%,transparent 60%)`,pointerEvents:'none'}}/>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'40%',background:'linear-gradient(to bottom,transparent,#050505)',pointerEvents:'none'}}/>
        <div style={{maxWidth:1200,margin:'0 auto',width:'100%',position:'relative'}}>
          <button onClick={()=>goTo('work')} className="font-mono" style={{background:'none',border:'none',cursor:'pointer',fontSize:'8px',color:'#555',letterSpacing:'.3em',textTransform:'uppercase',display:'inline-flex',alignItems:'center',gap:'.5rem',marginBottom:'2.5rem',transition:'color .2s'}} onMouseEnter={e=>(e.currentTarget.style.color='#2D5BFF')} onMouseLeave={e=>(e.currentTarget.style.color='#555')}>← BACK TO WORK</button>
          <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:'1.25rem'}}>{project.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
          <h1 className="font-bebas" style={{fontSize:'clamp(3.5rem,9vw,8rem)',lineHeight:.85,textTransform:'uppercase',marginBottom:'1.5rem'}}>{project.name}</h1>
          <p style={{fontSize:'1.1rem',color:'#888',maxWidth:560,lineHeight:1.6}}>{project.tagline}</p>
          <div style={{display:'flex',gap:'2.5rem',marginTop:'2.5rem',flexWrap:'wrap'}}>
            {[['Year',project.year],['Category',project.category],['Stack',project.tech.join(' · ')]].map(([l,v])=>(
              <div key={l}><div className="label-xs" style={{marginBottom:'.25rem'}}>{l}</div><div className="font-mono" style={{fontSize:'10px',color:'#fff',letterSpacing:'.1em'}}>{v}</div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section section-divider">
        <div className="case-study-grid" style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 360px',gap:'5rem',alignItems:'start'}}>
          <div>
            <div style={{background:'#0d0d0d',border:'1px solid rgba(255,255,255,.07)',borderRadius:'1.5rem',aspectRatio:'16/9',marginBottom:'3.5rem',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg,${project.color}30 0%,transparent 60%)`}}/>
              <div style={{textAlign:'center',position:'relative'}}><div className="font-bebas" style={{fontSize:'4rem',color:'rgba(45,91,255,.3)',letterSpacing:'.05em'}}>{project.name}</div><div className="font-mono" style={{fontSize:'8px',color:'#2a2a2a',letterSpacing:'.3em',textTransform:'uppercase',marginTop:'.5rem'}}>PROJECT PREVIEW</div></div>
            </div>
            {[['THE CHALLENGE',project.challenge],['THE SOLUTION',project.solution]].map(([label,text])=>(
              <div key={label} style={{marginBottom:'3rem'}}>
                <div className="sect-label" style={{marginBottom:'1.25rem'}}><span className="dot"/>{label}</div>
                <p style={{color:'#888',fontSize:'.95rem',lineHeight:1.9}}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{position:'sticky',top:'7rem'}}>
            <div style={{background:'#0a0a0a',border:'1px solid rgba(45,91,255,.2)',borderRadius:'1.5rem',padding:'2rem',marginBottom:'1.5rem'}}>
              <div className="sect-label" style={{marginBottom:'1.5rem'}}><span className="dot"/>RESULTS</div>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'1rem'}}>
                {project.results.map((r,i)=>(
                  <li key={i} style={{display:'flex',gap:'.75rem',alignItems:'flex-start'}}>
                    <span style={{width:5,height:5,borderRadius:'50%',background:'#2D5BFF',marginTop:'.45rem',flexShrink:0}}/>
                    <span style={{color:'#bbb',fontSize:'.85rem',lineHeight:1.6}}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{background:'#0a0a0a',border:'1px solid rgba(255,255,255,.06)',borderRadius:'1.5rem',padding:'2rem',marginBottom:'2rem'}}>
              <div className="sect-label" style={{marginBottom:'1.5rem'}}><span className="dot"/>TECH STACK</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem'}}>
                {project.tech.map(t=><span key={t} className="font-mono" style={{fontSize:'8px',color:'#555',border:'1px solid rgba(255,255,255,.08)',padding:'4px 10px',borderRadius:999,letterSpacing:'.1em',textTransform:'uppercase'}}>{t}</span>)}
              </div>
            </div>
      {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn" style={{width:'100%',marginBottom:'1rem',display:'flex'}}>
                <span className="btn-inner">VIEW LIVE SITE ↗</span>
              </a>
            )}
            <button className="btn btn-primary" style={{width:'100%',marginBottom:'1rem'}} onClick={()=>goTo('contact')}><span className="btn-inner">START A SIMILAR PROJECT</span></button>
            <button className="btn" style={{width:'100%'}} onClick={()=>goTo('work')}><span className="btn-inner">VIEW ALL WORK</span></button>
          </div>
        </div>
      </section>
      <div style={{borderTop:'1px solid rgba(255,255,255,.06)',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
        <button onClick={()=>goTo('work-case',prev.slug)} className="case-nav-link" style={{textAlign:'left',background:'none',border:'none',borderRight:'1px solid rgba(255,255,255,.06)',cursor:'pointer',color:'#fff'}}>
          <div className="label-xs" style={{marginBottom:'.75rem'}}>← PREVIOUS</div>
          <div className="font-bebas" style={{fontSize:'clamp(1.5rem,3vw,2.5rem)',textTransform:'uppercase',lineHeight:1,padding:'3rem 2.5rem'}}>{prev.name}</div>
        </button>
        <button onClick={()=>goTo('work-case',next.slug)} className="case-nav-link" style={{textAlign:'right',background:'none',border:'none',cursor:'pointer',color:'#fff'}}>
          <div className="label-xs" style={{marginBottom:'.75rem'}}>NEXT →</div>
          <div className="font-bebas" style={{fontSize:'clamp(1.5rem,3vw,2.5rem)',textTransform:'uppercase',lineHeight:1,padding:'3rem 2.5rem'}}>{next.name}</div>
        </button>
      </div>
    </div>
  );
}

// ── SERVICES ──────────────────────────────────────────────────────
function ServicesPage({goTo}:{goTo:(p:Page)=>void}) {
  useReveal();
  return (
    <div>
      <section style={{padding:'10rem 2.5rem 4rem',position:'relative',overflow:'hidden'}}>
        <div className="page-hero-glow"/>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="sect-label anim-fadeIn d1" style={{marginBottom:'1.5rem'}}><span className="dot"/>WHAT I BUILD</div>
          <div className="display-hero anim-fadeUp d2"><ScrambleText text="SERVICES" delay={200}/></div>
          <div className="display-hero text-outline anim-fadeUp d3">& SOLUTIONS</div>
        </div>
      </section>
      <section className="page-section section-divider">
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          {SERVICES.map((s,i)=>(
            <div key={s.title} className="services-grid-row reveal" style={{transitionDelay:`${i*.07}s`,display:'grid',gridTemplateColumns:'80px 1fr 1fr',gap:'3rem',padding:'3.5rem 0',borderBottom:'1px solid rgba(255,255,255,.06)',alignItems:'start'}}>
              <div className="font-mono" style={{fontSize:'10px',color:'#2D5BFF',letterSpacing:'.3em',paddingTop:'.5rem'}}>{s.num}</div>
              <div>
                <h2 className="display-service" style={{marginBottom:'1.25rem'}}>{s.title}</h2>
                <p style={{color:'#666',fontSize:'.9rem',lineHeight:1.8,maxWidth:420}}>{s.desc}</p>
              </div>
              <div>
                <div className="label-xs" style={{marginBottom:'1rem'}}>DELIVERABLES</div>
                <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'.6rem'}}>
                  {s.deliverables.map(d=>(
                    <li key={d} style={{display:'flex',gap:'.75rem',alignItems:'center'}}>
                      <span style={{width:4,height:4,borderRadius:'50%',background:'#2D5BFF',flexShrink:0}}/>
                      <span className="font-mono" style={{fontSize:'8.5px',color:'#555',letterSpacing:'.12em',textTransform:'uppercase'}}>{d}</span>
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
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{marginBottom:'3.5rem'}}>
            <div className="sect-label reveal" style={{marginBottom:'1rem'}}><span className="dot"/>TOOLS & TECHNOLOGIES</div>
            <h2 className="display-section reveal"><ScrambleText text="THE TECH STACK"/></h2>
            <p className="reveal" style={{color:'#555',fontSize:'.88rem',lineHeight:1.8,marginTop:'1.25rem',maxWidth:440}}>Every tool chosen for performance, scalability, and developer experience. No bloat, no compromise.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'1rem'}}>
            {TECH_STACK.map((t,i)=>(
              <div key={t.name} className="tech-item reveal-scale" style={{transitionDelay:`${i*.04}s`}}>
                <div className="label-xs" style={{color:'#2D5BFF'}}>{t.cat}</div>
                <div className="font-bebas" style={{fontSize:'1.4rem',letterSpacing:'.02em',textTransform:'uppercase'}}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="page-section">
        <div style={{maxWidth:1300,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'4rem'}}>
            <div className="sect-label reveal" style={{justifyContent:'center',marginBottom:'1rem'}}><span className="dot"/>INVESTMENT</div>
            <h2 className="display-section reveal"><ScrambleText text="TRANSPARENT PRICING"/></h2>
            <p className="reveal" style={{color:'#555',fontSize:'.85rem',marginTop:'1.25rem',maxWidth:420,margin:'1.25rem auto 0'}}>No hidden fees, no surprises. Clear packages designed to deliver maximum value at every stage of your growth.</p>
          </div>
          <div className="pricing-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'1.25rem'}}>
            {PRICING.map((plan,i)=>(
              <div key={plan.title} className={`pricing-card reveal-scale${plan.highlight?' highlight':''}`} style={{transitionDelay:`${i*.08}s`}}>
                {plan.highlight&&<div className="price-corner"/>}
                {plan.highlight&&<div className="font-mono" style={{fontSize:'7px',color:'#2D5BFF',letterSpacing:'.3em',textTransform:'uppercase',marginBottom:'1rem',background:'rgba(45,91,255,.1)',padding:'4px 10px',borderRadius:999,width:'fit-content'}}>MOST POPULAR</div>}
                <div className="sect-label" style={{marginBottom:'1rem'}}>{plan.title.toUpperCase()}</div>
                <div style={{marginBottom:'.5rem',lineHeight:1}}>
                  <span className="font-bebas" style={{fontSize:'3.5rem'}}>{plan.price}</span>
                  <span className="font-mono" style={{fontSize:'11px',color:'#555'}}>{plan.period}</span>
                </div>
                <p style={{fontSize:'.78rem',color:'#444',marginBottom:'1.5rem',lineHeight:1.6}}>{plan.desc}</p>
                <ul style={{flex:1,display:'flex',flexDirection:'column',gap:'.6rem',marginBottom:'2rem',listStyle:'none',padding:0}}>
                  {plan.features.map(f=><li key={f} style={{display:'flex',alignItems:'center',gap:'.6rem'}}><span style={{width:5,height:5,borderRadius:'50%',background:'#2D5BFF',flexShrink:0}}/><span className="font-mono" style={{fontSize:'8.5px',color:'#555',letterSpacing:'.12em',textTransform:'uppercase'}}>{f}</span></li>)}
                </ul>
                <button className={`btn${plan.highlight?' btn-primary':''}`} style={{width:'100%'}} onClick={()=>goTo('contact')}><span className="btn-inner">Initialize</span></button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────
function AboutPage({goTo}:{goTo:(p:Page)=>void}) {
  useReveal();
  const VALUES = [
    {num:'01',title:'Craft Over Templates',body:'Every site is built from scratch, in code. No Squarespace, no page builders. The difference is measurable in performance and visible in the result.'},
    {num:'02',title:'Business-First Design',body:'A beautiful site that does not convert is just expensive art. I design with business outcomes in mind first, aesthetics second — ideally both.'},
    {num:'03',title:'Radical Transparency',body:'You will always know where your project stands. I do not overpromise, disappear, or invoice for things not agreed upfront.'},
    {num:'04',title:'Continuous Improvement',body:'The web moves fast. I spend time every week learning — new tools, new techniques, new thinking. Your project benefits from that.'},
  ];
  return (
    <div>
      <section style={{padding:'10rem 2.5rem 5rem',position:'relative',overflow:'hidden'}}>
        <div className="page-hero-glow"/>
        <div className="two-col" style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'end'}}>
          <div>
            <div className="sect-label anim-fadeIn d1" style={{marginBottom:'1.5rem'}}><span className="dot"/>ABOUT</div>
            <div className="display-section anim-fadeUp d2"><ScrambleText text="THE STUDIO" delay={200}/></div>
            <div className="display-section text-outline anim-fadeUp d3">& THE PERSON</div>
          </div>
          <div className="anim-fadeUp d4">
            <p style={{fontSize:'1.05rem',color:'#777',lineHeight:1.9,marginBottom:'1.5rem'}}>Mutanu Studio is a one-person web design and development practice based in Nairobi, Kenya. I work directly with founders, business owners, and marketing teams who need digital infrastructure that actually performs.</p>
            <p style={{fontSize:'1.05rem',color:'#555',lineHeight:1.9}}>Not an agency. Not a freelancer-with-templates. The quality control and intentionality of a boutique studio, with the speed and directness of working with one person.</p>
          </div>
        </div>
      </section>
      {/* Bio */}
      <section className="page-section section-divider">
        <div className="two-col" style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'400px 1fr',gap:'5rem',alignItems:'start'}}>
          <div className="reveal-left" style={{background:'#0d0d0d',border:'1px solid rgba(255,255,255,.07)',borderRadius:'2rem',aspectRatio:'3/4',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',flexShrink:0}}>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(45,91,255,.1) 0%,transparent 60%)'}}/>
<div className="reveal-left" style={{background:'#0d0d0d',border:'1px solid rgba(255,255,255,.07)',borderRadius:'2rem',aspectRatio:'3/4',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',flexShrink:0}}>
  <img 
    src="/me2.png" 
    alt="Sharon Mutanu" 
    style={{
      width:'100%',
      height:'100%',
      objectFit:'cover',
      objectPosition:'center top',
    }}
  />
</div>          </div>
          <div className="reveal-right">
            <div className="sect-label" style={{marginBottom:'1.5rem'}}><span className="dot"/>THE PERSON BEHIND THE WORK</div>
            <h2 className="font-bebas" style={{fontSize:'clamp(2.5rem,5vw,4rem)',textTransform:'uppercase',marginBottom:'2rem',lineHeight:.9}}>Building the web<br/><span style={{color:'#2D5BFF'}}>from Nairobi.</span></h2>
            <p style={{color:'#777',fontSize:'.9rem',lineHeight:1.9,marginBottom:'1.25rem'}}>I am a self-taught web designer and developer. I started building websites because most of the ones I saw — especially for businesses I respected — were genuinely bad. Slow, generic, forgettable.</p>
            <p style={{color:'#777',fontSize:'.9rem',lineHeight:1.9,marginBottom:'1.25rem'}}>I became obsessed with understanding why, and with figuring out how to do it better. Every project gets the same focus I gave my first one: an unreasonable amount of care about the details.</p>
            <p style={{color:'#555',fontSize:'.9rem',lineHeight:1.9,marginBottom:'2.5rem'}}>Outside of work: design systems, business strategy, and the intersection between the two. I read a lot, run occasionally, and drink too much coffee.</p>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <button className="btn btn-primary" onClick={()=>goTo('contact')}><span className="btn-inner">WORK WITH ME</span></button>
              <button className="btn" onClick={()=>goTo('work')}><span className="btn-inner">SEE MY WORK</span></button>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="page-section page-section-dark">
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="sect-label reveal" style={{marginBottom:'1rem'}}><span className="dot"/>HOW I WORK</div>
          <h2 className="display-section reveal" style={{marginBottom:'4rem'}}><ScrambleText text="VALUES"/></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.5rem'}}>
            {VALUES.map((v,i)=>(
              <div key={v.title} className="reveal-scale" style={{transitionDelay:`${i*.08}s`,background:'#0a0a0a',border:'1px solid rgba(255,255,255,.06)',borderRadius:'1.5rem',padding:'2rem'}}>
                <div className="label-xs" style={{color:'#2D5BFF',marginBottom:'.75rem'}}>{v.num}</div>
                <h3 className="font-bebas" style={{fontSize:'1.6rem',textTransform:'uppercase',marginBottom:'.75rem'}}>{v.title}</h3>
                <p style={{color:'#555',fontSize:'.82rem',lineHeight:1.8}}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="page-section">
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div className="sect-label reveal" style={{marginBottom:'1rem',justifyContent:'center'}}><span className="dot"/>THE JOURNEY</div>
          <h2 className="display-section reveal" style={{textAlign:'center',marginBottom:'4rem'}}><ScrambleText text="ORIGIN STORY"/></h2>
          <div style={{position:'relative'}}>
            <div className="timeline-line"/>
            {TIMELINE.map((item,i)=>(
              <div key={item.year} className="reveal" style={{transitionDelay:`${i*.08}s`,display:'grid',gridTemplateColumns:'80px 1fr',gap:'2.5rem',marginBottom:'3rem',alignItems:'start'}}>
                <div style={{textAlign:'right',paddingRight:'1.5rem',position:'relative'}}>
                  <span className="font-mono" style={{fontSize:'10px',color:'#2D5BFF',letterSpacing:'.15em'}}>{item.year}</span>
                  <div className="timeline-dot"/>
                </div>
                <div style={{paddingTop:'.15rem'}}>
                  <h3 className="font-bebas" style={{fontSize:'1.5rem',textTransform:'uppercase',marginBottom:'.5rem'}}>{item.title}</h3>
                  <p style={{color:'#555',fontSize:'.85rem',lineHeight:1.8}}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── BLOG (listing) ────────────────────────────────────────────────
function BlogPage({goTo}:{goTo:(p:Page,slug?:string)=>void}) {
  useReveal();
  const [filter,setFilter] = useState('All');
  const cats = ['All',...Array.from(new Set(BLOG_POSTS.map(p=>p.cat)))];
  const filtered = filter==='All' ? BLOG_POSTS : BLOG_POSTS.filter(p=>p.cat===filter);
  return (
    <div>
      <section style={{padding:'10rem 2.5rem 4rem',position:'relative',overflow:'hidden'}}>
        <div className="page-hero-glow"/>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="sect-label anim-fadeIn d1" style={{marginBottom:'1.5rem'}}><span className="dot"/>INSIGHTS</div>
          <div className="display-hero anim-fadeUp d2"><ScrambleText text="BLOG" delay={200}/></div>
          <div className="display-hero text-outline anim-fadeUp d3">& THINKING</div>
          <p className="anim-fadeUp d4 font-mono" style={{marginTop:'2rem',fontSize:'10px',color:'#555',letterSpacing:'.4em',textTransform:'uppercase',lineHeight:2}}>Design, development, business strategy.<br/>Things worth writing down.</p>
        </div>
      </section>
      <div style={{padding:'0 2.5rem 3rem',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
          {cats.map(cat=><button key={cat} onClick={()=>setFilter(cat)} style={{fontFamily:'var(--font-mono)',fontSize:'8px',letterSpacing:'.25em',textTransform:'uppercase',padding:'.5rem 1.25rem',borderRadius:999,border:'1px solid',background:filter===cat?'#2D5BFF':'transparent',borderColor:filter===cat?'#2D5BFF':'rgba(255,255,255,.12)',color:filter===cat?'#fff':'#555',cursor:'pointer',transition:'all .25s'}}>{cat}</button>)}
        </div>
      </div>
      <section className="page-section">
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          {/* Featured */}
          {filter==='All'&&filtered.length>0&&(
            <div className="two-col reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',padding:'3rem',background:'#0a0a0a',border:'1px solid rgba(255,255,255,.06)',borderRadius:'2rem',marginBottom:'2rem',cursor:'pointer',transition:'border-color .3s,transform .3s'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(45,91,255,.35)';(e.currentTarget as HTMLElement).style.transform='translateY(-4px)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,.06)';(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}
              onClick={()=>goTo('blog-post',filtered[0].slug)}
            >
              <div style={{background:'#111',borderRadius:'1.25rem',aspectRatio:'16/9',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(45,91,255,.12) 0%,transparent 60%)'}}/>
                <div className="font-mono" style={{fontSize:'8px',color:'#2a2a2a',letterSpacing:'.3em',position:'relative'}}>FEATURED</div>
              </div>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <div style={{display:'flex',gap:'.75rem',marginBottom:'1.25rem',alignItems:'center'}}><span className="tag">{filtered[0].cat}</span><span className="font-mono" style={{fontSize:'7px',color:'#333',letterSpacing:'.2em'}}>FEATURED</span></div>
                <h2 className="font-bebas" style={{fontSize:'clamp(1.8rem,3vw,2.8rem)',textTransform:'uppercase',marginBottom:'1rem',lineHeight:1}}>{filtered[0].title}</h2>
                <p style={{color:'#555',fontSize:'.85rem',lineHeight:1.7,marginBottom:'1.5rem'}}>{filtered[0].excerpt}</p>
                <div style={{display:'flex',gap:'1.5rem'}}><span className="font-mono" style={{fontSize:'8px',color:'#333',letterSpacing:'.2em'}}>{filtered[0].date}</span><span className="font-mono" style={{fontSize:'8px',color:'#333',letterSpacing:'.2em'}}>{filtered[0].readTime}</span></div>
                <div style={{marginTop:'1.5rem',fontFamily:'var(--font-mono)',fontSize:'8px',color:'#2D5BFF',letterSpacing:'.2em',textTransform:'uppercase'}}>READ ARTICLE →</div>
              </div>
            </div>
          )}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:'1.25rem'}}>
            {(filter==='All'?filtered.slice(1):filtered).map((post,i)=>(
              <div key={post.slug} className="blog-card reveal" style={{transitionDelay:`${i*.06}s`}} onClick={()=>goTo('blog-post',post.slug)}>
                <div style={{background:'#111',borderRadius:'.75rem',aspectRatio:'16/9',marginBottom:'1.5rem',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}}>
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(45,91,255,.08) 0%,transparent 60%)'}}/>
                  <div className="font-mono" style={{fontSize:'7px',color:'#1e1e1e',letterSpacing:'.3em',position:'relative'}}>{post.cat}</div>
                </div>
                <div style={{display:'flex',gap:'.75rem',marginBottom:'1rem',alignItems:'center'}}><span className="tag">{post.cat}</span><span className="font-mono" style={{fontSize:'7px',color:'#2a2a2a',letterSpacing:'.2em'}}>{post.readTime}</span></div>
                <h2 className="font-bebas" style={{fontSize:'1.6rem',textTransform:'uppercase',marginBottom:'.75rem',lineHeight:1.05}}>{post.title}</h2>
                <p style={{color:'#555',fontSize:'.8rem',lineHeight:1.7,marginBottom:'auto'}}>{post.excerpt}</p>
                <div style={{marginTop:'1.5rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span className="font-mono" style={{fontSize:'7px',color:'#2a2a2a',letterSpacing:'.2em'}}>{post.date}</span>
                  <span className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.2em'}}>READ →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── BLOG POST ─────────────────────────────────────────────────────
function BlogPostPage({slug,goTo}:{slug:string;goTo:(p:Page,s?:string)=>void}) {
  useReveal();
  const post = BLOG_POSTS.find(p=>p.slug===slug)!;
  const idx = BLOG_POSTS.findIndex(p=>p.slug===slug);
  const next = BLOG_POSTS[(idx+1)%BLOG_POSTS.length];
  return (
    <div>
      <section style={{padding:'10rem 2.5rem 5rem',position:'relative',overflow:'hidden',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:400,background:'radial-gradient(ellipse at 50% -20%,rgba(45,91,255,.1) 0%,transparent 65%)',pointerEvents:'none'}}/>
        <div style={{maxWidth:800,margin:'0 auto',position:'relative'}}>
          <div style={{display:'flex',gap:'1rem',alignItems:'center',marginBottom:'2rem',flexWrap:'wrap'}}>
            <button onClick={()=>goTo('blog')} className="font-mono" style={{background:'none',border:'none',cursor:'pointer',fontSize:'8px',color:'#555',letterSpacing:'.3em',textTransform:'uppercase',transition:'color .2s'}} onMouseEnter={e=>(e.currentTarget.style.color='#2D5BFF')} onMouseLeave={e=>(e.currentTarget.style.color='#555')}>← BLOG</button>
            <span className="tag">{post.cat}</span>
          </div>
          <h1 className="font-bebas" style={{fontSize:'clamp(2.5rem,7vw,6rem)',textTransform:'uppercase',lineHeight:.9,marginBottom:'2rem'}}>{post.title}</h1>
          <div style={{display:'flex',gap:'2rem',flexWrap:'wrap'}}>
            <span className="font-mono" style={{fontSize:'8px',color:'#444',letterSpacing:'.2em'}}>{post.date}</span>
            <span className="font-mono" style={{fontSize:'8px',color:'#444',letterSpacing:'.2em'}}>{post.readTime}</span>
          </div>
        </div>
      </section>
      <article className="page-section">
        <div style={{maxWidth:740,margin:'0 auto'}}>
          <p style={{fontSize:'1.1rem',color:'#888',lineHeight:1.8,marginBottom:'3rem',fontStyle:'italic',borderLeft:'2px solid #2D5BFF',paddingLeft:'1.5rem'}}>{post.excerpt}</p>
          <BlogContent text={post.content}/>
          <div style={{borderTop:'1px solid rgba(255,255,255,.06)',margin:'4rem 0 3rem'}}/>
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',alignItems:'center'}}>
            <div>
              <div className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.3em',marginBottom:'.5rem'}}>WRITTEN BY</div>
              <div className="font-bebas" style={{fontSize:'1.5rem',textTransform:'uppercase'}}>Mutanu Studio</div>
              <div className="font-mono" style={{fontSize:'8px',color:'#444',letterSpacing:'.2em',marginTop:'.25rem'}}>NAIROBI, KENYA</div>
            </div>
            <div style={{textAlign:'right'}}><button className="btn btn-primary" onClick={()=>goTo('contact')}><span className="btn-inner">START A PROJECT</span></button></div>
          </div>
        </div>
      </article>
      <section style={{borderTop:'1px solid rgba(255,255,255,.06)',padding:'3rem 2.5rem'}}>
        <div style={{maxWidth:740,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'2rem',flexWrap:'wrap'}}>
          <div>
            <div className="label-xs" style={{marginBottom:'.5rem'}}>NEXT ARTICLE</div>
            <button onClick={()=>goTo('blog-post',next.slug)} className="font-bebas" style={{background:'none',border:'none',cursor:'pointer',fontSize:'clamp(1.5rem,3vw,2.5rem)',textTransform:'uppercase',color:'#fff',lineHeight:1,transition:'color .2s',textAlign:'left'}} onMouseEnter={e=>(e.currentTarget.style.color='#2D5BFF')} onMouseLeave={e=>(e.currentTarget.style.color='#fff')}>{next.title}</button>
          </div>
          <button className="btn" onClick={()=>goTo('blog-post',next.slug)}><span className="btn-inner">READ →</span></button>
        </div>
      </section>
    </div>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────
function FAQPage({goTo}:{goTo:(p:Page)=>void}) {
  useReveal();
  return (
    <div>
      <section style={{padding:'10rem 2.5rem 4rem',position:'relative',overflow:'hidden'}}>
        <div className="page-hero-glow"/>
        <div style={{maxWidth:1000,margin:'0 auto'}}>
          <div className="sect-label anim-fadeIn d1" style={{marginBottom:'1.5rem'}}><span className="dot"/>QUESTIONS</div>
          <div className="display-hero anim-fadeUp d2"><ScrambleText text="FAQ" delay={200}/></div>
          <p className="anim-fadeUp d3 font-mono" style={{marginTop:'2rem',fontSize:'10px',color:'#555',letterSpacing:'.4em',textTransform:'uppercase',lineHeight:2}}>Everything you need to know before we start working together.</p>
        </div>
      </section>
      <section className="page-section section-divider">
        <div style={{maxWidth:900,margin:'0 auto'}}>
          {FAQS.map((section,si)=>(
            <div key={section.cat} className="reveal" style={{transitionDelay:`${si*.1}s`,marginBottom:'4rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'1.5rem',marginBottom:'2rem'}}>
                <span className="sect-label"><span className="dot"/>{section.cat}</span>
                <div style={{flex:1,height:1,background:'rgba(255,255,255,.06)'}}/>
              </div>
              {section.items.map((item,i)=><FAQItem key={item.q} q={item.q} a={item.a} index={i}/>)}
            </div>
          ))}
          <div className="reveal" style={{background:'#0a0a0a',border:'1px solid rgba(45,91,255,.2)',borderRadius:'2rem',padding:'3rem',textAlign:'center',marginTop:'2rem'}}>
            <div className="sect-label" style={{justifyContent:'center',marginBottom:'1rem'}}><span className="dot"/>STILL HAVE QUESTIONS?</div>
            <h2 className="font-bebas" style={{fontSize:'clamp(2rem,5vw,3.5rem)',textTransform:'uppercase',marginBottom:'1rem',lineHeight:1}}>Just ask directly.</h2>
            <p style={{color:'#555',fontSize:'.88rem',lineHeight:1.8,maxWidth:360,margin:'0 auto 2rem'}}>I respond to every inquiry personally, usually within 24 hours.</p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              <button className="btn btn-primary" onClick={()=>goTo('contact')}><span className="btn-inner">SEND A MESSAGE</span></button>
              <a href="mailto:hello@mutanostudio.com" className="btn"><span className="btn-inner">EMAIL DIRECTLY</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────
function ContactPage() {
  useReveal();
  return (
    <div>
      <section style={{padding:'10rem 2.5rem 5rem',position:'relative',overflow:'hidden'}}>
        <div className="page-hero-glow"/>
        <div className="two-col" style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'end'}}>
          <div>
            <div className="sect-label anim-fadeIn d1" style={{marginBottom:'1.5rem'}}><span className="dot"/>START A PROJECT</div>
            <div className="anim-fadeUp d2" style={{fontFamily:'var(--font-display)',fontSize:'clamp(4rem,12vw,10rem)',lineHeight:.82,letterSpacing:'-.02em',textTransform:'uppercase'}}><ScrambleText text="LET'S BUILD" delay={200}/></div>
            <div className="anim-fadeUp d3" style={{fontFamily:'var(--font-display)',fontSize:'clamp(4rem,12vw,10rem)',lineHeight:.82,letterSpacing:'-.02em',textTransform:'uppercase',color:'transparent',WebkitTextStroke:'1.5px rgba(255,255,255,.17)'}}>TOGETHER.</div>
          </div>
          <div className="anim-fadeUp d4">
            <p style={{fontSize:'1rem',color:'#666',lineHeight:1.9,marginBottom:'2.5rem'}}>Have a project in mind? Fill out the form and I will get back to you within 24 hours with a custom proposal. No sales call required, no commitment to proceed.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
              {[{label:'Email',value:'mutanu.sharon@yahoo.com'},{label:'Location',value:'Nairobi, Kenya'},{label:'Response Time',value:'Within 24 hours'},{label:'Availability',value:'Open to new projects'}].map(item=>(
                <div key={item.label} style={{display:'flex',gap:'1.5rem',alignItems:'baseline'}}>
                  <span className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.3em',textTransform:'uppercase',minWidth:100}}>{item.label}</span>
                  <span style={{fontSize:'.85rem',color:'#777'}}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="page-section section-divider">
        <div className="contact-grid" style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 560px',gap:'5rem',alignItems:'start'}}>
          <div>
            <div className="sect-label" style={{marginBottom:'1.5rem'}}><span className="dot"/>WHAT HAPPENS NEXT</div>
            {[{s:'01',title:'You fill the form',body:'Tell me about your project, budget, and goals. The more detail, the better.'},{s:'02',title:'I review and respond',body:'Within 24 hours with an initial proposal and any clarifying questions.'},{s:'03',title:"We get on a call",body:'30-minute discovery call to align on scope, timeline, and vision.'},{s:'04',title:'Work begins',body:'50% deposit to kick off, then I build while you run your business.'}].map((item,i)=>(
              <div key={item.s} style={{display:'flex',gap:'1.5rem',marginBottom:'2.5rem',alignItems:'flex-start'}}>
                <div style={{width:36,height:36,border:'1px solid rgba(45,91,255,.3)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontFamily:'var(--font-mono)',fontSize:'8px',color:'#2D5BFF',letterSpacing:'.1em'}}>{item.s}</div>
                <div><h3 className="font-bebas" style={{fontSize:'1.3rem',textTransform:'uppercase',marginBottom:'.4rem'}}>{item.title}</h3><p style={{color:'#555',fontSize:'.82rem',lineHeight:1.7}}>{item.body}</p></div>
              </div>
            ))}
          </div>
          <div style={{background:'#0a0a0a',border:'1px solid rgba(255,255,255,.07)',borderRadius:'2rem',padding:'2.5rem'}}>
            <ContactForm/>
          </div>
        </div>
      </section>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════════════════
function Footer({goTo}:{goTo:(p:Page)=>void}) {
  const FOOTER_LINKS:{label:string;page:Page}[] = [
    {label:'Work',page:'work'},{label:'Services',page:'services'},{label:'About',page:'about'},
    {label:'Blog',page:'blog'},{label:'FAQ',page:'faq'},{label:'Contact',page:'contact'},
  ];
  return (
    <footer style={{borderTop:'1px solid rgba(255,255,255,.06)',padding:'4rem 2.5rem 2.5rem',background:'#050505'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:'4rem',marginBottom:'4rem'}} className="three-col">
          <div>
            <button onClick={()=>goTo('home')} style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'1.5rem'}}>
              <div style={{width:28,height:28,border:'1.5px solid #2D5BFF',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:10,height:10,background:'#2D5BFF',borderRadius:2}}/></div>
              <span className="font-mono" style={{fontSize:'11px',fontWeight:700,letterSpacing:'.45em',color:'#fff',textTransform:'uppercase'}}>MUTANU // STUDIO</span>
            </button>
            <p style={{color:'#444',fontSize:'.82rem',lineHeight:1.8,maxWidth:280}}>Architecting high-fidelity digital infrastructure for ambitious businesses. Based in Nairobi, working globally.</p>
            <button onClick={()=>goTo('contact')} className="font-mono" style={{background:'none',border:'none',cursor:'pointer',marginTop:'1.5rem',fontSize:'9px',color:'#2D5BFF',letterSpacing:'.3em',textTransform:'uppercase',borderBottom:'1px solid rgba(45,91,255,.35)',paddingBottom:2}}>START A PROJECT →</button>
          </div>
          <div>
            <div className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.45em',textTransform:'uppercase',marginBottom:'1.5rem'}}>Pages</div>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'.75rem'}}>
              {FOOTER_LINKS.map(({label,page})=>(
                <li key={label}><button onClick={()=>goTo(page)} style={{background:'none',border:'none',cursor:'pointer',fontSize:'.82rem',color:'#444',transition:'color .2s',fontFamily:'inherit'}} onMouseEnter={e=>(e.currentTarget.style.color='#fff')} onMouseLeave={e=>(e.currentTarget.style.color='#444')}>{label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono" style={{fontSize:'8px',color:'#2D5BFF',letterSpacing:'.45em',textTransform:'uppercase',marginBottom:'1.5rem'}}>Connect</div>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'.75rem'}}>
          {[
  { label:'Twitter / X', url:'https://x.com/Sharon_Mutan' },
  { label:'LinkedIn',    url:'https://www.linkedin.com/in/sharonmutanu/' },
  { label:'Instagram',   url:'https://www.instagram.com/sha.ta.nu/' },
].map(s=>(
  <li key={s.label}><a href={s.url} target="_blank" rel="noopener noreferrer" style={{fontSize:'.82rem',color:'#444',textDecoration:'none',transition:'color .2s'}} onMouseEnter={e=>(e.currentTarget.style.color='#fff')} onMouseLeave={e=>(e.currentTarget.style.color='#444')}>{s.label}</a></li>
))}
            </ul>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,.05)',paddingTop:'1.5rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
          <span className="font-mono" style={{fontSize:'8px',color:'#1e1e1e',letterSpacing:'.3em',textTransform:'uppercase'}}>© 2025 MUTANU STUDIO</span>
          <span className="font-mono" style={{fontSize:'8px',color:'#1e1e1e',letterSpacing:'.3em',textTransform:'uppercase'}}>NAIROBI, KENYA</span>
        </div>
      </div>
    </footer>
  );
}

// ════════════════════════════════════════════════════════════════════
// ROOT COMPONENT
// ════════════════════════════════════════════════════════════════════
export default function MutanuStudio() {
  const [page, setPage] = useState<Page>('home');
  const [slug, setSlug] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive:true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  },[]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  },[menuOpen]);

  const goTo = useCallback((p:Page, s?:string) => {
    setPage(p);
    if (s) setSlug(s);
    setMenuOpen(false);
    window.scrollTo({ top:0, behavior:'smooth' });
  },[]);

  const isActive = (p:Page) => {
    if (p==='work') return page==='work'||page==='work-case';
    if (p==='blog') return page==='blog'||page==='blog-post';
    return page===p;
  };

  return (
    <div style={{minHeight:'100vh',background:'#050505',color:'#fff',fontFamily:'var(--font-sans)',overflowX:'hidden'}}>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen?' open':''}`} role="dialog" aria-modal="true" aria-hidden={!menuOpen}>
        <div className="sect-label" style={{marginBottom:'1.5rem'}}><span className="dot"/>NAVIGATION</div>
        {NAV_ITEMS.map(({label,page:p})=>(
          <button key={p} className="mobile-nav-btn" onClick={()=>goTo(p as Page)} style={{color:isActive(p as Page)?'#2D5BFF':'#fff'}}>{label}</button>
        ))}
        <button className="btn btn-primary" style={{marginTop:'1rem'}} onClick={()=>goTo('contact')}><span className="btn-inner">Start a Project</span></button>
      </div>

      {/* NAV */}
      <nav className="nav-bar" aria-label="Main navigation" style={{
        position:'fixed',top:0,left:0,width:'100%',zIndex:50,
        background:scrolled?'rgba(5,5,5,.92)':'transparent',
        backdropFilter:scrolled?'blur(16px)':'none',
        borderBottom:scrolled?'1px solid rgba(255,255,255,.06)':'0.3px solid transparent',
        padding:'1.25rem 2.5rem',
        display:'flex',justifyContent:'space-between',alignItems:'center',
        transition:'background .4s,border-color .4s',
      }}>
        {/* Logo */}
<button onClick={()=>goTo('home')} style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:'.75rem'}} aria-label="Home">
  <img src="/logo2.png" alt="Mutanu Studio" style={{height:100,width:400,objectFit:'contain',transform: 'scale(2.5)'}} />
</button>

        {/* Desktop links */}
        <ul className="hide-mobile" style={{display:'flex',alignItems:'center',gap:'2.5rem',listStyle:'none',margin:0,padding:0}}>
          {NAV_ITEMS.filter(n=>n.page!=='home').map(({label,page:p})=>(
            <li key={p}>
              <button className={`nav-link${isActive(p as Page)?' active':''}`} onClick={()=>goTo(p as Page)} style={{color:isActive(p as Page)?'#fff':'#2D5BFF'}}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem'}}>
          <div className="hide-mobile" style={{display:'flex',alignItems:'center',gap:'.5rem',fontFamily:'var(--font-mono)',fontSize:'8px',color:'#222',letterSpacing:'.2em'}}>
            <span className="dot"/>ONLINE
          </div>
          <button className="btn btn-primary btn-sm hide-mobile" onClick={()=>goTo('contact')}><span className="btn-inner">Start a Project</span></button>
          {/* Hamburger */}
          <button onClick={()=>setMenuOpen(o=>!o)} style={{background:'none',border:'none',cursor:'pointer',display:'flex',flexDirection:'column',gap:'5px',padding:'4px',zIndex:70,position:'relative'}} aria-label={menuOpen?'Close menu':'Open menu'} aria-expanded={menuOpen}>
            <span style={{display:'block',width:22,height:1.5,background:menuOpen?'#2D5BFF':'#fff',transition:'transform .3s,opacity .3s',transform:menuOpen?'rotate(45deg) translate(5px,5px)':'none'}}/>
            <span style={{display:'block',width:22,height:1.5,background:menuOpen?'#2D5BFF':'#fff',transition:'opacity .3s',opacity:menuOpen?0:1}}/>
            <span style={{display:'block',width:22,height:1.5,background:menuOpen?'#2D5BFF':'#fff',transition:'transform .3s,opacity .3s',transform:menuOpen?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
          </button>
        </div>
      </nav>

      {/* PAGE CONTENT — animated on page change */}
      <main key={`${page}-${slug}`} className="anim-pageIn">
        {page==='home'        && <HomePage goTo={goTo}/>}
        {page==='work'        && <WorkPage goTo={goTo}/>}
        {page==='work-case'   && <CaseStudyPage slug={slug} goTo={goTo}/>}
        {page==='services'    && <ServicesPage goTo={goTo}/>}
        {page==='about'       && <AboutPage goTo={goTo}/>}
        {page==='blog'        && <BlogPage goTo={goTo}/>}
        {page==='blog-post'   && <BlogPostPage slug={slug} goTo={goTo}/>}
        {page==='faq'         && <FAQPage goTo={goTo}/>}
        {page==='contact'     && <ContactPage/>}
      </main>

     <Footer goTo={goTo}/>

      {/* WhatsApp floating button */}
      
        <a href="https://wa.me/254115013612"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position:'fixed',
          bottom:'2rem',
          right:'2rem',
          width:56,
          height:56,
          borderRadius:'50%',
          background:'#25D366',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          zIndex:999,
          boxShadow:'0 4px 20px rgba(37,211,102,.4)',
          transition:'transform .25s,box-shadow .25s',
          textDecoration:'none',
        }}
        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1.1)';(e.currentTarget as HTMLElement).style.boxShadow='0 6px 28px rgba(37,211,102,.6)';}}
        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1)';(e.currentTarget as HTMLElement).style.boxShadow='0 4px 20px rgba(37,211,102,.4)';}}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
}
