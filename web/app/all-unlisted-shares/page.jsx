import StockCard from "@/components/cards/stock";
import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import { fetchShares } from "@/service/share";
import React from "react";

export const metadata = {
  title: "All Unlisted Shares",
  description: "All Unlisted Shares",
};

export default async function AllUnlistedSharesPage({ searchParams: { q } }) {
  let data;
  try {
    data = await fetchShares(q ? `q=${encodeURIComponent(q)}` : "");
  } catch (error) {
    console.error("Error fetching shares:", error);
    data = null;
  }

  if (!data || !data.shares) {
    return (
      <PageSection>
        <Heading title="All Unlisted Shares" />
        <p>Error loading shares or no shares found!</p>
      </PageSection>
    );
  }

  return (
    <PageSection>
      <Heading title="All Unlisted Shares" />
      <div className="grid gap-4 mt-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {data.shares.length < 1 && <p>No shares found!</p>}
        {data.shares.map((share, i) => (
          <StockCard key={i} share={share} />
        ))}
      </div>
    </PageSection>
  );
}
