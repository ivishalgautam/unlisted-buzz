"use client";
import BlogForm from "@/components/forms/blog";
import PageContainer from "@/components/layout/page-container";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

async function updateBlog(id, data) {
  return http().put(`${endpoints.blogs.getAll}/${id}`, data);
}

export default function Page({ params: { id } }) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const updateMutation = useMutation({
    mutationFn: (data) => updateBlog(id, data),
    onSuccess: () => {
      toast.success("Blog updated.");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.push("/blogs");
    },
    onError: (error) => {
      toast.error(error.message ?? "error updating blog");
    },
  });

  const handleUpdate = async (data) => {
    updateMutation.mutate({ ...data, id: id });
  };
  return (
    <PageContainer>
      <BlogForm
        type={"edit"}
        blogId={id}
        handleUpdate={handleUpdate}
        updateMutation={updateMutation}
      />
    </PageContainer>
  );
}
