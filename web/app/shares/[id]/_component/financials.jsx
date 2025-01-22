"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CirclePlus } from "lucide-react";

export default function FinancialDataDisplay({ data }) {
  console.log({ data });
  const [activeTab, setActiveTab] = useState(data?.[0]?.tab);

  return (
    <div className="container mx-auto py-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="h-12">
          {data.map((tabData) => (
            <TabsTrigger
              key={tabData.tab}
              value={tabData.tab}
              className="px-6 py-2"
            >
              <CirclePlus size={20} className="mr-2" /> {tabData.tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map((tabData) => (
          <TabsContent key={tabData.tab} value={tabData.tab}>
            <div className="grid gap-6">
              {tabData.tables.map((tableData, index) => (
                <TableCard key={index} {...tableData} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function TableCard({ table, title }) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {table.headers.map((header, index) => (
                <TableHead key={index}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
