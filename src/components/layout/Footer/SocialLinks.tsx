import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../../../constants/contact';

const socialLinks = [
  {
    icon: Linkedin,
    href: `https://linkedin.com/company/${CONTACT_INFO.social.linkedin}`,
    label: 'LinkedIn'
  },
  {
    icon: Instagram,
    href: CONTACT_INFO.social.instagram,
    label: 'Instagram'
  },
  {
    icon: Facebook,
    href: CONTACT_INFO.social.facebook,
    label: 'Facebook'
  },
  {
    icon: Twitter,
    href: `https://twitter.com/${CONTACT_INFO.social.twitter}`,
    label: 'Twitter'
  }
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          className="text-primary-900 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}