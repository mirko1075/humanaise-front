import { Users, Scale, Brain, BarChart3, Shield } from 'lucide-react';
import { Building2, Hotel, Building, Stethoscope, ShoppingBag } from 'lucide-react';
import { Accessibility, Lightbulb, Sparkles, Target } from 'lucide-react';

export const CORE_VALUES = [
  {
    icon: Accessibility,
    title: 'Accessibility',
    description: 'AI solutions available to businesses of all sizes',
  },
  {
    icon: Target,
    title: 'Ease',
    description: 'Simplifying complexity for intuitive automation',
  },
  {
    icon: Sparkles,
    title: 'Empowerment',
    description: 'Freeing humans to focus on creativity and growth',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Staying at the forefront of AI advancements',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building partnerships through transparency and reliability',
  },
] as const;

export const INDUSTRIES = [
  {
    icon: Building2,
    title: 'Construction',
    description: 'AI-powered tools for project management and resource planning',
  },
  {
    icon: Hotel,
    title: 'Tourism & Hospitality',
    description: 'Dynamic pricing and automated booking management',
  },
  {
    icon: Building,
    title: 'SMEs',
    description: 'Workflow automation and cost-saving AI applications',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Streamlining patient management and operational efficiency',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Personalization engines and inventory management',
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: Users,
    title: 'Human-Centered Approach',
    description: 'We prioritize user-friendly solutions that enhance human capabilities.'
  },
  {
    icon: Scale,
    title: 'Scalable Solutions',
    description: 'Our tools grow with your business, adapting to new challenges and opportunities.'
  },
  {
    icon: Brain,
    title: 'Cutting-Edge Expertise',
    description: 'Our team combines deep technical knowledge with a passion for innovation.'
  },
  {
    icon: BarChart3,
    title: 'Proven Impact',
    description: 'We deliver measurable results, ensuring ROI for every solution implemented.'
  },
  {
    icon: Shield,
    title: 'Ethical AI',
    description: 'Transparency and trust guide all our AI developments.'
  },
] as const;