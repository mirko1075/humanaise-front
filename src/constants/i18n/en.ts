import { Translation } from "./types";

export const en: Translation = {
  common: {
    nav: {
      home: "Home",
      about: "About Us",
      news: "News",
      services: "Services",
      roiCalculator: "ROI Calculator",
      successStories: "Success Stories",
      contact: "Contact",
    },
    cta: {
      getStarted: "Get Started",
      learnMore: "Learn More",
      sendMessage: "Send Message",
    },
    sections: {
      about: "About",
      services: "Services",
      industries: "Industries",
      roi: "ROI Calculator",
      reasons: "Why Choose Us",
      contact: "Contact",
      success: "Success Stories",
    },
  },
  home: {
    hero: {
      title: "Where Human Intelligence Meets AI Innovation",
      subtitle:
        "Bridging the gap between humans and artificial intelligence, making AI accessible, intuitive, and easy to integrate into everyday business operations.",
    },
  },
  news: {
    eyebrow: "Recent Updates",
    title: "Latest News",
    subtitle:
      "Product launches, client systems, and operational AI milestones from the HumanAIse team.",
    feedAriaLabel: "Latest news feed",
    clientLabel: "Client",
    freshBadge: "New",
    seoTitle: "HumanAIse Latest News",
    seoDescription:
      "Latest HumanAIse milestones in operational AI, automation systems, and production deployments.",
  },
  about: {
    nav: {
      mission: "Our Mission",
      journey: "Our Journey",
      vision: "Our Vision",
      values: "Core Values",
    },
    mission: {
      title: "Our Mission",
      description:
        "At HumanAIse, our mission is to bridge the gap between humans and artificial intelligence, making AI accessible, intuitive, and easy to integrate into everyday business operations.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To create a world where AI-driven solutions enhance human potential by taking over repetitive tasks, fostering innovation, and ensuring seamless collaboration between technology and people.",
    },
    journey: {
      title: "Our Journey",
      description:
        "HumanAIse began with a simple yet powerful vision: to make AI a tool that anyone can use effortlessly.",
    },
    company: {
      name: "HumanAIse",
      slogan: "Where Human Intelligence Meets AI Innovation",
      mission:
        "To bridge the gap between humans and artificial intelligence, making AI accessible, intuitive, and easy to integrate into everyday business operations.",
      vision:
        "To create a world where AI-driven solutions enhance human potential by taking over repetitive tasks, fostering innovation, and ensuring seamless collaboration between technology and people.",
      founder: {
        story:
          "Our founder, inspired by the growing reliance on AI tools in personal and professional life, saw an opportunity to create an agency that focused on human-centric solutions.",
        story_2:
          "Starting as a small idea sketched during late-night brainstorming sessions, HumanAIse quickly grew into a full-fledged agency. We listened to the challenges faced by businesses across industries and designed solutions that bridge the gap between complexity and simplicity.",
        story_3:
          "Our journey is built on collaboration, innovation, and a commitment to making AI work for everyone.",
      },
      values: [
        {
          title: "Accessibility",
          description:
            "AI should be easy to use and available to businesses of all sizes.",
        },
        {
          title: "Ease",
          description:
            "Our solutions simplify complexity, making automation intuitive and stress-free.",
        },
        {
          title: "Empowerment",
          description:
            "Freeing humans from repetitive tasks to focus on creativity and high-value activities.",
        },
        {
          title: "Innovation",
          description:
            "Staying at the forefront of AI advancements to deliver cutting-edge solutions.",
        },
        {
          title: "Trust",
          description:
            "Building strong partnerships through transparency, reliability, and ethical AI practices.",
        },
      ],
    },
    values: {
      title: "Our Core Values",
      subtitle: "The principles that guide our innovation",
    },
    phylosophy: {
      quote:
        "We believe that technology should serve humanity, not the other way around. HumanAIse is built on the principle of making AI not just a tool but a trusted partner that simplifies lives and drives innovation.",
      subtext:
        "By focusing on the human experience, we ensure that our solutions are intuitive, ethical, and impactful.",
    },
  },
  services: {
    title: "Our Services",
    subtitle:
      "Comprehensive AI solutions to power your business transformation",
    items: [
      {
        title: "AI-Powered Automation Solutions",
        description:
          "Streamlining workflows with AI-driven tools tailored to specific business needs.",
        examples: [
          "Task automation",
          "Process optimization",
          "Workflow orchestration",
        ],
      },
      {
        title: "Custom AI Integrations",
        description:
          "Seamlessly integrating AI into existing systems to enhance efficiency and scalability.",
        examples: [
          "CRM enhancements",
          "Supply chain optimization",
          "Dynamic pricing tools",
        ],
      },
      {
        title: "Human-Centric AI Applications",
        description:
          "Developing AI solutions designed with the user in mind, ensuring simplicity and effectiveness.",
        examples: ["Chatbots", "Virtual assistants", "Personalization systems"],
      },
      {
        title: "Consulting and Strategy",
        description:
          "Guiding businesses through the journey of AI adoption, from ideation to implementation.",
        examples: ["Workshops", "Feasibility studies", "ROI assessments"],
      },
      {
        title: "Training and Support",
        description:
          "Helping teams adapt to AI technologies through comprehensive training programs.",
        examples: [
          "Team training",
          "Implementation support",
          "Ongoing maintenance",
        ],
      },
    ],
  },
  roi: {
    title: "AI ROI Calculator",
    subtitle: "Calculate the return on investment of AI automation vs. personnel costs.",
    panels: {
      staff: "Current Staff",
      investment: "AI Investment",
    },
    inputs: {
      employees: "Employees involved",
      annualCostPerPerson: "Annual cost / person (salary + overhead)",
      autoTaskPercent: "% time on automatable tasks",
      aiEfficiency: "AI efficiency on those tasks",
      setupCost: "Setup / implementation (one-time)",
      licensesPerYear: "Licenses / API / year",
      maintenancePerYear: "Maintenance & updates / year",
      analysisHorizon: "Analysis horizon",
    },
    help: {
      employees: "Number of people whose work could be partially automated by AI.",
      annualCostPerPerson: "Total annual cost per employee, including salary, taxes, and benefits.",
      autoTaskPercent: "Percentage of working time spent on repetitive, rule-based tasks that AI could handle.",
      aiEfficiency: "How much of those automatable tasks AI can realistically take over (not all tasks are 100% automatable).",
      setupCost: "One-time cost for designing, developing, and deploying the AI solution.",
      licensesPerYear: "Annual cost for AI platform subscriptions, API calls, and third-party services.",
      maintenancePerYear: "Annual cost for updates, monitoring, bug fixes, and ongoing improvements.",
      analysisHorizon: "Number of years to project the ROI calculation forward.",
    },
    metrics: {
      totalSavings: "Total Savings",
      totalAiCost: "Total AI Cost",
      netRoi: "Net ROI",
      paybackPeriod: "Payback Period",
    },
    breakdown: {
      title: "Annual savings breakdown",
      personnelCost: "Involved personnel cost",
      autoHours: "Hours on automatable tasks",
      effectiveSavingsYear: "Effective savings / year",
      aiCostYear: "AI cost / year (recurring)",
    },
    verdict: {
      excellent: "Excellent investment.",
      solid: "Solid investment.",
      marginal: "Marginal investment.",
      negative: "Investment at a loss.",
      configure: "Configure parameters to see the evaluation.",
    },
    chart: {
      title: "Cumulative projection",
      savings: "Savings",
      aiCost: "AI Cost",
      net: "Net",
    },
    scenarios: {
      title: "Preset Scenarios",
      items: [
        { title: "Freelance / self-employed", description: "Email, quotes, social, repetitive admin" },
        { title: "Construction firm", description: "Quotes, supplier management, technical docs" },
        { title: "Private clinic", description: "Bookings, reports, initial triage" },
        { title: "Accounting firm", description: "Document processing, client replies, tax forms" },
      ],
    },
    units: {
      now: "Now",
      year: "Year",
      months: "months",
      lessThanMonth: "< 1 month",
      na: "N/A",
    },
    footer: "Values are indicative estimates. For a personalized analysis, contact us.",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Ready to transform your business? Get in touch with us today.",
    whatsappDisclaimer: "We use WhatsApp exclusively for customer support and business inquiries.",
    budgetDisclaimer: "We work on automation and AI projects starting from €1.000.",
    form: {
      name: "Full Name",
      email: "Work Email",
      company: "Company",
      industry: "Industry",
      message: "What problem are you trying to solve?",
      budget: "Estimated Budget",
      timeline: "Project Timeline",
      placeholders: {
        name: "Your full name",
        email: "your.email@company.com",
        company: "Your company name",
        industry: "Select your industry",
        message: "Describe the current workflow and where you are losing time or money.",
        budget: "Select your budget range",
        timeline: "Select your timeline",
      },
      phone: "Phone",
      whatsapp: "WhatsApp",
      location: "Location",
      submit: "Send Request",
      industryOptions: {
        construction: "Construction",
        hospitality: "Hospitality",
        healthcare: "Healthcare",
        saas: "SaaS",
        other: "Other",
      },
      budgetOptions: {
        under1k: "< €1.000",
        from1kTo5k: "€1.000 – €5.000",
        from5kTo15k: "€5.000 – €15.000",
        over15k: "€15.000+",
      },
      timelineOptions: {
        immediately: "Immediately",
        oneToThreeMonths: "1–3 months",
        threeToSixMonths: "3–6 months",
        justExploring: "Just exploring",
      },
    },
  },
  industries: {
    title: "Industries We Serve",
    subtitle: "Tailored AI solutions for diverse business sectors",
    items: [
      {
        title: "Construction",
        description:
          "AI-powered tools for project management and resource planning",
      },
      {
        title: "Tourism & Hospitality",
        description: "Dynamic pricing and automated booking management",
      },
      {
        title: "SMEs",
        description: "Workflow automation and cost-saving AI applications",
      },
      {
        title: "Healthcare",
        description:
          "Streamlining patient management and operational efficiency",
      },
      {
        title: "Retail & E-commerce",
        description: "Personalization engines and inventory management",
      },
    ],
  },
  reasons: {
    title: "Why Choose HumanAIse?",
    items: [
      {
        title: "Human-Centric Approach",
        description:
          "We prioritize user-friendly solutions that enhance human capabilities.",
      },
      {
        title: "Privacy & GDPR Compliant",
        description:
          "Your data is safe. All our solutions are designed with privacy by design and fully comply with GDPR regulations.",
      },
      {
        title: "Scalable Solutions",
        description:
          "Our tools grow with your business, adapting to new challenges and opportunities.",
      },
      {
        title: "Cutting-Edge Expertise",
        description:
          "Our team combines deep technical knowledge with a passion for innovation.",
      },
      {
        title: "Proven Impact",
        description:
          "We deliver measurable results, ensuring ROI for every solution implemented.",
      },
      {
        title: "Ethical AI",
        description:
          "Transparency and trust guide all our AI developments.",
      },
    ],
  },
  success: {
    title: "Success Stories",
    subtitle: "See how we've helped businesses achieve their goals",
    items: [
      {
        quote:
          "HumanAIze helped us reduce customer response time by 75% with their intelligent chatbot solution.",
        role: "CTO",
      },
      {
        quote:
          "Their workflow automation system saved us over 1000 work hours per month.",
        role: "Operations Director",
      },
      {
        quote:
          "The AI-powered analytics platform helped us increase sales by 40% in just 3 months.",
        role: "Marketing Manager",
      },
    ],
  },
  footer: {
    quickLinks: "Quick Links",
    brandClarification: "HumanAIse, also referred to as Humanaise or HumanaiseAI on social media, is a unified brand representing a single AI automation business.",
    whatsappDisclaimer: "We use WhatsApp exclusively for customer support and business inquiries.",
    legal: {
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
  },
  legal: {
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated",
      sections: {
        introduction: {
          title: "1. Introduction",
          content: "HumanAIse (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website humanaise.com or use our services."
        },
        dataCollection: {
          title: "2. Information We Collect",
          content: "We may collect the following types of information:",
          items: [
            "Personal identification information (name, email address, phone number)",
            "Business information (company name, industry, job title)",
            "Communication data (messages sent through contact forms or WhatsApp)",
            "Technical data (IP address, browser type, device information)",
            "Usage data (pages visited, time spent on site, referring URL)"
          ]
        },
        dataUsage: {
          title: "3. How We Use Your Information",
          content: "We use the collected information for the following purposes:",
          items: [
            "To respond to your inquiries and provide customer support",
            "To deliver our AI automation services",
            "To send business communications via WhatsApp (with your consent)",
            "To improve our website and services",
            "To comply with legal obligations"
          ]
        },
        whatsapp: {
          title: "4. WhatsApp Communications",
          content: "We use WhatsApp exclusively for customer support and business inquiries. By contacting us via WhatsApp, you consent to receive responses through this channel. We do not use WhatsApp for bulk messaging or marketing purposes. You may opt out at any time by informing us through the same channel."
        },
        dataSharing: {
          title: "5. Data Sharing and Disclosure",
          content: "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with service providers who assist us in operating our website and services (under strict confidentiality agreements); when required by law or to protect our rights; or with your explicit consent."
        },
        cookies: {
          title: "6. Cookies and Tracking",
          content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality."
        },
        security: {
          title: "7. Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
        },
        rights: {
          title: "8. Your Rights",
          content: "Depending on your location, you may have the following rights:",
          items: [
            "Access, correct, or delete your personal data",
            "Object to or restrict processing of your data",
            "Request data portability",
            "Withdraw consent at any time"
          ]
        },
        contact: {
          title: "9. Contact Us",
          content: "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at: privacy@humanaise.com"
        }
      }
    },
    termsOfService: {
      title: "Terms of Service",
      lastUpdated: "Last updated",
    },
  },
};
