import React from "react";
import PageSection from "./page-section";
import Image from "next/image";
import Heading from "./heading";
import { Small } from "./typography";
import Container from "./container";

export default function CompanyPerformance() {
  return (
    <PageSection>
      <Container>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <figure>
              <Image
                src={"/company-performance.svg"}
                width={500}
                height={500}
                alt=""
              />
            </figure>
          </div>
          <div className="space-y-8">
            <Heading
              title="Monitor Company Performance"
              para="Monitoring key metrics like revenue growth, profit margins, cash flow, KPIs, operational efficiency, market share, and customer satisfaction ensures business health and long-term success."
            />
            <div className="space-y-4">
              <Small>Our methodology encompasses a broad range of:</Small>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Revenue Growth",
                  "Profit Margins",
                  "Cash Flow",
                  "KPIs Monitoring",
                  "Operational Efficiency",
                  "Market Share",
                  "Customer Satisfaction",
                ].map((item, ind) => (
                  <Small key={ind} className={"text-gray-500 font-normal"}>
                    {item}
                  </Small>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
