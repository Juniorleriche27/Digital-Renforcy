export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/portfolio" },
  { label: "À propos", href: "/about" },
  { label: "Tarifs", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+33 6 35 32 04 40",
  phoneHref: "tel:+33635320440",
  whatsapp: "https://wa.me/33635320440",
  calendly: "https://calendly.com/ibrahim-b-digitalrenforcy/30-minutes-de-discussion",
  contactForm: "/contact",
  address: "78 Av. des Champs-Élysées\nBureau 326, 75008 Paris",
  email: "hello@digitalrenforcy.com",
};

export const heroTags = [
  "Développement Web",
  "Solutions Automatisées",
  "Consulting Digital",
];

export const clientAvatars = ["KB", "NL", "DM", "AR", "SF"];

export const dashboardKpis = [
  { icon: "users", value: "189", label: "Leads / mois", delta: "+28%" },
  { icon: "coin", value: "x3.4", label: "ROI moyen", delta: "Mois 3" },
  { icon: "target", value: "68%", label: "Conversion", delta: "+12%" },
];

export const chartPoints = [4, 18, 24, 23, 34, 46, 50, 52, 61];
export const chartMonths = ["Oct", "Nov", "Déc", "Jan", "Fév", "Mar"];

export const acquisitionSources = [
  { label: "SEO", value: 80, color: "from-blue-500 to-indigo-400" },
  { label: "Chatbot IA", value: 55, color: "from-cyan-400 to-teal-400" },
  { label: "Formulaires", value: 42, color: "from-emerald-400 to-green-400" },
];

export const counters = [
  { icon: "layers", value: "3", suffix: "", label: "Expertises hybrides" },
  { icon: "briefcase", value: "60", suffix: "+", label: "Clients accompagnés" },
  { icon: "award", value: "5", suffix: " ans+", label: "Expertise digitale" },
  { icon: "chart", value: "3", suffix: "x", label: "ROI moyen constaté" },
];

export const problems = [
  {
    icon: "globe",
    title: "Votre présence en ligne",
    items: [
      "Votre site web est vieux, lent ou inexistant — vos concurrents vous volent des clients sur Google",
      "Vous n'avez pas de système automatisé pour capter et qualifier vos prospects 24h/24",
      "Votre site vitrine ne génère pas de leads — il est juste là sans travailler pour vous",
      "Vous payez des abonnements à des plateformes tierces sans vraiment en contrôler les résultats",
    ],
  },
  {
    icon: "gear",
    title: "Votre transformation digitale",
    items: [
      "Vous répondez manuellement à des dizaines de questions similaires chaque jour",
      "Votre plateforme de formation ou d'entraînement en ligne n'est pas performante ni autonome",
      "Votre activité digitale ne génère pas de prospects de manière autonome",
      "Vos processus numériques nécessitent trop d'interventions manuelles et ne scalent pas",
    ],
  },
];

export const solutions = [
  {
    icon: "globe",
    title: "Site Web Intelligent",
    price: "À partir de 200€/mois",
    description:
      "Un site web professionnel clé en main pour artisans et organismes de formation. Formulaire de devis automatique, galerie réalisations, chatbot IA, SEO local — tout inclus, sans surprise.",
    features: [
      "Création + hébergement + maintenance",
      "Optimisation mobile & performances",
      "Formulaire devis / inscription automatique",
      "Chatbot IA personnalisé 24h/7j",
      "SEO local (Google Maps, fiches GMB)",
      "Modifications illimitées incluses",
    ],
    href: "/services#service-web",
    borderClass: "border-indigo-500/80",
  },
  {
    icon: "target",
    title: "Acquisition Client",
    price: "À partir de 1 200€/mois",
    description:
      "Système automatisé d'acquisition clients — tunnels de conversion, landing pages, chatbot IA et automatisation complète du parcours prospect. Résultats mesurables dès les premières semaines.",
    features: [
      "Tunnels de conversion optimisés",
      "Landing pages haute conversion",
      "Chatbot IA de qualification 24h/7j",
      "Formulaires intelligents automatisés",
      "Intégration CRM ou email",
      "Reporting et suivi des résultats",
    ],
    href: "/services#service-acquisition",
    borderClass: "border-orange-500/80",
  },
];

