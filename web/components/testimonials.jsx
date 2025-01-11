"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import Heading from "./heading";
import { testimonials } from "@/data";
import PageSection from "./page-section";
import Container from "./container";
import { BlogCarousel } from "./blogs-carousel";

export function TestimonialsVariant() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }

  return (
    <PageSection>
      <div className="p-4 w-full">
        <div className="w-full overflow-hidden rounded-2xl grid grid-cols-1 bg-neutral-100 p-8 dark:bg-neutral-900">
          <Heading
            className={"text-center"}
            title="What people say"
            para="Why people love using our website to get more done."
          />
          <div className="flex justify-end gap-2">
            <button
              className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
              disabled={currentSlide === 0}
              onClick={handlePreviousSlide}
              type="button"
            >
              <ArrowLeftIcon className="transform-gpu stroke-primary transition-colors group-disabled:stroke-neutral-500/40" />
            </button>
            <button
              className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
              disabled={currentSlide === testimonials.length - 1}
              onClick={handleNextSlide}
              type="button"
            >
              <ArrowRightIcon className="transform-gpu stroke-primary transition-colors group-disabled:stroke-neutral-500/40" />
            </button>
          </div>
          <section className="mt-8 flex w-full gap-2 *:shrink-0">
            {testimonials.map((testimonial, index) => {
              return (
                <AnimatePresence key={testimonial.content} mode="popLayout">
                  {index >= currentSlide && (
                    <motion.div
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className="flex h-60 w-[24rem] flex-col justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-800"
                      exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                      initial={{ opacity: 0, x: 0, scale: 0.8 }}
                      layout={true}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="size-7 rounded-full bg-neutral-500/10" />
                      <p className="font-medium text-neutral-600 leading-5 tracking-tight dark:text-neutral-400">
                        {testimonial.content}
                      </p>
                      <p className="text-neutral-400 text-xs dark:text-neutral-500">
                        {testimonial.author}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </section>
        </div>
      </div>
    </PageSection>
  );
}

export default TestimonialsVariant;
