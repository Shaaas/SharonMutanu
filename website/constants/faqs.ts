import { FAQSection } from '@/types';

export const FAQS: FAQSection[] = [
  {
    cat: 'PROCESS',
    items: [
      { q: 'How long does a project typically take?',       a: 'Starter sites take 1–2 weeks. Business packages 2–4 weeks. Custom projects 4–8 weeks. Landing pages can turn around in 48 hours.' },
      { q: 'What does the process look like from my side?', a: 'Discovery call → written brief → design mockups (your review) → build → staging link → launch. You review before anything goes live.' },
      { q: 'How many revisions do I get?',                  a: 'Starter gets 2 rounds, Business gets 3, Custom gets unlimited. A revision round means a consolidated batch of feedback, not endless back-and-forth.' },
      { q: 'Do I need to prepare anything before we start?',a: 'Ideally: brand assets (logo, colours), any copy and photos you have, and examples of sites you like. Need help with those? I can refer trusted partners.' },
    ],
  },
  {
    cat: 'TECHNICAL',
    items: [
      { q: 'Will I be able to update the site myself?',    a: 'Yes - Business and Custom projects include a CMS (Sanity or similar) so you can update content without touching code. I also provide a walkthrough video.' },
      { q: 'Who hosts the website?',                       a: 'I recommend Vercel - fast, reliable, free tier for most sites. The domain and hosting accounts are always in your name. You own everything.' },
      { q: 'Will my site be fast and SEO-friendly?',       a: 'Yes. All sites are built on Next.js with performance as a default - image optimisation, lazy loading, semantic HTML, proper meta tags. Most sites score 90+ on Lighthouse.' },
      { q: 'Can you work with my existing branding?',      a: 'Absolutely. If you have brand guidelines I follow them precisely. If your branding needs work I can help - just scope it upfront.' },
    ],
  },
  {
    cat: 'BUSINESS',
    items: [
      { q: 'How does payment work?',                        a: '50% upfront to begin, 50% on final delivery. I accept M-Pesa, bank transfer, and PayPal. The quote you receive is the price you pay - no hidden fees.' },
      { q: 'Do you work with international clients?',       a: 'Yes. Most of my workflow is remote-first - calls over Google Meet, files via Notion or Google Drive. I have worked with clients in Kenya, UK, Canada, and the US.' },
      { q: 'What happens after the site launches?',         a: '30 days of free post-launch support for bugs or small tweaks. After that, a maintenance retainer is optional but recommended.' },
      { q: "What if I need something not in a package?",    a: "Most projects are scoped custom anyway - the packages are starting points. Tell me what you need and I'll price it fairly." },
    ],
  },
];