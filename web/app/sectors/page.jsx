import SectorCard from "@/components/cards/sector";
import PageSection from "@/components/page-section";
import { fetchSectors } from "@/service/sector";
import React from "react";

export const metadata = {
  title: "Sectors",
  description: "Sectors",
};

export default async function SectorsPage() {
  const data = await fetchSectors("");
  return (
    <PageSection>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {data.sectors.map((sector) => (
          <div
            key={sector.id}
            className={`transition-all duration-300 ease-in-out transform bg-white p-6 rounded-2xl shadow-md`}
          >
            <SectorCard sector={sector} />
          </div>
        ))}
      </div>
    </PageSection>
  );
}