export const ecosystem = [
  {
    title: "Création Web & SEO",
    subtitle: "Sites intelligents, performants, bien référencés",
    tools: [
      { name: "WordPress", color: "bg-sky-500" },
      { name: "Cloudflare", color: "bg-orange-500" },
      { name: "SEO", color: "bg-slate-100 text-slate-800" },
      { name: "Next.js", color: "bg-black" },
      { name: "Analytics", color: "bg-amber-500" },
      { name: "Google Maps", color: "bg-slate-100 text-slate-800" },
    ],
  },
  {
    title: "IA & Automatisation",
    subtitle: "Chatbot, relance et qualification automatique",
    tools: [
      { name: "ChatGPT", color: "bg-emerald-500" },
      { name: "Claude AI", color: "bg-orange-300 text-slate-800" },
      { name: "WhatsApp", color: "bg-green-500" },
      { name: "Analytics", color: "bg-amber-500" },
      { name: "Automatisation", color: "bg-orange-600" },
      { name: "E-mailing", color: "bg-sky-500" },
    ],
  },
];

export const sectors = [
  {
    icon: "building",
    title: "Entreprises & Professionnels",
    quote:
      "Votre site web ne génère pas assez de prospects qualifiés et vos processus numériques ne sont pas automatisés ?",
    items: [
      "TPE, PME et startups en croissance",
      "Artisans et entreprises du bâtiment",
      "Organismes de formation",
      "Toute entreprise cherchant à se digitaliser",
    ],
    cta: "Boostez votre présence digitale",
    color: "indigo",
  },
  {
    icon: "idea",
    title: "Entrepreneurs & Startups",
    quote:
      "Vous avez une idée ou un projet digital mais manquez des ressources techniques pour le concrétiser ?",
    items: [
      "Startups cherchant à lancer leur MVP rapidement",
      "Entrepreneurs souhaitant automatiser leur croissance",
      "TPE/PME voulant se digitaliser efficacement",
      "Toute structure visant une présence digitale performante",
    ],
    cta: "Lancer mon projet digital",
    color: "cyan",
  },
];

export const webDevFeatures = [
  {
    title: "Chatbot IA intégré",
    text: "Répond, qualifie les prospects et automatise les échanges en temps réel",
  },
  {
    title: "Responsive & SEO-friendly",
    text: "Optimisé mobile, performant, visible sur Google",
  },
  {
    title: "Fonctionnalités sur mesure",
    text: "Formulaires intelligents, intégrations API, tunnels de conversion",
  },
  {
    title: "Performance & sécurité",
    text: "Hébergement optimisé, maintenance et mises à jour inclus",
  },
  {
    title: "Analytics en temps réel",
    text: "Tableau de bord pour suivre vos résultats",
  },
];

export const proofStats = [
  { value: "15+", label: "leads / mois", color: "text-emerald-400" },
  { value: "7 j", label: "premiers résultats", color: "text-orange-400" },
  { value: "0%", label: "commission", color: "text-indigo-400" },
];

export const proofMails = [
  { from: "Facebook", preview: "1 nouveau prospect est disponible...", time: "19 oct.", tag: "Reçu" },
  { from: "Facebook", preview: "1 nouveau prospect est disponible...", time: "mar.", tag: "Reçu" },
  { from: "Facebook", preview: "1 nouveau prospect est disponible...", time: "mar.", tag: "Reçu" },
  { from: "Facebook", preview: "1 nouveau prospect est disponible...", time: "jeu.", tag: "Reçu" },
  { from: "Facebook", preview: "1 nouveau prospect est disponible...", time: "Hier", tag: "Reçu" },
];

export const comparison = {
  headers: ["Critère", "Autres solutions", "Digital Renforcy"],
  rows: [
    ["Commissions Habitatpresto / Houzz", "12–20% par chantier", "0%"],
    ["Coût mensuel site web", "50–200€ (sans suivi)", "200€ tout inclus"],
    ["Leads qualifiés / mois", "Variable, non garanti", "Objectif défini"],
    ["Chatbot IA 24h/7j", "Non inclus", "Inclus"],
    ["Rapport ROI hebdo", "Opaque", "Dashboard temps réel"],
  ],
};

