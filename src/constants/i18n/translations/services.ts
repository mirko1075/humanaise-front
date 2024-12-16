import { Language } from '../../../types/language';
import { LucideIcon } from 'lucide-react';

type ServiceTranslations = {
  title: string;
  subtitle: string;
  items: Array<{
    title: string;
    description: string;
    examples: string[];
  }>;
};

export const serviceTranslations: Record<Language, ServiceTranslations> = {
  en: {
    title: 'Our Services',
    subtitle: 'Comprehensive AI solutions to power your business transformation',
    items: [
      {
        title: 'AI-Powered Automation Solutions',
        description: 'Streamlining workflows with AI-driven tools tailored to specific business needs.',
        examples: ['Task automation', 'Process optimization', 'Workflow orchestration']
      },
      {
        title: 'Custom AI Integrations',
        description: 'Seamlessly integrating AI into existing systems to enhance efficiency and scalability.',
        examples: ['CRM enhancements', 'Supply chain optimization', 'Dynamic pricing tools']
      },
      {
        title: 'Human-Centric AI Applications',
        description: 'Developing AI solutions designed with the user in mind, ensuring simplicity and effectiveness.',
        examples: ['Chatbots', 'Virtual assistants', 'Personalization systems']
      }
    ]
  },
  es: {
    title: 'Nuestros Servicios',
    subtitle: 'Soluciones integrales de IA para impulsar la transformación de tu negocio',
    items: [
      {
        title: 'Soluciones de Automatización con IA',
        description: 'Optimización de flujos de trabajo con herramientas de IA adaptadas a necesidades específicas.',
        examples: ['Automatización de tareas', 'Optimización de procesos', 'Orquestación de flujos']
      },
      {
        title: 'Integraciones Personalizadas de IA',
        description: 'Integración perfecta de IA en sistemas existentes para mejorar eficiencia y escalabilidad.',
        examples: ['Mejoras de CRM', 'Optimización de cadena de suministro', 'Herramientas de precios dinámicos']
      },
      {
        title: 'Aplicaciones de IA Centradas en el Usuario',
        description: 'Desarrollo de soluciones de IA diseñadas pensando en el usuario, garantizando simplicidad y efectividad.',
        examples: ['Chatbots', 'Asistentes virtuales', 'Sistemas de personalización']
      }
    ]
  },
  fr: {
    title: 'Nos Services',
    subtitle: 'Solutions IA complètes pour dynamiser la transformation de votre entreprise',
    items: [
      {
        title: 'Solutions d\'Automatisation IA',
        description: 'Optimisation des flux de travail avec des outils IA adaptés aux besoins spécifiques.',
        examples: ['Automatisation des tâches', 'Optimisation des processus', 'Orchestration des flux']
      },
      {
        title: 'Intégrations IA Personnalisées',
        description: 'Intégration transparente de l\'IA dans les systèmes existants pour améliorer efficacité et évolutivité.',
        examples: ['Améliorations CRM', 'Optimisation supply chain', 'Outils de tarification dynamique']
      },
      {
        title: 'Applications IA Centrées sur l\'Humain',
        description: 'Développement de solutions IA conçues pour l\'utilisateur, garantissant simplicité et efficacité.',
        examples: ['Chatbots', 'Assistants virtuels', 'Systèmes de personnalisation']
      }
    ]
  },
  it: {
    title: 'I Nostri Servizi',
    subtitle: 'Soluzioni AI complete per potenziare la trasformazione del tuo business',
    items: [
      {
        title: 'Soluzioni di Automazione AI',
        description: 'Ottimizzazione dei flussi di lavoro con strumenti AI personalizzati per esigenze specifiche.',
        examples: ['Automazione attività', 'Ottimizzazione processi', 'Orchestrazione workflow']
      },
      {
        title: 'Integrazioni AI Personalizzate',
        description: 'Integrazione perfetta dell\'AI nei sistemi esistenti per migliorare efficienza e scalabilità.',
        examples: ['Miglioramenti CRM', 'Ottimizzazione supply chain', 'Strumenti di pricing dinamico']
      },
      {
        title: 'Applicazioni AI Incentrate sull\'Utente',
        description: 'Sviluppo di soluzioni AI progettate pensando all\'utente, garantendo semplicità ed efficacia.',
        examples: ['Chatbot', 'Assistenti virtuali', 'Sistemi di personalizzazione']
      }
    ]
  }
};