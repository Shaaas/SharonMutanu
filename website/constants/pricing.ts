import { PricingPlan } from '@/types';

export const PRICING: PricingPlan[] = [
  {
    title: 'Starter',
    price: 'KSh 15,000',
    period: '',
    desc: 'For solo founders and small businesses that need a clean, credible web presence fast.',
    features: ['Up to 3 pages', 'Mobile responsive', 'Contact section', 'Basic SEO setup', '1 revision round', 'Delivered in 1-2 weeks'],
    highlight: false,
  },
  {
    title: 'Business',
    price: 'KSh 60,000',
    period: '',
    desc: 'For growing businesses that need a polished, full web presence built to convert.',
    features: ['Up to 6 pages', 'Custom design', 'Animations', 'SEO foundation', 'CMS integration', '2 revision rounds', 'Delivered in 2-4 weeks'],
    highlight: true,
  },
  {
    title: 'Digital Platform',
    price: 'KSh 150,000',
    period: ' - 400,000+',
    desc: 'SACCO systems, delivery apps, member portals, payment platforms, and full-stack digital infrastructure.',
    features: ['Custom scoped build', 'Backend and database', 'M-Pesa and payment integration', 'Admin dashboard', 'Authentication and roles', 'Source code licensed to MYSA Builds', 'Monthly subscription required'],
    highlight: false,
  },
  {
    title: 'Retainer',
    price: 'KSh 15,000',
    period: ' - 50,000/mo',
    desc: 'Ongoing support tailored to what your system actually needs. Three tiers based on complexity.',
    features: ['Basic 15k: updates and bug fixes', 'Standard 25k: priority support and small features', 'Platform 40-50k: full system support and SLA', 'Guaranteed response times', 'Monthly report', 'Scope agreed upfront'],
    highlight: false,
  },
];
