import React from "react";
import PageSection from "./page-section";
import Image from "next/image";
import Heading from "./heading";
import { Muted, Small } from "./typography";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { rupee } from "@/hooks/Intl";
import { popularUnlistedShares, stocks } from "@/data";
import Container from "./container";
import Link from "next/link";

export default function TrackPortfolioTable() {
  const isUp = Math.random() > 0.5;

  return (
    <PageSection>
      <Container>
        <div className="">
          <div className="space-y-6">
            <Heading
              className={"text-center"}
              title="Past IPO Performance"
              para="Set alerts for portfolio changes and stay ahead with timely investment updates."
            />

            <div className="bg-gray-100 rounded-xl p-4 mx-auto">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20"></TableHead>
                    <TableHead className="">Name</TableHead>
                    <TableHead className="">Unlisted share price</TableHead>
                    <TableHead className="">IPO Price</TableHead>
                    <TableHead className="">CMP</TableHead>
                    <TableHead className="text-right">Gain or Loss</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {popularUnlistedShares.map((item, ind) => {
                    const id = item.title.split(" ").join("-");

                    return (
                      <TableRow key={ind}>
                        <TableCell className="font-medium">
                          <Link href={`/shares/${id}`}>
                            <Image
                              src={item.icon}
                              width={100}
                              height={100}
                              className="aspect-video object-contain object-center"
                            />
                          </Link>
                        </TableCell>
                        <TableCell className="font-medium">
                          <Link
                            href={`/shares/${id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {item.title}
                          </Link>
                        </TableCell>
                        <TableCell className="font-medium">{`${rupee.format(Math.floor(Math.random() * 500))} - ${rupee.format(Math.floor(Math.random() * 1000))}`}</TableCell>
                        <TableCell className="font-medium">{`${rupee.format(Math.floor(Math.random() * 500))}`}</TableCell>
                        <TableCell className="font-medium">{`${rupee.format(Math.floor(Math.random() * 500))}`}</TableCell>
                        <TableCell className="text-right">
                          <div className={cn("flex flex-col items-end gap-1")}>
                            <span
                              className={cn(
                                "text-sm font-semibold bg-red-100 text-red-500 px-2 py-0.5 rounded-full",
                                { "bg-green-100 text-green-500": item.isUp }
                              )}
                            >
                              {rupee.format(item.price)}
                            </span>
                            <div
                              className={cn(
                                "flex items-center gap-1 text-xs text-red-500",
                                {
                                  "text-green-500": item.isUp,
                                }
                              )}
                            >
                              <span>
                                {item.isUp ? (
                                  <TrendingUp size={20} />
                                ) : (
                                  <TrendingDown size={20} />
                                )}
                              </span>
                              <span>{item.status()}</span>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
            <div className="text-center">
              <Button className="px-10 py-6">Sign up</Button>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
