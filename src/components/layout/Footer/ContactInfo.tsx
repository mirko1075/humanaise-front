import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
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
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-primary-900 hover:text-white transition-colors duration-200"
      >
        <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
        <span>{CONTACT_INFO.whatsapp}</span>
      </a>
    </div>
  );
}