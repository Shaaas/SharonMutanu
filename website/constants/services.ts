import { Service, TechItem } from '@/types';

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Web Design',
    short: 'Clean, modern websites that convert.',
    desc: 'Every pixel is intentional. I design websites that communicate your brand clearly, guide visitors naturally, and convert browsers into customers. No templates — everything built from scratch.',
    deliverables: ['Brand-aligned visual design', 'Mobile-first responsive layouts', 'Interactive prototypes', 'Design system & style guide'],
  },
  {
    num: '02',
    title: 'Web Development',
    short: 'Custom-built, hand-coded, fast.',
    desc: 'Hand-coded with modern tooling — no bloated page builders. Fast, accessible, SEO-ready websites built on Next.js that you fully own and control.',
    deliverables: ['Next.js / React development', 'CMS integration', 'API integrations', 'Performance optimisation'],
  },
  {
    num: '03',
    title: 'Digital Platforms & Systems',
    short: 'Full-stack products that run your business.',
    desc: 'Beyond websites — I build digital systems. Member portals, admin dashboards, payment flows, database-backed platforms. If your business needs software to operate, I build it. Like UBTA: a full member management platform with M-Pesa payments, Supabase backend, admin portal, certificate generation, and member verification — serving 3,900+ riders across Kenya.',
    deliverables: ['Member & admin portals', 'Payment integration (M-Pesa, Stripe)', 'Supabase / PostgreSQL backend', 'Authentication & role-based access', 'PDF generation & digital certificates', 'Real-time dashboards'],
  },
  {
    num: '04',
    title: 'Landing Pages',
    short: 'Built to convert, engineered to impress.',
    desc: 'Single-page experiences built around one goal — sign ups, sales, or leads. Every element earns its place. 48-hour turnaround available.',
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
    title: 'Maintenance & Support',
    short: 'Ongoing partnership, zero stress.',
    desc: 'Your website is a living business asset. Monthly retainer packages cover updates, performance monitoring, and direct access to me when you need it.',
    deliverables: ['Monthly content updates', 'Performance & security monitoring', 'Priority support', 'Monthly report'],
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
];

export const TESTIMONIALS = [
  {
    quote: 'MYSA delivered our healthcare platform ahead of schedule. The attention to UX detail was exceptional — our patients and clinical staff both love it. Best investment we have made in our digital infrastructure.',
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
  { year: '2019', title: 'First Lines of Code',   body: 'Started learning web development out of frustration with how bad most websites looked. Built my first site for a local restaurant — for free, just for the experience.' },
  { year: '2020', title: 'First Paid Project',     body: 'Landed a $150 freelance job. Spent 3× the estimated time on it. Learned more in those weeks than in months of tutorials.' },
  { year: '2021', title: 'Going Deeper',           body: 'Committed fully to the craft. Studied design systems, performance engineering, and conversion optimisation. Built obsessively.' },
  { year: '2022', title: 'MYSA Founded',           body: 'Formalised the practice. Started taking on clients with intention — fewer projects, done properly. Quality over quantity.' },
  { year: '2023', title: 'Building Reputation',    body: 'First international clients. First SaaS project. First featured mention. The work started speaking for itself.' },
  { year: '2024', title: 'Now',                    body: 'Working with ambitious businesses across Kenya and globally. Still obsessed with the craft. Still building things that matter.' },
];