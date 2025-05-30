import React from "react";
import Hero from "./hero";
import WhyChooseUs from "./why-choose-us";
import CompanyPerformance from "./company-performance";
import ImpactfullStockAlerts from "./impactful-stock-alerts";
import TrackPortfolio from "./track-portfolio";
import TrackPortfolioTable from "./track-portfolio-table";
import { TestimonialsVariant } from "./testimonials";
import FAQs from "./faq";
import NewArrivalsStocks from "./new-arrivals";
import { TopSectors } from "./top-sectors";
import EnquirySection from "./enquiry-section";
import { PopularUnlistedShares } from "./popular-unlisted-shares";
import { BlogCarousel } from "./blogs-carousel";
import WhatsAppChatbot from "./whatsapp-chatbot";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularUnlistedShares />
      <NewArrivalsStocks />
      <TopSectors />
      <WhyChooseUs />
      {/* <CompanyPerformance /> */}
      {/* <ImpactfullStockAlerts /> */}
      <div className="bg-white">
        {/* <TrackPortfolio /> */}
        <TrackPortfolioTable />
        <EnquirySection />
        <TestimonialsVariant />
        <BlogCarousel />
        <FAQs />
        <WhatsAppChatbot />
      </div>
    </div>
  );
}
