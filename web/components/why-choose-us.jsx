import { whyChooseUs } from "@/data";
import React from "react";
import PageSection from "./page-section";
import { Muted } from "./typography";
import Heading from "./heading";

export default function WhyChooseUs() {
  return (
    <PageSection className={"space-y-8 py-20"}>
      <Heading
        className={"text-center px-10"}
        title="Why choose us"
        para="Tracking revenue, profit, cash flow, KPIs, efficiency, market share, and satisfaction ensures success."
      />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {whyChooseUs.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-start bg-white p-5 rounded-2xl border-gray-100 border-2"
          >
            <figure className="flex-grow-0 bg-blue-500/5 p-3 rounded-xl">
              <item.icon size={20} className="text-primary" />
            </figure>
            <div className="">
              <h2 className="text-base font-semibold">{item.title}</h2>
              <div className="flex items-center gap-2 text-xs">
                <Muted className="text-sm">{item.description}</Muted>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
