import { Language } from '../../../types/language';

type IndustryTranslations = {
  title: string;
  subtitle: string;
  items: Array<{
    title: string;
    description: string;
    benefits: string[];
  }>;
};

export const industryTranslations: Record<Language, IndustryTranslations> = {
  en: {
    title: 'Industries We Serve',
    subtitle: 'Tailored AI solutions for diverse business sectors',
    items: [
      {
        title: 'Construction',
        description: 'AI-powered tools for project management and resource planning',
        benefits: ['Automated scheduling', 'Resource optimization', 'Risk assessment']
      },
      {
        title: 'Tourism & Hospitality',
        description: 'Dynamic pricing and automated booking management',
        benefits: ['Smart booking', 'Guest experience', 'Demand forecasting']
      }
    ]
  },
  es: {
    title: 'Industrias que Servimos',
    subtitle: 'Soluciones de IA adaptadas para diversos sectores empresariales',
    items: [
      {
        title: 'Construcción',
        description: 'Herramientas impulsadas por IA para gestión de proyectos y planificación de recursos',
        benefits: ['Programación automatizada', 'Optimización de recursos', 'Evaluación de riesgos']
      },
      {
        title: 'Turismo y Hostelería',
        description: 'Precios dinámicos y gestión automatizada de reservas',
        benefits: ['Reservas inteligentes', 'Experiencia del huésped', 'Previsión de demanda']
      }
    ]
  },
  fr: {
    title: 'Industries que Nous Servons',
    subtitle: 'Solutions IA adaptées pour divers secteurs d\'activité',
    items: [
      {
        title: 'Construction',
        description: 'Outils IA pour la gestion de projet et la planification des ressources',
        benefits: ['Planification automatisée', 'Optimisation des ressources', 'Évaluation des risques']
      },
      {
        title: 'Tourisme et Hôtellerie',
        description: 'Tarification dynamique et gestion automatisée des réservations',
        benefits: ['Réservation intelligente', 'Expérience client', 'Prévision de la demande']
      }
    ]
  },
  it: {
    title: 'Settori che Serviamo',
    subtitle: 'Soluzioni AI su misura per diversi settori aziendali',
    items: [
      {
        title: 'Costruzioni',
        description: 'Strumenti basati su AI per gestione progetti e pianificazione risorse',
        benefits: ['Programmazione automatizzata', 'Ottimizzazione risorse', 'Valutazione rischi']
      },
      {
        title: 'Turismo e Ospitalità',
        description: 'Prezzi dinamici e gestione automatizzata delle prenotazioni',
        benefits: ['Prenotazioni intelligenti', 'Esperienza ospiti', 'Previsione domanda']
      }
    ]
  }
};