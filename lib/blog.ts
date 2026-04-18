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
    category: "Methode",
    categoryColor: "blue",
    date: "10 Mars 2025",
    read: "8 min de lecture",
    title: "La methode hybride Web x Acquisition : comment transformer 1EUR de pub en 3EUR de CA",
    excerpt:
      "Notre methode combine un site web intelligent et des campagnes Google/Meta Ads pour generer des conversions mesurables des le premier mois.",
    content: [
      {
        type: "p",
        text: "La majorite des artisans et organismes de formation qui investissent dans le digital commettent la meme erreur : ils separent leur site web de leur systeme d acquisition. Ils ont un site vitrine qui dort, ou des campagnes publicitaires qui renvoient vers une page d accueil generique. Resultat : des budgets depenses, peu de leads, et une conviction que le digital ne marche pas pour eux.",
      },
      {
        type: "p",
        text: "La methode hybride Web x Acquisition repose sur un principe simple : un site web intelligent et un systeme d acquisition automatise sont deux moitiees d un meme moteur. Separes, ils fonctionnent mal. Ensemble, ils multiplient les resultats par trois.",
      },
      {
        type: "h2",
        text: "Pourquoi un site web seul ne suffit plus",
      },
      {
        type: "p",
        text: "Un site vitrine sans trafic oriente est comme une boutique dans une rue deserte. Vous avez beau avoir le plus beau site du monde, si personne ne le voit, il ne genere aucun prospect. C est le premier probleme que rencontrent les artisans et les centres de formation.",
      },
      {
        type: "p",
        text: "Le second probleme : meme avec du trafic SEO, le visiteur met souvent des semaines ou des mois avant de passer a l action. Il compare, il hesite. Sans systeme de capture et de relance automatique, ces visiteurs disparaissent dans la nature.",
      },
      {
        type: "ul",
        items: [
          "73 % des Francais cherchent un artisan ou une formation sur Google avant tout contact",
          "Un visiteur sur huit seulement contacte un artisan lors de sa premiere visite",
          "Sans relance automatique, 90 % des prospects qualifies ne reviennent jamais",
        ],
      },
      {
        type: "h2",
        text: "Pourquoi les campagnes seules gaspillent votre budget",
      },
      {
        type: "p",
        text: "L erreur inverse est tout aussi courante : lancer des campagnes Google Ads ou Meta Ads en envoyant le trafic vers la page d accueil du site, ou pire, vers une landing page generique sans optimisation. Dans ce cas, le cout par lead explose — souvent entre 50 et 150 EUR selon le secteur — et le retour sur investissement reste negatif.",
      },
      {
        type: "p",
        text: "Les campagnes ont besoin d une page de destination optimisee, d un formulaire de qualification, et d un systeme de relance pour convertir le prospect chaud qui n a pas rempli le formulaire du premier coup.",
      },
      {
        type: "h2",
        text: "La methode hybride : l engrenage qui fonctionne",
      },
      {
        type: "p",
        text: "La methode hybride fonctionne en trois temps simultanement actifs :",
      },
      {
        type: "ol",
        items: [
          "Le site web intelligent capte le trafic organique (SEO local, Google Maps, mentions en ligne) et convertit les visiteurs via un formulaire de devis ou d inscription automatique, avec un chatbot IA disponible 24h/24.",
          "Les campagnes payantes (Google Ads, Meta Ads) envoient un trafic supplementaire cible vers des landing pages dediees, optimisees pour la conversion. Ce trafic est pilote en temps reel pour minimiser le cout par lead.",
          "Le systeme de relance automatique (emails, SMS, chatbot) reactualise les prospects qui n ont pas converti du premier coup, multipliant les chances de transformation sans intervention manuelle.",
        ],
      },
      {
        type: "highlight",
        text: "Resultat observe en moyenne : 1 EUR investi en publicite genere 3 EUR de chiffre d affaires additionnel des le 3e mois d activation.",
      },
      {
        type: "h2",
        text: "Deux exemples concrets",
      },
      {
        type: "h3",
        text: "Karim B., KBM Renovation (Ile-de-France)",
      },
      {
        type: "p",
        text: "Karim payait 15 % de commission a Habitatpresto sur chaque chantier signe. Avec la methode hybride, il a lance son propre site avec formulaire de devis automatique et des campagnes Meta Ads ciblant les proprietaires de sa zone. En 6 semaines : 12 demandes de devis qualifiees par mois, zero commission. Son cout mensuel en publicite : 400 EUR. ROI constate : x3,4.",
      },
      {
        type: "h3",
        text: "Centre de Formation Pro Solutions (Lyon)",
      },
      {
        type: "p",
        text: "Cet organisme remplissait ses sessions par telephone et recommandations. Avec un site optimise pour les recherches CPF et des campagnes Google Ads sur les certifications qu il proposait, ses sessions ont affiche complet en 2 semaines, contre 6 a 8 semaines auparavant. Cout par inscription CPF : 28 EUR. Valeur d une inscription : 1 200 EUR.",
      },
      {
        type: "h2",
        text: "Par ou commencer ?",
      },
      {
        type: "p",
        text: "L audit gratuit de 30 minutes est le point de depart. Il permet d analyser votre situation actuelle, d identifier les opportunites les plus rapides pour votre secteur, et de choisir la bonne combinaison de services. Il n y a pas de formule universelle : un electricien en Ile-de-France n a pas les memes besoins qu un organisme de formation a Bordeaux.",
      },
      {
        type: "p",
        text: "Ce qui est universel, en revanche, c est ce principe : le digital genere des resultats mesurables quand le site et l acquisition sont traites comme un systeme unique, pas comme deux projets separes.",
      },
    ],
  },
  {
    slug: "artisan-renovation-trouver-clients-internet",
    category: "Renovation",
    categoryColor: "orange",
    date: "8 Mars 2025",
    read: "7 min de lecture",
    title: "Artisan : comment trouver des clients sur Internet sans payer de commission",
    excerpt:
      "Arretez de payer 15 % de commission aux plateformes de mise en relation. Voici comment generer vos propres leads avec Google Ads et Meta Ads.",
    content: [
      {
        type: "p",
        text: "Habitatpresto, Houzz, MyTradie, Checkatrade — ces plateformes ont change la facon dont les artisans trouvent des clients. Mais a quel prix ? En moyenne, 12 a 20 % de commission par chantier signe. Pour un artisan qui realise 30 000 EUR de chiffre d affaires par mois, c est entre 3 600 et 6 000 EUR qui partent chaque mois en commissions. Argent que vous n avez pas investi, pas epargne, et qui ne revient jamais.",
      },
      {
        type: "h2",
        text: "Le vrai cout des plateformes de mise en relation",
      },
      {
        type: "p",
        text: "Ce que les plateformes ne vous disent pas : les leads qu elles vous vendent sont souvent les memes que ceux qu elles vendent a vos concurrents. Un prospect qui remplit un formulaire sur Habitatpresto recoit des devis de 3 a 5 artisans en meme temps. Vous entrez dans une guerre du prix, vous perdez du temps sur des devis qui ne se concretisent pas, et au final vous payez quand meme.",
      },
      {
        type: "ul",
        items: [
          "Leads partages entre plusieurs artisans concurrents",
          "Commission meme sur les chantiers que vous avez deja en prospect",
          "Aucune fidelisation : le client reste propriete de la plateforme",
          "Prix dicte par la concurrence, pas par votre valeur",
        ],
      },
      {
        type: "h2",
        text: "Votre propre systeme d acquisition : le principe",
      },
      {
        type: "p",
        text: "L alternative : construire votre propre canal d acquisition. Un site web avec formulaire de devis automatique, des campagnes publicitaires ciblees, et un systeme de relance. Vous ne payez plus de commission. Vous payez un cout fixe mensuel pour un flux constant de prospects qui vous contactent directement — et qui ne comparent pas vos prix avec cinq autres artisans en meme temps.",
      },
      {
        type: "highlight",
        text: "Un artisan electricien en Seine-et-Marne a remplace 18 000 EUR de commissions annuelles par 4 800 EUR de budget publicitaire. Meme volume de chantiers, gain net de 13 200 EUR par an.",
      },
      {
        type: "h2",
        text: "Google Ads pour artisans : les fondamentaux",
      },
      {
        type: "p",
        text: "Google Ads vous permet d apparaitre en premiere position sur les recherches locales du type 'electricien [ville]', 'plombier urgence [code postal]', 'entreprise renovation salle de bain [region]'. Ces recherches ont une intention d achat tres elevee : quelqu un qui tape 'plombier urgence Paris' veut un plombier maintenant.",
      },
      {
        type: "ul",
        items: [
          "Ciblez les mots-cles avec intention d achat : 'devis', 'prix', 'urgent', 'pas cher', votre metier + votre ville",
          "Utilisez les extensions d appel pour que le prospect vous appelle directement depuis l annonce",
          "Limitez la zone geographique a votre rayon d intervention reel",
          "Excluez les mots-cles parasites : 'formation', 'emploi', 'DIY', 'comment faire'",
        ],
      },
      {
        type: "h2",
        text: "Meta Ads pour artisans : la puissance du before/after",
      },
      {
        type: "p",
        text: "Sur Facebook et Instagram, la logique est differente : les gens ne cherchent pas, ils decouvrent. Le format le plus efficace pour un artisan est le before/after — une photo ou video qui montre une transformation concrete (avant / apres travaux). Ce format genere de l engagement et de la confiance immediatement.",
      },
      {
        type: "p",
        text: "Ciblez les proprietaires de 35 a 60 ans dans votre zone geographique, avec un interet pour la renovation, l immobilier ou l amenagement interieur. Un budget de 300 a 500 EUR par mois suffit pour generer 8 a 15 demandes de devis qualifiees sur un secteur local.",
      },
      {
        type: "h2",
        text: "La landing page qui convertit",
      },
      {
        type: "p",
        text: "Que vous utilisiez Google Ads ou Meta Ads, le trafic doit atterrir sur une page de destination optimisee — pas votre page d accueil. Cette page doit contenir : une promesse claire ('Devis gratuit en 24h'), des photos de vos realisations, des avis clients, et un formulaire court (prenom, telephone, type de travaux, secteur geographique).",
      },
      {
        type: "p",
        text: "Avec un chatbot IA configure sur votre site, les prospects qui arrivent la nuit ou le week-end sont accueillis, qualifies et rassuress automatiquement. Vous recevez la demande le lendemain matin, prete a traiter.",
      },
      {
        type: "h2",
        text: "Conclusion : l independance ou la commission",
      },
      {
        type: "p",
        text: "Il n y a pas de bonne ou de mauvaise solution en absolu. Les plateformes ont rendu service a beaucoup d artisans pour demarrer. Mais a partir d un certain volume d activite, continuer a payer des commissions revient a louer votre clientele sans jamais la posseder. Construire votre propre canal d acquisition, c est investir une fois pour en profiter a vie.",
      },
    ],
  },
  {
    slug: "site-web-artisan-indispensable",
    category: "Site Intelligent",
    categoryColor: "indigo",
    date: "2 Mars 2025",
    read: "5 min de lecture",
    title: "Pourquoi un artisan sans site web perd des clients chaque jour",
    excerpt:
      "73 % des Francais cherchent un artisan sur Google avant de l appeler. Sans site web professionnel, vous perdez ces clients potentiels chaque jour.",
    content: [
      {
        type: "p",
        text: "Vous avez peut-etre entendu cette phrase de la bouche d un client : 'Je vous ai trouve sur Google'. Ou peut-etre que vous ne l entendez jamais — et c est precisement le probleme. Si vous n avez pas de site web professionnel, vous n existez tout simplement pas pour une large part de votre marche potentiel.",
      },
      {
        type: "highlight",
        text: "73 % des Francais cherchent un artisan ou un prestataire de service sur Internet avant de prendre contact. Si vous n etes pas la, votre concurrent l est.",
      },
      {
        type: "h2",
        text: "Ce que les clients cherchent avant de vous appeler",
      },
      {
        type: "p",
        text: "Avant de composer votre numero, un prospect passe en moyenne 7 minutes a rechercher des informations en ligne. Il cherche a repondre a trois questions essentielles : est-ce que cet artisan est competent ? Est-ce qu il travaille dans ma zone ? Est-ce qu il est serieux ?",
      },
      {
        type: "ul",
        items: [
          "Des photos de realisations recentes (avant / apres de preference)",
          "Des avis clients verifies (Google, Pages Jaunes)",
          "Une zone d intervention clairement definie",
          "Un moyen de contact simple : formulaire, telephone ou WhatsApp",
          "Des informations sur les delais et les tarifs (meme approximatifs)",
        ],
      },
      {
        type: "p",
        text: "Un artisan sans site web oblige le prospect a se contenter de ce qu il trouve ailleurs — souvent les profils Habitatpresto ou Leboncoin, qui renvoient directement vers la concurrence.",
      },
      {
        type: "h2",
        text: "Les 5 elements indispensables d un bon site artisan",
      },
      {
        type: "ol",
        items: [
          "Une page d accueil claire avec votre metier, votre zone et votre promesse principale (ex : 'Plombier disponible 7j/7 en Ile-de-France — Devis gratuit en 2h')",
          "Une galerie de realisations avec des photos de vrai qualite, idealement en before/after",
          "Une page 'Avis clients' ou l integration de vos avis Google directement visibles",
          "Un formulaire de demande de devis simple : 5 champs maximum, reponse garantie sous 24h",
          "Une fiche Google Business Profile liee au site, avec vos horaires, votre zone et vos photos mises a jour",
        ],
      },
      {
        type: "h2",
        text: "Le SEO local : etre trouve quand ca compte",
      },
      {
        type: "p",
        text: "Le referencement local, c est apparaitre quand quelqu un cherche 'electricien [votre ville]' sur Google. Ce n est pas une magie complexe : c est une question de signaux coherents. Votre adresse, votre numero de telephone, votre secteur d activite doivent etre identiques sur votre site, votre fiche Google et vos annuaires locaux.",
      },
      {
        type: "p",
        text: "Un site web bien structure avec les bonnes informations locales peut vous faire apparaitre dans le 'pack local' de Google — les trois resultats avec la carte qui s affichent en premier. Ces clics sont gratuits, contrairement aux clics publicitaires.",
      },
      {
        type: "h2",
        text: "Le chatbot IA : repondre a 3h du matin",
      },
      {
        type: "p",
        text: "Un artisan ne peut pas repondre au telephone 24h/24. Un chatbot IA configure sur votre site peut le faire. Il accueille le visiteur, repond aux questions frequentes (zone d intervention, delais, types de travaux), capture les coordonnees du prospect et vous envoie un resume le matin. Des clients signes pendant que vous dormiez.",
      },
      {
        type: "p",
        text: "Le site web professionnel n est plus un luxe pour les artisans. C est la condition de base pour exister dans l economie numerique actuelle. Sans lui, vous laissez des clients partir chez un concurrent qui, lui, a pris le temps de s y mettre.",
      },
    ],
  },
  {
    slug: "formation-remplir-sessions-google-ads",
    category: "Formation",
    categoryColor: "emerald",
    date: "24 Fev 2025",
    read: "9 min de lecture",
    title: "Remplir ses sessions de formation avec Google Ads : guide complet",
    excerpt:
      "Strategie pas a pas pour organisme de formation : mots-cles, ciblage, annonces et optimisation du cout par inscription.",
    content: [
      {
        type: "p",
        text: "Un organisme de formation a un defi particulier : remplir des sessions a des dates precises, avec un public specifique, pour des formations qui peuvent couter de 500 a 5 000 EUR par inscription. Les methodes d acquisition classiques — bouche-a-oreille, salons, emailings — ne suffisent plus. Google Ads est aujourd hui le canal le plus previsible et le plus scalable pour y parvenir.",
      },
      {
        type: "h2",
        text: "Comprendre l intention de recherche en formation",
      },
      {
        type: "p",
        text: "Avant de lancer une campagne, il faut comprendre comment vos futurs stagiaires cherchent. Il existe trois types d intentions de recherche que vous devez cibler differemment :",
      },
      {
        type: "ul",
        items: [
          "Recherche de certification : 'formation habilitation electrique B1', 'formation CACES R489', 'formation SST certifiante'. Intention forte, budget a privilegier.",
          "Recherche par probleme : 'comment se recycler dans le batiment', 'formation continue prise en charge CPF'. Cibler avec du contenu pedagogique.",
          "Recherche par financement : 'formation CPF prise en charge 100%', 'formation eligible CPF'. Mentionner le CPF dans vos annonces booste les clics de 40 %.",
        ],
      },
      {
        type: "h2",
        text: "La structure de campagne qui convertit",
      },
      {
        type: "p",
        text: "Ne creez pas une seule campagne fourre-tout. Segmentez par certification ou par thematique. Chaque groupe d annonces doit cibler un ensemble de mots-cles tres proches semantiquement et renvoyer vers une landing page specifique a cette formation — pas vers votre page d accueil.",
      },
      {
        type: "ol",
        items: [
          "Une campagne par famille de certifications (securite, management, langues, numerique...)",
          "Dans chaque campagne, un groupe d annonces par certification precise",
          "Pour chaque groupe : 3 annonces responsives a tester en parallele",
          "Pour chaque groupe : une landing page dediee avec programme, dates, financement et formulaire d inscription",
        ],
      },
      {
        type: "h2",
        text: "Les mots-cles a inclure et a exclure",
      },
      {
        type: "p",
        text: "Inclure : le nom exact de la certification, les synonymes, les variantes avec 'eligble CPF', 'prise en charge', 'organisme agree'. Exclure absolument : 'gratuit', 'torrent', 'PDF', 'offre emploi', 'formateur' (les gens qui cherchent a devenir formateurs, pas a se former). Ces exclusions peuvent reduire vos couts de 20 a 30 % sans affecter la qualite des leads.",
      },
      {
        type: "h2",
        text: "Rediger des annonces qui convertissent",
      },
      {
        type: "p",
        text: "Votre annonce doit repondre en 3 lignes aux trois questions du prospect : est-ce la bonne formation ? Est-ce que je peux la financer ? Comment m inscrire ? Utilisez les extensions d annonces : extensions d appel (numero direct), extensions de lieu (votre ville), extensions de site (lien vers les dates, le programme, le financement CPF).",
      },
      {
        type: "highlight",
        text: "Les annonces qui mentionnent 'CPF' dans le titre ont un taux de clic 38 % superieur en moyenne sur le secteur formation.",
      },
      {
        type: "h2",
        text: "La landing page : convertir le clic en inscription",
      },
      {
        type: "p",
        text: "Une landing page de formation efficace contient dans cet ordre : le titre de la certification, les objectifs en 3 points, les prochaines dates disponibles, les modes de financement acceptes (CPF, OPCO, financement personnel), les temoignages de stagiaires, et un formulaire d inscription court. La preuve sociale — temoignages, taux de reussite, nombre de stagiaires formes — est determinante pour les formations a fort enjeu.",
      },
      {
        type: "h2",
        text: "Optimiser semaine apres semaine",
      },
      {
        type: "p",
        text: "Google Ads n est pas un systeme qu on lance et qu on oublie. Les deux premieres semaines servent a collecter des donnees. A partir de la 3e semaine, identifiez les mots-cles qui consomment du budget sans convertir et suspendez-les. Augmentez les encheres sur les mots-cles qui generent des inscriptions a un cout acceptable. Ajustez les horaires de diffusion aux heures ou vos cibles sont actives (souvent en pause dejeuner et en soiree).",
      },
      {
        type: "p",
        text: "Un organisme de formation qui suit ces principes peut atteindre un cout par inscription de 20 a 50 EUR, pour des formations dont la valeur est de 10 a 100 fois superieure. C est l un des meilleurs retours sur investissement marketing disponibles aujourd hui.",
      },
    ],
  },
  {
    slug: "google-ads-vs-leboncoin-artisan",
    category: "Renovation",
    categoryColor: "orange",
    date: "17 Fev 2025",
    read: "6 min de lecture",
    title: "Google Ads vs Leboncoin / MyTradie : quel est le meilleur canal pour un artisan ?",
    excerpt:
      "Comparatif honnete des plateformes a commission vs publicite directe: couts, qualite des leads et independance.",
    content: [
      {
        type: "p",
        text: "La question revient souvent dans nos audits : 'Vaut-il mieux rester sur Leboncoin et Habitatpresto ou passer a Google Ads ?' Il n y a pas de reponse universelle, mais il y a une reponse honnete. Voici un comparatif base sur des donnees reelles, sans parti pris.",
      },
      {
        type: "h2",
        text: "Le cout reel de chaque canal",
      },
      {
        type: "p",
        text: "Sur Habitatpresto et plateformes similaires, le modele est la commission : entre 12 et 20 % du montant HT du chantier. Pour un chantier de renovation de salle de bain a 8 000 EUR, cela represente entre 960 et 1 600 EUR de commission. Ces commissions s accumulent chaque mois, chaque annee, sans jamais vous construire un actif propre.",
      },
      {
        type: "p",
        text: "Sur Google Ads, vous payez au clic. En renovation locale, le cout par clic varie entre 1,5 et 6 EUR selon le secteur et la concurrence. Avec un taux de conversion de landing page de 15 %, cela donne un cout par lead de 10 a 40 EUR. Pour un chantier a 8 000 EUR, meme avec 5 leads non concretises, le cout d acquisition d un client reste de 50 a 200 EUR — tres loin des 960 EUR de commission.",
      },
      {
        type: "highlight",
        text: "Sur 10 artisans que nous accompagnons, 9 ont un cout d acquisition client via Google Ads inferieur a leurs anciennes commissions de plateformes.",
      },
      {
        type: "h2",
        text: "La qualite des leads : leads chauds vs leads froids partages",
      },
      {
        type: "p",
        text: "C est la difference fondamentale. Sur les plateformes de mise en relation, votre lead a remplit un formulaire generique. Il a probablement contacte 3 a 5 artisans en meme temps. Il compare les prix. Vous etes en competition immediate.",
      },
      {
        type: "p",
        text: "Via Google Ads ou Meta Ads, le prospect a clique sur votre annonce, visite votre site, vu vos realisations, et rempli votre formulaire a votre nom. Il est en contact direct avec vous, pas avec une plateforme intermediaire. Le taux de transformation en devis et en chantier signe est systematiquement superieur.",
      },
      {
        type: "ul",
        items: [
          "Plateforme commission : taux de signature souvent entre 10 et 20 % (concurrence directe)",
          "Vos propres leads : taux de signature entre 25 et 45 % selon le secteur et la qualite du suivi",
        ],
      },
      {
        type: "h2",
        text: "L independance : la valeur que les chiffres ne montrent pas",
      },
      {
        type: "p",
        text: "Les plateformes peuvent changer leurs conditions, augmenter leurs commissions, ou simplement disparaitre. En 2023, plusieurs artisans ont vu leurs conditions Habitatpresto changer du jour au lendemain. Ceux qui avaient investi dans leur propre canal d acquisition n ont pas ete affectes. Ceux qui dependaient a 100 % de la plateforme ont perdu une partie majeure de leur source de clients du jour au lendemain.",
      },
      {
        type: "h2",
        text: "Verdict : quand utiliser quoi ?",
      },
      {
        type: "p",
        text: "Leboncoin et les plateformes restent utiles pour demarrer rapidement quand on n a pas encore de site web ni de budget publicitaire. Elles offrent un flux de leads immediat. Mais elles ne doivent pas rester votre canal principal au-dela des premiers mois. Des que vous avez un site web professionnel et un budget publicitaire de 300 a 500 EUR par mois, la bascule vers votre propre systeme d acquisition devient rentable en moins de 3 mois.",
      },
      {
        type: "p",
        text: "La strategie ideale a court terme : maintenir une presence sur les plateformes pour le flux immediat, tout en construisant votre propre canal d acquisition en parallele. A moyen terme : migrer progressivement vers l independance totale.",
      },
    ],
  },
  {
    slug: "site-web-formation-convertir-stagiaires",
    category: "Site Intelligent",
    categoryColor: "indigo",
    date: "10 Fev 2025",
    read: "6 min de lecture",
    title: "5 elements indispensables sur le site d un organisme de formation",
    excerpt:
      "Programme detaille, calendrier sessions, bouton CPF visible, preuves et SEO: les fondamentaux d un site qui convertit.",
    content: [
      {
        type: "p",
        text: "Un organisme de formation qui veut remplir ses sessions en 2025 ne peut pas se contenter d un site vitrine. Il lui faut un outil de conversion actif, qui repond aux questions des prospects, les rassure, et les guide vers l inscription. Voici les 5 elements que nous retrouvons systematiquement sur les sites de formation qui performent.",
      },
      {
        type: "h2",
        text: "1. Un catalogue de formations clair et bien structure",
      },
      {
        type: "p",
        text: "La premiere erreur des organismes de formation : un site avec une longue liste de formations non filtrable, sans indication claire sur le niveau, la duree ou le financement. Le visiteur se perd et part.",
      },
      {
        type: "p",
        text: "Ce qui fonctionne : un catalogue avec des filtres par thematique, par niveau, par mode de financement (CPF, OPCO, individuel) et par format (presentiel, distanciel, mixte). Chaque formation a sa propre page avec le programme detaille, les objectifs pedagogiques, les modalites d evaluation, le profil des formateurs et les prochaines dates.",
      },
      {
        type: "h2",
        text: "2. Le financement CPF visible et rassurant",
      },
      {
        type: "p",
        text: "Le CPF (Compte Personnel de Formation) est le premier critere de decision de beaucoup de candidats. Pourtant, de nombreux organismes mentionnent le CPF en bas de page, en petits caracteres, comme une note secondaire. C est une erreur majeure.",
      },
      {
        type: "highlight",
        text: "Les formations affichant 'Eligible CPF — 100 % prise en charge possible' dans leur titre de page ont un taux de clic 38 % superieur sur Google.",
      },
      {
        type: "p",
        text: "Mettez le CPF en avant : un badge visible sur chaque formation eligible, un tutoriel en 3 etapes sur comment utiliser son CPF, et une FAQ qui repond aux questions frequentes sur Mon Compte Formation.",
      },
      {
        type: "h2",
        text: "3. Un calendrier de sessions mis a jour en temps reel",
      },
      {
        type: "p",
        text: "Le prospect qui veut se former a une contrainte de temps. Il veut savoir : quand est la prochaine session ? Y a-t-il encore de la place ? Trop de sites de formation affichent des dates perimees ou n ont pas de calendrier du tout. C est la meilleure facon de perdre un prospect pret a s inscrire.",
      },
      {
        type: "ul",
        items: [
          "Calendrier des sessions avec dates, lieux et places disponibles mis a jour chaque semaine",
          "Indication du nombre de places restantes ('3 places disponibles') pour creer l urgence",
          "Bouton 'Je m inscris' ou 'Je reserve ma place' directement sur chaque session",
          "Liste d attente automatique quand une session est complete",
        ],
      },
      {
        type: "h2",
        text: "4. Les preuves sociales au bon endroit",
      },
      {
        type: "p",
        text: "Les temoignages de stagiaires satisfaits sont determinants, mais leur placement sur le site est tout aussi important que leur presence. Ils ne doivent pas seulement figurer sur une page 'Avis clients' que personne ne consulte — ils doivent etre integres sur chaque page de formation, juste avant le formulaire d inscription.",
      },
      {
        type: "p",
        text: "Les elements de preuve les plus efficaces : le taux de reussite a l examen, le taux d insertion professionnelle si applicable, les verbatims de stagiaires avec photo et entreprise, et le nombre total de stagiaires formes. Un organisme qui affiche '1 200 stagiaires formes depuis 2019' inspire plus confiance qu un organisme sans donnees chiffrees.",
      },
      {
        type: "h2",
        text: "5. Un chatbot IA qui pre-qualifie les candidats",
      },
      {
        type: "p",
        text: "Un organisme de formation recoit souvent des dizaines de questions similaires chaque semaine : 'Cette formation est-elle eligible CPF ?', 'Combien de temps dure la formation ?', 'Puis-je la suivre a distance ?'. Un chatbot IA configure sur votre site repond a ces questions en temps reel, 24h/24, et capture les coordonnees des prospects qualifies pour votre equipe commerciale.",
      },
      {
        type: "p",
        text: "Resultat observe : les organismes qui ont deploye un chatbot IA sur leur site recoivent en moyenne 35 % de demandes d information supplementaires, dont 60 % se transforment en inscriptions apres suivi de l equipe. C est une source de revenus dormante que la plupart des organismes n exploitent pas.",
      },
    ],
  },
  {
    slug: "meta-ads-renovation-before-after",
    category: "Renovation",
    categoryColor: "orange",
    date: "3 Fev 2025",
    read: "8 min de lecture",
    title: "Meta Ads pour la renovation : pourquoi le before/after performe",
    excerpt:
      "Comment structurer et cibler les visuels before/after pour maximiser les demandes de devis qualifiees sur Facebook et Instagram.",
    content: [
      {
        type: "p",
        text: "Dans l univers de la publicite pour les artisans et les entreprises de renovation, un format domine systematiquement les tableaux de bord : le before/after. Photo ou video, Instagram ou Facebook, ce format genere en moyenne deux fois plus de clics et trois fois plus de demandes de devis que les publicites classiques avec simple photo de resultat. Pourquoi ? Et surtout comment l exploiter correctement ?",
      },
      {
        type: "h2",
        text: "La psychologie du before/after",
      },
      {
        type: "p",
        text: "Le before/after fonctionne parce qu il active deux mecanismes psychologiques puissants : la projection et la preuve. En voyant la transformation, le prospect peut se projeter : 'Ma salle de bain pourrait ressembler a ca.' Simultanement, il obtient une preuve tangible de votre competence sans avoir besoin de lire une ligne de texte.",
      },
      {
        type: "p",
        text: "Dans un feed Instagram ou Facebook sature de contenu, le before/after arrête naturellement le scroll. L oeil est attire par le contraste, par la transformation visible. C est un format qui provoque une reaction emotionnelle immediate — admiration, envie, identification — bien avant que la logique n entre en jeu.",
      },
      {
        type: "h2",
        text: "Les regles d un bon before/after",
      },
      {
        type: "ul",
        items: [
          "Meme angle de prise de vue entre le before et le after — si l angle change, la transformation est moins credible",
          "Meme heure de la journee et meme lumiere si possible — une salle de bain avant en lumiere froide et apres en lumiere chaude fausse la comparaison",
          "Le before doit montrer un etat clairement ameliorable — pas un avant trop propre qui minimise la transformation",
          "Le after doit etre impeccable : propre, range, bien eclaire, sans outils ni dechets",
          "Format carre (1:1) pour le feed, format vertical (9:16) pour les Stories et Reels",
        ],
      },
      {
        type: "h2",
        text: "Video ou photo ?",
      },
      {
        type: "p",
        text: "La video genere plus d engagement que la photo statique, mais elle necessite plus de preparation. Un format qui fonctionne tres bien : la video de revelation. Vous commencez sur le before, puis un fondu ou un balayage revele le after. Duree ideale : 8 a 15 secondes. Pas besoin de materiel professionnel — un smartphone avec stabilisateur suffit.",
      },
      {
        type: "p",
        text: "Si vous n avez pas encore de videos, commencez par des photos statiques en format carrousel : premiere image = le before, deuxieme image = le after, troisieme image = details de la realisation, quatrieme image = formulaire de devis avec offre claire.",
      },
      {
        type: "h2",
        text: "Le ciblage : toucher les bons proprietaires",
      },
      {
        type: "p",
        text: "Sur Meta Ads, vous ne ciblez pas des mots-cles mais des audiences. Pour la renovation, les audiences les plus performantes sont composees de proprietaires entre 35 et 60 ans, avec un interet pour la renovation, le bricolage, l immobilier, ou les programmes de deco (M6 Deco, La Maison France 5). Combinez le ciblage par interet avec un ciblage geographique strict autour de votre zone d intervention.",
      },
      {
        type: "highlight",
        text: "Le retargeting est souvent neglije : reciblez les visiteurs de votre site web avec vos publicites before/after. Ces personnes ont deja montre un interet — leur taux de conversion est 4 a 5 fois superieur a une audience froide.",
      },
      {
        type: "h2",
        text: "Budget et structure de campagne",
      },
      {
        type: "p",
        text: "Pour demarrer, un budget de 300 a 500 EUR par mois suffit pour un artisan local. Repartissez-le en deux campagnes : une campagne de notoriete (before/after en trafic froid pour faire connaitre votre travail dans votre zone) et une campagne de conversion (retargeting avec offre directe : 'Demande de devis gratuit — reponse en 24h').",
      },
      {
        type: "p",
        text: "Testez toujours plusieurs visuels en parallele : un before/after salle de bain, un before/after cuisine, un before/after facade. Apres 7 jours, identifiez le visuel qui genere le plus de clics au meilleur cout et allouez-lui la majorite du budget. La publicite sur Meta, comme tout systeme, s ameliore quand on l alimente de donnees et qu on prend des decisions basees sur les resultats.",
      },
      {
        type: "h2",
        text: "La landing page adaptee",
      },
      {
        type: "p",
        text: "Un before/after performant renvoie vers une landing page qui continue la logique visuelle : d autres photos de realisations, un formulaire de devis court, votre zone d intervention et un numero de telephone visible. Evitez d envoyer le trafic Meta vers votre page d accueil — le prospect perd le fil et quitte. La coherence entre la publicite et la landing page est ce qui determine votre taux de conversion final.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
