import Image from "next/image";
import React from "react";

export default function SectorCard({ sector }) {
  return (
    <div className="space-y-3 relative">
      <div className="flex items-center justify-center">
        <figure className="mx-auto size-16">
          <Image src={sector.icon} width={200} height={200} alt={sector.name} />
        </figure>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-center font-semibold">{sector.name}</span>
      </div>
      <div className="text-center font-semibold text-primary text-xl">
        {sector.share}
      </div>
    </div>
  );
}
