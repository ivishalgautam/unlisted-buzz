import React from "react";
import Balancer from "react-wrap-balancer";
import { H2, H3, Muted } from "./typography";
import { cn } from "@/lib/utils";

export default function Heading({
  className,
  title = "",
  para = "",
  titleClassName = "",
  paraClassName = "",
}) {
  return (
    <div className={className}>
      <H2 className={cn("font-bold font-urbanist", titleClassName)}>
        <Balancer>{title}</Balancer>
      </H2>
      <Muted className={cn("mt-4", paraClassName)}>
        <Balancer>{para}</Balancer>
      </Muted>
    </div>
  );
}
