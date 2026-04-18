export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "quote"; text: string; author?: string };

export type Article = {
  slug: string;
  category: string;
  categoryColor: "blue" | "orange" | "emerald" | "indigo";
  date: string;
  read: string;
  title: string;
  excerpt: string;
  content: Block[];
};

export const articles: Article[] = [
  {
    slug: "methode-hybride-web-acquisition-renovation-formation",
    category: "Méthode",
    categoryColor: "blue",
    date: "10 mars 2025",
    read: "8 min de lecture",
    title: "La méthode hybride Web × Acquisition : comment transformer 1€ de pub en 3€ de CA",
    excerpt:
      "Notre méthode combine un site web intelligent et des campagnes Google/Meta Ads pour générer des conversions mesurables dès le premier mois.",
    content: [
      {
        type: "p",
        text: "La majorité des artisans et organismes de formation qui investissent dans le digital commettent la même erreur : ils séparent leur site web de leur système d'acquisition. Ils ont un site vitrine qui dort, ou des campagnes publicitaires qui renvoient vers une page d'accueil générique. Résultat : des budgets dépensés, peu de leads, et une conviction que le digital ne marche pas pour eux.",
      },
      {
        type: "p",
        text: "La méthode hybride Web × Acquisition repose sur un principe simple : un site web intelligent et un système d'acquisition automatisé sont deux moitiés d'un même moteur. Séparés, ils fonctionnent mal. Ensemble, ils multiplient les résultats par trois.",
      },
      {
        type: "h2",
        text: "Pourquoi un site web seul ne suffit plus",
      },
      {
        type: "p",
        text: "Un site vitrine sans trafic orienté est comme une boutique dans une rue déserte. Vous avez beau avoir le plus beau site du monde, si personne ne le voit, il ne génère aucun prospect. C'est le premier problème que rencontrent les artisans et les centres de formation.",
      },
      {
        type: "p",
        text: "Le second problème : même avec du trafic SEO, le visiteur met souvent des semaines ou des mois avant de passer à l'action. Il compare, il hésite. Sans système de capture et de relance automatique, ces visiteurs disparaissent dans la nature.",
      },
      {
        type: "ul",
        items: [
          "73 % des Français cherchent un artisan ou une formation sur Google avant tout contact",
          "Un visiteur sur huit seulement contacte un artisan lors de sa première visite",
          "Sans relance automatique, 90 % des prospects qualifiés ne reviennent jamais",
        ],
      },
      {
        type: "h2",
        text: "Pourquoi les campagnes seules gaspillent votre budget",
      },
      {
        type: "p",
        text: "L'erreur inverse est tout aussi courante : lancer des campagnes Google Ads ou Meta Ads en envoyant le trafic vers la page d'accueil du site, ou pire, vers une landing page générique sans optimisation. Dans ce cas, le coût par lead explose — souvent entre 50 et 150€ selon le secteur — et le retour sur investissement reste négatif.",
      },
      {
        type: "p",
        text: "Les campagnes ont besoin d'une page de destination optimisée, d'un formulaire de qualification, et d'un système de relance pour convertir le prospect chaud qui n'a pas rempli le formulaire du premier coup.",
      },
      {
        type: "h2",
        text: "La méthode hybride : l'engrenage qui fonctionne",
      },
      {
        type: "p",
        text: "La méthode hybride fonctionne en trois temps simultanément actifs :",
      },
      {
        type: "ol",
        items: [
          "Le site web intelligent capte le trafic organique (SEO local, Google Maps, mentions en ligne) et convertit les visiteurs via un formulaire de devis ou d'inscription automatique, avec un chatbot IA disponible 24h/24.",
          "Les campagnes payantes (Google Ads, Meta Ads) envoient un trafic supplémentaire ciblé vers des landing pages dédiées, optimisées pour la conversion. Ce trafic est piloté en temps réel pour minimiser le coût par lead.",
          "Le système de relance automatique (emails, SMS, chatbot) réactualise les prospects qui n'ont pas converti du premier coup, multipliant les chances de transformation sans intervention manuelle.",
        ],
      },
      {
        type: "highlight",
        text: "Résultat observé en moyenne : 1€ investi en publicité génère 3€ de chiffre d'affaires additionnel dès le 3e mois d'activation.",
      },
      {
        type: "h2",
        text: "Deux exemples concrets",
      },
      {
        type: "h3",
        text: "Karim B., KBM Rénovation (Île-de-France)",
      },
      {
        type: "p",
        text: "Karim payait 15 % de commission à Habitatpresto sur chaque chantier signé. Avec la méthode hybride, il a lancé son propre site avec formulaire de devis automatique et des campagnes Meta Ads ciblant les propriétaires de sa zone. En 6 semaines : 12 demandes de devis qualifiées par mois, zéro commission. Son coût mensuel en publicité : 400€. ROI constaté : x3,4.",
      },
      {
        type: "h3",
        text: "Centre de Formation Pro Solutions (Lyon)",
      },
      {
        type: "p",
        text: "Cet organisme remplissait ses sessions par téléphone et recommandations. Avec un site optimisé pour les recherches CPF et des campagnes Google Ads sur les certifications qu'il proposait, ses sessions ont affiché complet en 2 semaines, contre 6 à 8 semaines auparavant. Coût par inscription CPF : 28€. Valeur d'une inscription : 1 200€.",
      },
      {
        type: "h2",
        text: "Par où commencer ?",
      },
      {
        type: "p",
        text: "L'audit gratuit de 30 minutes est le point de départ. Il permet d'analyser votre situation actuelle, d'identifier les opportunités les plus rapides pour votre secteur, et de choisir la bonne combinaison de services. Il n'y a pas de formule universelle : un électricien en Île-de-France n'a pas les mêmes besoins qu'un organisme de formation à Bordeaux.",
      },
      {
        type: "p",
        text: "Ce qui est universel, en revanche, c'est ce principe : le digital génère des résultats mesurables quand le site et l'acquisition sont traités comme un système unique, pas comme deux projets séparés.",
      },
    ],
  },
  {
    slug: "artisan-renovation-trouver-clients-internet",
    category: "Rénovation",
    categoryColor: "orange",
    date: "8 mars 2025",
    read: "7 min de lecture",
    title: "Artisan : comment trouver des clients sur Internet sans payer de commission",
    excerpt:
      "Arrêtez de payer 15 % de commission aux plateformes de mise en relation. Voici comment générer vos propres leads avec Google Ads et Meta Ads.",
    content: [
      {
        type: "p",
        text: "Habitatpresto, Houzz, MyTradie, Checkatrade — ces plateformes ont changé la façon dont les artisans trouvent des clients. Mais à quel prix ? En moyenne, 12 à 20 % de commission par chantier signé. Pour un artisan qui réalise 30 000€ de chiffre d'affaires par mois, c'est entre 3 600 et 6 000€ qui partent chaque mois en commissions. Argent que vous n'avez pas investi, pas épargné, et qui ne revient jamais.",
      },
      {
        type: "h2",
        text: "Le vrai coût des plateformes de mise en relation",
      },
      {
        type: "p",
        text: "Ce que les plateformes ne vous disent pas : les leads qu'elles vous vendent sont souvent les mêmes que ceux qu'elles vendent à vos concurrents. Un prospect qui remplit un formulaire sur Habitatpresto reçoit des devis de 3 à 5 artisans en même temps. Vous entrez dans une guerre des prix, vous perdez du temps sur des devis qui ne se concrétisent pas, et au final vous payez quand même.",
      },
      {
        type: "ul",
        items: [
          "Leads partagés entre plusieurs artisans concurrents",
          "Commission même sur les chantiers que vous avez déjà en prospect",
          "Aucune fidélisation : le client reste propriété de la plateforme",
          "Prix dicté par la concurrence, pas par votre valeur",
        ],
      },
      {
        type: "h2",
        text: "Votre propre système d'acquisition : le principe",
      },
      {
        type: "p",
        text: "L'alternative : construire votre propre canal d'acquisition. Un site web avec formulaire de devis automatique, des campagnes publicitaires ciblées, et un système de relance. Vous ne payez plus de commission. Vous payez un coût fixe mensuel pour un flux constant de prospects qui vous contactent directement — et qui ne comparent pas vos prix avec cinq autres artisans en même temps.",
      },
      {
        type: "highlight",
        text: "Un artisan électricien en Seine-et-Marne a remplacé 18 000€ de commissions annuelles par 4 800€ de budget publicitaire. Même volume de chantiers, gain net de 13 200€ par an.",
      },
      {
        type: "h2",
        text: "Google Ads pour artisans : les fondamentaux",
      },
      {
        type: "p",
        text: "Google Ads vous permet d'apparaître en première position sur les recherches locales du type « électricien [ville] », « plombier urgence [code postal] », « entreprise rénovation salle de bain [région] ». Ces recherches ont une intention d'achat très élevée : quelqu'un qui tape « plombier urgence Paris » veut un plombier maintenant.",
      },
      {
        type: "ul",
        items: [
          "Ciblez les mots-clés avec intention d'achat : « devis », « prix », « urgent », votre métier + votre ville",
          "Utilisez les extensions d'appel pour que le prospect vous appelle directement depuis l'annonce",
          "Limitez la zone géographique à votre rayon d'intervention réel",
          "Excluez les mots-clés parasites : « formation », « emploi », « DIY », « comment faire »",
        ],
      },
      {
        type: "h2",
        text: "Meta Ads pour artisans : la puissance du before/after",
      },
      {
        type: "p",
        text: "Sur Facebook et Instagram, la logique est différente : les gens ne cherchent pas, ils découvrent. Le format le plus efficace pour un artisan est le before/after — une photo ou vidéo qui montre une transformation concrète (avant / après travaux). Ce format génère de l'engagement et de la confiance immédiatement.",
      },
      {
        type: "p",
        text: "Ciblez les propriétaires de 35 à 60 ans dans votre zone géographique, avec un intérêt pour la rénovation, l'immobilier ou l'aménagement intérieur. Un budget de 300 à 500€ par mois suffit pour générer 8 à 15 demandes de devis qualifiées sur un secteur local.",
      },
      {
        type: "h2",
        text: "La landing page qui convertit",
      },
      {
        type: "p",
        text: "Que vous utilisiez Google Ads ou Meta Ads, le trafic doit atterrir sur une page de destination optimisée — pas votre page d'accueil. Cette page doit contenir : une promesse claire (« Devis gratuit en 24h »), des photos de vos réalisations, des avis clients, et un formulaire court (prénom, téléphone, type de travaux, secteur géographique).",
      },
      {
        type: "p",
        text: "Avec un chatbot IA configuré sur votre site, les prospects qui arrivent la nuit ou le week-end sont accueillis, qualifiés et rassurés automatiquement. Vous recevez la demande le lendemain matin, prête à traiter.",
      },
      {
        type: "h2",
        text: "Conclusion : l'indépendance ou la commission",
      },
      {
        type: "p",
        text: "Il n'y a pas de bonne ou de mauvaise solution en absolu. Les plateformes ont rendu service à beaucoup d'artisans pour démarrer. Mais à partir d'un certain volume d'activité, continuer à payer des commissions revient à louer votre clientèle sans jamais la posséder. Construire votre propre canal d'acquisition, c'est investir une fois pour en profiter à vie.",
      },
    ],
  },
  {
    slug: "site-web-artisan-indispensable",
    category: "Site Intelligent",
    categoryColor: "indigo",
    date: "2 mars 2025",
    read: "5 min de lecture",
    title: "Pourquoi un artisan sans site web perd des clients chaque jour",
    excerpt:
      "73 % des Français cherchent un artisan sur Google avant de l'appeler. Sans site web professionnel, vous perdez ces clients potentiels chaque jour.",
    content: [
      {
        type: "p",
        text: "Vous avez peut-être entendu cette phrase de la bouche d'un client : « Je vous ai trouvé sur Google. » Ou peut-être que vous ne l'entendez jamais — et c'est précisément le problème. Si vous n'avez pas de site web professionnel, vous n'existez tout simplement pas pour une large part de votre marché potentiel.",
      },
      {
        type: "highlight",
        text: "73 % des Français cherchent un artisan ou un prestataire de service sur Internet avant de prendre contact. Si vous n'êtes pas là, votre concurrent l'est.",
      },
      {
        type: "h2",
        text: "Ce que les clients cherchent avant de vous appeler",
      },
      {
        type: "p",
        text: "Avant de composer votre numéro, un prospect passe en moyenne 7 minutes à rechercher des informations en ligne. Il cherche à répondre à trois questions essentielles : est-ce que cet artisan est compétent ? Est-ce qu'il travaille dans ma zone ? Est-ce qu'il est sérieux ?",
      },
      {
        type: "ul",
        items: [
          "Des photos de réalisations récentes (avant / après de préférence)",
          "Des avis clients vérifiés (Google, Pages Jaunes)",
          "Une zone d'intervention clairement définie",
          "Un moyen de contact simple : formulaire, téléphone ou WhatsApp",
          "Des informations sur les délais et les tarifs (même approximatifs)",
        ],
      },
      {
        type: "p",
        text: "Un artisan sans site web oblige le prospect à se contenter de ce qu'il trouve ailleurs — souvent les profils Habitatpresto ou Leboncoin, qui renvoient directement vers la concurrence.",
      },
      {
        type: "h2",
        text: "Les 5 éléments indispensables d'un bon site artisan",
      },
      {
        type: "ol",
        items: [
          "Une page d'accueil claire avec votre métier, votre zone et votre promesse principale (ex : « Plombier disponible 7j/7 en Île-de-France — Devis gratuit en 2h »)",
          "Une galerie de réalisations avec des photos de vraie qualité, idéalement en before/after",
          "Une page « Avis clients » ou l'intégration de vos avis Google directement visibles",
          "Un formulaire de demande de devis simple : 5 champs maximum, réponse garantie sous 24h",
          "Une fiche Google Business Profile liée au site, avec vos horaires, votre zone et vos photos mises à jour",
        ],
      },
      {
        type: "h2",
        text: "Le SEO local : être trouvé quand ça compte",
      },
      {
        type: "p",
        text: "Le référencement local, c'est apparaître quand quelqu'un cherche « électricien [votre ville] » sur Google. Ce n'est pas une magie complexe : c'est une question de signaux cohérents. Votre adresse, votre numéro de téléphone, votre secteur d'activité doivent être identiques sur votre site, votre fiche Google et vos annuaires locaux.",
      },
      {
        type: "p",
        text: "Un site web bien structuré avec les bonnes informations locales peut vous faire apparaître dans le « pack local » de Google — les trois résultats avec la carte qui s'affichent en premier. Ces clics sont gratuits, contrairement aux clics publicitaires.",
      },
      {
        type: "h2",
        text: "Le chatbot IA : répondre à 3h du matin",
      },
      {
        type: "p",
        text: "Un artisan ne peut pas répondre au téléphone 24h/24. Un chatbot IA configuré sur votre site peut le faire. Il accueille le visiteur, répond aux questions fréquentes (zone d'intervention, délais, types de travaux), capture les coordonnées du prospect et vous envoie un résumé le matin. Des clients signés pendant que vous dormiez.",
      },
      {
        type: "p",
        text: "Le site web professionnel n'est plus un luxe pour les artisans. C'est la condition de base pour exister dans l'économie numérique actuelle. Sans lui, vous laissez des clients partir chez un concurrent qui, lui, a pris le temps de s'y mettre.",
      },
    ],
  },
  {
    slug: "formation-remplir-sessions-google-ads",
    category: "Formation",
    categoryColor: "emerald",
    date: "24 fév. 2025",
    read: "9 min de lecture",
    title: "Remplir ses sessions de formation avec Google Ads : guide complet",
    excerpt:
      "Stratégie pas à pas pour organisme de formation : mots-clés, ciblage, annonces et optimisation du coût par inscription.",
    content: [
      {
        type: "p",
        text: "Un organisme de formation a un défi particulier : remplir des sessions à des dates précises, avec un public spécifique, pour des formations qui peuvent coûter de 500 à 5 000€ par inscription. Les méthodes d'acquisition classiques — bouche-à-oreille, salons, emailings — ne suffisent plus. Google Ads est aujourd'hui le canal le plus prévisible et le plus scalable pour y parvenir.",
      },
      {
        type: "h2",
        text: "Comprendre l'intention de recherche en formation",
      },
      {
        type: "p",
        text: "Avant de lancer une campagne, il faut comprendre comment vos futurs stagiaires cherchent. Il existe trois types d'intentions de recherche que vous devez cibler différemment :",
      },
      {
        type: "ul",
        items: [
          "Recherche de certification : « formation habilitation électrique B1 », « formation CACES R489 », « formation SST certifiante ». Intention forte, budget à privilégier.",
          "Recherche par problème : « comment se recycler dans le bâtiment », « formation continue prise en charge CPF ». Cibler avec du contenu pédagogique.",
          "Recherche par financement : « formation CPF prise en charge 100% », « formation éligible CPF ». Mentionner le CPF dans vos annonces booste les clics de 40 %.",
        ],
      },
      {
        type: "h2",
        text: "La structure de campagne qui convertit",
      },
      {
        type: "p",
        text: "Ne créez pas une seule campagne fourre-tout. Segmentez par certification ou par thématique. Chaque groupe d'annonces doit cibler un ensemble de mots-clés très proches sémantiquement et renvoyer vers une landing page spécifique à cette formation — pas vers votre page d'accueil.",
      },
      {
        type: "ol",
        items: [
          "Une campagne par famille de certifications (sécurité, management, langues, numérique…)",
          "Dans chaque campagne, un groupe d'annonces par certification précise",
          "Pour chaque groupe : 3 annonces responsives à tester en parallèle",
          "Pour chaque groupe : une landing page dédiée avec programme, dates, financement et formulaire d'inscription",
        ],
      },
      {
        type: "h2",
        text: "Les mots-clés à inclure et à exclure",
      },
      {
        type: "p",
        text: "Inclure : le nom exact de la certification, les synonymes, les variantes avec « éligible CPF », « prise en charge », « organisme agréé ». Exclure absolument : « gratuit », « torrent », « PDF », « offre emploi », « formateur » (les gens qui cherchent à devenir formateurs, pas à se former). Ces exclusions peuvent réduire vos coûts de 20 à 30 % sans affecter la qualité des leads.",
      },
      {
        type: "h2",
        text: "Rédiger des annonces qui convertissent",
      },
      {
        type: "p",
        text: "Votre annonce doit répondre en 3 lignes aux trois questions du prospect : est-ce la bonne formation ? Est-ce que je peux la financer ? Comment m'inscrire ? Utilisez les extensions d'annonces : extensions d'appel (numéro direct), extensions de lieu (votre ville), extensions de site (lien vers les dates, le programme, le financement CPF).",
      },
      {
        type: "highlight",
        text: "Les annonces qui mentionnent « CPF » dans le titre ont un taux de clic 38 % supérieur en moyenne sur le secteur formation.",
      },
      {
        type: "h2",
        text: "La landing page : convertir le clic en inscription",
      },
      {
        type: "p",
        text: "Une landing page de formation efficace contient dans cet ordre : le titre de la certification, les objectifs en 3 points, les prochaines dates disponibles, les modes de financement acceptés (CPF, OPCO, financement personnel), les témoignages de stagiaires, et un formulaire d'inscription court. La preuve sociale — témoignages, taux de réussite, nombre de stagiaires formés — est déterminante pour les formations à fort enjeu.",
      },
      {
        type: "h2",
        text: "Optimiser semaine après semaine",
      },
      {
        type: "p",
        text: "Google Ads n'est pas un système qu'on lance et qu'on oublie. Les deux premières semaines servent à collecter des données. À partir de la 3e semaine, identifiez les mots-clés qui consomment du budget sans convertir et suspendez-les. Augmentez les enchères sur les mots-clés qui génèrent des inscriptions à un coût acceptable. Ajustez les horaires de diffusion aux heures où vos cibles sont actives (souvent en pause déjeuner et en soirée).",
      },
      {
        type: "p",
        text: "Un organisme de formation qui suit ces principes peut atteindre un coût par inscription de 20 à 50€, pour des formations dont la valeur est de 10 à 100 fois supérieure. C'est l'un des meilleurs retours sur investissement marketing disponibles aujourd'hui.",
      },
    ],
  },
  {
    slug: "google-ads-vs-leboncoin-artisan",
    category: "Rénovation",
    categoryColor: "orange",
    date: "17 fév. 2025",
    read: "6 min de lecture",
    title: "Google Ads vs Leboncoin / MyTradie : quel est le meilleur canal pour un artisan ?",
    excerpt:
      "Comparatif honnête des plateformes à commission vs publicité directe : coûts, qualité des leads et indépendance.",
    content: [
      {
        type: "p",
        text: "La question revient souvent dans nos audits : « Vaut-il mieux rester sur Leboncoin et Habitatpresto ou passer à Google Ads ? » Il n'y a pas de réponse universelle, mais il y a une réponse honnête. Voici un comparatif basé sur des données réelles, sans parti pris.",
      },
      {
        type: "h2",
        text: "Le coût réel de chaque canal",
      },
      {
        type: "p",
        text: "Sur Habitatpresto et plateformes similaires, le modèle est la commission : entre 12 et 20 % du montant HT du chantier. Pour un chantier de rénovation de salle de bain à 8 000€, cela représente entre 960 et 1 600€ de commission. Ces commissions s'accumulent chaque mois, chaque année, sans jamais vous construire un actif propre.",
      },
      {
        type: "p",
        text: "Sur Google Ads, vous payez au clic. En rénovation locale, le coût par clic varie entre 1,5 et 6€ selon le secteur et la concurrence. Avec un taux de conversion de landing page de 15 %, cela donne un coût par lead de 10 à 40€. Pour un chantier à 8 000€, même avec 5 leads non concrétisés, le coût d'acquisition d'un client reste de 50 à 200€ — très loin des 960€ de commission.",
      },
      {
        type: "highlight",
        text: "Sur 10 artisans que nous accompagnons, 9 ont un coût d'acquisition client via Google Ads inférieur à leurs anciennes commissions de plateformes.",
      },
      {
        type: "h2",
        text: "La qualité des leads : leads chauds vs leads froids partagés",
      },
      {
        type: "p",
        text: "C'est la différence fondamentale. Sur les plateformes de mise en relation, votre lead a rempli un formulaire générique. Il a probablement contacté 3 à 5 artisans en même temps. Il compare les prix. Vous êtes en compétition immédiate.",
      },
      {
        type: "p",
        text: "Via Google Ads ou Meta Ads, le prospect a cliqué sur votre annonce, visité votre site, vu vos réalisations, et rempli votre formulaire à votre nom. Il est en contact direct avec vous, pas avec une plateforme intermédiaire. Le taux de transformation en devis et en chantier signé est systématiquement supérieur.",
      },
      {
        type: "ul",
        items: [
          "Plateforme commission : taux de signature souvent entre 10 et 20 % (concurrence directe)",
          "Vos propres leads : taux de signature entre 25 et 45 % selon le secteur et la qualité du suivi",
        ],
      },
      {
        type: "h2",
        text: "L'indépendance : la valeur que les chiffres ne montrent pas",
      },
      {
        type: "p",
        text: "Les plateformes peuvent changer leurs conditions, augmenter leurs commissions, ou simplement disparaître. En 2023, plusieurs artisans ont vu leurs conditions Habitatpresto changer du jour au lendemain. Ceux qui avaient investi dans leur propre canal d'acquisition n'ont pas été affectés. Ceux qui dépendaient à 100 % de la plateforme ont perdu une partie majeure de leur source de clients du jour au lendemain.",
      },
      {
        type: "h2",
        text: "Verdict : quand utiliser quoi ?",
      },
      {
        type: "p",
        text: "Leboncoin et les plateformes restent utiles pour démarrer rapidement quand on n'a pas encore de site web ni de budget publicitaire. Elles offrent un flux de leads immédiat. Mais elles ne doivent pas rester votre canal principal au-delà des premiers mois. Dès que vous avez un site web professionnel et un budget publicitaire de 300 à 500€ par mois, la bascule vers votre propre système d'acquisition devient rentable en moins de 3 mois.",
      },
      {
        type: "p",
        text: "La stratégie idéale à court terme : maintenir une présence sur les plateformes pour le flux immédiat, tout en construisant votre propre canal d'acquisition en parallèle. À moyen terme : migrer progressivement vers l'indépendance totale.",
      },
    ],
  },
  {
    slug: "site-web-formation-convertir-stagiaires",
    category: "Site Intelligent",
    categoryColor: "indigo",
    date: "10 fév. 2025",
    read: "6 min de lecture",
    title: "5 éléments indispensables sur le site d'un organisme de formation",
    excerpt:
      "Programme détaillé, calendrier sessions, bouton CPF visible, preuves et SEO : les fondamentaux d'un site qui convertit.",
    content: [
      {
        type: "p",
        text: "Un organisme de formation qui veut remplir ses sessions en 2025 ne peut pas se contenter d'un site vitrine. Il lui faut un outil de conversion actif, qui répond aux questions des prospects, les rassure, et les guide vers l'inscription. Voici les 5 éléments que nous retrouvons systématiquement sur les sites de formation qui performent.",
      },
      {
        type: "h2",
        text: "1. Un catalogue de formations clair et bien structuré",
      },
      {
        type: "p",
        text: "La première erreur des organismes de formation : un site avec une longue liste de formations non filtrable, sans indication claire sur le niveau, la durée ou le financement. Le visiteur se perd et part.",
      },
      {
        type: "p",
        text: "Ce qui fonctionne : un catalogue avec des filtres par thématique, par niveau, par mode de financement (CPF, OPCO, individuel) et par format (présentiel, distanciel, mixte). Chaque formation a sa propre page avec le programme détaillé, les objectifs pédagogiques, les modalités d'évaluation, le profil des formateurs et les prochaines dates.",
      },
      {
        type: "h2",
        text: "2. Le financement CPF visible et rassurant",
      },
      {
        type: "p",
        text: "Le CPF (Compte Personnel de Formation) est le premier critère de décision de beaucoup de candidats. Pourtant, de nombreux organismes mentionnent le CPF en bas de page, en petits caractères, comme une note secondaire. C'est une erreur majeure.",
      },
      {
        type: "highlight",
        text: "Les formations affichant « Éligible CPF — 100 % prise en charge possible » dans leur titre de page ont un taux de clic 38 % supérieur sur Google.",
      },
      {
        type: "p",
        text: "Mettez le CPF en avant : un badge visible sur chaque formation éligible, un tutoriel en 3 étapes sur comment utiliser son CPF, et une FAQ qui répond aux questions fréquentes sur Mon Compte Formation.",
      },
      {
        type: "h2",
        text: "3. Un calendrier de sessions mis à jour en temps réel",
      },
      {
        type: "p",
        text: "Le prospect qui veut se former a une contrainte de temps. Il veut savoir : quand est la prochaine session ? Y a-t-il encore de la place ? Trop de sites de formation affichent des dates périmées ou n'ont pas de calendrier du tout. C'est la meilleure façon de perdre un prospect prêt à s'inscrire.",
      },
      {
        type: "ul",
        items: [
          "Calendrier des sessions avec dates, lieux et places disponibles mis à jour chaque semaine",
          "Indication du nombre de places restantes (« 3 places disponibles ») pour créer l'urgence",
          "Bouton « Je m'inscris » ou « Je réserve ma place » directement sur chaque session",
          "Liste d'attente automatique quand une session est complète",
        ],
      },
      {
        type: "h2",
        text: "4. Les preuves sociales au bon endroit",
      },
      {
        type: "p",
        text: "Les témoignages de stagiaires satisfaits sont déterminants, mais leur placement sur le site est tout aussi important que leur présence. Ils ne doivent pas seulement figurer sur une page « Avis clients » que personne ne consulte — ils doivent être intégrés sur chaque page de formation, juste avant le formulaire d'inscription.",
      },
      {
        type: "p",
        text: "Les éléments de preuve les plus efficaces : le taux de réussite à l'examen, le taux d'insertion professionnelle si applicable, les verbatims de stagiaires avec photo et entreprise, et le nombre total de stagiaires formés. Un organisme qui affiche « 1 200 stagiaires formés depuis 2019 » inspire plus confiance qu'un organisme sans données chiffrées.",
      },
      {
        type: "h2",
        text: "5. Un chatbot IA qui pré-qualifie les candidats",
      },
      {
        type: "p",
        text: "Un organisme de formation reçoit souvent des dizaines de questions similaires chaque semaine : « Cette formation est-elle éligible CPF ? », « Combien de temps dure la formation ? », « Puis-je la suivre à distance ? ». Un chatbot IA configuré sur votre site répond à ces questions en temps réel, 24h/24, et capture les coordonnées des prospects qualifiés pour votre équipe commerciale.",
      },
      {
        type: "p",
        text: "Résultat observé : les organismes qui ont déployé un chatbot IA sur leur site reçoivent en moyenne 35 % de demandes d'information supplémentaires, dont 60 % se transforment en inscriptions après suivi de l'équipe. C'est une source de revenus dormante que la plupart des organismes n'exploitent pas.",
      },
    ],
  },
  {
    slug: "meta-ads-renovation-before-after",
    category: "Rénovation",
    categoryColor: "orange",
    date: "3 fév. 2025",
    read: "8 min de lecture",
    title: "Meta Ads pour la rénovation : pourquoi le before/after performe",
    excerpt:
      "Comment structurer et cibler les visuels before/after pour maximiser les demandes de devis qualifiées sur Facebook et Instagram.",
    content: [
      {
        type: "p",
        text: "Dans l'univers de la publicité pour les artisans et les entreprises de rénovation, un format domine systématiquement les tableaux de bord : le before/after. Photo ou vidéo, Instagram ou Facebook, ce format génère en moyenne deux fois plus de clics et trois fois plus de demandes de devis que les publicités classiques avec simple photo de résultat. Pourquoi ? Et surtout comment l'exploiter correctement ?",
      },
      {
        type: "h2",
        text: "La psychologie du before/after",
      },
      {
        type: "p",
        text: "Le before/after fonctionne parce qu'il active deux mécanismes psychologiques puissants : la projection et la preuve. En voyant la transformation, le prospect peut se projeter : « Ma salle de bain pourrait ressembler à ça. » Simultanément, il obtient une preuve tangible de votre compétence sans avoir besoin de lire une ligne de texte.",
      },
      {
        type: "p",
        text: "Dans un feed Instagram ou Facebook saturé de contenu, le before/after arrête naturellement le scroll. L'œil est attiré par le contraste, par la transformation visible. C'est un format qui provoque une réaction émotionnelle immédiate — admiration, envie, identification — bien avant que la logique n'entre en jeu.",
      },
      {
        type: "h2",
        text: "Les règles d'un bon before/after",
      },
      {
        type: "ul",
        items: [
          "Même angle de prise de vue entre le before et le after — si l'angle change, la transformation est moins crédible",
          "Même heure de la journée et même lumière si possible — une salle de bain avant en lumière froide et après en lumière chaude fausse la comparaison",
          "Le before doit montrer un état clairement améliorable — pas un avant trop propre qui minimise la transformation",
          "Le after doit être impeccable : propre, rangé, bien éclairé, sans outils ni déchets",
          "Format carré (1:1) pour le feed, format vertical (9:16) pour les Stories et Reels",
        ],
      },
      {
        type: "h2",
        text: "Vidéo ou photo ?",
      },
      {
        type: "p",
        text: "La vidéo génère plus d'engagement que la photo statique, mais elle nécessite plus de préparation. Un format qui fonctionne très bien : la vidéo de révélation. Vous commencez sur le before, puis un fondu ou un balayage révèle le after. Durée idéale : 8 à 15 secondes. Pas besoin de matériel professionnel — un smartphone avec stabilisateur suffit.",
      },
      {
        type: "p",
        text: "Si vous n'avez pas encore de vidéos, commencez par des photos statiques en format carrousel : première image = le before, deuxième image = le after, troisième image = détails de la réalisation, quatrième image = formulaire de devis avec offre claire.",
      },
      {
        type: "h2",
        text: "Le ciblage : toucher les bons propriétaires",
      },
      {
        type: "p",
        text: "Sur Meta Ads, vous ne ciblez pas des mots-clés mais des audiences. Pour la rénovation, les audiences les plus performantes sont composées de propriétaires entre 35 et 60 ans, avec un intérêt pour la rénovation, le bricolage, l'immobilier, ou les programmes de déco (M6 Déco, La Maison France 5). Combinez le ciblage par intérêt avec un ciblage géographique strict autour de votre zone d'intervention.",
      },
      {
        type: "highlight",
        text: "Le retargeting est souvent négligé : reciblez les visiteurs de votre site web avec vos publicités before/after. Ces personnes ont déjà montré un intérêt — leur taux de conversion est 4 à 5 fois supérieur à une audience froide.",
      },
      {
        type: "h2",
        text: "Budget et structure de campagne",
      },
      {
        type: "p",
        text: "Pour démarrer, un budget de 300 à 500€ par mois suffit pour un artisan local. Répartissez-le en deux campagnes : une campagne de notoriété (before/after en trafic froid pour faire connaître votre travail dans votre zone) et une campagne de conversion (retargeting avec offre directe : « Demande de devis gratuit — réponse en 24h »).",
      },
      {
        type: "p",
        text: "Testez toujours plusieurs visuels en parallèle : un before/after salle de bain, un before/after cuisine, un before/after façade. Après 7 jours, identifiez le visuel qui génère le plus de clics au meilleur coût et allouez-lui la majorité du budget. La publicité sur Meta, comme tout système, s'améliore quand on l'alimente de données et qu'on prend des décisions basées sur les résultats.",
      },
      {
        type: "h2",
        text: "La landing page adaptée",
      },
      {
        type: "p",
        text: "Un before/after performant renvoie vers une landing page qui continue la logique visuelle : d'autres photos de réalisations, un formulaire de devis court, votre zone d'intervention et un numéro de téléphone visible. Évitez d'envoyer le trafic Meta vers votre page d'accueil — le prospect perd le fil et quitte. La cohérence entre la publicité et la landing page est ce qui détermine votre taux de conversion final.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
