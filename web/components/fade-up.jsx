"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FadeUp({
  children,
  delay = 0.5,
  duration = 0.5,
  x = 0,
  y = 0,
  rotate = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: y, x: x, rotate: rotate },
        visible: { opacity: 1, y: 0, x: 0, rotate: 0 },
      }}
      initial={false}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay, type: "spring", duration }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
