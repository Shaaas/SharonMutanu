import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'custom-vs-template',
    title: 'Why Your Business Needs a Custom Website (Not a Template)',
    excerpt: 'Template sites look fine - until they do not. Here is why a custom-built site is a business investment, not a luxury.',
    cat: 'BUSINESS',
    readTime: '5 min',
    date: 'Feb 28, 2025',
    content: `I have had this conversation more times than I can count. A business owner comes to me after spending money on a Wix or Squarespace site, frustrated that it looks generic, loads slowly, and does not convert visitors into customers. The template was not the problem. The assumption that a template could do the job was.

## The Template Ceiling

Every template is designed to work for everyone, which means it is optimised for no one. Your competitor can buy the same theme. Your brand gets diluted the moment a visitor recognises the layout from another site they visited last week.

More practically: templates are built around the features they include, not the problems you need to solve. When your business grows, you hit the ceiling fast.

I see this constantly with Nairobi businesses. A restaurant using a global template that has no way to feature their specific menu or take local reservations. A SACCO using a generic financial template that cannot handle their actual member workflows. The tool was never built for the problem.

## What Custom Actually Means

A custom site is built from a clear brief: your customers, your goals, your brand. Every layout decision is a deliberate choice made in the context of your business.

This means faster performance - no unused code or plugin bloat. Better SEO - clean semantic HTML from day one. Real differentiation - a site visitors remember. And scalability - built to grow with you.

When I built the UBTA platform, there was no template on earth that could handle M-Pesa member registration, PDF certificate generation, and an admin verification portal. It had to be built from scratch. That is what custom means.

## The Real Cost Comparison

A Squarespace Business plan runs around $276 per year, plus your time fighting it. A custom site might cost KSh 45,000 upfront. But over three years, the template often costs more - in time spent fighting limitations, in conversions lost to generic design, in developer costs when you eventually need to migrate.

The businesses winning online are not the ones who spent least to get there.`,
  },
  {
    slug: 'mpesa-web-integration',
    title: 'Integrating M-Pesa Into Your Website: What You Actually Need to Know',
    excerpt: 'M-Pesa integration sounds complicated. It does not have to be. Here is what I learned building payment flows for Kenyan businesses.',
    cat: 'TECHNICAL',
    readTime: '6 min',
    date: 'Mar 15, 2025',
    content: `When I started building the UBTA platform, the M-Pesa integration was the part that kept me up at night. Thousands of boda boda riders needed to pay their registration fee digitally, and most of them only had basic smartphones. It had to work perfectly.

Six months later, the system processes payments automatically, sends confirmation messages, and triggers certificate generation without anyone touching a keyboard. Here is what I learned.

## The Daraja API Is Your Friend

Safaricom's Daraja API is actually well-documented once you get past the initial setup. The two integrations you will use most are STK Push - which prompts the customer to enter their M-Pesa PIN directly on their phone - and C2B - which lets customers pay to a paybill or till number and your system receives a notification.

For most business use cases, STK Push is the better experience. The customer does not have to leave your site or remember a paybill number. They enter their phone number, get a prompt, enter their PIN, done.

## The Setup Is the Hard Part

Getting your Daraja credentials requires a business with a registered paybill or till number, a Safaricom developer account, and patience with the sandbox testing environment. Budget a week for this process if you are doing it for the first time.

The actual API calls are straightforward once credentials are in place.

## What to Do After Payment

This is where most implementations fall short. A payment confirmation is not the end of the flow - it is the beginning. Your system needs to verify the payment, update your database, trigger whatever comes next - a receipt, a certificate, an order confirmation - and handle the cases where payment fails or times out.

For UBTA, a successful payment triggers member record creation, certificate PDF generation, and a WhatsApp delivery - all automatically. That is the difference between a payment integration and a payment system.

## My Recommendation

If you are a Kenyan business taking payments online and you are not using M-Pesa as a primary option, you are losing customers. The infrastructure is there. The API is accessible. It just needs to be built properly.`,
  },
  {
    slug: 'landing-page-anatomy',
    title: 'The Anatomy of a High-Converting Landing Page',
    excerpt: 'Every element on a landing page is either earning its place or costing you conversions. Here is how to structure one that works.',
    cat: 'DESIGN',
    readTime: '7 min',
    date: 'Feb 14, 2025',
    content: `A landing page has one job: convert a specific visitor into a specific action. Not inform. Not impress. Convert.

I have built landing pages for fashion brands, SACCOs, healthcare platforms, and everything in between. The ones that work follow the same logic, regardless of industry.

## The Hero: 5 Seconds to Win or Lose

The average visitor decides whether to stay within 5 seconds. Your hero has to answer three questions immediately: What is this? Who is it for? Why should I care?

Be direct. "Book a same-day plumber in Nairobi" beats "Your plumbing solution" every time. I see Kenyan businesses especially fall into the trap of leading with their company name and a vague tagline. The visitor does not care about your name yet. They care about their problem.

## Social Proof: The Trust Engine

A single specific testimonial outperforms a generic five-star rating. Place social proof immediately below your hero - not at the bottom where most visitors never scroll.

For Kenyan audiences specifically, familiarity matters. If you can show logos of known local brands you have worked with, or testimonials from recognisable names in the community, that carries more weight than international case studies.

## The CTA: Specificity Wins

"Get Started" is a placeholder. "Get My Free Quote" is a call to action. The more specific the button copy, the lower the psychological friction.

One primary CTA per page. Repeat it two to three times as you scroll.

## What to Remove

Most landing pages fail from addition, not subtraction. Remove navigation menus that let visitors escape. Remove vague mission statements. Remove stock photography of people pointing at laptops.

Simplicity is not laziness. It is respect for your visitor's time.`,
  },
  {
    slug: 'nairobi-digital',
    title: 'Why Nairobi Businesses Are Still Leaving Money on the Table Online',
    excerpt: 'The digital gap between Nairobi businesses and their potential is real. Here is what I see every day, and what to do about it.',
    cat: 'BUSINESS',
    readTime: '4 min',
    date: 'Jan 15, 2025',
    content: `Kenya has one of the most sophisticated mobile internet markets on the continent. M-Pesa changed how money moves. Mobile-first has been the reality here for over a decade.

And yet: a significant portion of Nairobi businesses - including established, profitable ones - still have websites that would have looked dated in 2015. I know because I audit them regularly before pitching redesigns.

## What I See Most Often

A hotel in Westlands with a Flash-era website that does not load on mobile. A law firm in Upper Hill with no website at all, just a Facebook page. A clothing brand in the CBD with a beautiful Instagram but a Wix site that takes 12 seconds to load.

The Instagram is doing everything right. The website is destroying the trust that Instagram built.

## The Gap Is Not Awareness

Most business owners I speak to know they need a better website. The gap is conviction - a belief that the return will justify the cost, combined with a shortage of local providers who deliver genuinely world-class work at reasonable prices.

The result: businesses outsource to cheap template providers, get something mediocre, and conclude that websites do not really work for them.

The website did not fail. The website was never given a fair chance.

## The Window Is Closing

In a market moving this fast, the advantage of moving early is real. The businesses investing in quality digital infrastructure now are building advantages that will be expensive for competitors to match later.

This is not a prediction. It is already happening. I see it in the clients coming back to me after watching a competitor launch something that actually works.`,
  },
  {
    slug: 'web-performance',
    title: 'Web Performance: Why Speed Is a Business Metric',
    excerpt: 'Every second of load time costs you money. The data is clear - here is what it means for your business and what to do about it.',
    cat: 'TECHNICAL',
    readTime: '6 min',
    date: 'Jan 30, 2025',
    content: `I run PageSpeed Insights on every site I am asked to redesign. The scores I see from Nairobi businesses are consistently alarming - mobile scores in the 20s and 30s are common. Scores that mean the site is actively driving people away.

Google's data is clear: a 1-second delay in mobile load time can reduce conversions by up to 20%. Performance is not a developer concern. It is a business concern.

## Why Sites Get Slow

Unoptimised images cause more slow sites than anything else. A 4MB hero image that could be a 150KB WebP file. I have seen single images that weigh more than the entire rest of the page should.

Render-blocking scripts are the second culprit. Third-party analytics, chat widgets, and advertising scripts that pause the browser before showing any content.

Page builder bloat is the third. Elementor, Divi, and similar builders load enormous amounts of CSS and JavaScript regardless of what you actually use on the page.

## The Core Web Vitals Framework

Google measures three things: how fast the main content appears (LCP - target under 2.5 seconds), how responsive the page is to clicks (INP - target under 200ms), and whether the page jumps around as it loads (CLS - target under 0.1).

A site built on Next.js with proper image handling will score 90 or above on all three by default. That is not a coincidence - it is why I build on Next.js.

## The Simple First Step

Run your site through PageSpeed Insights right now. If your mobile score is below 70, you have a problem that is actively costing you traffic and conversions. That number is the starting point for every conversation I have about redesigns.`,
  },
];
