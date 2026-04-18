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
            subtitle="Systemes automatises d acquisition clients — Tunnels de conversion et automatisation sur mesure"
            description="Digital Renforcy concoit et deploie des systemes automatises d acquisition clients sur-mesure. Tunnels de conversion, landing pages haute performance, formulaires intelligents, chatbots IA et automatisation complete du parcours prospect. Chaque contact est capte, qualifie et transmis automatiquement."
            bullets={acquisitionFeatureList}
            metrics={[
              { value: "×3", label: "Multiplication du volume de prospects" },
              { value: "-60%", label: "Reduction du temps de traitement manuel" },
              { value: "+180%", label: "Volume de leads qualifies" },
              { value: "4-6 sem", label: "Delai moyen pour les premiers resultats" },
            ]}
            videoTitle="Systeme d acquisition client automatise — Digital Renforcy"
          />
        </div>

        <div data-reveal data-delay="90ms">
          <ServiceDetailSection
            id="service-web"
            badge="SERVICE 02"
            icon="🌐"
            title="Developpement Web Intelligent"
            subtitle="Site web professionnel + maintenance — responsive, SEO-friendly, fonctionnalites sur mesure"
            description="Digital Renforcy cree et maintient votre site web professionnel. Sites modernes, responsive et SEO-friendly avec fonctionnalites sur mesure : chatbot IA, formulaires automatises, galerie de realisations. Integration technique poussee pour performance et securite maximales. Creation, hebergement, maintenance et mises a jour dans un abonnement mensuel sans surprise."
            bullets={webFeatureList}
            metrics={[
              { value: "200EUR", label: "Abonnement mensuel a partir de (tout inclus)" },
              { value: "2-3 sem", label: "Delai de mise en ligne" },
              { value: "95+", label: "Score Google Lighthouse" },
              { value: "100%", label: "Sites optimises mobile-first" },
            ]}
            videoTitle="Creation de site web intelligent pour entreprise"
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
