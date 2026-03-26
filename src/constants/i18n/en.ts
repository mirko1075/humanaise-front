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
      social: "Social",
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
    form: {
      name: "Full Name",
      email: "Work Email",
      company: "Company",
      industry: "Industry",
      message: "Describe a process you want to automate",
      budget: "Estimated Budget",
      timeline: "Project Timeline",
      placeholders: {
        name: "Your full name",
        email: "your.email@company.com",
        company: "Your company name",
        industry: "Select your industry",
        message: "Describe the process: what you do manually today and where you lose time.",
        budget: "Select your budget range",
        timeline: "Select your timeline",
        phone: "Your phone or WhatsApp number",
      },
      phone: "Phone",
      whatsapp: "WhatsApp",
      location: "Location",
      submit: "Send Request",
      successTitle: "Request Sent!",
      successMessage: "We'll get back to you with a tailored proposal.",
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
      cookiePolicy: "Cookie Policy",
      termsOfService: "Terms of Service",
    },
  },
  landing: {
    hero: {
      title: "Automate your business processes, make them simpler and more human",
      subtitle: "Reduce manual work, eliminate errors and streamline operations using automation integrated with your tools.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "See how it works",
    },
    problem: {
      title: "Does this sound familiar?",
      subtitle: "Every day, your team wastes hours on tasks that could run on their own.",
      painPoints: [
        "Reading and sorting emails manually, one by one",
        "Copying data between tools, spreadsheets, and documents",
        "Creating the same reports and documents over and over",
        "Chasing approvals and follow-ups across channels",
        "Answering the same customer questions over and over, by chat or phone",
        "Scheduling appointments manually through endless back-and-forth messages",
        "Missing leads and inquiries because no one is available to respond instantly",
        "Losing time on repetitive admin instead of real work",
      ],
      closing: "This work is repetitive, slow, and prone to errors. There's a better way.",
    },
    vision: {
      title: "Our Philosophy",
      subtitle: "Technology should free your time, not consume it.",
      message: "Leave repetitive work to machines. Focus on what matters.",
    },
    services: {
      title: "What We Automate",
      subtitle: "Concrete capabilities that simplify your daily operations.",
      items: [
        {
          title: "Email Automation",
          description: "Automatically extract data from incoming emails, categorize requests, and trigger the right actions, without manual reading.",
        },
        {
          title: "Document Automation",
          description: "Generate Word, PDF, and structured documents from your data automatically. No more copy-pasting into templates.",
        },
        {
          title: "WhatsApp Automation",
          description: "Handle client messages, collect requests, and send updates through WhatsApp, automatically and at scale.",
        },
        {
          title: "Workflow Automation",
          description: "Connect your tools and orchestrate end-to-end processes that run without manual intervention.",
        },
      ],
    },
    aiCapabilities: {
      title: "AI-Powered Capabilities",
      subtitle: "Extend your automation with AI, from assistants to voice agents.",
      items: [
        {
          title: "AI Assistants (RAG-based)",
          description: "Build AI assistants that answer questions using your internal documents, knowledge bases and data. Responses are grounded in your actual information, not generic AI outputs.",
        },
        {
          title: "AI Appointment Setters",
          description: "Automatically handle incoming requests, qualify leads and schedule calls or meetings through chat (WhatsApp, email or web), reducing manual back-and-forth.",
        },
        {
          title: "Voice Agents",
          description: "AI voice agents that handle calls, collect information and guide users through predefined processes, integrated with your systems and workflows.",
        },
        {
          title: "AI Data Extraction & Classification",
          description: "Extract structured data from unstructured inputs (emails, documents, messages) and classify them to trigger automated workflows and decisions.",
        },
      ],
    },
    useCases: {
      title: "Real Projects",
      subtitle: "These are real systems we have built, along with representative implementations that show how our automation approach can be applied in different contexts.",
      representativeBadge: "Representative Implementation",
      items: [
        {
          title: "Research Process Automation",
          subtitle: "Market Research Agency (Medical Domain)",
          description: "We automated manual processes related to transcription, translation and document generation for a market research agency. The system processes audio interviews automatically using models adapted to medical research, ensuring high accuracy even with complex terminology and Asian languages. Previously, the workflow was unreliable: documents were lost, work was not tracked properly, and clients were dissatisfied with delivery quality. The automation introduced a structured pipeline, improving accuracy, traceability and consistency across all projects.",
        },
        {
          title: "Quote & Document Workflow Automation",
          subtitle: "Construction Company",
          description: "We implemented an automation system that manages the full lifecycle from client request to quote generation and document handling. Requests from WhatsApp and email are processed automatically, data is extracted and used to generate quotes and organize documents. The system integrates with internal tools to notify teams and track progress, replacing fragmented manual processes and improving operational visibility.",
        },
        {
          title: "AI Assistant & Appointment Setter",
          subtitle: "AI Automation Agency",
          description: "We built an AI-powered chat assistant that answers questions about the company using internal documents via a retrieval-based approach (RAG), and can also book, reschedule and cancel Discovery Calls directly in the conversation. The assistant integrates with scheduling systems, handles multilingual conversations, and captures qualified leads. All without human intervention. You can try it right now on this website.",
        },
        {
          title: "AI Chatbot for Customer Support",
          subtitle: "Professional Services Firm",
          description: "An AI chatbot trained on the firm's knowledge base (services offered, required documents, tax deadlines, procedures) that answers client questions instantly via the website or WhatsApp. It handles recurring inquiries, guides clients through document preparation, and escalates complex cases to the professional. Available 24/7, it reduced repetitive calls by over 60%, freeing up time for high-value work.",
          representative: true,
        },
        {
          title: "Voice Agent for Appointment Booking",
          subtitle: "Medical Clinic",
          description: "An AI voice agent that handles inbound phone calls, qualifies patient requests, and books or reschedules appointments directly in the clinic's calendar system. It speaks naturally, understands intent even in noisy calls, and sends SMS confirmations automatically. The clinic recovered hours of daily receptionist time and stopped missing calls outside business hours.",
          representative: true,
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "From analysis to go-live, in four simple steps.",
      steps: [
        {
          title: "Analyze",
          description: "We study your current process and identify what can be automated.",
        },
        {
          title: "Design",
          description: "We design a tailored automation flow that fits your tools and team.",
        },
        {
          title: "Integrate",
          description: "We connect the automation to your existing systems: email, CRM, documents, WhatsApp.",
        },
        {
          title: "Go Live",
          description: "Your automation goes live quickly, with support and monitoring from day one.",
        },
      ],
    },
    differentiation: {
      title: "Why Humanaise",
      subtitle: "What sets us apart from generic software solutions.",
      items: [
        {
          title: "Tailored to Your Process",
          description: "We don't sell a one-size-fits-all product. Every automation is designed around how you actually work.",
        },
        {
          title: "Works With Your Tools",
          description: "We integrate with the tools you already use: Gmail, Outlook, WhatsApp, Google Sheets, Microsoft 365, OneDrive, your CRM, and more.",
        },
        {
          title: "Fast Implementation",
          description: "Most automations are live within days, not months. No long onboarding or complex migrations.",
        },
        {
          title: "Simplicity Over Complexity",
          description: "We build solutions that your team can understand and trust, not black boxes that need a tech team to manage.",
        },
      ],
    },
    cta: {
      title: "Want to simplify your operations?",
      subtitle: "We can analyze one of your real processes and show you how to automate it.",
      buttonText: "Request a demo",
      microcopy: "No commitment · We analyze a real use case",
    },
    verticals: {
      preventiviEdilizia: {
        seo: {
          title: "Construction Quote Management in Cagliari | WhatsApp, Phone, Email | Humanaise",
          description: "Never lose customer requests again. Automate quote management for construction companies in Cagliari: WhatsApp, phone and email in one organized flow.",
          keywords: "construction quotes cagliari, quote management construction, automate quotes cagliari, construction company software, whatsapp quotes construction, voice agent quotes",
        },
        hero: {
          title: "Never lose customer requests from WhatsApp and phone again",
          subtitle: "Automate quote management for your construction business in Cagliari. Receive requests from WhatsApp, phone and email and turn them into an organized flow.",
          highlight: "Automatically answers calls even when you're unavailable.",
          ctaPrimary: "Show me how it works in 10 minutes",
          ctaSecondary: "See how it works",
          points: [
            "Zero lost requests",
            "Trackable quote flow",
            "WhatsApp + phone + email unified",
          ],
        },
        realityCheck: {
          text: "Most businesses don't know how many requests they lose every week. Between unanswered calls, ignored messages and forgotten emails, some customers simply go elsewhere.",
        },
        voiceDiff: {
          title: "What if a customer calls and you don't answer?",
          bullets: [
            "Automatic call answering",
            "Customer information collection",
            "Direct integration into the quote flow",
          ],
        },
        problem: {
          title: "How many requests do you lose every week without realizing it?",
          painPoints: [
            "You lose customer requests because WhatsApp isn't checked in time",
            "You don't answer calls in time and the customer goes elsewhere",
            "Requests forgotten between WhatsApp and email with no unified flow",
            "Quotes assigned with no visibility on who does what and what state they're in",
            "Every request handled differently, nobody knows where to find the information",
          ],
        },
        solution: {
          title: "One system to manage requests and quotes",
          features: [
            "Automatic collection of WhatsApp requests",
            "Voice agent that answers calls out of hours",
            "Centralization of email requests",
            "Quote creation and tracking",
            "Internal assignment with real-time visibility",
            "Customization per sector, messages and company name",
          ],
        },
        howItWorks: {
          title: "How the process changes with automation",
          steps: [
            "The customer contacts the company via WhatsApp, phone or email: the system captures the request even when you're unavailable",
            "Information is automatically organized and entered into the quote flow",
            "The quote is assigned internally: whoever needs to act knows immediately",
            "The team responds faster, with no requests falling through the cracks",
            "Everything is trackable: you always know how many requests you have, who's handling them and what state they're in",
          ],
        },
        channels: {
          title: "WhatsApp, phone and email in the same process",
          description: "You don't need to change how customers contact you. The system collects requests from all channels and brings them into a single flow, so nothing is lost, whatever channel the customer chooses.",
          note: "You can activate just one, two, or all three channels. You don't need all of them: the system adapts to how you already work.",
        },
        useCase: {
          title: "Built for construction companies and businesses managing high request volumes",
          examples: [
            "Construction companies",
            "Installers",
            "Windows and doors",
            "Renovations",
            "Plumbing and electrical",
            "Craftsmen with high request volumes",
          ],
        },
        realCase: {
          title: "Already applied in a real context",
          description: "The system has already been adapted to a real operational flow in the construction sector, with multi-channel request management, internal assignment and quote tracking from receipt to customer response.",
        },
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              question: "Does the system only work for construction companies?",
              answer: "No, but this page focuses on the construction quote use case because it's one of the clearest and most concrete scenarios. The same system can be adapted to other sectors with similar request volumes.",
            },
            {
              question: "What happens if a customer calls out of hours?",
              answer: "The voice agent answers automatically, collects the customer's information and inserts it into the quote flow. When you're available again, everything is already organized.",
            },
            {
              question: "Can it be customized for my company?",
              answer: "Yes. The system is designed to be customized per tenant: sector, messages, branding and operational settings. Each company gets a tailored flow.",
            },
            {
              question: "Does it handle WhatsApp?",
              answer: "Yes, WhatsApp is one of the main channels in the flow. Requests received via message are automatically collected and organized alongside others.",
            },
            {
              question: "How do I know if it works for my company?",
              answer: "In 10 minutes I'll show you how it would work in your specific case. No commitment.",
            },
          ],
        },
        cta: {
          title: "Find out how to organize your quotes without losing requests",
          description: "I'll show you in 10 minutes how the system works in your specific context.",
          buttonText: "Show me how it works in 10 minutes",
          microcopy: "No commitment · We analyze your real use case",
        },
        relatedPages: {
          title: "Learn more",
          links: [
            { label: "Voice agent for businesses in Cagliari", href: "/voice-agent-cagliari" },
            { label: "WhatsApp Business automation in Cagliari", href: "/whatsapp-business-automation-cagliari" },
          ],
        },
      },
      voiceAgent: {
        seo: {
          title: "Voice Agent for Businesses in Cagliari | Answer Calls Automatically | Humanaise",
          description: "Never miss customer calls again. Activate a voice agent that answers, collects information and integrates it into your business processes, even out of hours.",
          keywords: "voice agent cagliari, automatic call answering, ai phone businesses cagliari, customer call management, automatic answering service businesses",
        },
        hero: {
          title: "How many calls are you losing every day without realising it?",
          subtitle: "Activate a voice agent that answers calls for you, collects the request and inserts it automatically into your quote or appointment flow.",
          highlight: "Even when you're on site, out of hours or busy.",
          ctaPrimary: "I want to see how many calls I'm losing",
          ctaSecondary: "Show me how to recover missed calls",
          points: [
            "No missed calls",
            "Automatic request collection",
            "Integration with quotes and appointments",
          ],
        },
        impactBlock: {
          lines: [
            "The reality is this:",
            "The phone rings. You don't answer. Customer lost.",
            "And the problem is you don't even know it.",
          ],
          tracklist: [
            "how many calls you're missing",
            "who those customers were",
            "how much revenue slipped away",
          ],
        },
        positioning: {
          lines: [
            "It's not a voicemail.",
            "It's a system that turns every call into a real request.",
            "It answers, collects information, organises it and inserts it directly into your operational flow.",
          ],
        },
        problem: {
          title: "Every unanswered call is a customer going elsewhere",
          painPoints: [
            "You're on site and can't answer the phone",
            "The customer calls out of hours and finds nobody",
            "You don't call back in time and the customer goes to the competition",
            "No record of missed calls: you don't know how many opportunities you've lost",
            "The team handles calls inconsistently, with no defined process",
          ],
        },
        solution: {
          title: "A voice agent that works for you when you're unavailable",
          features: [
            "Automatic call answering 24/7",
            "Collection of customer name, contact and request",
            "Automatic transcription and organization of information",
            "Direct integration into the quote or appointment flow",
            "Immediate team notification when a new request arrives",
            "Customization of tone and message for your company",
          ],
        },
        appointments: {
          title: "Book, modify and cancel appointments by phone",
          description: "The voice agent doesn't just collect generic requests. It can manage the full appointment cycle directly in a call, without any operator needing to intervene.",
          actions: [
            "Booking a new appointment",
            "Modifying an existing appointment",
            "Cancellation with customer confirmation",
            "Real-time availability check",
          ],
        },
        leadCapture: {
          title: "Captures leads and sends them directly to your CRM",
          description: "Every call becomes a registered opportunity. The voice agent collects customer information and syncs it automatically with your CRM, no manual data entry needed.",
          items: [
            "Automatic collection of name, contact and request type",
            "Real-time lead creation in the CRM",
            "Request tagging and categorisation",
            "Instant notification to the sales team",
            "Compatible with major CRMs (HubSpot, Salesforce, Pipedrive and others)",
          ],
        },
        integration: {
          title: "The difference isn't answering the phone. It's never losing a request.",
          description: "Voice agent + WhatsApp + email = one unified system. Whatever the channel: the request always enters the same flow, nothing is lost, everything is trackable.",
        },
        realCase: {
          title: "Already applied in real contexts",
          description: "The system has already been activated in real operational scenarios: from handling inbound calls for construction companies to qualifying requests for clinics. In all cases, the result is the same: fewer missed calls, more organized requests.",
        },
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              question: "Does the voice agent sound natural?",
              answer: "Yes. The voice agent is designed to respond in a natural and understandable way, adapted to the sector and tone of your company.",
            },
            {
              question: "What exactly does it do when it answers a call?",
              answer: "It greets the customer, collects essential information (name, contact, type of request) and enters them into the flow. If the request requires a human, it can divert or flag.",
            },
            {
              question: "Does it work for booking appointments too?",
              answer: "Yes. As well as quote requests, the voice agent can handle bookings, rescheduling and appointment cancellations.",
            },
            {
              question: "Does it integrate with WhatsApp and email?",
              answer: "Yes. All requests, whether from phone, WhatsApp or email, enter the same unified flow.",
            },
            {
              question: "Can I try it for my specific case?",
              answer: "Yes. In 10 minutes I'll show you how it would work for your company, with no commitment.",
            },
          ],
        },
        cta: {
          title: "Stop losing customers on the phone",
          description: "I'll show you how the voice agent works in your specific context, in 10 minutes.",
          buttonText: "Show me how it works",
          microcopy: "No commitment · Demo on your real use case",
        },
        relatedPages: {
          title: "Learn more",
          links: [
            { label: "Quote management for construction companies in Cagliari", href: "/preventivi-edilizia-cagliari" },
            { label: "WhatsApp Business automation in Cagliari", href: "/whatsapp-business-automation-cagliari" },
          ],
        },
      },
      whatsappAutomation: {
        seo: {
          title: "WhatsApp Business Automation in Cagliari | Respond to Customers Automatically | Humanaise",
          description: "Automate WhatsApp responses, manage customer requests and organize quotes without losing messages. System built for businesses in Cagliari and Sardinia.",
          keywords: "whatsapp business automation cagliari, whatsapp chatbot businesses, customer management whatsapp, whatsapp message automation, automatic whatsapp reply businesses",
        },
        hero: {
          title: "How many customers message you on WhatsApp and don't get a reply in time?",
          killerLine: "If you don't reply straight away, the customer writes to someone else.",
          subtitle: "Automate responses and turn every message into an organised request: the system replies, collects information and inserts it into your flow.",
          highlight: "Even when you're busy or out of hours.",
          ctaPrimary: "Find out how many messages you\'re losing",
          ctaSecondary: "Show me how to handle them automatically",
          points: [
            "No lost messages",
            "Immediate customer responses",
            "Automatically organized requests",
          ],
        },

        impactBlock: {
          lines: [
            "The reality is simple:",
            "Customers don't wait.",
            "If you don't reply in time, the request isn't pending: it's lost.",
            "And you often don't even know.",
          ],
        },
        problem: {
          title: "Customers write on WhatsApp. How many messages don't get a reply in time?",
          painPoints: [
            "Messages unread for hours, sometimes days",
            "Customers stop waiting and write to someone else",
            "Requests lost between personal chats and WhatsApp Business",
            "You have no idea how many clients you're losing",
            "Your team handles WhatsApp with no process: everyone does it differently",
          ],
        },
        solution: {
          title: "Every message gets a reply. No request goes unanswered.",
          features: [
            "Every message gets an immediate reply",
            "Every request becomes structured and trackable",
            "Nothing gets lost or forgotten",
            "Your team knows exactly what to do",
            "You finally see how many requests you actually receive",
            "Zero chaos: one single flow for everything",
          ],
        },
        useCase: {
          title: "Ideal for companies receiving many requests every day",
          description: "If most of your customers contact you via WhatsApp, this system turns that channel into a professional process: every request collected, organized and assigned, nothing lost. Works for construction companies, installers, professional offices, clinics and any business with high message volumes.",
        },
        realCase: {
          title: "Already applied in real scenarios",
          description: "The system is already active in real operational contexts: from managing quote requests in the construction sector to qualifying contacts for professional offices. The principle is the same: every WhatsApp message becomes a trackable request.",
        },
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              question: "Does it work with my current WhatsApp number?",
              answer: "The system is based on the WhatsApp Business API. In most cases it's possible to migrate your existing number. We'll explain how in the demo.",
            },
            {
              question: "What exactly does it reply to customers?",
              answer: "It responds with customized messages based on the type of request, collects the necessary information and confirms to the customer that the request has been received. The tone and content are configured for your company.",
            },
            {
              question: "Does it integrate with the voice agent and email?",
              answer: "Yes. WhatsApp, phone and email work in the same unified flow. Requests arriving from any channel all enter the same system.",
            },
            {
              question: "Can I also manage appointments via WhatsApp?",
              answer: "Yes. As well as quotes, the system can manage bookings, modifications and appointment cancellations directly in chat.",
            },
            {
              question: "How do I know if it's right for my company?",
              answer: "In 10 minutes I'll show you how it would work in your specific case, with no commitment.",
            },
          ],
        },
        cta: {
          title: "Stop losing requests on WhatsApp",
          description: "I'll show you in 10 minutes how the system works for your company.",
          buttonText: "See how it works",
          microcopy: "No commitment · Demo on your real use case",
        },
        relatedPages: {
          title: "Learn more",
          links: [
            { label: "Quote management for construction companies in Cagliari", href: "/preventivi-edilizia-cagliari" },
            { label: "Voice agent for businesses in Cagliari", href: "/voice-agent-cagliari" },
          ],
        },
      },
      emailAutomation: {
        seo: {
          title: "Humanaise | Email & Document Automation",
          description: "Transform emails and requests into automatic documents. Humanaise helps businesses in Sardinia and Italy automate email and document workflows.",
        },
        hero: {
          title: "Transform emails and requests into automatic documents, without manual work",
          subtitle: "We automate email management: we extract data, compile documents, and send everything automatically.",
          cta: "Request a free demo",
          microcopy: "No commitment · Analysis on your real use case",
        },
        pain: {
          title: "Still handling everything manually?",
          points: [
            "Reading emails one by one",
            "Copying data into documents",
            "Filling Word templates manually",
            "Sending replies manually",
          ],
          closing: "This work is repetitive, slow, and prone to errors.",
        },
        solution: {
          title: "Complete process automation",
          steps: [
            "Receive emails or requests",
            "The system automatically extracts the data",
            "Generates the documents (Word/PDF)",
            "Sends everything automatically",
          ],
          closing: "Without manual intervention.",
        },
        results: {
          title: "What changes",
          items: [
            "Significant reduction in operational time",
            "Elimination of manual errors",
            "Faster responses to clients",
            "Everything tracked in a single system",
          ],
        },
        useCase: {
          title: "Request and document management",
          steps: [
            "Email → structured data",
            "Data → automatic documents",
            "Documents → automatic sending",
          ],
        },
        tailored: {
          title: "Solutions tailored to your process",
          description: "Every company has different flows. We analyze your case and build automation adapted to your way of working.",
          subcopy: "We start with a demo on a real use case.",
        },
        trust: {
          title: "Zero risk",
          items: [
            "Demo on your real use case",
            "No initial commitment",
            "Fast activation",
          ],
        },
        cta: {
          title: "Want to automate this process in your company?",
          buttonText: "Request a free demo",
          microcopy: "No commitment · Analysis on your real use case",
        },
      },
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
