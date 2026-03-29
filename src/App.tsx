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
        {/* Language-prefixed routes — these are the canonical URLs referenced in the sitemap */}
        <Route path="/:lang/preventivi-edilizia-cagliari" element={<PreventiviEdiliziaPage />} />
        <Route path="/:lang/preventivi" element={<PreventiviEdiliziaPage />} />
        <Route path="/:lang/voice-agent-cagliari" element={<VoiceAgentPage />} />
        <Route path="/:lang/whatsapp-business-automation-cagliari" element={<WhatsappAutomationPage />} />
        <Route path="/:lang/email-automation" element={<EmailAutomationPage />} />
        <Route path="/:lang/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/:lang/cookies" element={<CookiePolicyPage />} />
        <Route path="/:lang/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
