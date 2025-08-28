import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import config from "@/config";
import moment from "moment";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <Card className="h-full shadow-none border-none duration-200 bg-transparent">
        <CardHeader className="p-4">
          <figure className="w-full h-56 aspect-video mb-4">
            <Image
              src={`${config.file_base}/${post.image}`}
              width={200}
              height={200}
              alt="blog"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <CardTitle className="text-lg">{post.title}</CardTitle>
          <CardDescription>
            <p className="text-sm line-clamp-5">{post.short_description}</p>
            <p className="text-xs text-gray-500 mt-2">
              By Admin on {moment(post.created_at).format("DD MMM, YYYY")}
            </p>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
