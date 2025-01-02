import { Container } from '../../ui/Container';
import { FooterSection } from './FooterSection';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';
import { Copyright } from './Copyright';
import { useTranslation } from '../../../hooks/useTranslation';

export function Footer() {
  const t = useTranslation();

  const quickLinks = [
    { href: '#about', label: t.common.sections.about },
    { href: '#services', label: t.common.sections.services },
    { href: '#industries', label: t.common.sections.industries },
    { href: '#contact', label: t.common.sections.contact }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-primary-950">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:3rem_3rem]" />
      <Container className="relative pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterSection title={t.about.company.name}>
            <p className="text-primary-900 leading-relaxed">
              {t.about.company.mission} - Missiond
            </p>
          </FooterSection>

          <FooterSection title={t.footer.quickLinks}>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-primary-900 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterSection>

          <FooterSection title={t.contact.title}>
            <ContactInfo />
          </FooterSection>

          <FooterSection title={t.common.sections.social}>
            <SocialLinks />
          </FooterSection>
        </div>

        <Copyright />
      </Container>
    </footer>
  );
}