export const processSteps = [
  {
    step: "01",
    when: "Dès le 1er contact",
    title: "Audit gratuit 30 min",
    text: "On analyse votre situation actuelle — site, visibilité Google, concurrents locaux. On identifie vos meilleures opportunités. Sans engagement, sans jargon.",
    bullets: [
      "Analyse de votre présence en ligne",
      "Benchmark concurrentiel",
      "Recommandations personnalisées",
    ],
    color: "indigo",
  },
  {
    step: "02",
    when: "Semaine 1",
    title: "Stratégie sur-mesure",
    text: "On construit votre plan d'action : quel service lancer en premier, quelle stratégie d'acquisition adopter, quels objectifs viser. Périmètre et délais clairs.",
    bullets: [
      "Choix du service adapté à votre budget",
      "Objectifs chiffrés (leads, coût/lead)",
      "Calendrier de lancement",
    ],
    color: "orange",
  },
  {
    step: "03",
    when: "Semaines 2–3",
    title: "Lancement & mise en ligne",
    text: "Site web intelligent en ligne sous 15 jours. Système d'acquisition activé. Chatbot configuré. Tracking installé. Vous pouvez recevoir vos premiers prospects.",
    bullets: [
      "Site web professionnel publié",
      "Système d'acquisition automatisé",
      "Tableau de bord accessible",
    ],
    color: "emerald",
  },
  {
    step: "04",
    when: "Mois 1 → ∞",
    title: "Pilotage & optimisation continue",
    text: "Chaque mois : rapport de performance, optimisation du système d'acquisition, améliorations du site. Vous touchez vos leads, on s'occupe du reste.",
    bullets: [
      "Rapport mensuel transparent",
      "Optimisation du coût par lead",
      "Sans engagement — résiliable à tout moment",
    ],
    color: "cyan",
  },
];

export const methodSteps = [
  {
    step: "01",
    icon: "search",
    title: "Audit Gratuit",
    text: "Analyse de votre situation digitale actuelle, de vos concurrents et de vos opportunités de croissance. Sans engagement, en 30 minutes.",
  },
  {
    step: "02",
    icon: "map",
    title: "Stratégie Sur-Mesure",
    text: "Plan d'action personnalisé selon votre secteur (rénovation ou formation), vos objectifs et votre budget. KPIs et ROI prévisionnels inclus.",
  },
  {
    step: "03",
    icon: "rocket",
    title: "Lancement & Déploiement",
    text: "Création de votre site web intelligent + mise en place du système d'acquisition automatisé. Mise en ligne sous 15 jours.",
  },
  {
    step: "04",
    icon: "chart",
    title: "Pilotage & Optimisation",
    text: "Reporting transparent chaque semaine, dashboard en temps réel, optimisations continues pour améliorer votre ROI mois après mois.",
  },
];

export const testimonials = [
  {
    tag: "Rénovation",
    quote:
      "Avant Digital Renforcy, je payais 15% de commission à Habitatpresto. Maintenant j'ai mon propre site avec formulaire de devis automatique et un système de relance. 3x plus de prospects, 0% de commission.",
    initials: "KB",
    author: "Karim B.",
    role: "Gérant, KBM Rénovation (Île-de-France)",
    color: "orange",
  },
  {
    tag: "Formation",
    quote:
      "Nos sessions CPF affichaient complet en 2 semaines grâce au site optimisé et au système d'acquisition automatisé. Le chatbot répond aux questions des candidats 24h/24 — un vrai gain de temps.",
    initials: "NL",
    author: "Nathalie L.",
    role: "Directrice, Centre de Formation Pro Solutions",
    color: "indigo",
  },
  {
    tag: "Électricité",
    quote:
      "Le site web intelligent avec formulaire de devis automatique m'a sauvé la mise. Je reçois des demandes qualifiées tous les jours, même la nuit. ROI atteint en moins de 2 mois.",
    initials: "DM",
    author: "David M.",
    role: "Dirigeant, DM Élec & Rénovation",
    color: "emerald",
  },
];

