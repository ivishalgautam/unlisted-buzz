"use client";
import { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";
import PageSection from "./page-section";
import Container from "./container";
import ShareSearchBar from "./ui/share-search-bar";
import Image from "next/image";

export default function Hero() {
  const backgroundImages = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png",
    "/banner4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {backgroundImages.map((image, index) => (
          <Image
            width={1000}
            height={1000}
            key={index}
            src={image}
            alt={`banner-${index}`}
            className={`absolute inset-0 w-full h-full transition-opacity object-cover object-center duration-1000 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <Container>
        <div className="w-full z-50 relative space-y-12">
          <h1 className="text-center font-urbanist text-lg font-semibold sm:text-2xl lg:text-3xl xl:text-5xl lg:!leading-tight text-white">
            <Balancer>
              India’s Most Trusted Platform for Exploring <br /> the Best Deals
              on Unlisted &<br /> Pre-IPO Shares
            </Balancer>
          </h1>
          <Muted className={"text-center my-10 text-gray-200"}>
            <Balancer>
              Stay informed with real-time updates, smart tools, and expert{" "}
              <br /> insights to discover top investment opportunities.
            </Balancer>
          </Muted>

          <ShareSearchBar />
        </div>
      </Container>
    </div>
  );
}
