export type Page =
  | 'home'
  | 'work'
  | 'work-case'
  | 'services'
  | 'about'
  | 'blog'
  | 'blog-post'
  | 'faq'
  | 'contact';

export type FormKey = 'name' | 'email' | 'company' | 'projectType' | 'budget' | 'details';

export interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  details: string;
}

export interface Project {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  tags: string[];
  desc: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  year: string;
  category: string;
  color: string;
  hasDoc?: boolean;
}

export interface Service {
  num: string;
  title: string;
  short: string;
  desc: string;
  deliverables: string[];
}

export interface PricingPlan {
  title: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  highlight: boolean;
}

export interface FAQSection {
  cat: string;
  items: { q: string; a: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cat: string;
  readTime: string;
  date: string;
  content: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export interface TechItem {
  name: string;
  cat: string;
}