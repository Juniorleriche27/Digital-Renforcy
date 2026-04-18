export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Realisations", href: "/portfolio" },
  { label: "A Propos", href: "/about" },
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
  address: "78 Av. des Champs-Elysees\nBureau 326, 75008 Paris",
  email: "hello@digitalrenforcy.com",
};

export const heroTags = [
  "Developpement Web",
  "Solutions Automatisees",
  "Consulting Digital",
];

export const clientAvatars = ["KB", "NL", "DM", "AR", "SF"];

export const dashboardKpis = [
  { icon: "users", value: "189", label: "Leads / mois", delta: "+28%" },
  { icon: "coin", value: "x3.4", label: "ROI moyen", delta: "Mois 3" },
  { icon: "target", value: "68%", label: "Conversion", delta: "+12%" },
];

export const chartPoints = [4, 18, 24, 23, 34, 46, 50, 52, 61];
export const chartMonths = ["Oct", "Nov", "Dec", "Jan", "Fev", "Mar"];

export const acquisitionSources = [
  { label: "SEO", value: 72, color: "from-indigo-500 to-blue-400" },
  { label: "Chatbot IA", value: 51, color: "from-cyan-500 to-sky-400" },
  { label: "Formulaires", value: 34, color: "from-emerald-500 to-lime-400" },
];

export const counters = [
  { icon: "layers", value: "3", suffix: "", label: "Expertises hybrides" },
  { icon: "briefcase", value: "60", suffix: "+", label: "Clients accompagnes" },
  { icon: "award", value: "5", suffix: " ans+", label: "Expertise digitale" },
  { icon: "chart", value: "3", suffix: "x", label: "ROI moyen constate" },
];

export const problems = [
  {
    icon: "globe",
    title: "Votre presence en ligne",
    items: [
      "Votre site web est vieux, lent ou inexistant - vos concurrents vous volent des clients sur Google",
      "Vous n avez pas de systeme automatise pour capter et qualifier vos prospects 24h/24",
      "Votre site vitrine ne genere pas de leads - il est juste la sans travailler pour vous",
      "Vous payez des abonnements a des plateformes tierces sans vraiment en controler les resultats",
    ],
  },
  {
    icon: "gear",
    title: "Votre transformation digitale",
    items: [
      "Vous repondez manuellement a des dizaines de questions similaires chaque jour",
      "Votre plateforme de formation ou d entrainement en ligne n est pas performante ni autonome",
      "Votre activite digitale ne genere pas de prospects de maniere autonome",
      "Vos processus numeriques necessitent trop d interventions manuelles et ne scalent pas",
    ],
  },
];

export const solutions = [
  {
    icon: "globe",
    title: "Site Web Intelligent",
    price: "A partir de 200EUR/mois",
    description:
      "Un site web professionnel cle en main pour artisans et organismes de formation. Formulaire de devis automatique, galerie realisations, chatbot IA, SEO local - tout inclus, sans surprise.",
    features: [
      "Creation + hebergement + maintenance",
      "Optimisation mobile & performances",
      "Formulaire devis / inscription automatique",
      "Chatbot IA personnalise 24h/7j",
      "SEO local (Google Maps, fiches GMB)",
      "Modifications illimitees incluses",
    ],
    href: "/services#service-web",
    borderClass: "border-indigo-500/80",
  },
  {
    icon: "target",
    title: "Acquisition Client",
    price: "A partir de 1200EUR/mois",
    description:
      "Systeme automatise d acquisition clients - Tunnels de conversion, landing pages, chatbot IA et automatisation complete du parcours prospect. Resultats mesurables des les premieres semaines.",
    features: [
      "Tunnels de conversion optimises",
      "Landing pages haute conversion",
      "Chatbot IA de qualification 24h/7j",
      "Formulaires intelligents automatises",
      "Integration CRM ou email",
      "Reporting et suivi des resultats",
    ],
    href: "/services#service-acquisition",
    borderClass: "border-orange-500/80",
  },
];

export const ecosystem = [
  {
    title: "Creation Web & SEO",
    subtitle: "Sites intelligents, performants, bien references",
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
      "Votre site web ne genere pas assez de prospects qualifies et vos processus numeriques ne sont pas automatises ?",
    items: [
      "TPE, PME et startups en croissance",
      "Artisans et entreprises du batiment",
      "Organismes de formation",
      "Toute entreprise cherchant a se digitaliser",
    ],
    cta: "Boostez votre presence digitale",
    color: "indigo",
  },
  {
    icon: "idea",
    title: "Entrepreneurs & Startups",
    quote:
      "Vous avez une idee ou un projet digital mais manquez des ressources techniques pour le concretiser ?",
    items: [
      "Startups cherchant a lancer leur MVP rapidement",
      "Entrepreneurs souhaitant automatiser leur croissance",
      "TPE/PME voulant se digitaliser efficacement",
      "Toute structure visant une presence digitale performante",
    ],
    cta: "Lancer mon projet digital",
    color: "cyan",
  },
];

