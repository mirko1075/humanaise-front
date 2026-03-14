import type { Language } from '../constants/i18n/types';
import type { LegalContent } from './legalTypes';

const LAST_UPDATED = '2026-03-14';

const en: LegalContent = {
  privacyPolicy: {
    title: 'Privacy Policy',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Data Controller',
        content:
          'The data controller of the website humanaise.com is:\n\nHumanaise\nOwner: Mirko Siddi\nCountry: Italy\nEmail: contact@humanaise.com',
      },
      {
        title: 'Personal Data Collected',
        content:
          'We may collect the following types of personal data when users interact with the website:',
        items: [
          'Name',
          'Email address',
          'Phone number',
          'Message content',
          'Chatbot conversation content',
          'Appointment scheduling information',
          'Technical metadata such as IP address and browser information',
        ],
      },
      {
        title: 'AI Chatbot Interactions',
        content:
          'The website may provide an AI-powered chatbot designed to assist users with information about services and to facilitate communication.\n\nMessages entered into the chatbot may be processed by automated systems in order to generate responses.\n\nConversations may be temporarily stored for purposes such as:',
        items: [
          'Improving service quality',
          'Debugging and monitoring system performance',
          'Maintaining security of the platform',
        ],
      },
      {
        title: 'Knowledge Base Query Processing',
        content:
          'User queries submitted through the chatbot may be matched against internal knowledge bases to retrieve relevant information.\n\nThe system may process user messages to identify relevant documentation or answers.\n\nAutomated processing does not produce legally binding decisions.',
      },
      {
        title: 'Appointment Scheduling',
        content:
          'Users may schedule appointments through the website. This may involve collecting:',
        items: [
          'Name',
          'Email',
          'Preferred time slots',
          'Optional additional information',
        ],
      },
      {
        title: 'WhatsApp Communication',
        content:
          'Users may contact Humanaise via WhatsApp. In this case the user\'s phone number and message content are processed in order to respond to the inquiry.\n\nWhatsApp is provided by Meta Platforms Inc. Data processing may occur outside the European Economic Area according to Meta\'s privacy framework.',
      },
      {
        title: 'Purpose of Processing',
        content: 'Personal data may be processed for the following purposes:',
        items: [
          'Responding to inquiries',
          'Providing information about services',
          'Managing appointments',
          'Operating chatbot interactions',
          'Improving the website and services',
        ],
      },
      {
        title: 'Legal Basis',
        content:
          'The legal basis for processing personal data includes:',
        items: ['User consent', 'Legitimate interest in responding to requests'],
      },
      {
        title: 'Data Retention',
        content:
          'Personal data is retained only for the time necessary to fulfill the purposes for which it was collected, unless longer retention is required by law.',
      },
      {
        title: 'User Rights',
        content: 'Under the GDPR, users have the right to:',
        items: [
          'Access their personal data',
          'Request correction',
          'Request deletion',
          'Restrict processing',
          'Object to processing',
          'Lodge a complaint with a supervisory authority',
        ],
      },
      {
        title: 'Contact',
        content:
          'For any request regarding personal data please contact:\n\ncontact@humanaise.com',
      },
    ],
  },
  cookiePolicy: {
    title: 'Cookie Policy',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'What Are Cookies',
        content:
          'Cookies are small text files stored on the user\'s device when visiting a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the owners of the site.',
      },
      {
        title: 'Types of Cookies Used',
        content: 'This website may use:',
        items: [
          'Essential cookies required for the operation of the site',
          'Optional analytics cookies to improve the website experience',
        ],
      },
      {
        title: 'Managing Cookies',
        content:
          'Users can manage cookies through their browser settings or through the cookie consent banner provided on the website. You may choose to accept or reject non-essential cookies at any time.',
      },
    ],
  },
  termsAndConditions: {
    title: 'Terms and Conditions',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Website Usage',
        content:
          'By accessing this website you agree to use it only for lawful purposes. You must not use this website in any way that causes or may cause damage to the website or impairment of its availability or accessibility.',
      },
      {
        title: 'Intellectual Property',
        content:
          'All content on this website including text, graphics, logos, and branding belongs to Humanaise. No part of this website may be reproduced, distributed, or transmitted without prior written permission.',
      },
      {
        title: 'Limitation of Liability',
        content:
          'Humanaise shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or its services. Our services are provided "as is" without warranties of any kind.',
      },
      {
        title: 'Governing Law',
        content:
          'These terms are governed by the laws of Italy. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Italy.',
      },
    ],
  },
};

