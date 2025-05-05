import React from "react";

export default function Quote() {
  return (
    <div className="flex justify-center items-center p-6 bg-secondary/20 pb-16">
      <blockquote className="max-w-2xl">
        <p className="text-3xl md:text-4xl font-ligh italic leading-relaxed text-center">
          "Stay Ahead with{" "}
          <span className="font-semibold text-secondary">Unlisted Buzz</span>"
        </p>
      </blockquote>
    </div>
  );
}
