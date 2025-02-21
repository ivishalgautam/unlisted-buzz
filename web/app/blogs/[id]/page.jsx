import FAQs from "@/components/faq";
import { H1, H4, H5, H6, P } from "@/components/typography";
import { fetchBlogBySlug, getRecentBlogs } from "@/service/blog";
import { Clock } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({ params }) {
  const { id: slug } = await params;
  const blog = await fetchBlogBySlug(slug);
  return {
    title: blog?.meta_title ? blog?.meta_title : blog?.title,
    description: blog?.meta_description,
    keywords: blog?.meta_keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog?.slug}`,
    },
    openGraph: {
      title: blog?.meta_title ?? blog?.title,
      description: blog?.meta_description,
      images: blog?.image,
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { id: slug } = await params;
  const blog = await fetchBlogBySlug(slug);
  const recentBlogs = (await getRecentBlogs(11)).filter(
    (blg) => blg.slug !== slug
  );
  const postedOn = blog?.posted_on
    ? moment(blog.posted_on).format("DD MMM, Y")
    : moment(blog.created_at).format("DD MMM, Y");
  return (
    <div className="container p-4">
      <div className="mx-auto space-y-4">
        {/* image */}
        <div className="">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${blog?.image}`}
            width={1000}
            height={1000}
            quality={100}
            alt={blog?.title}
            className="h-[30rem] w-full rounded-md object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 space-y-4 rounded-lg bg-white p-8 lg:col-span-3">
            {/* date */}
            <div className="flex items-center justify-start gap-1 text-xs font-medium text-gray-400">
              <Clock size={18} /> {postedOn}
            </div>

            {/* title */}
            <H1 className={"m-0 !text-3xl"}>{blog?.title}</H1>

            {/* blog content */}
            <div className="w-full">
              <div
                className="prose prose-slate prose-orange w-full rounded-lg lg:prose-lg prose-h1:mb-0 prose-h1:mt-5 prose-h2:mb-0 prose-h2:mt-5 prose-h3:mb-0 prose-h3:mt-5  prose-h4:mb-0 prose-h4:mt-5 prose-h5:mb-0 prose-h5:mt-5 prose-h6:mb-0 prose-h6:mt-5 prose-p:m-0 prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              />
            </div>

            {/* faq */}
            {Array.isArray(blog?.faq) && blog?.faq?.length > 0 && (
              <div className="!mt-16">
                <FAQs faqs={blog?.faq ?? []} />
              </div>
            )}
          </div>

          <div className="col-span-4 lg:col-span-1">
            <div className="h-auto rounded-lg bg-white p-8">
              <H5>Recent blogs</H5>
              <div className="mt-2 space-y-2">
                {!recentBlogs?.length && (
                  <P className={"text-xs"}>No recent blogs</P>
                )}
                {recentBlogs?.map((blog) => (
                  <div key={blog.id} className="group">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="flex items-start justify-start gap-4"
                    >
                      <div>
                        <figure className="h-16 w-16">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${blog.image}`}
                            width={100}
                            height={100}
                            alt={blog.title}
                            className="h-full w-full rounded-md object-cover object-center"
                          />
                        </figure>
                      </div>

                      <div className="">
                        <div>
                          <H6
                            className={
                              "line-clamp-1 text-ellipsis text-sm transition-colors group-hover:text-primary"
                            }
                          >
                            {blog.title}
                          </H6>
                          <p
                            className={
                              "m-0 line-clamp-1 text-ellipsis text-xs text-gray-500"
                            }
                          >
                            {blog.short_description}
                          </p>
                        </div>

                        <div className="mt-2 flex items-center justify-start gap-1 text-[10px] font-medium text-gray-400">
                          <Clock size={15} />{" "}
                          {blog?.posted_on
                            ? moment(blog.posted_on).format("DD MMM, Y")
                            : moment(blog.created_at).format("DD MMM, Y")}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
