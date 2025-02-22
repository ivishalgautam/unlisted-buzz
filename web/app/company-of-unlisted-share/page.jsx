import PageSection from "@/components/page-section";
import { H1 } from "@/components/typography";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PAN_OF_UNLISTED_SHARES } from "@/data";
import React from "react";

export default function CompanyOfUnlistedShare() {
  return (
    <PageSection className={"space-y-10"}>
      <H1 className={"text-center"}>PAN of Unlisted Shares</H1>
      <div className="max-w-2xl px-2 mx-auto bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[500px]">Company</TableHead>
              <TableHead className="text-right">Pan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PAN_OF_UNLISTED_SHARES.map(({ pan, company }) => (
              <TableRow key={pan}>
                <TableCell className="font-medium">{company}</TableCell>
                <TableCell className="text-right">{pan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageSection>
  );
}
