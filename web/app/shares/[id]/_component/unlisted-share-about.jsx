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
  const aboutLength = about.split(/\s+/).length;
  console.log(about.split(/\s+/));

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
            "prose-sm !min-w-full overflow-hidden relative h-auto",
            {
              "h-auto before:hidden": isShowMore,
              "h-44 before:absolute before:w-full before:bg-gradient-to-t before:from-white before:to-transparent before:h-1/2 before:bottom-0 before:left-0":
                aboutLength > 150 && !isShowMore,
            }
          )}
        ></div>
        {aboutLength > 150 && (
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
        )}
      </CardContent>
    </Card>
  );
}
