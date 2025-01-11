import Image from "next/image";
import React from "react";
import { rupee } from "@/hooks/Intl";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function StockCard({ stock }) {
  const id = stock.title.split(" ").join("-");
  return (
    <Link href={`/shares/${id}`}>
      <div className="flex gap-4 bg-white justify-start items-center  border rounded-2xl p-4 h-full">
        <figure className="size-10 md:size-16">
          <Image
            width={100}
            height={100}
            src={stock.icon}
            alt="stock"
            className="w-full h-full object-contain"
          />
        </figure>

        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-bold">{stock.title}</h2>
          <div className="flex md:block lg:flex items-center gap-2 text-xs mb-2 mt-1">
            <div className="text-primary-300">{rupee.format(stock.price)}</div>
            <div
              className={cn(
                "flex items-center justify-start gap-1 text-red-500",
                {
                  "text-green-500": stock.isUp,
                }
              )}
            >
              {stock.isUp ? (
                <TrendingUp size={20} />
              ) : (
                <TrendingDown size={20} />
              )}
              <p>{stock.status()}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
