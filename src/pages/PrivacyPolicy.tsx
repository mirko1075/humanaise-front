import React from 'react';
import { Container } from '../components/ui/Container';
import { useTranslation } from '../hooks/useTranslation';

export const PrivacyPolicy: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-primary-900 pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            {t.legal?.privacyPolicy?.title ?? 'Privacy Policy'}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-primary-200 mb-6">
              {t.legal?.privacyPolicy?.lastUpdated ?? 'Last updated'}: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.introduction?.title ?? '1. Introduction'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.privacyPolicy?.sections?.introduction?.content ?? 
                  'HumanAIse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website humanaise.com or use our services.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.dataCollection?.title ?? '2. Information We Collect'}
              </h2>
              <p className="text-primary-200 mb-4">
                {t.legal?.privacyPolicy?.sections?.dataCollection?.content ?? 
                  'We may collect the following types of information:'}
              </p>
              <ul className="list-disc list-inside text-primary-200 space-y-2 ml-4">
                <li>{t.legal?.privacyPolicy?.sections?.dataCollection?.items?.[0] ?? 'Personal identification information (name, email address, phone number)'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataCollection?.items?.[1] ?? 'Business information (company name, industry, job title)'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataCollection?.items?.[2] ?? 'Communication data (messages sent through contact forms or WhatsApp)'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataCollection?.items?.[3] ?? 'Technical data (IP address, browser type, device information)'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataCollection?.items?.[4] ?? 'Usage data (pages visited, time spent on site, referring URL)'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.dataUsage?.title ?? '3. How We Use Your Information'}
              </h2>
              <p className="text-primary-200 mb-4">
                {t.legal?.privacyPolicy?.sections?.dataUsage?.content ?? 
                  'We use the collected information for the following purposes:'}
              </p>
              <ul className="list-disc list-inside text-primary-200 space-y-2 ml-4">
                <li>{t.legal?.privacyPolicy?.sections?.dataUsage?.items?.[0] ?? 'To respond to your inquiries and provide customer support'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataUsage?.items?.[1] ?? 'To deliver our AI automation services'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataUsage?.items?.[2] ?? 'To send business communications via WhatsApp (with your consent)'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataUsage?.items?.[3] ?? 'To improve our website and services'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.dataUsage?.items?.[4] ?? 'To comply with legal obligations'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.whatsapp?.title ?? '4. WhatsApp Communications'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.privacyPolicy?.sections?.whatsapp?.content ?? 
                  'We use WhatsApp exclusively for customer support and business inquiries. By contacting us via WhatsApp, you consent to receive responses through this channel. We do not use WhatsApp for bulk messaging or marketing purposes. You may opt out at any time by informing us through the same channel.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.dataSharing?.title ?? '5. Data Sharing and Disclosure'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.privacyPolicy?.sections?.dataSharing?.content ?? 
                  'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with service providers who assist us in operating our website and services (under strict confidentiality agreements); when required by law or to protect our rights; or with your explicit consent.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.cookies?.title ?? '6. Cookies and Tracking'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.privacyPolicy?.sections?.cookies?.content ?? 
                  'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.security?.title ?? '7. Data Security'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.privacyPolicy?.sections?.security?.content ?? 
                  'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.rights?.title ?? '8. Your Rights'}
              </h2>
              <p className="text-primary-200 mb-4">
                {t.legal?.privacyPolicy?.sections?.rights?.content ?? 
                  'Depending on your location, you may have the following rights:'}
              </p>
              <ul className="list-disc list-inside text-primary-200 space-y-2 ml-4">
                <li>{t.legal?.privacyPolicy?.sections?.rights?.items?.[0] ?? 'Access, correct, or delete your personal data'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.rights?.items?.[1] ?? 'Object to or restrict processing of your data'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.rights?.items?.[2] ?? 'Request data portability'}</li>
                <li>{t.legal?.privacyPolicy?.sections?.rights?.items?.[3] ?? 'Withdraw consent at any time'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.privacyPolicy?.sections?.contact?.title ?? '9. Contact Us'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.privacyPolicy?.sections?.contact?.content ?? 
                  'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at: privacy@humanaise.com'}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};
