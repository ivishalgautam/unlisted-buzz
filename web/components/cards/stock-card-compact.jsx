import Image from "next/image";
import React from "react";
import { rupee } from "@/hooks/Intl";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function StockCardCompact({ stock }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-2xl border-gray-100 items-center border-2">
      <figure className="size-20 flex-grow-0">
        <Image
          width={100}
          height={100}
          src={stock.icon}
          alt="stock"
          className="w-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-center">
        <h2 className="font-bold">{stock.title}</h2>
        <div className="flex items-center gap-2 text-xs mb-2 mt-1">
          <span className="text-primary-300">{rupee.format(stock.price)}</span>
          <span
            className={cn("flex items-center gap-1 text-green-500", {
              "text-red-500": !stock.isUp,
            })}
          >
            {stock.isUp ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            <span>{stock.status()}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
