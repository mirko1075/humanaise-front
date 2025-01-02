import { Building2, Hotel, Building, Stethoscope, ShoppingBag } from 'lucide-react';

export const INDUSTRIES = [
  {
    icon: Building2,
    title: 'Construction',
    description: 'AI-powered tools for project management, bidding optimization, and resource planning.',
    benefits: [
      'Automated project scheduling',
      'Resource allocation optimization',
      'Risk assessment automation'
    ]
  },
  {
    icon: Hotel,
    title: 'Tourism & Hospitality',
    description: 'Dynamic pricing, guest personalization, and automated booking management.',
    benefits: [
      'Smart booking systems',
      'Personalized guest experiences',
      'Demand forecasting'
    ]
  },
  {
    icon: Building,
    title: 'Small and Medium Enterprises',
    description: 'Workflow automation, CRM enhancement, and cost-saving AI applications.',
    benefits: [
      'Process automation',
      'Customer service optimization',
      'Resource management'
    ]
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Streamlining patient management, scheduling, and operational efficiency.',
    benefits: [
      'Patient scheduling optimization',
      'Resource allocation',
      'Administrative automation'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Personalization engines, inventory management, and sales forecasting.',
    benefits: [
      'Inventory optimization',
      'Customer behavior analysis',
      'Dynamic pricing'
    ]
  }
] as const;