import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { EmailAutomation } from './pages/EmailAutomation';
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
        <Route path="/email-automation" element={<EmailAutomationPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