export const webDevFeatures = [
  {
    title: "Chatbot IA integre",
    text: "Repond, qualifie les prospects et automatise les echanges en temps reel",
  },
  {
    title: "Responsive & SEO-friendly",
    text: "Optimise mobile, performant, visible sur Google",
  },
  {
    title: "Fonctionnalites sur mesure",
    text: "Formulaires intelligents, integrations API, tunnels de conversion",
  },
  {
    title: "Performance & securite",
    text: "Hebergement optimise, maintenance et mises a jour inclus",
  },
  {
    title: "Analytics en temps reel",
    text: "Tableau de bord pour suivre vos resultats",
  },
];

export const proofStats = [
  { value: "15+", label: "leads / mois", color: "text-emerald-400" },
  { value: "7 j", label: "premiers resultats", color: "text-orange-400" },
  { value: "0%", label: "commission", color: "text-indigo-400" },
];

export const proofMails = [
  { from: "Facebook", preview: "1 nouveau prospect est dispo...", time: "19 oct.", tag: "Recp." },
  { from: "Facebook", preview: "1 nouveau prospect est dispo...", time: "mar.", tag: "Recp." },
  { from: "Facebook", preview: "1 nouveau prospect est dispo...", time: "mar.", tag: "Recp." },
  { from: "Facebook", preview: "1 nouveau prospect est dispo...", time: "jeu.", tag: "Recp." },
  { from: "Facebook", preview: "1 nouveau prospect est dispo...", time: "Hier", tag: "Recp." },
];

export const comparison = {
  headers: ["Critere", "Autres solutions", "Digital Renforcy"],
  rows: [
    ["Commissions Habitatpresto / Houzz", "12-20% par chantier", "0%"],
    ["Cout mensuel site web", "50-200EUR (sans suivi)", "200EUR tout inclus"],
    ["Leads qualifies / mois", "Variable, non garanti", "Objectif defini"],
    ["Chatbot IA 24h/7j", "Non inclus", "Inclus"],
    ["Rapport ROI hebdo", "Opaque", "Dashboard temps reel"],
  ],
};

export const processSteps = [
  {
    step: "01",
    when: "Des le 1er contact",
    title: "Audit gratuit 30 min",
    text: "On analyse votre situation actuelle - site, visibilite Google, concurrents locaux. On identifie vos meilleures opportunites. Sans engagement, sans jargon.",
    bullets: [
      "Analyse de votre presence en ligne",
      "Benchmark concurrentiel",
      "Recommandations personnalisees",
    ],
    color: "indigo",
  },
  {
    step: "02",
    when: "Semaine 1",
    title: "Strategie sur-mesure",
    text: "On construit votre plan d action : quel service lancer en premier, quelle strategie d acquisition adopter, quels objectifs viser. Perimetre et delais clairs.",
    bullets: [
      "Choix du service adapte a votre budget",
      "Objectifs chiffres (leads, cout/lead)",
      "Calendrier de lancement",
    ],
    color: "orange",
  },
  {
    step: "03",
    when: "Semaines 2-3",
    title: "Lancement & mise en ligne",
    text: "Site web intelligent en ligne sous 15 jours. Systeme d acquisition active. Chatbot configure. Tracking installe. Vous pouvez recevoir vos premiers prospects.",
    bullets: [
      "Site web professionnel publie",
      "Systeme d acquisition automatise",
      "Tableau de bord accessible",
    ],
    color: "emerald",
  },
  {
    step: "04",
    when: "Mois 1 -> oo",
    title: "Pilotage & optimisation continue",
    text: "Chaque mois : rapport de performance, optimisation du systeme d acquisition, ameliorations du site. Vous touchez vos leads, on s occupe du reste.",
    bullets: [
      "Rapport mensuel transparent",
      "Optimisation du cout par lead",
      "Sans engagement - resiliable a tout moment",
    ],
    color: "cyan",
  },
];

