"use client";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/Spinner";
import { ChartBar } from "phosphor-react";

const getReports = async () => {
  const { data } = await http().get(`${endpoints.reports.getAll}`);
  return data ?? {};
};

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reports"],
    queryFn: getReports,
  });
  console.log({ data });

  if (isLoading) return <Spinner />;

  return (
    <PageContainer className={"space-y-4 bg-white"}>
      <Heading title={"Dashboard"} description={"Dashboard reports"} />
      <Reports
        {...{
          data,
          isError,
          isLoading,
          error,
        }}
      />
    </PageContainer>
  );
}

function Reports({ data, isError, isLoading, error }) {
  if (isError) return error?.message ?? "Error fetching reports";

  return (
    <GridContainer>
      <Card count={data?.total_shares} title={"Total Shares"} icon={ChartBar} />
      <Card count={data?.total_ipos} title={"Total IPOs"} icon={ChartBar} />
      <Card
        count={data?.total_sectors}
        title={"Total Sectors"}
        icon={ChartBar}
      />
    </GridContainer>
  );
}

function GridContainer({ children }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4">
      {children}
    </div>
  );
}

function Card(item) {
  const size = 25;

  return (
    <div className="flex items-center justify-start gap-2 rounded-lg border bg-gray-100 p-4 py-3">
      <div className="rounded-full border bg-white p-3">
        {<item.icon size={size} className="text-primary" />}
      </div>
      <div className="flex flex-col items-start justify-start">
        <span className="text-xs font-medium tracking-wide">{item?.title}</span>
        <span className="text-xl font-semibold text-primary">
          {item?.count}
        </span>
      </div>
    </div>
  );
}

function Skelotons({ length = 3 }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4">
      {Array.from({ length }).map((_, key) => (
        <Skeleton className={"h-[74.6px] bg-gray-200"} key={key} />
      ))}
    </div>
  );
}
