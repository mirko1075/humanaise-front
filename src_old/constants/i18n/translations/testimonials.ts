import { Language } from '../../../types/language';

type TestimonialTranslations = {
  title: string;
  subtitle: string;
  items: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
};

export const testimonialTranslations: Record<Language, TestimonialTranslations> = {
  en: {
    title: 'Success Stories',
    subtitle: 'See how we\'ve helped businesses achieve their goals',
    items: [
      {
        quote: 'HumanAIse helped us reduce customer response time by 75% with their intelligent chatbot solution.',
        author: 'Sarah Johnson',
        role: 'CTO',
        company: 'TechCorp Solutions'
      }
    ]
  },
  es: {
    title: 'Casos de Éxito',
    subtitle: 'Descubre cómo hemos ayudado a empresas a alcanzar sus objetivos',
    items: [
      {
        quote: 'HumanAIse nos ayudó a reducir el tiempo de respuesta al cliente en un 75% con su solución de chatbot inteligente.',
        author: 'Sarah Johnson',
        role: 'Directora de Tecnología',
        company: 'TechCorp Solutions'
      }
    ]
  },
  fr: {
    title: 'Témoignages de Réussite',
    subtitle: 'Découvrez comment nous avons aidé les entreprises à atteindre leurs objectifs',
    items: [
      {
        quote: 'HumanAIse nous a aidés à réduire le temps de réponse client de 75% avec leur solution de chatbot intelligent.',
        author: 'Sarah Johnson',
        role: 'Directrice Technique',
        company: 'TechCorp Solutions'
      }
    ]
  },
  it: {
    title: 'Storie di Successo',
    subtitle: 'Scopri come abbiamo aiutato le aziende a raggiungere i loro obiettivi',
    items: [
      {
        quote: 'HumanAIse ci ha aiutato a ridurre il tempo di risposta ai clienti del 75% con la loro soluzione di chatbot intelligente.',
        author: 'Sarah Johnson',
        role: 'CTO',
        company: 'TechCorp Solutions'
      }
    ]
  }
};