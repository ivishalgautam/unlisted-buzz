import config from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectorCard({ sector }) {
  return (
    <Link href={`/sectors/${sector.slug}`}>
      <div className="space-y-3 relative">
        <div className="flex items-center justify-center">
          <figure className="mx-auto size-16">
            <Image
              src={`${config.file_base}/${sector.image}`}
              width={200}
              height={200}
              alt={sector.name}
            />
          </figure>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-center font-semibold">{sector.name}</span>
        </div>
        <div className="text-center font-semibold text-primary text-xl">
          {sector.share_count}
        </div>
      </div>
    </Link>
  );
}
