import React from "react";
import PageSection from "./page-section";
import Image from "next/image";
import Heading from "./heading";
import { Muted, Small } from "./typography";
import { Button } from "./ui/button";
import Container from "./container";

export default function TrackPortfolio() {
  return (
    <PageSection>
      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <figure>
              <Image src={"/portfolio.svg"} width={500} height={500} alt="" />
            </figure>
          </div>

          <div className="space-y-6">
            <Heading title="Track your portfolio" />

            <div className="space-y-4">
              <Muted className={"leading-7"}>
                Stay updated with real-time data on your portfolio’s
                performance. With live updates on stock prices, trends, and
                changes, you can quickly see how your investments are performing
                and make adjustments as needed.
              </Muted>
              <Muted className={"leading-7"}>
                Gain deeper insights into your investments with detailed
                analytics and performance reports. Track key metrics like ROI,
                asset allocation, and growth patterns to make data-driven
                decisions that align with your financial goals.
              </Muted>
              <Muted className={"leading-7"}>
                Set up personalized alerts to notify you when significant
                changes occur in your portfolio. Whether it's a price drop,
                rise, or market shift, stay on top of your investments and act
                swiftly to capitalize on opportunities.
              </Muted>
            </div>

            <Button className="px-10 py-6">Sign up</Button>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
