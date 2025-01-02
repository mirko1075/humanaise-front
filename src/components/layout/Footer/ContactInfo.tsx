import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../../constants/contact';

export function ContactInfo() {
  return (
    <div className="space-y-3">
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className="flex items-center text-primary-900 hover:text-white transition-colors duration-200"
      >
        <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
        <span>{CONTACT_INFO.email}</span>
      </a>
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex items-center text-primary-900 hover:text-white transition-colors duration-200"
      >
        <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
        <span>{CONTACT_INFO.phone}</span>
      </a>
    </div>
  );
}