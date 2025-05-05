import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UnlistedShareFundamentals } from "./_component/unlisted-share-fundamentals";
import Image from "next/image";
import { ShareAbout } from "./_component/unlisted-share-about";
import { BuySell } from "./_component/buy-sell";
import { H3, H4 } from "@/components/typography";
import { ApexShareChart } from "./_component/share-apex-chart";
import config from "@/config";
import { fetchShare } from "@/service/share";
import FinancialDataDisplay from "./_component/financials";
import ShareHoldingPatterns from "./_component/shareholding-patterns";
import PeerRatioTable from "./_component/peer-ratio";
import PromoterOrManagementTable from "./_component/promoter-or-management";
import FAQs from "./_component/faq";
import CommentSection from "./_component/comments";
import EventTable from "./_component/events";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const share = await fetchShare(id);
  return {
    title:
      share?.meta_title && share?.meta_title !== ""
        ? share?.meta_title
        : share?.name,
    description: share?.meta_description,
    keywords: share?.meta_keywords,
    alternates: {
      canonical: `${config.file_base}/shares/${share?.slug}`,
    },
    openGraph: {
      title: share?.meta_title ?? share?.title,
      description: share?.meta_description,
      images: share?.image,
      type: "website",
    },
  };
}

export default async function UnlistedSharePage({ params }) {
  const { id } = await params;
  const name = id.split("-").join(" ");
  const share = await fetchShare(id);

  return (
    <div className="container mx-auto p-4 py-10 space-y-10">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <Image
          src={`${config.file_base}/${share.image}`}
          width={100}
          height={100}
          className="aspect-video object-contain"
          alt={name}
        />
        <H4 className="font-bold text-center md:text-start">{name}</H4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Share Price</CardTitle>
            <CardDescription>Historical price chart</CardDescription>
          </CardHeader>
          <CardContent>
            <ApexShareChart shareId={share.id} />
          </CardContent>
        </Card>

        <BuySell
          ticker={name}
          currentPrice={share?.price ?? 0}
          minQuantity={share.min_quantity ?? 0}
          shareId={share?.id}
        />
      </div>

      <ShareAbout companyName={name} about={share?.about ?? ""} />
      {share?.fundamentals?.length > 0 && (
        <Card className="">
          <CardHeader>
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>
              Key financial metrics for {share.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UnlistedShareFundamentals
              fundametals={share?.fundamentals ?? []}
            />
          </CardContent>
        </Card>
      )}

      {share?.financials?.length > 0 && (
        <div>
          <H3 className={"text-center"}>Financials</H3>
          <FinancialDataDisplay data={share?.financials ?? []} />
        </div>
      )}

      {share?.shareholding_patterns?.length > 0 && (
        <div>
          <H3 className={"text-center"}>Shareholding Patterns</H3>
          <ShareHoldingPatterns data={share?.shareholding_patterns ?? []} />
        </div>
      )}

      {share?.peer_ratio?.headers?.length > 0 && (
        <div>
          <H3 className={"text-center"}>Peer ratio</H3>
          <PeerRatioTable data={share?.peer_ratio ?? {}} />
        </div>
      )}

      {share?.events?.length > 0 && (
        <div className="space-y-6">
          <H3 className={"text-center"}>Events</H3>
          <EventTable events={share?.events ?? []} />
        </div>
      )}

      {share?.promoters_or_management?.length > 0 && (
        <div>
          <H3 className={"text-center"}>Promoters or Management</H3>
          <PromoterOrManagementTable
            data={share?.promoters_or_management ?? {}}
          />
        </div>
      )}

      {share?.faqs?.length > 0 && (
        <div>
          <FAQs data={share?.faqs ?? []} />
        </div>
      )}
      {/*  */}
      {/* <CommentSection data={share?.faqs ?? []} shareId={share.id} /> */}
    </div>
  );
}
