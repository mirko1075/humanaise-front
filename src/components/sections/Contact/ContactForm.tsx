import React, { useState } from 'react';
import { useTranslations } from '../../../hooks/useTranslations';

export function ContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { contact } = useTranslations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true" 
      onSubmit={handleSubmit} 
      className="space-y-6">
      <div>
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" type="text" />
          </label>
        </p>
        <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-1">
          {contact.form.labels.name}
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder={contact.form.placeholders.name}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-primary-800 border-primary-700 text-white placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-1">
          {contact.form.labels.email}
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder={contact.form.placeholders.email}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-primary-800 border-primary-700 text-white placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-primary-200 mb-1">
          {contact.form.labels.company}
        </label>
        <input
          type="text"
          id="company"
          required
          placeholder={contact.form.placeholders.company}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-primary-800 border-primary-700 text-white placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-200 mb-1">
          {contact.form.labels.message}
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder={contact.form.placeholders.message}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-primary-800 border-primary-700 text-white placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
      >
        {contact.form.submit}
      </button>
    </form>
  );
}