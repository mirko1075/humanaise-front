export type Language = "en" | "it" | "es" | "fr";

export interface Translation {
  common: {
    nav: {
      home: string;
      about: string;
      news: string;
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
      social: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
  };
  news: {
    eyebrow: string;
    title: string;
    subtitle: string;
    feedAriaLabel: string;
    clientLabel: string;
    freshBadge: string;
    seoTitle: string;
    seoDescription: string;
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
    panels: {
      staff: string;
      investment: string;
    };
    inputs: {
      employees: string;
      annualCostPerPerson: string;
      autoTaskPercent: string;
      aiEfficiency: string;
      setupCost: string;
      licensesPerYear: string;
      maintenancePerYear: string;
      analysisHorizon: string;
    };
    help: {
      employees: string;
      annualCostPerPerson: string;
      autoTaskPercent: string;
      aiEfficiency: string;
      setupCost: string;
      licensesPerYear: string;
      maintenancePerYear: string;
      analysisHorizon: string;
    };
    metrics: {
      totalSavings: string;
      totalAiCost: string;
      netRoi: string;
      paybackPeriod: string;
    };
    breakdown: {
      title: string;
      personnelCost: string;
      autoHours: string;
      effectiveSavingsYear: string;
      aiCostYear: string;
    };
    verdict: {
      excellent: string;
      solid: string;
      marginal: string;
      negative: string;
      configure: string;
    };
    chart: {
      title: string;
      savings: string;
      aiCost: string;
      net: string;
    };
    scenarios: {
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    units: {
      now: string;
      year: string;
      months: string;
      lessThanMonth: string;
      na: string;
    };
    footer: string;
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
    whatsappDisclaimer?: string;
    budgetDisclaimer?: string;
    form: {
      name: string;
      email: string;
      company: string;
      industry: string;
      message: string;
      budget: string;
      timeline: string;
      phone: string;
      whatsapp: string;
      location: string;
      placeholders: {
        name: string;
        email: string;
        company: string;
        industry: string;
        message: string;
        budget: string;
        timeline: string;
        phone: string;
      };
      submit: string;
      successTitle: string;
      successMessage: string;
      industryOptions: {
        construction: string;
        hospitality: string;
        healthcare: string;
        saas: string;
        other: string;
      };
      budgetOptions: {
        under1k: string;
        from1kTo5k: string;
        from5kTo15k: string;
        over15k: string;
      };
      timelineOptions: {
        immediately: string;
        oneToThreeMonths: string;
        threeToSixMonths: string;
        justExploring: string;
      };
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
    brandClarification?: string;
    whatsappDisclaimer?: string;
    legal?: {
      privacyPolicy: string;
      cookiePolicy: string;
      termsOfService: string;
    };
  };
  legal?: {
    privacyPolicy?: {
      title: string;
      lastUpdated: string;
      sections?: unknown;
    };
    termsOfService?: {
      title: string;
      lastUpdated: string;
      sections?: unknown;
    };
  };
  landing: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    problem: {
      title: string;
      subtitle: string;
      painPoints: string[];
      closing: string;
    };
    vision: {
      title: string;
      subtitle: string;
      message: string;
    };
    services: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    useCases: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    howItWorks: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    differentiation: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      buttonText: string;
      microcopy: string;
    };
    verticals: {
      emailAutomation: {
        seo: {
          title: string;
          description: string;
        };
        hero: {
          title: string;
          subtitle: string;
          cta: string;
          microcopy: string;
        };
        pain: {
          title: string;
          points: string[];
          closing: string;
        };
        solution: {
          title: string;
          steps: string[];
          closing: string;
        };
        results: {
          title: string;
          items: string[];
        };
        useCase: {
          title: string;
          steps: string[];
        };
        tailored: {
          title: string;
          description: string;
          subcopy: string;
        };
        trust: {
          title: string;
          items: string[];
        };
        cta: {
          title: string;
          buttonText: string;
          microcopy: string;
        };
      };
    };
  };
}
