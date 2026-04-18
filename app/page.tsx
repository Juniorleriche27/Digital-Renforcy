import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsPanel from "@/components/StatsPanel";
import CountersBar from "@/components/CountersBar";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import EcosystemSection from "@/components/EcosystemSection";
import CombinedOfferBanner from "@/components/CombinedOfferBanner";
import SectorsSection from "@/components/SectorsSection";
import WebDevSection from "@/components/WebDevSection";
import ProofSection from "@/components/ProofSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingLeadFormSection from "@/components/PricingLeadFormSection";
import AuditCTASection from "@/components/AuditCTASection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <div data-reveal data-delay="40ms">
          <Hero />
        </div>
        <div data-reveal data-delay="80ms">
          <StatsPanel />
        </div>
        <div data-reveal data-delay="120ms">
          <CountersBar />
        </div>
        <div data-reveal data-delay="40ms">
          <ProblemsSection />
        </div>
        <div data-reveal data-delay="60ms">
          <SolutionsSection />
        </div>
        <div data-reveal data-delay="80ms">
          <EcosystemSection />
        </div>
        <div data-reveal data-delay="100ms">
          <CombinedOfferBanner />
        </div>
        <div data-reveal data-delay="40ms">
          <SectorsSection />
        </div>
        <div data-reveal data-delay="60ms">
          <WebDevSection />
        </div>
        <div data-reveal data-delay="80ms">
          <ProofSection />
        </div>
        <div data-reveal data-delay="100ms">
          <ComparisonSection />
        </div>
        <div data-reveal data-delay="40ms">
          <ProcessSection />
        </div>
        <div data-reveal data-delay="60ms">
          <MethodSection />
        </div>
        <div data-reveal data-delay="80ms">
          <TestimonialsSection />
        </div>
        <div data-reveal data-delay="100ms">
          <PricingLeadFormSection />
        </div>
        <div data-reveal data-delay="120ms">
          <AuditCTASection />
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <FloatingAssistant />
    </>
  );
}
