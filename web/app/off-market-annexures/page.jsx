import PageSection from "@/components/page-section";
import { H1, P } from "@/components/typography";
import { OFF_MARKET_ANNEXURE } from "@/data";
import React from "react";

export default function OffMarketAnnexures() {
  return (
    <PageSection className={"space-y-10"}>
      <div className="flex items-center justify-center flex-col">
        <H1>Off Market Annexures</H1>
        <P>These are needed for offline shares transfers in India.</P>
      </div>
      <div className="mx-auto max-w-xl bg-white rounded-lg border divide-y">
        {OFF_MARKET_ANNEXURE.map(({ label, pdf }) => (
          <div key={label} className="p-2 px-4">
            <a href={pdf} target="_blank" className="text-sm">
              {label}
            </a>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
