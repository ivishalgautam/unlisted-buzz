"use client";

import { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PageSection from "./page-section";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/arrow-buttons";
import { Button, buttonVariants } from "./ui/button";
import Container from "./container";
import SectorCard from "./cards/sector";
import Heading from "./heading";
import { useQuery } from "@tanstack/react-query";
import { fetchSectors } from "@/service/sector";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

// Mock data for sectors
const sectorData = [
  {
    icon: "/icons/aggriculture.png",
    share: Math.floor(Math.random() * 100),
    name: "Agriculture",
  },
  {
    icon: "/icons/chemical.png",
    share: Math.floor(Math.random() * 100),
    name: "Agro Chemicals",
  },
  {
    icon: "/icons/airport.png",
    share: Math.floor(Math.random() * 100),
    name: "Airport",
  },
  {
    icon: "/icons/wine.png",
    share: Math.floor(Math.random() * 100),
    name: "Alcoholic Beverages",
  },
  {
    icon: "/icons/fashion.png",
    share: Math.floor(Math.random() * 100),
    name: "Apparel And Fashion",
  },
  {
    icon: "/icons/management.png",
    share: Math.floor(Math.random() * 100),
    name: "Auto Ancillaries",
  },
];

export function TopSectors() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ playOnInit: true, delay: 3000 })]
  );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["featured-sectors"],
    queryFn: () => fetchSectors("featured=true"),
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <PageSection className="py-12 bg-secondary dark:bg-gray-900 rounded-2xl">
      <Container>
        <div className="px-4 grid grid-cols-12 gap-4">
          <div className="flex flex-col items-start justify-center col-span-12 md:col-span-4">
            <Heading
              title="Top Sectors in Unlisted Shares"
              className={"font-semibold text-start text-white"}
            />
            <Link
              href={"/sectors"}
              className={buttonVariants({ variant: "default" })}
            >
              View more
            </Link>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container space-x-4 p-8">
                {isLoading
                  ? Array.from({ length: 10 }).map((_, ind) => (
                      <Skeleton
                        className={
                          "flex-[0_0_calc(100%/1)] sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] ease-in-out transform bg-black/20 rounded-2xl flex items-center justify-center h-48"
                        }
                        key={ind}
                      />
                    ))
                  : isError
                    ? error?.message
                    : data?.sectors?.map((sector, index) => (
                        <div
                          key={sector.id}
                          className={`flex-[0_0_calc(100%/1)] sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] transition-all duration-300 ease-in-out transform bg-white p-6 rounded-2xl flex items-center justify-center ${
                            hoveredIndex === index ? "scale-105 shadow-lg" : ""
                          }`}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <SectorCard sector={sector} />
                        </div>
                      ))}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-2">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
