import type { NewsItemData } from '../types/news';

const newsData: NewsItemData[] = [
  {
    id: 'peas-in-the-pod-automation',
    date: '2025-03-10',
    client: {
      name: 'Peas in The Pod',
      website: 'https://peasinthepod.com/',
    },
    translations: {
      en: {
        title: 'AI-powered Transcription & Translation Automation for Peas in The Pod',
        metrics: [
          {
            label: 'Pipeline stages',
            value: '10',
            detail: 'From ingestion to delivery and audit logging',
          },
          {
            label: 'Core AI engines',
            value: '2',
            detail: 'Deepgram Nova 2 and GPT-4',
          },
          {
            label: 'Architecture choices',
            value: '5',
            detail: 'Deterministic, validated, SaaS-ready flow',
          },
        ],
        content: `In March 2025, Humanaise deployed an advanced AI-powered transcription and translation automation system for Peas in The Pod, a research company conducting long-form medical interviews.

The challenge was clear:

• Dozens of hours of recorded interviews in different languages
• Accurate medical translation requirements
• Strict terminology consistency across projects
• Structured delivery and archival expectations

We built a modular automation pipeline including:

• Audio ingestion from structured cloud folders
• Automated transcription using Deepgram Nova 2
• Chunked processing for long recordings
• GPT-4 medical translation with terminology constraints
• Project-specific glossary integration
• Post-processing editorial AI layer for coherence and correction
• Structured diarization for interviewer and interviewee roles
• Automatic Google Docs generation
• OneDrive structured archival
• Audit logging and tracking

Key architectural decisions:

• Deterministic flow orchestration
• Multi-step quality validation
• Glossary-based correction memory
• SaaS-ready backend structure
• Extensible API layer

This project marked the transition from experimentation to production-grade AI workflows.

It was the first system designed to prioritize translation correctness over token efficiency, because in medical research, accuracy is non-negotiable.`,
        tags: ['AI', 'Automation', 'Medical Research'],
      },
      it: {
        title: 'Automazione AI per trascrizione e traduzione per Peas in The Pod',
        metrics: [
          {
            label: 'Fasi della pipeline',
            value: '10',
            detail: 'Dall\'ingestione alla consegna e al logging di audit',
          },
          {
            label: 'Motori AI core',
            value: '2',
            detail: 'Deepgram Nova 2 e GPT-4',
          },
          {
            label: 'Scelte architetturali',
            value: '5',
            detail: 'Flusso deterministico, validato e pronto per il SaaS',
          },
        ],
        content: `Nel marzo 2025, Humanaise ha rilasciato per Peas in The Pod, azienda di ricerca che conduce interviste mediche approfondite, un sistema avanzato di automazione AI per trascrizione e traduzione.

La sfida era chiara:

• Decine di ore di interviste registrate in lingue diverse
• Requisiti di traduzione medica ad alta accuratezza
• Coerenza terminologica rigorosa tra i progetti
• Esigenze strutturate di consegna e archiviazione

Abbiamo realizzato una pipeline di automazione modulare che include:

• Ingestione audio da cartelle cloud strutturate
• Trascrizione automatica con Deepgram Nova 2
• Elaborazione a blocchi per registrazioni lunghe
• Traduzione medica con GPT-4 e vincoli terminologici
• Integrazione di glossari specifici per progetto
• Livello editoriale AI di post-processing per coerenza e correzione
• Diarizzazione strutturata per ruoli di intervistatore e intervistato
• Generazione automatica di Google Docs
• Archiviazione strutturata su OneDrive
• Logging e tracciamento delle attività

Decisioni architetturali chiave:

• Orchestrazione deterministica del flusso
• Validazione qualità su più passaggi
• Memoria di correzione basata su glossari
• Struttura backend pronta per il SaaS
• Layer API estendibile

Questo progetto ha segnato il passaggio dalla sperimentazione a workflow AI pronti per la produzione.

È stato il primo sistema progettato per dare priorità alla correttezza della traduzione rispetto all'efficienza dei token, perché nella ricerca medica l'accuratezza non è negoziabile.`,
        tags: ['AI', 'Automazione', 'Ricerca Medica'],
      },
      es: {
        title: 'Automatización con IA de transcripción y traducción para Peas in The Pod',
        metrics: [
          {
            label: 'Etapas del pipeline',
            value: '10',
            detail: 'Desde la ingestión hasta la entrega y el registro de auditoría',
          },
          {
            label: 'Motores de IA principales',
            value: '2',
            detail: 'Deepgram Nova 2 y GPT-4',
          },
          {
            label: 'Decisiones de arquitectura',
            value: '5',
            detail: 'Flujo determinista, validado y preparado para SaaS',
          },
        ],
        content: `En marzo de 2025, Humanaise desplegó para Peas in The Pod, una empresa de investigación que realiza entrevistas médicas extensas, un sistema avanzado de automatización con IA para transcripción y traducción.

El reto era claro:

• Decenas de horas de entrevistas grabadas en distintos idiomas
• Requisitos de traducción médica con alta precisión
• Consistencia terminológica estricta entre proyectos
• Necesidades estructuradas de entrega y archivado

Construimos un pipeline de automatización modular que incluye:

• Ingesta de audio desde carpetas cloud estructuradas
• Transcripción automática con Deepgram Nova 2
• Procesamiento por bloques para grabaciones largas
• Traducción médica con GPT-4 y restricciones terminológicas
• Integración de glosarios específicos por proyecto
• Capa editorial de IA en postprocesado para coherencia y corrección
• Diarización estructurada para los roles de entrevistador y entrevistado
• Generación automática de Google Docs
• Archivado estructurado en OneDrive
• Registro y trazabilidad de auditoría

Decisiones arquitectónicas clave:

• Orquestación determinista del flujo
• Validación de calidad en varios pasos
• Memoria de corrección basada en glosarios
• Estructura backend preparada para SaaS
• Capa de API extensible

Este proyecto marcó el paso de la experimentación a flujos de trabajo de IA listos para producción.

Fue el primer sistema diseñado para priorizar la corrección de la traducción por encima de la eficiencia de tokens, porque en la investigación médica la precisión no es negociable.`,
        tags: ['IA', 'Automatización', 'Investigación Médica'],
      },
      fr: {
        title: 'Automatisation IA de transcription et de traduction pour Peas in The Pod',
        metrics: [
          {
            label: 'Étapes du pipeline',
            value: '10',
            detail: 'De l’ingestion à la livraison et au journal d’audit',
          },
          {
            label: 'Moteurs IA principaux',
            value: '2',
            detail: 'Deepgram Nova 2 et GPT-4',
          },
          {
            label: 'Choix d’architecture',
            value: '5',
            detail: 'Flux déterministe, validé et prêt pour le SaaS',
          },
        ],
        content: `En mars 2025, Humanaise a déployé pour Peas in The Pod, une société de recherche menant de longs entretiens médicaux, un système avancé d’automatisation IA pour la transcription et la traduction.

Le défi était clair :

• Des dizaines d’heures d’entretiens enregistrés dans différentes langues
• Des exigences élevées de précision en traduction médicale
• Une cohérence terminologique stricte entre les projets
• Des attentes structurées en matière de livraison et d’archivage

Nous avons conçu un pipeline d’automatisation modulaire comprenant :

• L’ingestion audio depuis des dossiers cloud structurés
• La transcription automatique avec Deepgram Nova 2
• Un traitement par segments pour les enregistrements longs
• La traduction médicale avec GPT-4 sous contraintes terminologiques
• L’intégration de glossaires spécifiques à chaque projet
• Une couche éditoriale IA de post-traitement pour la cohérence et la correction
• Une diarisation structurée pour les rôles d’intervieweur et d’interviewé
• La génération automatique de Google Docs
• Un archivage structuré sur OneDrive
• Un journal d’audit et de suivi

Décisions d’architecture clés :

• Orchestration déterministe des flux
• Validation qualité en plusieurs étapes
• Mémoire de correction basée sur les glossaires
• Structure backend prête pour le SaaS
• Couche API extensible

Ce projet a marqué le passage de l’expérimentation à des workflows IA prêts pour la production.

Il s’agissait du premier système conçu pour privilégier la justesse de la traduction plutôt que l’efficacité des tokens, car dans la recherche médicale, la précision n’est pas négociable.`,
        tags: ['IA', 'Automatisation', 'Recherche Médicale'],
      },
    },
  },
  {
    id: 'humanaise-operational-ai-2025',
    date: '2025-11-01',
    client: {
      name: 'Humanaise',
      website: null,
    },
    translations: {
      en: {
        title: 'Humanaise evolves into Operational AI Automation for SMEs',
        metrics: [
          {
            label: 'Key milestones',
            value: '7',
            detail: 'From backend modularization to traceable integrations',
          },
          {
            label: 'Execution layers',
            value: '2',
            detail: 'n8n orchestration plus Python/Node logic',
          },
          {
            label: 'Integration families',
            value: '4',
            detail: 'Microsoft 365, WhatsApp API, Google Docs, OneDrive',
          },
        ],
        content: `Throughout 2025, Humanaise evolved from a set of isolated automation experiments into a structured AI automation agency focused on operational systems for SMEs.

Key milestones:

• Migration from ad-hoc scripts to modular backend architecture
• Separation between orchestration layer using n8n and business logic handled by Python and Node services
• Multi-tenant database design
• Audit-first development mindset
• Environment isolation per client
• Structured logging and traceability
• Integration-first approach across Microsoft 365, WhatsApp API, Google Docs, and OneDrive

Strategic direction:

Humanaise does not build chatbots.

Humanaise builds operational systems where AI acts as:

• Intake layer
• Decision layer
• Data normalization layer
• Process accelerator

The focus shifted from AI demos to AI embedded inside business operations.

The result is a repeatable architecture that can scale across multiple industries.`,
        tags: ['AI', 'SaaS', 'Automation'],
      },
      it: {
        title: 'Humanaise evolve verso l\'Operational AI Automation per le PMI',
        metrics: [
          {
            label: 'Traguardi chiave',
            value: '7',
            detail: 'Dalla modularizzazione del backend alle integrazioni tracciabili',
          },
          {
            label: 'Layer esecutivi',
            value: '2',
            detail: 'Orchestrazione n8n più logica Python/Node',
          },
          {
            label: 'Famiglie di integrazione',
            value: '4',
            detail: 'Microsoft 365, WhatsApp API, Google Docs, OneDrive',
          },
        ],
        content: `Durante il 2025, Humanaise è passata da una serie di esperimenti di automazione isolati a un'agenzia strutturata di AI automation focalizzata su sistemi operativi per PMI.

Traguardi principali:

• Migrazione da script ad hoc a un'architettura backend modulare
• Separazione tra layer di orchestrazione con n8n e logica di business gestita da servizi Python e Node
• Progettazione database multi-tenant
• Approccio di sviluppo audit-first
• Isolamento degli ambienti per cliente
• Logging strutturato e tracciabilità
• Approccio integration-first su Microsoft 365, WhatsApp API, Google Docs e OneDrive

Direzione strategica:

Humanaise non costruisce chatbot.

Humanaise costruisce sistemi operativi in cui l'AI agisce come:

• Layer di intake
• Layer decisionale
• Layer di normalizzazione dei dati
• Acceleratore di processo

Il focus si è spostato dalle demo AI all'AI integrata nei processi operativi aziendali.

Il risultato è un'architettura ripetibile che può scalare su più settori.`,
        tags: ['AI', 'SaaS', 'Automazione'],
      },
      es: {
        title: 'Humanaise evoluciona hacia la automatización de IA operativa para pymes',
        metrics: [
          {
            label: 'Hitos clave',
            value: '7',
            detail: 'Desde la modularización del backend hasta las integraciones trazables',
          },
          {
            label: 'Capas de ejecución',
            value: '2',
            detail: 'Orquestación con n8n más lógica en Python/Node',
          },
          {
            label: 'Familias de integración',
            value: '4',
            detail: 'Microsoft 365, WhatsApp API, Google Docs y OneDrive',
          },
        ],
        content: `Durante 2025, Humanaise pasó de ser un conjunto de experimentos aislados de automatización a una agencia estructurada de automatización con IA centrada en sistemas operativos para pymes.

Hitos principales:

• Migración de scripts ad hoc a una arquitectura backend modular
• Separación entre la capa de orquestación con n8n y la lógica de negocio gestionada por servicios en Python y Node
• Diseño de base de datos multi-tenant
• Mentalidad de desarrollo audit-first
• Aislamiento de entornos por cliente
• Logging estructurado y trazabilidad
• Enfoque integration-first en Microsoft 365, WhatsApp API, Google Docs y OneDrive

Dirección estratégica:

Humanaise no construye chatbots.

Humanaise construye sistemas operativos donde la IA actúa como:

• Capa de intake
• Capa de decisión
• Capa de normalización de datos
• Acelerador de procesos

El foco pasó de las demos de IA a la IA integrada dentro de las operaciones del negocio.

El resultado es una arquitectura repetible que puede escalar en múltiples industrias.`,
        tags: ['IA', 'SaaS', 'Automatización'],
      },
      fr: {
        title: 'Humanaise évolue vers l’automatisation IA opérationnelle pour les PME',
        metrics: [
          {
            label: 'Jalons clés',
            value: '7',
            detail: 'De la modularisation du backend aux intégrations traçables',
          },
          {
            label: 'Couches d’exécution',
            value: '2',
            detail: 'Orchestration n8n plus logique Python/Node',
          },
          {
            label: 'Familles d’intégration',
            value: '4',
            detail: 'Microsoft 365, WhatsApp API, Google Docs et OneDrive',
          },
        ],
        content: `Tout au long de 2025, Humanaise est passée d’une série d’expériences d’automatisation isolées à une agence structurée d’automatisation IA centrée sur des systèmes opérationnels pour les PME.

Jalons principaux :

• Migration de scripts ad hoc vers une architecture backend modulaire
• Séparation entre la couche d’orchestration avec n8n et la logique métier gérée par des services Python et Node
• Conception d’une base de données multi-tenant
• Approche de développement audit-first
• Isolation des environnements par client
• Logging structuré et traçabilité
• Approche integration-first sur Microsoft 365, WhatsApp API, Google Docs et OneDrive

Orientation stratégique :

Humanaise ne construit pas de chatbots.

Humanaise construit des systèmes opérationnels où l’IA agit comme :

• Couche d’intake
• Couche de décision
• Couche de normalisation des données
• Accélérateur de processus

Le focus est passé des démonstrations IA à une IA intégrée dans les opérations métier.

Le résultat est une architecture reproductible capable de s’étendre à plusieurs secteurs.`,
        tags: ['IA', 'SaaS', 'Automatisation'],
      },
    },
  },
  {
    id: 'edilcos-ai-quotation-system',
    date: '2026-02-25',
    client: {
      name: 'Edilcos',
      website: 'https://www.edilcosediliziaeservizi.com/',
    },
    translations: {
      en: {
        title: 'Multi-channel AI Quotation Management System goes live',
        metrics: [
          {
            label: 'Channels unified',
            value: '3',
            detail: 'WhatsApp, email, and Teams in one flow',
          },
          {
            label: 'Automated actions',
            value: '12',
            detail: 'From intake and updates to notifications and replies',
          },
          {
            label: 'Control patterns',
            value: '6',
            detail: 'State, audit, storage, normalization, and SaaS-readiness',
          },
        ],
        content: `In early 2026, Humanaise deployed its first full operational multi-channel AI system for Edilcos, a construction company managing quotation requests from multiple sources.

Initial problem:

• Requests arriving from WhatsApp
• Requests arriving via email
• Internal coordination through Teams
• Manual data entry
• No unified tracking
• Risk of missed deadlines

We implemented a production-grade AI orchestration system that:

• Responds naturally on WhatsApp
• Detects intent and extracts structured data
• Creates or updates clients automatically
• Generates or updates quotation records
• Logs every action in an audit database
• Synchronizes data with Excel and OneDrive
• Creates structured Teams threads
• Allows internal assignment directly from Teams
• Tracks deadlines
• Notifies both assigned staff and clients
• Allows replying to WhatsApp directly from Teams
• Parses incoming emails and updates existing records

Architectural highlights:

• Deterministic orchestration layer
• State-based flow management
• Audit logging for every transition
• Cloud-native storage structure
• Multi-channel normalization
• Expandable SaaS-ready architecture

This system is not a chatbot.

It is an operational control layer for quotation management.

It represents the first fully integrated, multi-channel AI workflow deployed by Humanaise in a traditional SME.`,
        tags: ['AI', 'Construction', 'Automation'],
      },
      it: {
        title: 'Va live un sistema AI multi-canale per la gestione dei preventivi',
        metrics: [
          {
            label: 'Canali unificati',
            value: '3',
            detail: 'WhatsApp, email e Teams in un unico flusso',
          },
          {
            label: 'Azioni automatizzate',
            value: '12',
            detail: 'Dall\'intake e aggiornamenti fino a notifiche e risposte',
          },
          {
            label: 'Pattern di controllo',
            value: '6',
            detail: 'Stato, audit, storage, normalizzazione e readiness SaaS',
          },
        ],
        content: `All'inizio del 2026, Humanaise ha rilasciato per Edilcos, azienda del settore costruzioni che gestisce richieste di preventivo da più fonti, il suo primo sistema AI operativo multi-canale completo.

Problema iniziale:

• Richieste in arrivo da WhatsApp
• Richieste in arrivo via email
• Coordinamento interno tramite Teams
• Inserimento dati manuale
• Nessun tracciamento unificato
• Rischio di scadenze mancate

Abbiamo implementato un sistema di orchestrazione AI production-grade che:

• Risponde in modo naturale su WhatsApp
• Rileva l'intento ed estrae dati strutturati
• Crea o aggiorna automaticamente i clienti
• Genera o aggiorna i record dei preventivi
• Registra ogni azione in un database di audit
• Sincronizza i dati con Excel e OneDrive
• Crea thread strutturati in Teams
• Consente l'assegnazione interna direttamente da Teams
• Tiene traccia delle scadenze
• Notifica sia il personale assegnato sia i clienti
• Permette di rispondere a WhatsApp direttamente da Teams
• Analizza le email in ingresso e aggiorna i record esistenti

Punti architetturali principali:

• Layer di orchestrazione deterministico
• Gestione dei flussi basata sullo stato
• Audit logging per ogni transizione
• Struttura di storage cloud-native
• Normalizzazione multi-canale
• Architettura espandibile e pronta per il SaaS

Questo sistema non è un chatbot.

È un layer di controllo operativo per la gestione dei preventivi.

Rappresenta il primo workflow AI completamente integrato e multi-canale distribuito da Humanaise in una PMI tradizionale.`,
        tags: ['AI', 'Costruzioni', 'Automazione'],
      },
      es: {
        title: 'Entra en producción un sistema multicanal con IA para la gestión de presupuestos',
        metrics: [
          {
            label: 'Canales unificados',
            value: '3',
            detail: 'WhatsApp, email y Teams en un solo flujo',
          },
          {
            label: 'Acciones automatizadas',
            value: '12',
            detail: 'Desde intake y actualizaciones hasta notificaciones y respuestas',
          },
          {
            label: 'Patrones de control',
            value: '6',
            detail: 'Estado, auditoría, almacenamiento, normalización y preparación SaaS',
          },
        ],
        content: `A comienzos de 2026, Humanaise desplegó para Edilcos, una empresa del sector construcción que gestiona solicitudes de presupuesto desde múltiples fuentes, su primer sistema operativo integral de IA multicanal.

Problema inicial:

• Solicitudes que llegan por WhatsApp
• Solicitudes que llegan por email
• Coordinación interna a través de Teams
• Introducción manual de datos
• Sin seguimiento unificado
• Riesgo de incumplir plazos

Implementamos un sistema de orquestación con IA preparado para producción que:

• Responde de forma natural en WhatsApp
• Detecta intención y extrae datos estructurados
• Crea o actualiza clientes automáticamente
• Genera o actualiza registros de presupuestos
• Registra cada acción en una base de datos de auditoría
• Sincroniza los datos con Excel y OneDrive
• Crea hilos estructurados en Teams
• Permite asignación interna directamente desde Teams
• Hace seguimiento de plazos
• Notifica tanto al personal asignado como a los clientes
• Permite responder en WhatsApp directamente desde Teams
• Procesa emails entrantes y actualiza registros existentes

Puntos arquitectónicos clave:

• Capa de orquestación determinista
• Gestión de flujos basada en estado
• Registro de auditoría en cada transición
• Estructura de almacenamiento cloud-native
• Normalización multicanal
• Arquitectura ampliable y preparada para SaaS

Este sistema no es un chatbot.

Es una capa de control operativo para la gestión de presupuestos.

Representa el primer workflow de IA completamente integrado y multicanal desplegado por Humanaise en una pyme tradicional.`,
        tags: ['IA', 'Construcción', 'Automatización'],
      },
      fr: {
        title: 'Mise en production d’un système IA multicanal de gestion des devis',
        metrics: [
          {
            label: 'Canaux unifiés',
            value: '3',
            detail: 'WhatsApp, email et Teams dans un seul flux',
          },
          {
            label: 'Actions automatisées',
            value: '12',
            detail: 'De l’intake et des mises à jour jusqu’aux notifications et réponses',
          },
          {
            label: 'Patterns de contrôle',
            value: '6',
            detail: 'État, audit, stockage, normalisation et préparation SaaS',
          },
        ],
        content: `Début 2026, Humanaise a déployé pour Edilcos, une entreprise du secteur de la construction qui gère des demandes de devis provenant de plusieurs sources, son premier système IA opérationnel multicanal complet.

Problème initial :

• Des demandes arrivant via WhatsApp
• Des demandes arrivant par email
• Une coordination interne via Teams
• Une saisie manuelle des données
• Aucun suivi unifié
• Un risque d’échéances manquées

Nous avons mis en place un système d’orchestration IA prêt pour la production qui :

• Répond naturellement sur WhatsApp
• Détecte l’intention et extrait des données structurées
• Crée ou met à jour automatiquement les clients
• Génère ou met à jour les enregistrements de devis
• Journalise chaque action dans une base d’audit
• Synchronise les données avec Excel et OneDrive
• Crée des fils structurés dans Teams
• Permet l’attribution interne directement depuis Teams
• Suit les échéances
• Notifie à la fois les collaborateurs assignés et les clients
• Permet de répondre à WhatsApp directement depuis Teams
• Analyse les emails entrants et met à jour les enregistrements existants

Points forts de l’architecture :

• Couche d’orchestration déterministe
• Gestion des flux basée sur l’état
• Journalisation d’audit à chaque transition
• Structure de stockage cloud-native
• Normalisation multicanal
• Architecture extensible et prête pour le SaaS

Ce système n’est pas un chatbot.

Il s’agit d’une couche de contrôle opérationnel pour la gestion des devis.

Il représente le premier workflow IA entièrement intégré et multicanal déployé par Humanaise dans une PME traditionnelle.`,
        tags: ['IA', 'Construction', 'Automatisation'],
      },
    },
  },
];

export default newsData;
