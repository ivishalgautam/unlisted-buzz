import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export default function ButtonWithLoader({
  children,
  className,
  isLoading,
  ...props
}) {
  return (
    <Button className={cn(className)} disabled={isLoading} {...props}>
      {children}
      {isLoading && (
        <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
      )}
    </Button>
  );
}
