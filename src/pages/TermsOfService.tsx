import React from 'react';
import { Container } from '../components/ui/Container';
import { useTranslation } from '../hooks/useTranslation';

export const TermsOfService: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-primary-900 pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            {t.legal?.termsOfService?.title ?? 'Terms of Service'}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-primary-200 mb-6">
              {t.legal?.termsOfService?.lastUpdated ?? 'Last updated'}: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.acceptance?.title ?? '1. Acceptance of Terms'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.acceptance?.content ?? 
                  'By accessing or using the HumanAIse website (humanaise.com) and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.services?.title ?? '2. Description of Services'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.services?.content ?? 
                  'HumanAIse provides AI automation solutions, consulting services, and related business tools. Our services are designed to help businesses integrate artificial intelligence into their operations. Specific service details, pricing, and deliverables are defined in individual service agreements.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.userObligations?.title ?? '3. User Obligations'}
              </h2>
              <p className="text-primary-200 mb-4">
                {t.legal?.termsOfService?.sections?.userObligations?.content ?? 
                  'When using our services, you agree to:'}
              </p>
              <ul className="list-disc list-inside text-primary-200 space-y-2 ml-4">
                <li>{t.legal?.termsOfService?.sections?.userObligations?.items?.[0] ?? 'Provide accurate and complete information'}</li>
                <li>{t.legal?.termsOfService?.sections?.userObligations?.items?.[1] ?? 'Use our services only for lawful business purposes'}</li>
                <li>{t.legal?.termsOfService?.sections?.userObligations?.items?.[2] ?? 'Not engage in fraudulent, abusive, or harmful activities'}</li>
                <li>{t.legal?.termsOfService?.sections?.userObligations?.items?.[3] ?? 'Respect intellectual property rights'}</li>
                <li>{t.legal?.termsOfService?.sections?.userObligations?.items?.[4] ?? 'Maintain the confidentiality of any account credentials'}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.intellectualProperty?.title ?? '4. Intellectual Property'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.intellectualProperty?.content ?? 
                  'All content on this website, including text, graphics, logos, code, and software, is the property of HumanAIse or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.whatsapp?.title ?? '5. WhatsApp Business Communication'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.whatsapp?.content ?? 
                  'We use WhatsApp exclusively for customer support and business inquiries. By initiating contact via WhatsApp, you consent to receive responses through this channel. We will not use your WhatsApp contact for unsolicited marketing or bulk messaging. You may opt out at any time.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.limitations?.title ?? '6. Limitation of Liability'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.limitations?.content ?? 
                  'To the fullest extent permitted by law, HumanAIse shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.warranties?.title ?? '7. Warranties and Disclaimers'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.warranties?.content ?? 
                  'Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements. You use our services at your own risk.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.termination?.title ?? '8. Termination'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.termination?.content ?? 
                  'We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.changes?.title ?? '9. Changes to Terms'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.changes?.content ?? 
                  'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.governingLaw?.title ?? '10. Governing Law'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.governingLaw?.content ?? 
                  'These Terms of Service are governed by and construed in accordance with the laws of the European Union and Italy. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Italy.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.legal?.termsOfService?.sections?.contact?.title ?? '11. Contact Information'}
              </h2>
              <p className="text-primary-200">
                {t.legal?.termsOfService?.sections?.contact?.content ?? 
                  'For questions about these Terms of Service, please contact us at: info@humanaise.com'}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};
