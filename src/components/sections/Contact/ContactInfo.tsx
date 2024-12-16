import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '../../../hooks/useTranslations';

export function ContactInfo() {
  const { contact } = useTranslations();
  const { info } = contact;

  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <Mail className="h-6 w-6 text-primary-300 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-white">{info.email.label}</h3>
          <a 
            href={`mailto:${info.email.value}`}
            className="text-primary-200 hover:text-white transition-colors"
          >
            {info.email.value}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="h-6 w-6 text-primary-300 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-white">{info.phone.label}</h3>
          <a 
            href={`tel:${info.phone.value}`}
            className="text-primary-200 hover:text-white transition-colors"
          >
            {info.phone.value}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <MapPin className="h-6 w-6 text-primary-300 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-white">{info.address.label}</h3>
          <p className="text-primary-200">
            {info.address.street}<br />
            {info.address.city}<br />
            {info.address.country}
          </p>
        </div>
      </div>
    </div>
  );
}