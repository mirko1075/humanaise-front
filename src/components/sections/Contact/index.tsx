import React from 'react';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { useTranslations } from '../../../hooks/useTranslations';

export function Contact() {
  const { contact } = useTranslations();

  return (
    <section id="contact" className="py-20 bg-primary-900">
      <Container>
        <SectionHeading
          title={contact.title}
          subtitle={contact.subtitle}
          theme="dark"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}