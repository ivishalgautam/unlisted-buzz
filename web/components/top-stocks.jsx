"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla/embla.css";
import StockCard from "./cards/stock.jsx";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/arrow-buttons";
import Heading from "./heading";
import { popularUnlistedShares } from "@/data";
import PageSection from "./page-section";
import Container from "./container";

export const TopStocks = (props) => {
  const slides = popularUnlistedShares.slice(0, 5);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ playOnInit: true, delay: 3000 })]
  );
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <PageSection>
      <Container>
        <div className="flex items-end justify-between mb-8">
          <Heading
            title="Popular unlisted shares"
            para="Trending Unlisted Shares: Insights & Opportunities"
            className={""}
          />

          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container space-x-4">
              {slides.map((slide, index) => (
                <div
                  className="md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] flex-[0_0_calc(100%/1)]"
                  key={index}
                >
                  <StockCard stock={slide} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
};
