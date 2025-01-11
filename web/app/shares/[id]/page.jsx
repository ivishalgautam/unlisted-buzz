"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "next/navigation";
import { UnlistedShareFundamentals } from "./_component/unlisted-share-fundamentals";
import FAQs from "@/components/faq";
import Image from "next/image";
import { newArrivalsShares, popularUnlistedShares } from "@/data";
import { ShareAbout } from "./_component/unlisted-share-about";
import { BuySell } from "./_component/buy-sell";
import { H3, H4 } from "@/components/typography";
import { ApexShareChart } from "./_component/share-apex-chart";

// Mock data for the unlisted share
const shareData = {
  name: "TechInnovate Inc.",
  ticker: "TECHIN",
  currentPrice: 42.5,
  change: 1.25,
  changePercentage: 3.03,
  marketCap: "2.1B",
  volume: "150K",
  peRatio: 22.5,
  dividend: "N/A",
  fundamentals: {
    revenue: "500M",
    netIncome: "50M",
    eps: 2.5,
    debtToEquity: 0.5,
    currentRatio: 2.1,
    quickRatio: 1.8,
    roe: 15.5,
  },
  valuation: {
    peRatio: 22.5,
    pbRatio: 3.2,
    evToEbitda: 12.8,
  },
  about: {
    description:
      "Share name is a leading technology company specializing in artificial intelligence and machine learning solutions. The company develops cutting-edge software and hardware products for various industries, including healthcare, finance, and autonomous vehicles.",
    founded: "2010",
    headquarters: "Silicon Valley, CA",
    employees: "2,500+",
    industry: "Technology",
    keyProducts: [
      "AI-powered predictive analytics platform",
      "Machine learning development toolkit",
      "Autonomous vehicle sensor systems",
      "Healthcare diagnostic AI",
    ],
  },
  chartData: [
    { date: "2023-01-01", price: 352 },
    { date: "2023-02-01", price: 375 },
    { date: "2023-03-01", price: 368 },
    { date: "2023-04-01", price: 389 },
    { date: "2023-05-01", price: 402 },
    { date: "2023-06-01", price: 415 },
    { date: "2023-07-01", price: 425 },
    { date: "2023-08-01", price: 352 },
    { date: "2023-09-01", price: 625 },
    { date: "2023-10-01", price: 918 },
    { date: "2023-11-01", price: 389 },
    { date: "2023-12-01", price: 642 },
    { date: "2024-01-01", price: 352 },
    { date: "2024-02-01", price: 375 },
    { date: "2024-03-01", price: 368 },
    { date: "2024-04-01", price: 389 },
    { date: "2024-05-01", price: 402 },
    { date: "2024-06-01", price: 415 },
    { date: "2024-07-01", price: 425 },
    { date: "2024-08-01", price: 352 },
    { date: "2024-09-01", price: 625 },
    { date: "2024-10-01", price: 918 },
    { date: "2024-11-01", price: 389 },
    { date: "2024-12-01", price: 642 },
  ],
};

export default function UnlistedSharePage() {
  const { id } = useParams();
  const name = id.split("-").join(" ");
  const shares = [...popularUnlistedShares, ...newArrivalsShares];
  const currShare = shares.find((shr) => shr.title === name);

  return (
    <div className="container mx-auto p-4 py-10 space-y-10">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        {currShare?.icon && (
          <Image
            src={currShare.icon}
            width={100}
            height={100}
            className="aspect-video object-contain"
            alt={name}
          />
        )}
        <H4 className="font-bold text-center md:text-start">{name}</H4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Share Price</CardTitle>
            <CardDescription>Historical price chart</CardDescription>
          </CardHeader>
          <CardContent>
            <ApexShareChart data={shareData.chartData} />
          </CardContent>
        </Card>

        <BuySell ticker={name} currentPrice={shareData?.price ?? 782} />

        <ShareAbout
          companyName={name}
          description={shareData.about.description}
          founded={shareData.about.founded}
          headquarters={shareData.about.headquarters}
          employees={shareData.about.employees}
          industry={shareData.about.industry}
          keyProducts={shareData.about.keyProducts}
        />

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>
              Key financial metrics for {shareData.ticker}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UnlistedShareFundamentals data={shareData.fundamentals} />
          </CardContent>
        </Card>
      </div>

      <div>
        <FAQs />
      </div>
    </div>
  );
}
