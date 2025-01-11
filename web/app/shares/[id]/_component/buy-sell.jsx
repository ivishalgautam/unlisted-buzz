"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";

export function BuySell({ ticker, currentPrice }) {
  const [action, setAction] = useState("buy");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `${action.toUpperCase()} order placed for ${quantity} shares of ${ticker}`
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Buy / Sell {ticker}</CardTitle>
        <CardDescription>
          Current price: {rupee.format(currentPrice)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup
            defaultValue="buy"
            onValueChange={(value) => setAction(value)}
            className="flex space-x-4"
          >
            <div
              className={cn(
                "flex items-center space-x-2 border border-gray-300 bg-gray-100 rounded-md px-3 py-2 text-sm font-medium text-black",
                {
                  "bg-green-100 border-green-300": action === "buy",
                }
              )}
            >
              <RadioGroupItem value="buy" id="buy" />
              <Label htmlFor="buy">Buy</Label>
            </div>
            <div
              className={cn(
                "flex items-center space-x-2 border border-gray-300 bg-gray-100 rounded-md px-3 py-2 text-sm font-medium text-black",
                {
                  "bg-green-100 border-green-300": action === "sell",
                }
              )}
            >
              <RadioGroupItem
                value="sell"
                id="sell"
                className="accent-green-700"
              />
              <Label htmlFor="sell">Sell</Label>
            </div>
          </RadioGroup>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label>Total Value</Label>
            <div className="text-2xl font-bold">
              {rupee.format(currentPrice)}
            </div>
          </div>
          <Button type="submit" className="w-full">
            Place {action.toUpperCase()} Order
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
