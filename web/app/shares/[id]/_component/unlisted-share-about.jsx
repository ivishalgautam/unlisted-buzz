"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ShareAbout({ companyName, about }) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>About {companyName}</CardTitle>
        <CardDescription>Company overview and key information</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          dangerouslySetInnerHTML={{ __html: about }}
          className={cn(
            "prose-sm h-44 !min-w-full overflow-hidden relative before:absolute before:w-full before:bg-gradient-to-t before:from-white before:to-transparent before:h-1/2 before:bottom-0 before:left-0",
            {
              "h-auto before:hidden": isShowMore,
            }
          )}
        ></div>
        <div className="text-center">
          <Button
            type="button"
            // variant="ghost"
            className=""
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? "Show less" : "Show more"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
