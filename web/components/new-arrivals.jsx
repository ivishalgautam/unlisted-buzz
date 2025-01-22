"use client";
import PageSection from "./page-section";
import Heading from "./heading";
import StockCardCompact from "./cards/stock-card-compact";
import { Button } from "./ui/button";
import { newArrivalsShares, newArrivalsTimeRange } from "@/data";
import Container from "./container";
import { fetchSharesNewArrivals } from "@/service/share";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

export default function NewArrivalsStocks() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () =>
      fetchSharesNewArrivals(`time_range=${newArrivalsTimeRange}&is_ipo=false`),
    queryKey: ["shares-new-arrivals"],
    // enabled: !!searchParamStr,
  });

  return (
    <PageSection className={"py-10"}>
      <Container>
        <Heading
          title="New arrivals"
          para="Stay ahead in the market with instant stock alerts. Get real-time notifications on price changes."
        />

        <div className="space-y-10">
          <div className="grid gap-4 mt-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
            {isLoading
              ? Array.from({ length: 5 }).map((_, ind) => (
                  <Skeleton
                    key={ind}
                    className="w-[100px] h-[20px] rounded-full"
                  />
                ))
              : isError
                ? (error?.message ?? "error")
                : data?.shares?.map((share, i) => (
                    <StockCardCompact key={i} share={share} />
                  ))}
          </div>
          {/* <div className="text-center">
            <Button>View more</Button>
          </div> */}
        </div>
      </Container>
    </PageSection>
  );
}
