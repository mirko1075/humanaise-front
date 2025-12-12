import { Container } from '../../ui/Container';
import { FooterSection } from './FooterSection';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';
import { Copyright } from './Copyright';
import { useTranslation } from '../../../hooks/useTranslation';

export function Footer() {
  const t = useTranslation();

  const handleLegalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const quickLinks = [
    { href: '#about', label: t.common.sections.about },
    { href: '#services', label: t.common.sections.services },
    { href: '#industries', label: t.common.sections.industries },
    { href: '#contact', label: t.common.sections.contact }
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: t.footer.legal?.privacyPolicy ?? 'Privacy Policy' },
    { href: '/terms-of-service', label: t.footer.legal?.termsOfService ?? 'Terms of Service' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-primary-950">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:3rem_3rem]" />
      <Container className="relative pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterSection title={t.about.company.name}>
            <p className="text-primary-900 leading-relaxed">
              {t.about.company.mission}
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
              {/* Legal Links */}
              <ul className="space-y-3 mt-6 pt-6 border-t border-primary-800/30">
                {legalLinks.map(link => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleLegalLinkClick(e, link.href)}
                      className="text-primary-900 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
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

        {/* Brand Clarification */}
        {t.footer.brandClarification && (
          <div className="mt-12 pt-8 border-t border-primary-800/30">
            <p className="text-sm text-primary-900 text-center max-w-3xl mx-auto leading-relaxed">
              {t.footer.brandClarification}
            </p>
          </div>
        )}

        {/* WhatsApp Disclaimer */}
        {t.footer.whatsappDisclaimer && (
          <div className="mt-6">
            <p className="text-sm text-primary-900 text-center max-w-3xl mx-auto leading-relaxed">
              {t.footer.whatsappDisclaimer}
            </p>
          </div>
        )}

        <Copyright />
      </Container>
    </footer>
  );
}