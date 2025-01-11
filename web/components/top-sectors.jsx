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
import { Button } from "./ui/button";
import Container from "./container";
import SectorCard from "./cards/sector";
import Heading from "./heading";

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
            <Button>View more</Button>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container space-x-4 p-8">
                {sectorData.map((sector, index) => (
                  <div
                    key={sector.name}
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