export const methodSteps = [
  {
    step: "01",
    icon: "search",
    title: "Audit Gratuit",
    text: "Analyse de votre situation digitale actuelle, de vos concurrents et de vos opportunites de croissance. Sans engagement, en 30 minutes.",
  },
  {
    step: "02",
    icon: "map",
    title: "Strategie Sur-Mesure",
    text: "Plan d action personnalise selon votre secteur (renovation ou formation), vos objectifs et votre budget. KPIs et ROI previsionnels inclus.",
  },
  {
    step: "03",
    icon: "rocket",
    title: "Lancement & Deploiement",
    text: "Creation de votre site web intelligent + mise en place du systeme d acquisition automatise. Mise en ligne sous 15 jours.",
  },
  {
    step: "04",
    icon: "chart",
    title: "Pilotage & Optimisation",
    text: "Reporting transparent chaque semaine, dashboard en temps reel, optimisations continues pour ameliorer votre ROI mois apres mois.",
  },
];

export const testimonials = [
  {
    tag: "Renovation",
    quote:
      "Avant Digital Renforcy, je payais 15% de commission a Habitatpresto. Maintenant j ai mon propre site avec formulaire de devis automatique et un systeme de relance. 3x plus de prospects, 0% de commission.",
    initials: "KB",
    author: "Karim B.",
    role: "Gerant, KBM Renovation (Ile-de-France)",
    color: "orange",
  },
  {
    tag: "Formation",
    quote:
      "Nos sessions CPF affichaient complet en 2 semaines grace au site optimise et au systeme d acquisition automatise. Le chatbot repond aux questions des candidats 24h/24 - un vrai gain de temps.",
    initials: "NL",
    author: "Nathalie L.",
    role: "Directrice, Centre de Formation Pro Solutions",
    color: "indigo",
  },
  {
    tag: "Electricite",
    quote:
      "Le site web intelligent avec formulaire de devis automatique m a sauve la mise. Je recois des demandes qualifiees tous les jours, meme la nuit. ROI atteint en moins de 2 mois.",
    initials: "DM",
    author: "David M.",
    role: "Dirigeant, DM Elec & Renovation",
    color: "emerald",
  },
];

export const pricingCards = [
  {
    title: "Site Web Intelligent",
    price: "A partir de 200EUR/mois",
    features: ["Site cle en main en 15 jours", "Chatbot IA + devis auto", "SEO local inclus"],
    highlighted: false,
    icon: "globe",
  },
  {
    title: "Systeme d Acquisition Clients",
    price: "A partir de 1200EUR/mois",
    features: [
      "Premiers prospects sous 4-6 semaines",
      "Systeme automatise actif 24h/24",
      "Reporting ROI en temps reel",
    ],
    highlighted: false,
    icon: "target",
  },
  {
    title: "Offre Combinee",
    price: "Site + Ads - Tarif preferentiel",
    features: [
      "Site web + acquisition automatisee",
      "ROI x 3 garanti sur 6 mois",
      "Strategie digitale complete",
    ],
    highlighted: true,
    badge: "Recommande",
    icon: "fire",
  },
];

export const footerLinks = {
  activities: [
    { label: "Developpement Web", href: "/services#service-web" },
    { label: "Solutions Automatisees", href: "/services#service-acquisition" },
    { label: "Tous nos services", href: "/services" },
  ],
  company: [
    { label: "A Propos", href: "/about" },
    { label: "Realisations", href: "/portfolio" },
    { label: "Tarifs", href: "/pricing" },
    { label: "Blog & Ressources", href: "/blog" },
    { label: "FAQ", href: "/pricing#pricing-faq" },
  ],
  legal: [
    { label: "Mentions Legales", href: "/legal" },
    { label: "CGU", href: "/cgu" },
    { label: "Confidentialite", href: "/privacy" },
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
    value: "1EUR -> 3EUR",
    label: "de multiplication des prospects en moyenne",
  },
  {
    value: "4-6 sem",
    label: "pour les premiers resultats mesurables",
  },
  {
    value: "2 services",
    label: "complementaires pour votre croissance digitale",
  },
  {
    value: "+60",
    label: "clients accompagnes dans leur transformation digitale",
  },
];

export const servicesCombinationCards = [
  {
    title: "Site Web Intelligent",
    subtitle: "Chatbot IA · SEO local · Devis auto",
    price: "200EUR/mois",
    color: "blue",
  },
  {
    title: "Acquisition Client",
    subtitle: "Tunnels · Chatbot IA · Automation",
    price: "1200EUR/mois",
    color: "orange",
  },
];

export const acquisitionFeatureList = [
  "Audit de votre situation et de vos objectifs",
  "Strategie d acquisition sur-mesure",
  "Landing pages dediees haute performance",
  "Tunnels de conversion optimises CRO",
  "Formulaires intelligents de qualification",
];

