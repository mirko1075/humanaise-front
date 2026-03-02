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
    whatsappDisclaimer?: string;
    budgetDisclaimer: string;
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
      };
      submit: string;
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
}
