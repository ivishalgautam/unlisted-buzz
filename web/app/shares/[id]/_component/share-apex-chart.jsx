"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { rupee } from "@/hooks/Intl";
import { useQuery } from "@tanstack/react-query";
import { parseAsString, useQueryState } from "nuqs";
import { fetchShareChartData } from "@/service/share";
import Spinner from "@/components/spinner";
import { useSearchParams } from "next/navigation";
import { timeRanges } from "@/data";
import { Button } from "@/components/ui/button";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function ApexShareChart({ shareId }) {
  const [chartData, setChartData] = useState([]);
  const [timeRange, setTimeRange] = useQueryState(
    "tr",
    parseAsString.withDefault("")
  );

  const searchParams = useSearchParams();
  const searchParamsStr = searchParams.toString();

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchShareChartData(shareId, searchParamsStr),
    queryKey: [`share-chart-${shareId}`, timeRange],
    enabled: !!shareId,
  });

  useEffect(() => {
    setChartData(
      data?.map((item) => ({
        x: new Date(item.date),
        y: item.price,
      }))
    );
  }, [data, shareId]);

  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Share Price Movement",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: 600,
        fontFamily: "inherit",
        color: "hsl(var(--foreground))",
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "hsl(var(--muted-foreground))",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return rupee.format(value.toFixed(2));
        },
        style: {
          colors: "hsl(var(--muted-foreground))",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    theme: {
      mode: "light",
      palette: "palette1",
    },
  };

  if (isLoading) return <Spinner />;
  if (isError) return error?.message ?? "error";

  return (
    <div className="w-full h-[400px]">
      {typeof window !== "undefined" && (
        <Chart
          options={options}
          series={[{ name: "Share Price", data: chartData }]}
          type="area"
          height={350}
        />
      )}

      <div className="space-x-2">
        {timeRanges.map((rng) => (
          <Button
            type="button"
            variant={rng.value === timeRange ? "default" : "outline"}
            size="icon"
            onClick={() => setTimeRange(rng.value)}
            key={rng.value}
          >
            {rng.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
