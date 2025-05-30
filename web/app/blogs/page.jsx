"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/service/blog";
import BlogCard from "@/components/cards/blog";
import PageSection from "@/components/page-section";
import Heading from "@/components/heading";

export default function BlogCarousel() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchBlogs(""),
    queryKey: ["blogs"],
  });

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
        <div className="overflow-hidden">
          <div className="flex">
            {isLoading ? (
              "Loading..."
            ) : isError ? (
              (error?.message ?? "error")
            ) : (
              <div className="flex">
                {data?.blogs?.map((post) => (
                  <div
                    key={post.id}
                    className="flex-[0_0_calc(100%/1)] md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] min-w-0 px-4"
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