const it: LegalContent = {
  privacyPolicy: {
    title: 'Informativa sulla Privacy',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Titolare del Trattamento',
        content:
          'Il titolare del trattamento dei dati del sito humanaise.com è:\n\nHumanaise\nTitolare: Mirko Siddi\nPaese: Italia\nEmail: contact@humanaise.com',
      },
      {
        title: 'Dati Personali Raccolti',
        content:
          'Potremmo raccogliere i seguenti tipi di dati personali quando gli utenti interagiscono con il sito:',
        items: [
          'Nome',
          'Indirizzo email',
          'Numero di telefono',
          'Contenuto dei messaggi',
          'Contenuto delle conversazioni con il chatbot',
          'Informazioni sulla pianificazione degli appuntamenti',
          'Metadati tecnici come indirizzo IP e informazioni sul browser',
        ],
      },
      {
        title: 'Interazioni con il Chatbot AI',
        content:
          'Il sito web può fornire un chatbot basato sull\'intelligenza artificiale progettato per assistere gli utenti con informazioni sui servizi e per facilitare la comunicazione.\n\nI messaggi inseriti nel chatbot possono essere elaborati da sistemi automatizzati al fine di generare risposte.\n\nLe conversazioni possono essere temporaneamente archiviate per scopi quali:',
        items: [
          'Miglioramento della qualità del servizio',
          'Debug e monitoraggio delle prestazioni del sistema',
          'Mantenimento della sicurezza della piattaforma',
        ],
      },
      {
        title: 'Elaborazione delle Query nella Knowledge Base',
        content:
          'Le domande degli utenti inviate tramite il chatbot possono essere confrontate con basi di conoscenza interne per recuperare informazioni pertinenti.\n\nIl sistema può elaborare i messaggi degli utenti per identificare documentazione o risposte rilevanti.\n\nL\'elaborazione automatizzata non produce decisioni giuridicamente vincolanti.',
      },
      {
        title: 'Pianificazione Appuntamenti',
        content:
          'Gli utenti possono pianificare appuntamenti tramite il sito web. Ciò può comportare la raccolta di:',
        items: [
          'Nome',
          'Email',
          'Fasce orarie preferite',
          'Informazioni aggiuntive opzionali',
        ],
      },
      {
        title: 'Comunicazione WhatsApp',
        content:
          'Gli utenti possono contattare Humanaise tramite WhatsApp. In tal caso, il numero di telefono e il contenuto del messaggio dell\'utente vengono elaborati per rispondere alla richiesta.\n\nWhatsApp è fornito da Meta Platforms Inc. Il trattamento dei dati può avvenire al di fuori dello Spazio Economico Europeo secondo il framework sulla privacy di Meta.',
      },
      {
        title: 'Finalità del Trattamento',
        content:
          'I dati personali possono essere trattati per le seguenti finalità:',
        items: [
          'Rispondere alle richieste',
          'Fornire informazioni sui servizi',
          'Gestire gli appuntamenti',
          'Operare le interazioni del chatbot',
          'Migliorare il sito web e i servizi',
        ],
      },
      {
        title: 'Base Giuridica',
        content:
          'La base giuridica per il trattamento dei dati personali include:',
        items: [
          'Consenso dell\'utente',
          'Legittimo interesse nel rispondere alle richieste',
        ],
      },
      {
        title: 'Conservazione dei Dati',
        content:
          'I dati personali sono conservati solo per il tempo necessario a soddisfare le finalità per cui sono stati raccolti, salvo che un periodo di conservazione più lungo sia richiesto dalla legge.',
      },
      {
        title: 'Diritti dell\'Utente',
        content: 'Ai sensi del GDPR, gli utenti hanno il diritto di:',
        items: [
          'Accedere ai propri dati personali',
          'Richiedere la rettifica',
          'Richiedere la cancellazione',
          'Limitare il trattamento',
          'Opporsi al trattamento',
          'Presentare un reclamo all\'autorità di controllo',
        ],
      },
      {
        title: 'Contatti',
        content:
          'Per qualsiasi richiesta riguardante i dati personali si prega di contattare:\n\ncontact@humanaise.com',
      },
    ],
  },
  cookiePolicy: {
    title: 'Politica sui Cookie',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Cosa Sono i Cookie',
        content:
          'I cookie sono piccoli file di testo memorizzati sul dispositivo dell\'utente quando visita un sito web. Sono ampiamente utilizzati per far funzionare i siti web in modo più efficiente e per fornire informazioni ai proprietari del sito.',
      },
      {
        title: 'Tipi di Cookie Utilizzati',
        content: 'Questo sito web può utilizzare:',
        items: [
          'Cookie essenziali necessari per il funzionamento del sito',
          'Cookie analitici opzionali per migliorare l\'esperienza del sito',
        ],
      },
      {
        title: 'Gestione dei Cookie',
        content:
          'Gli utenti possono gestire i cookie tramite le impostazioni del proprio browser o tramite il banner di consenso ai cookie fornito sul sito web. È possibile scegliere di accettare o rifiutare i cookie non essenziali in qualsiasi momento.',
      },
    ],
  },
  termsAndConditions: {
    title: 'Termini e Condizioni',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Utilizzo del Sito',
        content:
          'Accedendo a questo sito web accetti di utilizzarlo solo per scopi leciti. Non devi utilizzare questo sito web in alcun modo che causi o possa causare danni al sito o compromettere la sua disponibilità o accessibilità.',
      },
      {
        title: 'Proprietà Intellettuale',
        content:
          'Tutti i contenuti di questo sito web, inclusi testi, grafiche, loghi e marchi, appartengono a Humanaise. Nessuna parte di questo sito può essere riprodotta, distribuita o trasmessa senza previa autorizzazione scritta.',
      },
      {
        title: 'Limitazione di Responsabilità',
        content:
          'Humanaise non sarà responsabile per danni diretti, indiretti, incidentali o consequenziali derivanti dall\'utilizzo di questo sito web o dei suoi servizi. I nostri servizi sono forniti "così come sono" senza garanzie di alcun tipo.',
      },
      {
        title: 'Legge Applicabile',
        content:
          'Questi termini sono regolati dalla legge italiana. Qualsiasi controversia derivante da questi termini sarà soggetta alla giurisdizione esclusiva dei tribunali italiani.',
      },
    ],
  },
};

