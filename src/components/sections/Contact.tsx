import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { CONTACT_INFO, CONTACT_FORM_FIELDS } from '../../constants/contact';
import { useTranslation } from '../../hooks/useTranslation';

export function Contact() {
  const t = useTranslation();
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="pt-32 pb-16 bg-primary-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-primary-200">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary-300 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {t.contact.form.email}
                </h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary-300 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {t.contact.form.phone}
                </h3>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
            {/*<div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary-300 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">{t.contact.form.location}</h3>
                <p className="text-primary-200">
                  {CONTACT_INFO.address.street}<br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                </p>
              </div>
            </div> */}

            {/* WhatsApp Disclaimer */}
            {t.contact.whatsappDisclaimer && (
              <div className="mt-8 p-4 bg-primary-800/40 rounded-lg border border-primary-700/50">
                <p className="text-sm text-primary-200 leading-relaxed">
                  {t.contact.whatsappDisclaimer}
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {CONTACT_FORM_FIELDS.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-primary-200 mb-1"
                >
                  {t.contact.form[field.id]}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    rows={4}
                    placeholder={t.contact.form.placeholders[field.id]}
                    required={field.required}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-primary-800 border-primary-700 text-white placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={field.id}
                    required={field.required}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-primary-800 border-primary-700 text-white focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select a service</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={t.contact.form.placeholders[field.id]}
                    required={field.required}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-primary-800 border-primary-700 text-white placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
                  />
                )}
              </div>
            ))}

            <Button type="submit" className="w-full">
              {t.contact.form.submit}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
