import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioCta from "@/components/portfolio/PortfolioCta";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import PortfolioStats from "@/components/portfolio/PortfolioStats";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="top">
        <div data-reveal data-delay="30ms">
          <PortfolioShowcase />
        </div>
        <div data-reveal data-delay="70ms">
          <PortfolioStats />
        </div>
        <div data-reveal data-delay="110ms">
          <PortfolioCta />
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <FloatingAssistant />
    </>
  );
}
