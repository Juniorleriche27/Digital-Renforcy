import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import ServicesFinalCta from "@/components/services/ServicesFinalCta";
import { acquisitionFeatureList, webFeatureList } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="top">
        <div data-reveal data-delay="30ms">
          <ServicesHero />
        </div>

        <div data-reveal data-delay="70ms">
          <ServiceDetailSection
            id="service-acquisition"
            badge="SERVICE 01"
            icon="🎯"
            title="Acquisition Client"
            subtitle="Systèmes automatisés d'acquisition clients — Tunnels de conversion et automatisation sur mesure"
            description="Digital Renforcy conçoit et déploie des systèmes automatisés d'acquisition clients sur-mesure. Tunnels de conversion, landing pages haute performance, formulaires intelligents, chatbots IA et automatisation complète du parcours prospect. Chaque contact est capté, qualifié et transmis automatiquement."
            bullets={acquisitionFeatureList}
            metrics={[
              { value: "×3", label: "Multiplication du volume de prospects" },
              { value: "-60%", label: "Réduction du temps de traitement manuel" },
              { value: "+180%", label: "Volume de leads qualifiés" },
              { value: "4-6 sem", label: "Délai moyen pour les premiers résultats" },
            ]}
            videoTitle="Système d'acquisition client automatisé — Digital Renforcy"
          />
        </div>

        <div data-reveal data-delay="90ms">
          <ServiceDetailSection
            id="service-web"
            badge="SERVICE 02"
            icon="🌐"
            title="Développement Web Intelligent"
            subtitle="Site web professionnel + maintenance — responsive, SEO-friendly, fonctionnalités sur mesure"
            description="Digital Renforcy crée et maintient votre site web professionnel. Sites modernes, responsive et SEO-friendly avec fonctionnalités sur mesure : chatbot IA, formulaires automatisés, galerie de réalisations. Intégration technique poussée pour performance et sécurité maximales. Création, hébergement, maintenance et mises à jour dans un abonnement mensuel sans surprise."
            bullets={webFeatureList}
            metrics={[
              { value: "200€", label: "Abonnement mensuel à partir de (tout inclus)" },
              { value: "2-3 sem", label: "Délai de mise en ligne" },
              { value: "95+", label: "Score Google Lighthouse" },
              { value: "100%", label: "Sites optimisés mobile-first" },
            ]}
            videoTitle="Création de site web intelligent pour entreprise"
            reverse
          />
        </div>

        <div data-reveal data-delay="110ms">
          <ServicesFinalCta />
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <FloatingAssistant />
    </>
  );
}