const es: LegalContent = {
  privacyPolicy: {
    title: 'Política de Privacidad',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Responsable del Tratamiento',
        content:
          'El responsable del tratamiento de datos del sitio web humanaise.com es:\n\nHumanaise\nPropietario: Mirko Siddi\nPaís: Italia\nEmail: contact@humanaise.com',
      },
      {
        title: 'Datos Personales Recopilados',
        content:
          'Podemos recopilar los siguientes tipos de datos personales cuando los usuarios interactúan con el sitio web:',
        items: [
          'Nombre',
          'Dirección de correo electrónico',
          'Número de teléfono',
          'Contenido de los mensajes',
          'Contenido de las conversaciones con el chatbot',
          'Información de programación de citas',
          'Metadatos técnicos como dirección IP e información del navegador',
        ],
      },
      {
        title: 'Interacciones con el Chatbot de IA',
        content:
          'El sitio web puede proporcionar un chatbot basado en inteligencia artificial diseñado para ayudar a los usuarios con información sobre servicios y facilitar la comunicación.\n\nLos mensajes ingresados en el chatbot pueden ser procesados por sistemas automatizados para generar respuestas.\n\nLas conversaciones pueden almacenarse temporalmente con fines como:',
        items: [
          'Mejora de la calidad del servicio',
          'Depuración y monitoreo del rendimiento del sistema',
          'Mantenimiento de la seguridad de la plataforma',
        ],
      },
      {
        title: 'Procesamiento de Consultas en la Base de Conocimiento',
        content:
          'Las consultas de los usuarios enviadas a través del chatbot pueden compararse con bases de conocimiento internas para recuperar información relevante.\n\nEl sistema puede procesar los mensajes de los usuarios para identificar documentación o respuestas relevantes.\n\nEl procesamiento automatizado no produce decisiones legalmente vinculantes.',
      },
      {
        title: 'Programación de Citas',
        content:
          'Los usuarios pueden programar citas a través del sitio web. Esto puede implicar la recopilación de:',
        items: [
          'Nombre',
          'Correo electrónico',
          'Franjas horarias preferidas',
          'Información adicional opcional',
        ],
      },
      {
        title: 'Comunicación por WhatsApp',
        content:
          'Los usuarios pueden contactar a Humanaise a través de WhatsApp. En este caso, el número de teléfono y el contenido del mensaje del usuario se procesan para responder a la consulta.\n\nWhatsApp es proporcionado por Meta Platforms Inc. El procesamiento de datos puede ocurrir fuera del Espacio Económico Europeo según el marco de privacidad de Meta.',
      },
      {
        title: 'Finalidad del Tratamiento',
        content:
          'Los datos personales pueden tratarse con las siguientes finalidades:',
        items: [
          'Responder a consultas',
          'Proporcionar información sobre servicios',
          'Gestionar citas',
          'Operar las interacciones del chatbot',
          'Mejorar el sitio web y los servicios',
        ],
      },
      {
        title: 'Base Legal',
        content:
          'La base legal para el tratamiento de datos personales incluye:',
        items: [
          'Consentimiento del usuario',
          'Interés legítimo en responder a las solicitudes',
        ],
      },
      {
        title: 'Conservación de Datos',
        content:
          'Los datos personales se conservan solo durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, salvo que la ley exija un período de conservación más largo.',
      },
      {
        title: 'Derechos del Usuario',
        content:
          'Según el RGPD, los usuarios tienen derecho a:',
        items: [
          'Acceder a sus datos personales',
          'Solicitar la rectificación',
          'Solicitar la eliminación',
          'Limitar el tratamiento',
          'Oponerse al tratamiento',
          'Presentar una reclamación ante la autoridad de control',
        ],
      },
      {
        title: 'Contacto',
        content:
          'Para cualquier solicitud relacionada con los datos personales, contactar a:\n\ncontact@humanaise.com',
      },
    ],
  },
  cookiePolicy: {
    title: 'Política de Cookies',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: '¿Qué Son las Cookies?',
        content:
          'Las cookies son pequeños archivos de texto almacenados en el dispositivo del usuario cuando visita un sitio web. Se utilizan ampliamente para que los sitios funcionen de manera más eficiente y proporcionar información a los propietarios del sitio.',
      },
      {
        title: 'Tipos de Cookies Utilizadas',
        content: 'Este sitio web puede utilizar:',
        items: [
          'Cookies esenciales necesarias para el funcionamiento del sitio',
          'Cookies analíticas opcionales para mejorar la experiencia del sitio',
        ],
      },
      {
        title: 'Gestión de Cookies',
        content:
          'Los usuarios pueden gestionar las cookies a través de la configuración de su navegador o a través del banner de consentimiento de cookies proporcionado en el sitio web. Puede elegir aceptar o rechazar las cookies no esenciales en cualquier momento.',
      },
    ],
  },
  termsAndConditions: {
    title: 'Términos y Condiciones',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Uso del Sitio Web',
        content:
          'Al acceder a este sitio web, aceptas utilizarlo únicamente con fines lícitos. No debes utilizar este sitio web de ninguna manera que cause o pueda causar daños al sitio o afectar su disponibilidad o accesibilidad.',
      },
      {
        title: 'Propiedad Intelectual',
        content:
          'Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos y marcas, pertenece a Humanaise. Ninguna parte de este sitio puede ser reproducida, distribuida o transmitida sin autorización escrita previa.',
      },
      {
        title: 'Limitación de Responsabilidad',
        content:
          'Humanaise no será responsable de daños directos, indirectos, incidentales o consecuentes derivados del uso de este sitio web o sus servicios. Nuestros servicios se proporcionan "tal cual" sin garantías de ningún tipo.',
      },
      {
        title: 'Ley Aplicable',
        content:
          'Estos términos se rigen por la legislación italiana. Cualquier disputa derivada de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales italianos.',
      },
    ],
  },
};

