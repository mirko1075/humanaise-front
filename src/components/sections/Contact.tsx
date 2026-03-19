import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { CONTACT_INFO, CONTACT_FORM_FIELDS } from '../../constants/contact';
import { useTranslation } from '../../hooks/useTranslation';
import { fadeInUp, scrollViewport } from '../../utils/animations';

export function Contact() {
  const t = useTranslation();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });

  const validateSubmission = (): string | null => {
    const name = formData.name?.trim() || '';
    const email = formData.email?.trim() || '';
    const company = formData.company?.trim() || '';
    const message = formData.message?.trim() || '';

    if (name.length < 3) return 'Please enter your full name (at least 3 characters).';
    if (!email.includes('@') || email.length < 5) return 'Please enter a valid work email address.';
    if (company.length < 2) return 'Please enter your company name.';
    if (message.length < 20 || message.split(/\s+/).filter(Boolean).length < 4) return 'Please describe the process you want to automate (at least 20 characters).';

    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError({ hasError: false, message: '' });

    const validationError = validateSubmission();
    if (validationError) {
      setError({ hasError: true, message: validationError });
      return;
    }

    const body = new URLSearchParams({
      'form-name': 'contact',
      ...formData,
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError({ hasError: true, message: 'An error occurred. Please try again.' }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const inputClasses =
    'w-full rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-white placeholder-indigo-300/40 focus:border-blue-400 focus:ring-blue-400/20 focus:ring-2 transition-all duration-200 px-4 py-3';

  return (
    <section id="contact" className="py-12 sm:pt-32 sm:pb-16 bg-primary-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />

      <Container className="relative">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-xl text-primary-200">{t.contact.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{t.contact.form.email}</h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{t.contact.form.phone}</h3>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                <MessageCircle className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{t.contact.form.whatsapp}</h3>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
            </div>

            {t.contact.whatsappDisclaimer && (
              <div className="mt-8 p-4 bg-white/[0.04] rounded-xl border border-white/[0.08]">
                <p className="text-sm text-primary-200 leading-relaxed">
                  {t.contact.whatsappDisclaimer}
                </p>
              </div>
            )}
          </div>

          <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-2xl p-8 glow-indigo">
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Send className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t.contact.form.successTitle}</h3>
                  <p className="text-indigo-200">{t.contact.form.successMessage}</p>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                {error.hasError && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                    {error.message}
                  </div>
                )}
                {CONTACT_FORM_FIELDS.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-indigo-200 mb-2"
                    >
                      {t.contact.form[field.id as keyof typeof t.contact.form] as string}
                      {field.required && <span className="text-red-400 ml-1">*</span>}
                    </label>

                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows={4}
                        placeholder={
                          t.contact.form.placeholders[
                            field.id as keyof typeof t.contact.form.placeholders
                          ]
                        }
                        required={field.required}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        placeholder={
                          t.contact.form.placeholders[
                            field.id as keyof typeof t.contact.form.placeholders
                          ]
                        }
                        required={field.required}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    )}
                  </div>
                ))}

                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  {t.contact.form.submit}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