export const pricingCards = [
  {
    title: "Site Web Intelligent",
    price: "À partir de 200€/mois",
    features: ["Site clé en main en 15 jours", "Chatbot IA + devis auto", "SEO local inclus"],
    highlighted: false,
    icon: "globe",
  },
  {
    title: "Système d'Acquisition Clients",
    price: "À partir de 1 200€/mois",
    features: [
      "Premiers prospects sous 4–6 semaines",
      "Système automatisé actif 24h/24",
      "Reporting ROI en temps réel",
    ],
    highlighted: false,
    icon: "target",
  },
  {
    title: "Offre Combinée",
    price: "Site + Ads — Tarif préférentiel",
    features: [
      "Site web + acquisition automatisée",
      "ROI x3 garanti sur 6 mois",
      "Stratégie digitale complète",
    ],
    highlighted: true,
    badge: "Recommandé",
    icon: "fire",
  },
];

export const footerLinks = {
  activities: [
    { label: "Développement Web", href: "/services#service-web" },
    { label: "Solutions Automatisées", href: "/services#service-acquisition" },
    { label: "Tous nos services", href: "/services" },
  ],
  company: [
    { label: "À propos", href: "/about" },
    { label: "Réalisations", href: "/portfolio" },
    { label: "Tarifs", href: "/pricing" },
    { label: "Blog & Ressources", href: "/blog" },
    { label: "FAQ", href: "/pricing#pricing-faq" },
  ],
  legal: [
    { label: "Mentions Légales", href: "/legal" },
    { label: "CGV", href: "/cgu" },
    { label: "Confidentialité", href: "/privacy" },
    { label: "Remboursement", href: "/remboursement" },
    { label: "Plan du site", href: "/#top" },
  ],
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/102108848/", key: "in" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576549082226", key: "f" },
  { label: "Instagram", href: "https://www.instagram.com/digitalrenforcy", key: "ig" },
  { label: "YouTube", href: "https://www.youtube.com/@DigitalRenforcy-jd4ru", key: "yt" },
  { label: "TikTok", href: "https://www.tiktok.com/@digitalrenforcy", key: "tt" },
  { label: "Calendly", href: "https://calendly.com/ibrahim-b-digitalrenforcy/30-minutes-de-discussion", key: "cal" },
];

export const servicesOverviewStats = [
  {
    value: "1€ → 3€",
    label: "de multiplication des prospects en moyenne",
  },
  {
    value: "4–6 sem",
    label: "pour les premiers résultats mesurables",
  },
  {
    value: "2 services",
    label: "complémentaires pour votre croissance digitale",
  },
  {
    value: "+60",
    label: "clients accompagnés dans leur transformation digitale",
  },
];

export const servicesCombinationCards = [
  {
    title: "Site Web Intelligent",
    subtitle: "Chatbot IA · SEO local · Devis auto",
    price: "200€/mois",
    color: "blue",
  },
  {
    title: "Acquisition Client",
    subtitle: "Tunnels · Chatbot IA · Automation",
    price: "1 200€/mois",
    color: "orange",
  },
];

export const acquisitionFeatureList = [
  "Audit de votre situation et de vos objectifs",
  "Stratégie d'acquisition sur-mesure",
  "Landing pages dédiées haute performance",
  "Tunnels de conversion optimisés CRO",
  "Formulaires intelligents de qualification",
];

export const webFeatureList = [
  "Création du site web sur mesure",
  "Design professionnel adapté à votre secteur",
  "Optimisation mobile (smartphone & tablette)",
  "Hébergement haute performance inclus",
  "Maintenance technique mensuelle",
];

export const portfolioFilters = [
  { label: "Tous les projets", key: "all" },
  { label: "Acquisition Client", key: "acquisition" },
  { label: "Développement Web", key: "web" },
];

