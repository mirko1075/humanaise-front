import React from 'react';
import { Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '../../../constants/contact';

const socialLinks = [
  {
    icon: Linkedin,
    href: `https://linkedin.com/company/${CONTACT_INFO.social.linkedin}`,
    label: 'LinkedIn'
  },
  {
    icon: Twitter,
    href: `https://twitter.com/${CONTACT_INFO.social.twitter}`,
    label: 'Twitter'
  },
  {
    icon: Github,
    href: 'https://github.com/humanaise',
    label: 'GitHub'
  },
  {
    icon: Youtube,
    href: 'https://youtube.com/@humanaise',
    label: 'YouTube'
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