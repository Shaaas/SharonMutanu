import { PricingPlan } from '@/types';

export const PRICING: PricingPlan[] = [
  {
    title: 'Starter',
    price: 'KSh 15,000',
    period: '',
    desc: 'For solo founders and small businesses getting a clean, professional web presence.',
    features: ['Up to 3 pages', 'Mobile responsive', 'Contact section', 'Basic SEO setup', '1 revision round', 'Delivered in 1-2 weeks'],
    highlight: false,
  },
  {
    title: 'Business',
    price: 'KSh 45,000',
    period: '',
    desc: 'For growing businesses that need a polished, full web presence that converts.',
    features: ['Up to 6 pages', 'Custom design', 'Animations', 'SEO foundation', 'CMS integration', '2 revision rounds', 'Delivered in 2-4 weeks'],
    highlight: true,
  },
  {
    title: 'Platform / App',
    price: 'KSh 80,000+',
    period: '',
    desc: 'Full-stack systems, web apps, SACCOs, delivery platforms, member portals, and custom software.',
    features: ['Custom scoped build', 'Backend and database', 'Payment integration', 'Admin dashboard', 'Authentication and roles', 'Source code licensed to MYSA Builds', 'Timeline scoped per project'],
    highlight: false,
  },
  {
    title: 'Retainer',
    price: 'KSh 10,000+',
    period: '/mo',
    desc: 'Ongoing support tailored to what your business actually needs. Light maintenance to full monthly development.',
    features: ['Content and feature updates', 'Bug fixes and monitoring', 'Priority support', 'Monthly report', 'Scope agreed upfront', 'Cancel anytime'],
    highlight: false,
  },
];