export const portfolioProjects = [
  {
    icon: "⚡",
    category: "Acquisition Client",
    categoryColor: "orange",
    title: "Génération de leads — Électricien Île-de-France",
    location: "Artisan électricien, 3 salariés — Seine-et-Marne",
    description:
      "Système automatisé d'acquisition client pour un électricien souhaitant remplir son carnet de commandes toute l'année sans dépendre des plateformes à commission.",
    metrics: [
      { value: "+12", label: "Demandes de devis / mois" },
      { value: "x3.1", label: "Multiplication du volume de prospects" },
    ],
    tags: ["Tunnel d'acquisition", "Chatbot IA", "Landing page"],
  },
  {
    icon: "🎓",
    category: "Acquisition Client",
    categoryColor: "orange",
    title: "Inscriptions CPF — Organisme de formation",
    location: "Centre de formation continue — Lyon",
    description:
      "Système d'acquisition automatisé pour remplir les sessions de formation certifiantes et augmenter les inscriptions CPF.",
    metrics: [
      { value: "94%", label: "Taux de remplissage des sessions" },
      { value: "+140%", label: "Inscriptions CPF en 3 mois" },
    ],
    tags: ["Tunnel d'acquisition", "Chatbot IA", "SEO"],
  },
  {
    icon: "🍳",
    category: "Développement Web",
    categoryColor: "blue",
    title: "Site intelligent — Cuisiniste & Salle de bain",
    location: "Cuisiniste indépendant — Bordeaux",
    description:
      "Création d'un site web professionnel et intelligent avec galerie de réalisations, simulateur de devis en ligne et référencement local optimisé.",
    metrics: [
      { value: "+8", label: "Demandes de devis / mois via le site" },
      { value: "1ère", label: "Position Google sur cuisiniste Bordeaux" },
    ],
    tags: ["Site intelligent", "SEO local", "Mobile-first"],
  },
  {
    icon: "📊",
    category: "Développement Web",
    categoryColor: "blue",
    title: "Site vitrine + Ads — École de management",
    location: "École de management privée — Paris",
    description:
      "Refonte du site web et mise en place d'un système d'acquisition automatisé pour augmenter les candidatures aux programmes certifiants.",
    metrics: [
      { value: "-62%", label: "Taux de rebond (78% → 29%)" },
      { value: "+95%", label: "Candidatures en ligne" },
    ],
    tags: ["Site intelligent", "Chatbot IA", "SEO"],
  },
  {
    icon: "🌿",
    category: "Acquisition Client",
    categoryColor: "orange",
    title: "Leads qualifiés — Paysagiste & Aménagement",
    location: "Entreprise paysagisme & aménagement — Nantes",
    description:
      "Système automatisé d'acquisition client saisonnier pour générer des demandes de devis en aménagement de jardin et terrasse toute l'année.",
    metrics: [
      { value: "+18", label: "Demandes de devis / mois en saison" },
      { value: "+7", label: "Demandes hors saison (vs 0 avant)" },
    ],
    tags: ["Tunnel d'acquisition", "Chatbot IA", "Saisonnalité"],
  },
  {
    icon: "🦺",
    category: "Développement Web",
    categoryColor: "blue",
    title: "Site intelligent — Formation Sécurité & SST",
    location: "Organisme de formation sécurité — Toulouse",
    description:
      "Site web intelligent avec catalogue de formations, inscription en ligne et intégration CPF pour un organisme spécialisé en formations sécurité au travail.",
    metrics: [
      { value: "+65%", label: "Inscriptions en ligne vs téléphone" },
      { value: "1ère", label: "Page Google pour 6 certifications locales" },
    ],
    tags: ["Site intelligent", "SEO local", "Catalogue formations"],
  },
];

export const portfolioGlobalStats = [
  { icon: "💼", value: "+60", label: "Projets réalisés" },
  { icon: "📈", value: "x3", label: "ROI moyen campagnes" },
  { icon: "🚀", value: "2–3 sem", label: "Délai site en ligne" },
  { icon: "🕒", value: "4–6 sem", label: "Premiers leads" },
  { icon: "🙂", value: "97%", label: "Clients satisfaits" },
  { icon: "🤝", value: "0€", label: "D'engagement requis" },
];
