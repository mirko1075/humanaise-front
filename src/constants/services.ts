import { Bot, Cog, Users, Lightbulb, GraduationCap } from 'lucide-react';

export const SERVICES = [
  {
    icon: Bot,
    title: 'AI-Powered Automation Solutions',
    description: 'Streamlining workflows with AI-driven tools tailored to specific business needs.',
    examples: ['Task automation', 'Process optimization', 'Workflow orchestration']
  },
  {
    icon: Cog,
    title: 'Custom AI Integrations',
    description: 'Seamlessly integrating AI into existing systems to enhance efficiency and scalability.',
    examples: ['CRM enhancements', 'Supply chain optimization', 'Dynamic pricing tools']
  },
  {
    icon: Users,
    title: 'Human-Centric AI Applications',
    description: 'Developing AI solutions designed with the user in mind, ensuring simplicity and effectiveness.',
    examples: ['Chatbots', 'Virtual assistants', 'Personalization systems']
  },
  {
    icon: Lightbulb,
    title: 'Consulting and Strategy',
    description: 'Guiding businesses through the journey of AI adoption, from ideation to implementation.',
    examples: ['Workshops', 'Feasibility studies', 'ROI assessments']
  },
  {
    icon: GraduationCap,
    title: 'Training and Support',
    description: 'Helping teams adapt to AI technologies through comprehensive training programs.',
    examples: ['Team training', 'Implementation support', 'Ongoing maintenance']
  }
] as const;