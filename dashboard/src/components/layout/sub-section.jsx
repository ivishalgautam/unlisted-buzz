import { cn } from "@/lib/utils";
import React from "react";

export default function SubSection({ children, className }) {
  return (
    <div className={cn("rounded-xl bg-white p-8", className)}>{children}</div>
  );
}
