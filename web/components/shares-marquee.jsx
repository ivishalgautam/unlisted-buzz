"use client";
import { popularUnlistedShareTimeRange } from "@/data";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { fetchShares } from "@/service/share";
import { MoveRight, TrendingDown, TrendingUp } from "lucide-react";
import { Small } from "./typography";
import Marquee from "./marquee";

export default function SharesMarquee() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () =>
      fetchShares(
        `time_range=${popularUnlistedShareTimeRange}&is_ipo=false&limit=20&featured=true`
      ),
    queryKey: ["shares"],
  });

  if (isLoading) return <Skeleton className={"w-full h-10"} />;
  if (isError) return error?.message ?? "error";

  return (
    <div className="bg-black py-1">
      <Marquee pauseOnHover className="[--duration:120s]">
        {Array.from({ length: 1 }).map((item, ind) => (
          <div
            key={ind}
            className="flex shrink-0 animate-marquee flex-row justify-around gap-6"
          >
            {data?.shares?.map((share, ind) => (
              <div key={ind} className="text-white space-x-2 text-sm flex">
                <span className="text-nowrap">{share.name}</span>
                <span className="text-secondary font-semibold">
                  {rupee.format(share.price)}
                </span>
                <div
                  className={cn(
                    "flex items-center justify-start gap-1 text-green-500",
                    {
                      "text-green-500": share.gain_or_loss === "gain",
                      "text-red-500": share.gain_or_loss === "loss",
                    }
                  )}
                >
                  {share.gain_or_loss === "gain" ? (
                    <TrendingUp size={20} />
                  ) : share.gain_or_loss === "loss" ? (
                    <TrendingDown size={20} />
                  ) : (
                    <MoveRight size={20} />
                  )}
                  <Small
                    className={"text-xs font-bold"}
                  >{`(${share.price_difference}) (${share.percentage_change}%)`}</Small>{" "}
                  <span className="text-gray-400 uppercase">
                    {popularUnlistedShareTimeRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
