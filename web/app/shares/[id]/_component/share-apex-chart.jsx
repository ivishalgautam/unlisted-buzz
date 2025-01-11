"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { rupee } from "@/hooks/Intl";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function ApexShareChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(
      data.map((item) => ({
        x: new Date(item.date),
        y: item.price,
      }))
    );
  }, [data]);

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

  return (
    <div className="w-full h-[350px]">
      {typeof window !== "undefined" && (
        <Chart
          options={options}
          series={[{ name: "Share Price", data: chartData }]}
          type="area"
          height={350}
        />
      )}
    </div>
  );
}
