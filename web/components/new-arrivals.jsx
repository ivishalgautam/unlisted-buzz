import PageSection from "./page-section";
import Heading from "./heading";
import StockCardCompact from "./cards/stock-card-compact";
import { Button } from "./ui/button";
import { newArrivalsShares } from "@/data";
import Container from "./container";

export default function NewArrivalsStocks() {
  return (
    <PageSection className={"py-10"}>
      <Container>
        <Heading
          title="New arrivals"
          para="Stay ahead in the market with instant stock alerts. Get real-time notifications on price changes."
        />

        <div className="space-y-10">
          <div className="grid gap-4 mt-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
            {newArrivalsShares.map((stock, i) => (
              <StockCardCompact key={i} stock={stock} />
            ))}
          </div>
          <div className="text-center">
            <Button>View more</Button>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
