import { AboutHeader } from "./_component/about-header";
// import { CtaSection } from "./_component/cta-section";
import { FounderSection } from "./_component/founder-section";
import Quote from "./_component/quote";
import { ServicesSection } from "./_component/services-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeader />
      <ServicesSection />
      <FounderSection />

      <Quote />

      {/* <CtaSection /> */}
    </main>
  );
}