const fr: LegalContent = {
  privacyPolicy: {
    title: 'Politique de Confidentialité',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Responsable du Traitement',
        content:
          'Le responsable du traitement des données du site humanaise.com est :\n\nHumanaise\nPropriétaire : Mirko Siddi\nPays : Italie\nEmail : contact@humanaise.com',
      },
      {
        title: 'Données Personnelles Collectées',
        content:
          'Nous pouvons collecter les types de données personnelles suivants lorsque les utilisateurs interagissent avec le site :',
        items: [
          'Nom',
          'Adresse e-mail',
          'Numéro de téléphone',
          'Contenu des messages',
          'Contenu des conversations avec le chatbot',
          'Informations de planification de rendez-vous',
          'Métadonnées techniques telles que l\'adresse IP et les informations du navigateur',
        ],
      },
      {
        title: 'Interactions avec le Chatbot IA',
        content:
          'Le site web peut fournir un chatbot alimenté par l\'intelligence artificielle conçu pour aider les utilisateurs avec des informations sur les services et faciliter la communication.\n\nLes messages saisis dans le chatbot peuvent être traités par des systèmes automatisés afin de générer des réponses.\n\nLes conversations peuvent être temporairement stockées à des fins telles que :',
        items: [
          'Amélioration de la qualité du service',
          'Débogage et surveillance des performances du système',
          'Maintien de la sécurité de la plateforme',
        ],
      },
      {
        title: 'Traitement des Requêtes de la Base de Connaissances',
        content:
          'Les requêtes des utilisateurs soumises via le chatbot peuvent être comparées aux bases de connaissances internes pour récupérer des informations pertinentes.\n\nLe système peut traiter les messages des utilisateurs pour identifier la documentation ou les réponses pertinentes.\n\nLe traitement automatisé ne produit pas de décisions juridiquement contraignantes.',
      },
      {
        title: 'Planification de Rendez-vous',
        content:
          'Les utilisateurs peuvent planifier des rendez-vous via le site web. Cela peut impliquer la collecte de :',
        items: [
          'Nom',
          'E-mail',
          'Créneaux horaires préférés',
          'Informations supplémentaires optionnelles',
        ],
      },
      {
        title: 'Communication WhatsApp',
        content:
          'Les utilisateurs peuvent contacter Humanaise via WhatsApp. Dans ce cas, le numéro de téléphone et le contenu du message de l\'utilisateur sont traités pour répondre à la demande.\n\nWhatsApp est fourni par Meta Platforms Inc. Le traitement des données peut avoir lieu en dehors de l\'Espace Économique Européen conformément au cadre de confidentialité de Meta.',
      },
      {
        title: 'Finalité du Traitement',
        content:
          'Les données personnelles peuvent être traitées aux fins suivantes :',
        items: [
          'Répondre aux demandes',
          'Fournir des informations sur les services',
          'Gérer les rendez-vous',
          'Opérer les interactions du chatbot',
          'Améliorer le site web et les services',
        ],
      },
      {
        title: 'Base Juridique',
        content:
          'La base juridique du traitement des données personnelles comprend :',
        items: [
          'Consentement de l\'utilisateur',
          'Intérêt légitime à répondre aux demandes',
        ],
      },
      {
        title: 'Conservation des Données',
        content:
          'Les données personnelles sont conservées uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, sauf si une durée de conservation plus longue est requise par la loi.',
      },
      {
        title: 'Droits de l\'Utilisateur',
        content:
          'En vertu du RGPD, les utilisateurs ont le droit de :',
        items: [
          'Accéder à leurs données personnelles',
          'Demander la rectification',
          'Demander la suppression',
          'Limiter le traitement',
          'S\'opposer au traitement',
          'Déposer une plainte auprès de l\'autorité de contrôle',
        ],
      },
      {
        title: 'Contact',
        content:
          'Pour toute demande concernant les données personnelles, veuillez contacter :\n\ncontact@humanaise.com',
      },
    ],
  },
  cookiePolicy: {
    title: 'Politique de Cookies',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Que Sont les Cookies',
        content:
          'Les cookies sont de petits fichiers texte stockés sur l\'appareil de l\'utilisateur lors de la visite d\'un site web. Ils sont largement utilisés pour faire fonctionner les sites plus efficacement et fournir des informations aux propriétaires du site.',
      },
      {
        title: 'Types de Cookies Utilisés',
        content: 'Ce site web peut utiliser :',
        items: [
          'Cookies essentiels nécessaires au fonctionnement du site',
          'Cookies analytiques optionnels pour améliorer l\'expérience du site',
        ],
      },
      {
        title: 'Gestion des Cookies',
        content:
          'Les utilisateurs peuvent gérer les cookies via les paramètres de leur navigateur ou via la bannière de consentement aux cookies fournie sur le site. Vous pouvez choisir d\'accepter ou de refuser les cookies non essentiels à tout moment.',
      },
    ],
  },
  termsAndConditions: {
    title: 'Conditions Générales',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Utilisation du Site',
        content:
          'En accédant à ce site web, vous acceptez de l\'utiliser uniquement à des fins licites. Vous ne devez pas utiliser ce site de manière à causer ou susceptible de causer des dommages au site ou de compromettre sa disponibilité ou son accessibilité.',
      },
      {
        title: 'Propriété Intellectuelle',
        content:
          'Tout le contenu de ce site web, y compris les textes, graphiques, logos et marques, appartient à Humanaise. Aucune partie de ce site ne peut être reproduite, distribuée ou transmise sans autorisation écrite préalable.',
      },
      {
        title: 'Limitation de Responsabilité',
        content:
          'Humanaise ne saurait être tenue responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l\'utilisation de ce site web ou de ses services. Nos services sont fournis « en l\'état » sans garantie d\'aucune sorte.',
      },
      {
        title: 'Droit Applicable',
        content:
          'Les présentes conditions sont régies par le droit italien. Tout litige découlant de ces conditions sera soumis à la compétence exclusive des tribunaux italiens.',
      },
    ],
  },
};

const legalContentByLanguage: Record<Language, LegalContent> = { en, it, es, fr };

export function getLegalContent(language: Language): LegalContent {
  return legalContentByLanguage[language];
}
