import { Language } from '../../../types/language';

type CompanyTranslations = {
  name: string;
  slogan: string;
  mission: string;
  vision: string;
  founder: {
    story: string;
  };
  values: Array<{
    title: string;
    description: string;
  }>;
};

export const companyTranslations: Record<Language, CompanyTranslations> = {
  en: {
    name: 'HumanAIse',
    slogan: 'Where Human Intelligence Meets AI Innovation',
    mission: 'To bridge the gap between humans and artificial intelligence, making AI accessible, intuitive, and easy to integrate into everyday business operations.',
    vision: 'To create a world where AI-driven solutions enhance human potential by taking over repetitive tasks, fostering innovation, and ensuring seamless collaboration between technology and people.',
    founder: {
      story: 'Our founder, inspired by the growing reliance on AI tools in personal and professional life, saw an opportunity to create an agency that focused on human-centric solutions.'
    },
    values: [
      {
        title: 'Accessibility',
        description: 'AI should be easy to use and available to businesses of all sizes.'
      },
      {
        title: 'Ease',
        description: 'Our solutions simplify complexity, making automation intuitive and stress-free.'
      },
      {
        title: 'Empowerment',
        description: 'Freeing humans from repetitive tasks to focus on creativity and high-value activities.'
      },
      {
        title: 'Innovation',
        description: 'Staying at the forefront of AI advancements to deliver cutting-edge solutions.'
      },
      {
        title: 'Trust',
        description: 'Building strong partnerships through transparency, reliability, and ethical AI practices.'
      }
    ]
  },
  es: {
    name: 'HumanAIse',
    slogan: 'Donde la Inteligencia Humana se Encuentra con la Innovación IA',
    mission: 'Cerrar la brecha entre los humanos y la inteligencia artificial, haciendo la IA accesible, intuitiva y fácil de integrar en las operaciones comerciales diarias.',
    vision: 'Crear un mundo donde las soluciones impulsadas por IA mejoren el potencial humano asumiendo tareas repetitivas, fomentando la innovación y asegurando una colaboración fluida.',
    founder: {
      story: 'Nuestro fundador, inspirado en la creciente dependencia de las herramientas de IA en la vida personal y profesional, vio la oportunidad de crear una agencia centrada en soluciones humanas.'
    },
    values: [
      {
        title: 'Accesibilidad',
        description: 'La IA debe ser fácil de usar y estar disponible para empresas de todos los tamaños.'
      },
      {
        title: 'Facilidad',
        description: 'Nuestras soluciones simplifican la complejidad, haciendo la automatización intuitiva y sin estrés.'
      },
      {
        title: 'Empoderamiento',
        description: 'Liberar a los humanos de tareas repetitivas para enfocarse en la creatividad y actividades de alto valor.'
      },
      {
        title: 'Innovación',
        description: 'Manteniéndonos a la vanguardia de los avances en IA para ofrecer soluciones de última generación.'
      },
      {
        title: 'Confianza',
        description: 'Construyendo asociaciones sólidas a través de la transparencia, confiabilidad y prácticas éticas de IA.'
      }
    ]
  },
  fr: {
    name: 'HumanAIse',
    slogan: 'Où l\'Intelligence Humaine Rencontre l\'Innovation IA',
    mission: 'Combler le fossé entre les humains et l\'intelligence artificielle, rendant l\'IA accessible, intuitive et facile à intégrer dans les opérations quotidiennes.',
    vision: 'Créer un monde où les solutions basées sur l\'IA améliorent le potentiel humain en prenant en charge les tâches répétitives, en favorisant l\'innovation et en assurant une collaboration fluide.',
    founder: {
      story: 'Notre fondateur, inspiré par la dépendance croissante aux outils d\'IA dans la vie personnelle et professionnelle, a vu l\'opportunité de créer une agence axée sur des solutions centrées sur l\'humain.'
    },
    values: [
      {
        title: 'Accessibilité',
        description: 'L\'IA doit être facile à utiliser et accessible aux entreprises de toutes tailles.'
      },
      {
        title: 'Simplicité',
        description: 'Nos solutions simplifient la complexité, rendant l\'automatisation intuitive et sans stress.'
      },
      {
        title: 'Autonomisation',
        description: 'Libérer les humains des tâches répétitives pour se concentrer sur la créativité et les activités à haute valeur ajoutée.'
      },
      {
        title: 'Innovation',
        description: 'Rester à la pointe des avancées en IA pour fournir des solutions de pointe.'
      },
      {
        title: 'Confiance',
        description: 'Construire des partenariats solides grâce à la transparence, la fiabilité et des pratiques éthiques en IA.'
      }
    ]
  },
  it: {
    name: 'HumanAIse',
    slogan: 'Dove l\'Intelligenza Umana Incontra l\'Innovazione AI',
    mission: 'Colmare il divario tra umani e intelligenza artificiale, rendendo l\'AI accessibile, intuitiva e facile da integrare nelle operazioni aziendali quotidiane.',
    vision: 'Creare un mondo in cui le soluzioni basate sull\'AI migliorano il potenziale umano assumendo compiti ripetitivi, promuovendo l\'innovazione e garantendo una collaborazione fluida.',
    founder: {
      story: 'Il nostro fondatore, ispirato dalla crescente dipendenza dagli strumenti AI nella vita personale e professionale, ha visto l\'opportunità di creare un\'agenzia focalizzata su soluzioni incentrate sull\'uomo.'
    },
    values: [
      {
        title: 'Accessibilità',
        description: 'L\'AI deve essere facile da usare e disponibile per aziende di tutte le dimensioni.'
      },
      {
        title: 'Semplicità',
        description: 'Le nostre soluzioni semplificano la complessità, rendendo l\'automazione intuitiva e senza stress.'
      },
      {
        title: 'Potenziamento',
        description: 'Liberare gli umani da compiti ripetitivi per concentrarsi sulla creatività e attività ad alto valore.'
      },
      {
        title: 'Innovazione',
        description: 'Rimanere all\'avanguardia nei progressi dell\'AI per fornire soluzioni all\'avanguardia.'
      },
      {
        title: 'Fiducia',
        description: 'Costruire partnership solide attraverso trasparenza, affidabilità e pratiche etiche dell\'AI.'
      }
    ]
  }
};