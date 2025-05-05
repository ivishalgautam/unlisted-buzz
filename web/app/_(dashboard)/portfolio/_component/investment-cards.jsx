import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";
import {
  IndianRupee,
  IndianRupeeIcon,
  PieChart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import React from "react";

export default function InvestmentCards({ data }) {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">My Portfolio</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card
            className={`col-span-2 ${data.result_status === "loss" ? "border-red-500" : "border-green-500"}`}
          >
            <CardHeader>
              <CardTitle>Overall Performance</CardTitle>
              <CardDescription>Total Profit/Loss</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold flex items-center gap-2">
                {rupee.format(data.total_pnl_value)}
                {data.result_status === "loss" ? (
                  <TrendingDown className="text-red-500" />
                ) : (
                  <TrendingUp className="text-green-500" />
                )}
              </div>
              <p
                className={`text-sm mt-2 ${data.result_status === "loss" ? "text-red-500" : "text-green-500"}`}
              >
                {data.total_pnl_percent}%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Investment
              </CardTitle>
              <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {rupee.format(data.total_investment)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Current Value
              </CardTitle>
              <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {rupee.format(data.total_current_value)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
