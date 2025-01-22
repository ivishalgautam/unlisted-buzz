"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlus } from "lucide-react";

export default function ShareHoldingPatterns({ data }) {
  const [activeYear, setActiveYear] = useState(data?.[0]?.year);

  return (
    <div className="container py-10">
      <Tabs value={activeYear} onValueChange={setActiveYear}>
        <TabsList className="h-12">
          {data.map((yearData) => (
            <TabsTrigger
              key={yearData.year}
              value={yearData.year}
              className="px-6 py-2"
            >
              <CirclePlus className="mr-2" size={20} /> Year {yearData.year}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map((yearData) => (
          <TabsContent key={yearData.year} value={yearData.year}>
            <div className="bg-white py-4 border rounded-xl">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">
                  Progress for {yearData.year}
                </h2>
                <div className="space-y-6">
                  {yearData.data.map((item, index) => (
                    <ProgressItem key={index} {...item} />
                  ))}
                </div>
              </CardContent>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ProgressItem({ heading, progress }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{heading}</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  );
}
