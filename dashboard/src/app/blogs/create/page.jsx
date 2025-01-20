"use client";
import BlogForm from "@/components/forms/blog";
import PageContainer from "@/components/layout/page-container";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

async function createBlog(data) {
  return http().post(endpoints.blogs.getAll, data);
}

export default function Page() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const createMutation = useMutation(createBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries("blogs");
      toast.success("Blog created.");
      router.push("/blogs");
    },
    onError: (error) => {
      toast.error(error.message ?? "error creating blog!");
    },
  });

  const handleCreate = async (data) => {
    createMutation.mutate(data);
  };

  return (
    <PageContainer>
      <BlogForm type={"create"} handleCreate={handleCreate} />
    </PageContainer>
  );
}
