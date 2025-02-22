"use client";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";
import PageSection from "./page-section";
import Container from "./container";
import ShareSearchBar from "./ui/share-search-bar";

export default function Hero() {
  return (
    <PageSection className="">
      <Container>
        <div className="w-full space-y-16">
          <div>
            <h1 className="text-center font-urbanist text-lg font-semibold sm:text-2xl lg:text-3xl xl:text-5xl">
              <Balancer>
                India’s Most Trusted Platform for <br /> Buying & Selling
                Unlisted <br /> & Pre-IPO Shares
              </Balancer>
            </h1>
            <Muted className={"text-center my-10"}>
              <Balancer>
                Effortlessly buy and sell stocks with real-time updates, smart
                tools, <br />
                and expert insights for maximum profits.
              </Balancer>
            </Muted>

            {/* <PlaceholdersAndVanishInput
              placeholders={[
                "Fast, Reliable Stock Buy-Sell Platform",
                "Buy Low, Sell High: Simplify Strategy",
                "Power Your Portfolio with Smarter Trades",
              ]}
            /> */}

            <ShareSearchBar />
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
