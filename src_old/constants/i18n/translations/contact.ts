import { Language } from '../../../types/language';

type ContactTranslations = {
  title: string;
  subtitle: string;
  info: {
    email: {
      label: string;
      value: string;
    };
    phone: {
      label: string;
      value: string;
    };
    address: {
      label: string;
      street: string;
      city: string;
      country: string;
    };
  };
  form: {
    labels: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    submit: string;
  };
};

export const contactTranslations: Record<Language, ContactTranslations> = {
  en: {
    title: 'Contact Us',
    subtitle: 'Ready to transform your business? Get in touch with us today.',
    info: {
      email: {
        label: 'Email',
        value: 'info@humanaise.com'
      },
      phone: {
        label: 'Phone',
        value: '+39 3928665301'
      },
      address: {
        label: 'Location',
        street: 'Via Calagonone 29',
        city: 'Monserrato, CA 09042',
        country: 'Italy'
      }
    },
    form: {
      labels: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message'
      },
      placeholders: {
        name: 'Your name',
        email: 'your.email@example.com',
        company: 'Your company name',
        message: 'How can we help you?'
      },
      submit: 'Send Message'
    }
  },
  es: {
    title: 'Contáctanos',
    subtitle: '¿Listo para transformar tu negocio? Contáctanos hoy.',
    info: {
      email: {
        label: 'Correo',
        value: 'info@humanaise.com'
      },
      phone: {
        label: 'Teléfono',
        value: '+39 3928665301'
      },
      address: {
        label: 'Ubicación',
        street: 'Via Calagonone 29',
        city: 'Monserrato, CA 09042',
        country: 'Italia'
      }
    },
    form: {
      labels: {
        name: 'Nombre',
        email: 'Correo',
        company: 'Empresa',
        message: 'Mensaje'
      },
      placeholders: {
        name: 'Tu nombre',
        email: 'tu.correo@ejemplo.com',
        company: 'Nombre de tu empresa',
        message: '¿Cómo podemos ayudarte?'
      },
      submit: 'Enviar Mensaje'
    }
  },
  fr: {
    title: 'Contactez-nous',
    subtitle: 'Prêt à transformer votre entreprise ? Contactez-nous aujourd\'hui.',
    info: {
      email: {
        label: 'Email',
        value: 'info@humanaise.com'
      },
      phone: {
        label: 'Téléphone',
        value: '+39 3928665301'
      },
      address: {
        label: 'Adresse',
        street: 'Via Calagonone 29',
        city: 'Monserrato, CA 09042',
        country: 'Italie'
      }
    },
    form: {
      labels: {
        name: 'Nom',
        email: 'Email',
        company: 'Entreprise',
        message: 'Message'
      },
      placeholders: {
        name: 'Votre nom',
        email: 'votre.email@exemple.com',
        company: 'Nom de votre entreprise',
        message: 'Comment pouvons-nous vous aider ?'
      },
      submit: 'Envoyer le Message'
    }
  },
  it: {
    title: 'Contattaci',
    subtitle: 'Pronto a trasformare il tuo business? Contattaci oggi.',
    info: {
      email: {
        label: 'Email',
        value: 'info@humanaise.com'
      },
      phone: {
        label: 'Telefono',
        value: '+39 3928665301'
      },
      address: {
        label: 'Indirizzo',
        street: 'Via Calagonone 29',
        city: 'Monserrato, CA 09042',
        country: 'Italia'
      }
    },
    form: {
      labels: {
        name: 'Nome',
        email: 'Email',
        company: 'Azienda',
        message: 'Messaggio'
      },
      placeholders: {
        name: 'Il tuo nome',
        email: 'tua.email@esempio.com',
        company: 'Nome della tua azienda',
        message: 'Come possiamo aiutarti?'
      },
      submit: 'Invia Messaggio'
    }
  }
};