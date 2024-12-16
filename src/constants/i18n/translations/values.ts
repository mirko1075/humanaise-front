import { Language } from '../../../types/language';

type ValueTranslations = {
  title: string;
  subtitle: string;
  items: Array<{
    title: string;
    description: string;
  }>;
};

export const valueTranslations: Record<Language, ValueTranslations> = {
  en: {
    title: 'Our Core Values',
    subtitle: 'The principles that guide our innovation',
    items: [
      {
        title: 'Human-Centered',
        description: 'We prioritize user-friendly solutions that enhance human capabilities.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Our tools grow with your business, adapting to new challenges.'
      },
      {
        title: 'Ethical AI',
        description: 'Transparency and trust guide all our AI developments.'
      }
    ]
  },
  es: {
    title: 'Nuestros Valores',
    subtitle: 'Los principios que guían nuestra innovación',
    items: [
      {
        title: 'Centrado en Humanos',
        description: 'Priorizamos soluciones fáciles de usar que mejoran las capacidades humanas.'
      },
      {
        title: 'Soluciones Escalables',
        description: 'Nuestras herramientas crecen con tu negocio, adaptándose a nuevos desafíos.'
      },
      {
        title: 'IA Ética',
        description: 'La transparencia y la confianza guían todos nuestros desarrollos de IA.'
      }
    ]
  },
  fr: {
    title: 'Nos Valeurs Fondamentales',
    subtitle: 'Les principes qui guident notre innovation',
    items: [
      {
        title: 'Centré sur l\'Humain',
        description: 'Nous privilégions des solutions conviviales qui améliorent les capacités humaines.'
      },
      {
        title: 'Solutions Évolutives',
        description: 'Nos outils évoluent avec votre entreprise, s\'adaptant aux nouveaux défis.'
      },
      {
        title: 'IA Éthique',
        description: 'La transparence et la confiance guident tous nos développements en IA.'
      }
    ]
  },
  it: {
    title: 'I Nostri Valori',
    subtitle: 'I principi che guidano la nostra innovazione',
    items: [
      {
        title: 'Incentrato sull\'Umano',
        description: 'Diamo priorità a soluzioni intuitive che migliorano le capacità umane.'
      },
      {
        title: 'Soluzioni Scalabili',
        description: 'I nostri strumenti crescono con il tuo business, adattandosi alle nuove sfide.'
      },
      {
        title: 'AI Etica',
        description: 'La trasparenza e la fiducia guidano tutti i nostri sviluppi di AI.'
      }
    ]
  }
};