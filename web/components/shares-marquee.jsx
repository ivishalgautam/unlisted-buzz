import { popularUnlistedShares } from "@/data";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";
import React from "react";

export default function SharesMarquee() {
  return (
    <div className="h-10 flex gap-10 items-center bg-black overflow-hidden">
      {Array.from({ length: 5 }).map((item, ind) => (
        <div
          key={ind}
          className="flex shrink-0 animate-marquee flex-row justify-around gap-6"
        >
          {popularUnlistedShares.map((item, ind) => (
            <div key={ind} className="text-white space-x-2 text-sm">
              <span className="text-nowrap">{item.title}</span>
              <span className="text-primary font-semibold">
                {rupee.format(item.price)}
              </span>
              <span
                className={cn("text-primary font-semibold", {
                  "text-green-500": item.isUp,
                  "text-red-500": !item.isUp,
                })}
              >
                {item.status()}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
