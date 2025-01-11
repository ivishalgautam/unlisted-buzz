"use client";

import useEmblaCarousel from "embla-carousel-react";
import { blogPosts } from "@/data";
import PageSection from "./page-section";
import Heading from "./heading";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/arrow-buttons";
import BlogCard from "./cards/blog";

export function BlogCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  return (
    <PageSection className={"space-y-4"}>
      <div className="flex items-center justify-center">
        <Heading
          title="Our Blogs"
          para="Exploring the World of Unlisted Stocks"
          titleClassName="text-center"
        />
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-[0_0_calc(100%/1)] md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] min-w-0 px-4"
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute top-1/2 left-0"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute top-1/2 right-0"
        />
      </div>
    </PageSection>
  );
}
