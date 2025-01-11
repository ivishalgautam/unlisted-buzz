"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data";
import PageSection from "./page-section";
import { Muted } from "./typography";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(faqs[0]);

  const handleClick = async (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = faqs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <PageSection className="container mx-auto py-20 pt-2 space-y-6">
      <div>
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
          Frequently Asked Questions
        </h1>
        <Muted className={"text-center"}>
          Your Questions About Unlisted Stocks, Answered
        </Muted>
      </div>
      <div className="h-fit border  rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]">
        {faqs.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${
              index !== faqs.length - 1 ? "border-b" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <button
              className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
            >
              <Plus
                className={`${
                  activeIndex === index ? "rotate-45" : "rotate-0 "
                } transition-transform ease-in-out w-5 h-5  dark:text-gray-200 text-gray-600`}
              />
              {tab.question}
            </button>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.14,
                  }}
                >
                  <p
                    className={`dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
                  >
                    {tab.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}

export default FAQs;
