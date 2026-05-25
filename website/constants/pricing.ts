import { PricingPlan } from '@/types';

export const PRICING: PricingPlan[] = [
  {
    title: 'Starter',
    price: 'KSh 12,000',
    period: '',
    desc: 'For solo founders getting their first clean professional site.',
    features: ['Up to 3 pages', 'Mobile responsive', 'Contact section', 'Basic SEO setup', '1 revision round'],
    highlight: false,
  },
  {
    title: 'Business',
    price: 'KSh 28,000',
    period: '',
    desc: 'For growing businesses that need a polished full web presence.',
    features: ['Up to 6 pages', 'Custom styling', 'Basic animations', 'SEO foundation', '2 revision rounds'],
    highlight: true,
  },
  {
    title: 'Custom',
    price: 'KSh 55,000',
    period: '+',
    desc: 'Full builds for e commerce, apps, or complex business websites.',
    features: ['Custom page count', 'Advanced features', 'Custom UI design', 'Performance optimization', '3 revision rounds'],
    highlight: false,
  },
  {
    title: 'Retainer',
    price: 'KSh 6,000',
    period: '/mo',
    desc: 'Ongoing support to keep your website updated and running smoothly.',
    features: ['Monthly maintenance', 'Content updates', 'Bug fixes', 'Priority support', 'Monthly check in'],
    highlight: false,
  },
];