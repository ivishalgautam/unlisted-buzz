import StockCard from "@/components/cards/stock";
import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import { fetchShares } from "@/service/share";

export default async function Page({ params }) {
  const { id } = await params;
  const data = await fetchShares(`sector_slug=${id}`);

  return (
    <PageSection>
      <Heading title="Shares by sector" />
      <div className="grid gap-4 mt-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {data?.shares?.length < 1 && <p>No shares found!</p>}
        {data?.shares?.map((share, i) => (
          <StockCard key={i} share={share} />
        ))}
      </div>
    </PageSection>
  );
}
