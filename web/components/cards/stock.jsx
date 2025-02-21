import Image from "next/image";
import React from "react";
import { rupee } from "@/hooks/Intl";
import { MoveRight, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import config from "@/config";
import { Small } from "../typography";
import { popularUnlistedShareTimeRange } from "@/data";

export default function StockCard({ share }) {
  return (
    <Link href={`/shares/${share.slug}`}>
      <div className="flex gap-4 bg-white justify-start items-center border rounded-2xl p-4 h-full">
        <figure className="size-10 md:size-16">
          <Image
            width={100}
            height={100}
            src={`${config.file_base}/${share.image}`}
            alt={share.name}
            className="w-full h-full object-contain"
          />
        </figure>

        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-bold">{share.name}</h2>
          <div className="flex md:block lg:flex items-center gap-2 text-xs mb-2 mt-1">
            <div className="text-primary-300">{rupee.format(share.price)}</div>
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
                className={"text-xs font-normal"}
              >{`(${share.price_difference}) (${share.percentage_change ?? 0}%)`}</Small>{" "}
              <span className="text-gray-500 uppercase">
                {popularUnlistedShareTimeRange}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
