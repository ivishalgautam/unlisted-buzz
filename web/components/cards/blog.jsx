import Image from "next/image";
import Link from "next/link";
import React from "react";
import { H4, Muted } from "../typography";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function BlogCard({ post }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow bg-gray-100 duration-200">
      <CardHeader>
        <figure className="w-full">
          <Image
            src={"/blog.svg"}
            width={200}
            height={200}
            alt="blog"
            className="w-full"
          />
        </figure>
        <CardTitle className="text-lg">{post.title}</CardTitle>
        <CardDescription>
          <p className="text-sm">{post.excerpt}</p>
          <p className="text-xs text-gray-500 mt-2">
            By {post.author} on {post.date}
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
