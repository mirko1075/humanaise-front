import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { EmailAutomation } from './pages/EmailAutomation';
import { PreventiviEdilizia } from './pages/PreventiviEdilizia';
import { VoiceAgent } from './pages/VoiceAgent';
import { WhatsappAutomation } from './pages/WhatsappAutomation';
import { CostaSmeralda } from './pages/CostaSmeralda';
import { SEO } from './components/SEO';
import { useLanguage } from './hooks/useLanguage';
import { useTranslation } from './hooks/useTranslation';

function PrivacyPolicyPage() {
  const { language } = useLanguage();
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="HumanAIse Privacy Policy - Learn how we collect, use, and protect your personal data."
        canonical={`https://humanaise.com/${language}/privacy-policy`}
      />
      <PrivacyPolicy />
    </>
  );
}

function CookiePolicyPage() {
  const { language } = useLanguage();
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="HumanAIse Cookie Policy - Learn about the cookies we use and how to manage them."
        canonical={`https://humanaise.com/${language}/cookies`}
      />
      <CookiePolicy />
    </>
  );
}

function TermsOfServicePage() {
  const { language } = useLanguage();
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="HumanAIse Terms and Conditions - Read our terms for using our AI automation services."
        canonical={`https://humanaise.com/${language}/terms-of-service`}
      />
      <TermsOfService />
    </>
  );
}

function PreventiviEdiliziaPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const v = t.landing.verticals.preventiviEdilizia;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": v.seo.title,
      "description": v.seo.description,
      "url": `https://humanaise.com/preventivi-edilizia-cagliari`,
      "inLanguage": language,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gestione Preventivi Edilizia - Humanaise",
      "description": "Sistema di automazione per la gestione dei preventivi per imprese edili a Cagliari. Raccolta richieste da WhatsApp, telefono ed email in un unico flusso.",
      "provider": {
        "@type": "Organization",
        "name": "HumanAIse",
        "url": "https://humanaise.com",
      },
      "areaServed": {
        "@type": "City",
        "name": "Cagliari",
      },
      "serviceType": "AI Automation",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": v.faq.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={v.seo.title}
        description={v.seo.description}
        keywords={v.seo.keywords}
        canonical={`https://humanaise.com/${language}/preventivi-edilizia-cagliari`}
        structuredData={structuredData}
      />
      <PreventiviEdilizia />
    </>
  );
}

function VoiceAgentPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const v = t.landing.verticals.voiceAgent;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": v.seo.title,
      "description": v.seo.description,
      "url": "https://humanaise.com/voice-agent-cagliari",
      "inLanguage": language,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Voice Agent per Aziende - Humanaise",
      "description": "Voice agent AI per la gestione automatica delle chiamate in entrata. Risposta 24/7, raccolta richieste e integrazione nel flusso aziendale.",
      "provider": { "@type": "Organization", "name": "HumanAIse", "url": "https://humanaise.com" },
      "areaServed": { "@type": "City", "name": "Cagliari" },
      "serviceType": "AI Voice Agent",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": v.faq.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={v.seo.title}
        description={v.seo.description}
        keywords={v.seo.keywords}
        canonical={`https://humanaise.com/${language}/voice-agent-cagliari`}
        structuredData={structuredData}
      />
      <VoiceAgent />
    </>
  );
}

function WhatsappAutomationPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const v = t.landing.verticals.whatsappAutomation;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": v.seo.title,
      "description": v.seo.description,
      "url": "https://humanaise.com/whatsapp-business-automation-cagliari",
      "inLanguage": language,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Automazione WhatsApp Business - Humanaise",
      "description": "Sistema di automazione WhatsApp Business per la gestione di richieste clienti, preventivi e appuntamenti.",
      "provider": { "@type": "Organization", "name": "HumanAIse", "url": "https://humanaise.com" },
      "areaServed": { "@type": "City", "name": "Cagliari" },
      "serviceType": "WhatsApp Business Automation",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": v.faq.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={v.seo.title}
        description={v.seo.description}
        keywords={v.seo.keywords}
        canonical={`https://humanaise.com/${language}/whatsapp-business-automation-cagliari`}
        structuredData={structuredData}
      />
      <WhatsappAutomation />
    </>
  );
}

function CostaSmeraldaPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const v = t.landing.verticals.costaSmeralda;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": v.seo.title,
      "description": v.seo.description,
      "url": `https://humanaise.com/${language}/costa-smeralda`,
      "inLanguage": language,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Concierge per Ville e Yacht - Humanaise",
      "description": "Servizio di assistente AI su WhatsApp per centri servizi, property manager e yacht services in Costa Smeralda. Risponde agli ospiti delle ville e yacht 24 ore su 24 in italiano, inglese, russo e arabo.",
      "provider": {
        "@type": "Organization",
        "name": "Humanaise",
        "url": "https://humanaise.com",
        "vatID": "IT04213490925",
        "email": "mirko.siddi@humanaise.com",
      },
      "areaServed": { "@type": "Place", "name": "Costa Smeralda, Sardegna" },
      "serviceType": ["AI Concierge", "Property Management Automation", "Yacht Provisioning AI", "WhatsApp Chatbot"],
      "offers": [
        {
          "@type": "Offer",
          "name": "Pilot Gratuito 30 Giorni",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "30 giorni gratuiti su 3 ville per testare il servizio senza impegno",
          "availability": "https://schema.org/InStock",
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi AI per Costa Smeralda",
        "itemListElement": [
          { "@type": "Service", "name": "WhatsApp AI Agent per Ville", "description": "Risposta automatica 24/7 in 4 lingue per ospiti delle ville" },
          { "@type": "Service", "name": "Yacht Provisioning AI", "description": "Gestione ordini provviste via WhatsApp con AI per equipaggi yacht" },
          { "@type": "Service", "name": "Dashboard Operativa", "description": "Console per centri servizi con vista richieste in tempo reale" },
          { "@type": "Service", "name": "Voice Agent", "description": "Risposta telefonica AI fuori orario" },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": v.faq.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={v.seo.title}
        description={v.seo.description}
        keywords={v.seo.keywords}
        canonical={`https://humanaise.com/${language}/costa-smeralda`}
        ogImage="/images/costa-smeralda-og.svg"
        structuredData={structuredData}
      />
      <CostaSmeralda />
    </>
  );
}

function EmailAutomationPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const v = t.landing.verticals.emailAutomation;
  return (
    <>
      <SEO
        title={v.seo.title}
        description={v.seo.description}
        canonical={`https://humanaise.com/${language}/email-automation`}
      />
      <EmailAutomation />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:lang" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/preventivi-edilizia-cagliari" element={<PreventiviEdiliziaPage />} />
        <Route path="/preventivi" element={<PreventiviEdiliziaPage />} />
        <Route path="/voice-agent-cagliari" element={<VoiceAgentPage />} />
        <Route path="/whatsapp-business-automation-cagliari" element={<WhatsappAutomationPage />} />
        <Route path="/email-automation" element={<EmailAutomationPage />} />
        <Route path="/costa-smeralda" element={<CostaSmeraldaPage />} />
        {/* Language-prefixed routes (canonical URLs referenced in the sitemap) */}
        <Route path="/:lang/preventivi-edilizia-cagliari" element={<PreventiviEdiliziaPage />} />
        <Route path="/:lang/preventivi" element={<PreventiviEdiliziaPage />} />
        <Route path="/:lang/voice-agent-cagliari" element={<VoiceAgentPage />} />
        <Route path="/:lang/whatsapp-business-automation-cagliari" element={<WhatsappAutomationPage />} />
        <Route path="/:lang/email-automation" element={<EmailAutomationPage />} />
        <Route path="/:lang/costa-smeralda" element={<CostaSmeraldaPage />} />
        <Route path="/:lang/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/:lang/cookies" element={<CookiePolicyPage />} />
        <Route path="/:lang/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
