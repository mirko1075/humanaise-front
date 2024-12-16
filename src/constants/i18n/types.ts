export type Language = "en" | "it" | "es" | "fr";

export interface Translation {
  common: {
    nav: {
      home: string;
      about: string;
      services: string;
      roiCalculator: string;
      successStories: string;
      contact: string;
    };
    cta: {
      getStarted: string;
      learnMore: string;
      sendMessage: string;
    };
    sections: {
      about: string;
      services: string;
      industries: string;
      roi: string;
      reasons: string;
      contact: string;
      success: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    nav: {
      mission: string;
      journey: string;
      vision: string;
      values: string;
    };
    company: {
      name: string;
      slogan: string;
      mission: string;
      vision: string;
      founder: {
        story: string;
        story_2: string;
        story_3: string;
      };
      values: Array<{
        title: string;

        description: string;
      }>;
    };
    values: {
      title: string;
      subtitle: string;
    };
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    journey: {
      title: string;
      description: string;
    };
    phylosophy: {
      quote: string;
      subtext: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      examples: string[];
    }>;
  };
  industries: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  roi: {
    title: string;
    subtitle: string;
    calculator: {
      inputTitle: string;
      currentCost: string;
      employeeCount: string;
      hoursPerWeek: string;
      hourlyRate: string;
      automationPercentage: string;
      calculate: string;
      reset: string;
      enterDetails: string;
      results: {
        title: string;
        annualSavings: string;
        timeFreed: string;
        roi: string;
        hours: string;
        description: string;
      };
    };
  };
  reasons: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      industry: string;
      message: string;
      phone: string;
      location: string;
      placeholders: {
        name: string;
        email: string;
        company: string;
        industry: string;
        message: string;
      };
      submit: string;
    };
  };
  success: {
    title: string;
    subtitle: string;
    items: Array<{
      quote: string;
      role: string;
    }>;
  };
  footer: {
    quickLinks: string;
  };
}
