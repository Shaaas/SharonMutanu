import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'custom-vs-template',
    title: 'Why Your Business Needs a Custom Website (Not a Template)',
    excerpt: "Template sites look fine — until they don't. Here is why a custom-built site is a business investment, not a luxury.",
    cat: 'BUSINESS',
    readTime: '5 min',
    date: 'Feb 28, 2025',
    content: `Template websites have never been more accessible. So why would any business choose to spend more on a custom site? The answer is not aesthetic. It is strategic.\n\n## The Template Ceiling\n\nEvery template is designed to work for everyone, which means it is optimised for no one. Your competitor can buy the same theme. Your brand gets diluted the moment a visitor recognises the layout from another site they visited last week.\n\nMore practically: templates are built around the features they include, not the problems you need to solve. When your business grows, you will hit the ceiling.\n\n## What Custom Actually Means\n\nA custom site is built from a clear brief: your customers, your goals, your brand. Every layout decision is a deliberate choice made in the context of your business.\n\nThis means **faster performance**, no unused code or plugin bloat. **Better SEO**, clean semantic HTML from day one. **Real differentiation**, a site visitors remember. **Scalability**, built to grow with you.\n\n## The Real Cost Comparison\n\nA Squarespace Business plan runs ~$276/year, plus your time. A custom site might cost $750–$1200 upfront. But over 3 years, the template often costs more — in time spent fighting limitations, in conversions lost to generic design, in developer costs when you eventually need to migrate.\n\nThe businesses that win online are not the ones who spent least to get there.`,
  },
  {
    slug: 'landing-page-anatomy',
    title: 'The Anatomy of a High-Converting Landing Page',
    excerpt: 'Every element on a landing page is either earning its place or costing you conversions. Here is how to structure one that works.',
    cat: 'DESIGN',
    readTime: '7 min',
    date: 'Feb 14, 2025',
    content: `A landing page has one job: convert a specific visitor into a specific action. Not inform. Not impress. Convert.\n\n## The Hero: 5 Seconds to Win or Lose\n\nThe average visitor decides whether to stay within 5 seconds. Your hero has to answer three questions immediately: What is this? Who is it for? Why should I care?\n\nBe direct. "Book a same-day plumber in Nairobi" beats "Your plumbing solution" every time.\n\n## Social Proof: The Trust Engine\n\nA single specific testimonial outperforms a generic five-star rating. Place social proof immediately below your hero — not at the bottom where most visitors never scroll.\n\n## The CTA: Specificity Wins\n\n"Get Started" is a placeholder. **"Get My Free Quote"** is a call to action. The more specific the button copy, the lower the psychological friction.\n\nOne primary CTA per page. Repeat it 2–3 times as you scroll.\n\n## What to Remove\n\nMost landing pages fail from addition, not subtraction. Remove navigation menus, vague mission statements, stock photography of people pointing at laptops, and any paragraph that starts with "We are a leading provider of..."\n\nSimplicity is not laziness. It is respect for your visitor's time.`,
  },
  {
    slug: 'web-performance',
    title: 'Web Performance: Why Speed Is a Business Metric',
    excerpt: 'Every second of load time costs you money. The data is clear — here is what it means for your business and how to fix it.',
    cat: 'TECHNICAL',
    readTime: '6 min',
    date: 'Jan 30, 2025',
    content: `Google's data is unambiguous: a 1-second delay in mobile load time can reduce conversions by up to 20%. Performance is not a developer concern. It is a business concern.\n\n## Why Sites Get Slow\n\n**Unoptimised images** cause more slow sites than anything else. A 4MB hero image that could be a 200KB WebP.\n\n**Render-blocking scripts** — third-party analytics, chat widgets, and advertising scripts that pause the browser before showing content.\n\n**Page builder bloat** — Elementor, Divi, and similar builders load enormous amounts of CSS and JavaScript regardless of what you use.\n\n## The Core Web Vitals Framework\n\n- **LCP (Largest Contentful Paint)** — how fast does the main content appear? Target: under 2.5s\n- **INP (Interaction to Next Paint)** — how responsive to clicks? Target: under 200ms\n- **CLS (Cumulative Layout Shift)** — does the page jump around? Target: under 0.1\n\nA site built on Next.js with proper image handling will score 90+ on all three by default.\n\n## The Simple Audit\n\nRun your site through PageSpeed Insights right now. If your mobile score is below 70, you have a problem that is actively costing you traffic and conversions.`,
  },
  {
    slug: 'nairobi-digital',
    title: 'Why Nairobi Businesses Are Still Leaving Money on the Table Online',
    excerpt: 'The digital gap between Nairobi businesses and their potential is closing — but not fast enough. Here is the opportunity.',
    cat: 'BUSINESS',
    readTime: '4 min',
    date: 'Jan 15, 2025',
    content: `Kenya has one of the most sophisticated mobile internet markets on the continent. M-Pesa changed how money moves. Mobile-first has been the reality here for over a decade.\n\nAnd yet: a significant portion of Nairobi businesses — including established, profitable ones — still have websites that would have looked dated in 2015.\n\n## The Gap Is Not Awareness\n\nMost business owners know they need a better website. The gap is conviction — a belief that the return will justify the cost, combined with a shortage of local providers who can deliver genuinely world-class work.\n\nThe result: businesses outsource to cheap template providers, get something mediocre, and conclude that "websites don't really work for us."\n\n**The website did not fail. The website was never given a fair chance.**\n\n## The Window Is Closing\n\nIn a market moving this fast, the advantage of being early is real. The businesses investing in quality digital infrastructure now are building moats that will be expensive for competitors to cross.\n\nThis is not a prediction. It is already happening.`,
  },
];