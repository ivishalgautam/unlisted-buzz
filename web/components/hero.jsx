import React from "react";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import PageSection from "./page-section";
import { TopStocks } from "./top-stocks";
import Container from "./container";

export default function Hero() {
  return (
    <PageSection className="">
      <Container>
        <div className="w-full space-y-16">
          <div>
            <h1 className="text-center font-urbanist text-lg font-semibold sm:text-2xl lg:text-3xl xl:text-5xl">
              <Balancer>
                Maximize Returns <br /> with Expert Stock Insights
              </Balancer>
            </h1>
            <Muted className={"text-center my-10"}>
              <Balancer>
                Effortlessly buy and sell stocks with real-time updates, smart
                tools, <br />
                and expert insights for maximum profits.
              </Balancer>
            </Muted>

            <PlaceholdersAndVanishInput
              placeholders={[
                "Fast, Reliable Stock Buy-Sell Platform",
                "Buy Low, Sell High: Simplify Strategy",
                "Power Your Portfolio with Smarter Trades",
              ]}
            />
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
