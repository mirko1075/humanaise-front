import React from 'react';
import { Container } from '../ui/Container';
import { COMPANY } from '../../constants/company';
import { CONTACT_INFO } from '../../constants/contact';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export function Footer() {
  const t = useTranslation();
  return (
    <footer className="bg-primary-950 text-primary-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {COMPANY.name}
            </h3>
            <p className="mb-4">{t.about.company.mission}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.common.sections.about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {t.common.sections.services}
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-white transition-colors"
                >
                  {t.common.sections.industries}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  {t.common.sections.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t.contact.title}
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                {CONTACT_INFO.phone}
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href={`https://linkedin.com/company/${CONTACT_INFO.social.linkedin}`}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`https://twitter.com/${CONTACT_INFO.social.twitter}`}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