export const webFeatureList = [
  "Creation du site web sur mesure",
  "Design professionnel adapte a votre secteur",
  "Optimisation mobile (smartphone & tablette)",
  "Hebergement haute performance inclus",
  "Maintenance technique mensuelle",
];

export const portfolioFilters = [
  { label: "Tous les projets", key: "all" },
  { label: "Acquisition Client", key: "acquisition" },
  { label: "Developpement Web", key: "web" },
];

export const portfolioProjects = [
  {
    icon: "⚡",
    category: "Acquisition Client",
    categoryColor: "orange",
    title: "Generation de leads — Electricien Ile-de-France",
    location: "Artisan electricien, 3 salaries — Seine-et-Marne",
    description:
      "Systeme automatise d acquisition client pour un electricien souhaitant remplir son carnet de commandes toute l annee sans dependre des plateformes a commission.",
    metrics: [
      { value: "+12", label: "Demandes de devis / mois" },
      { value: "x3.1", label: "Multiplication du volume de prospects" },
    ],
    tags: ["Tunnel d acquisition", "Chatbot IA", "Landing page"],
  },
  {
    icon: "🎓",
    category: "Acquisition Client",
    categoryColor: "orange",
    title: "Inscriptions CPF — Organisme de formation",
    location: "Centre de formation continue — Lyon",
    description:
      "Systeme d acquisition automatise pour remplir les sessions de formation certifiantes et augmenter les inscriptions CPF.",
    metrics: [
      { value: "94%", label: "Taux de remplissage des sessions" },
      { value: "+140%", label: "Inscriptions CPF en 3 mois" },
    ],
    tags: ["Tunnel d acquisition", "Chatbot IA", "SEO"],
  },
  {
    icon: "🍳",
    category: "Developpement Web",
    categoryColor: "blue",
    title: "Site intelligent — Cuisiniste & Salle de bain",
    location: "Cuisiniste independant — Bordeaux",
    description:
      "Creation d un site web professionnel et intelligent avec galerie de realisations, simulateur de devis en ligne et referencement local optimise.",
    metrics: [
      { value: "+8", label: "Demandes de devis / mois via le site" },
      { value: "1ere", label: "Position Google sur cuisiniste Bordeaux" },
    ],
    tags: ["Site intelligent", "SEO local", "Mobile-first"],
  },
  {
    icon: "📊",
    category: "Developpement Web",
    categoryColor: "blue",
    title: "Site vitrine + Ads — Ecole de management",
    location: "Ecole de management privee — Paris",
    description:
      "Refonte du site web et mise en place d un systeme d acquisition automatise pour augmenter les candidatures aux programmes certifiants.",
    metrics: [
      { value: "-62%", label: "Taux de rebond (78%->29%)" },
      { value: "+95%", label: "Candidatures en ligne" },
    ],
    tags: ["Site intelligent", "Chatbot IA", "SEO"],
  },
  {
    icon: "🌿",
    category: "Acquisition Client",
    categoryColor: "orange",
    title: "Leads qualifies — Paysagiste & Amenagement",
    location: "Entreprise paysagisme & amenagement — Nantes",
    description:
      "Systeme automatise d acquisition client saisonnier pour generer des demandes de devis en amenagement de jardin et terrasse toute l annee.",
    metrics: [
      { value: "+18", label: "Demandes de devis / mois en saison" },
      { value: "+7", label: "Demandes hors saison (vs 0 avant)" },
    ],
    tags: ["Tunnel d acquisition", "Chatbot IA", "Saisonnalite"],
  },
  {
    icon: "🦺",
    category: "Developpement Web",
    categoryColor: "blue",
    title: "Site intelligent — Formation Securite & SST",
    location: "Organisme de formation securite — Toulouse",
    description:
      "Site web intelligent avec catalogue de formations, inscription en ligne et integration CPF pour un organisme specialise en formations securite au travail.",
    metrics: [
      { value: "+65%", label: "Inscriptions en ligne vs telephone" },
      { value: "1ere", label: "Page Google pour 6 certifications locales" },
    ],
    tags: ["Site intelligent", "SEO local", "Catalogue formations"],
  },
];

export const portfolioGlobalStats = [
  { icon: "💼", value: "+60", label: "Projets realises" },
  { icon: "📈", value: "x3", label: "ROI moyen campagnes" },
  { icon: "🚀", value: "2-3 sem", label: "Delai site en ligne" },
  { icon: "🕒", value: "4-6 sem", label: "Premiers leads" },
  { icon: "🙂", value: "97%", label: "Clients satisfaits" },
  { icon: "🤝", value: "0EUR", label: "D engagement requis" },
];
