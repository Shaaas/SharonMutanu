import { Service, TechItem } from '@/types';

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Web Design',
    short: 'Clean, modern websites that convert.',
    desc: 'Every pixel is intentional. I design websites that communicate your brand clearly, guide visitors naturally, and convert browsers into customers. No templates - everything built from scratch.',
    deliverables: ['Brand-aligned visual design', 'Mobile-first responsive layouts', 'Interactive prototypes', 'Design system & style guide'],
  },
  {
    num: '02',
    title: 'Web Development',
    short: 'Custom-built, hand-coded, fast.',
    desc: 'Hand-coded with modern tooling - no bloated page builders. Fast, accessible, SEO-ready websites built on Next.js that you fully own and control.',
    deliverables: ['Next.js / React development', 'CMS integration', 'API integrations', 'Performance optimisation'],
  },
  {
    num: '03',
    title: 'Digital Platforms & Systems',
    short: 'Full-stack products that run your business.',
    desc: 'Beyond websites - I build digital systems. SACCO management platforms, delivery apps, member portals, admin dashboards, and payment flows. If your business needs software to operate, I build it. Source code is licensed intellectual property of MYSA Builds - you get a full usage licence, not the raw code.',
    deliverables: ['SACCO and cooperative systems', 'Delivery and logistics apps (PWA)', 'Member and admin portals', 'M-Pesa and Stripe payment integration', 'Supabase / PostgreSQL backend', 'Authentication and role-based access', 'PDF generation and certificates', 'Real-time dashboards'],
  },
  {
    num: '04',
    title: 'Landing Pages',
    short: 'Built to convert, engineered to impress.',
    desc: 'Single-page experiences built around one goal - sign ups, sales, or leads. Every element earns its place. 48-hour turnaround available.',
    deliverables: ['Conversion-focused layout', 'A/B testing ready', 'Analytics integration', '48hr turnaround available'],
  },
  {
    num: '05',
    title: 'Website Redesign',
    short: 'Modernise and boost performance.',
    desc: 'Your existing site is holding you back. A strategic redesign modernises your brand, improves conversion rates, and gives you a technical foundation that scales.',
    deliverables: ['Full audit & competitor analysis', 'Conversion-focused redesign', 'Content migration', 'SEO preservation strategy'],
  },
  {
    num: '06',
    title: 'Brand Identity & Logo Design',
    short: 'Look the part from day one.',
    desc: 'A strong brand is more than a logo. I design visual identities that communicate clearly, build trust, and scale across digital and print. Every element considered, nothing generic.',
    deliverables: ['Logo design and variations', 'Colour palette and typography', 'Brand style guide', 'Social media kit', 'Business card and print assets'],
  },
  {
    num: '07',
    title: 'Social Media Management',
    short: 'Consistent presence, strategic content.',
    desc: 'Your social media should work as hard as your website. I manage content creation, scheduling, and community engagement for businesses that want to show up consistently without doing it themselves.',
    deliverables: ['Content calendar and strategy', 'Post design and copywriting', 'Scheduling and publishing', 'Monthly performance report', 'Community engagement'],
  },
  {
    num: '08',
    title: 'Maintenance & Support',
    short: 'Ongoing partnership, zero stress.',
    desc: 'Your website is a living business asset. Monthly retainer packages cover updates, performance monitoring, and direct access to me when you need it.',
    deliverables: ['Monthly content updates', 'Performance and security monitoring', 'Priority support', 'Monthly report'],
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Next.js',       cat: 'FRAMEWORK' },
  { name: 'React',         cat: 'LIBRARY'   },
  { name: 'TypeScript',    cat: 'LANGUAGE'  },
  { name: 'Tailwind CSS',  cat: 'STYLING'   },
  { name: 'Supabase',      cat: 'BACKEND'   },
  { name: 'PostgreSQL',    cat: 'DATABASE'  },
  { name: 'Node.js',       cat: 'BACKEND'   },
  { name: 'Prisma',        cat: 'ORM'       },
  { name: 'M-Pesa API',    cat: 'PAYMENTS'  },
  { name: 'Stripe',        cat: 'PAYMENTS'  },
  { name: 'Sanity CMS',    cat: 'CMS'       },
  { name: 'Figma',         cat: 'DESIGN'    },
  { name: 'Vercel',        cat: 'DEPLOYMENT'},
  { name: 'Framer Motion', cat: 'ANIMATION' },
  { name: 'Python',        cat: 'LANGUAGE'  },
  { name: 'FastAPI',       cat: 'BACKEND'   },
];

export const TESTIMONIALS = [
  {
    quote: 'MYSA delivered our healthcare platform ahead of schedule. The attention to UX detail was exceptional - our patients and clinical staff both love it. Best investment we have made in our digital infrastructure.',
    name: 'Dr. A. Mwangi',
    role: 'Founder, Soma Health',
  },
  {
    quote: 'Our conversion rate went from 0.8% to 3.4% after the redesign. The site finally looks as premium as our products. Worth every cent.',
    name: 'F. Ochieng',
    role: 'Creative Director, Chic Fashion House',
  },
  {
    quote: 'Finally a developer who understands both design AND business. MYSA asked questions that made us think harder about our own product. The results speak for themselves.',
    name: 'J. Kamau',
    role: 'CEO, Luxeestates',
  },
];

export const TIMELINE = [
  { year: '2019', title: 'The Beginning', body: 'Started teaching myself to code. No formal training, just curiosity and a lot of late nights. HTML, CSS, then JavaScript. The learning curve was steep but the pull was stronger.' },
  { year: '2020', title: 'Getting Serious', body: 'Moved beyond tutorials and started building real things. Experimented with React, fell in love with Next.js, and began to understand the difference between code that works and code that is built well.' },
  { year: '2021', title: 'Design Meets Development', body: 'Realised that building technically was not enough. Started studying design systems, typography, and conversion principles. The goal shifted from making things work to making things work beautifully.' },
  { year: '2022', title: 'Building the Foundation', body: 'Took on smaller projects to sharpen the process. Learned how to scope, communicate with clients, and deliver on time. Every project was a lesson in something.' },
  { year: '2023', title: 'First Paid Work', body: 'Landed the first paying clients and delivered real projects for real businesses. Built portfolios, business sites, and tools for clients who trusted me with something that mattered to them.' },
  { year: '2024', title: 'MYSA Builds', body: 'Formalised the practice under MYSA Builds. Started taking on more complex work - platforms, admin systems, payment integrations. Built UBTA, a full member management platform serving 3,900+ riders across Kenya.' },
  { year: '2025', title: 'Now', body: 'Working with businesses across Kenya and beyond. The focus is on quality over quantity - fewer projects, done properly, built to last. Still obsessed with the craft. Still learning every day.' },
];