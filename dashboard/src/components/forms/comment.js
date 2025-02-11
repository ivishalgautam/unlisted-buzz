"use client";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

import { Controller, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { Blockquote, Muted, P } from "../ui/typography";
import { fetchComment } from "@/server/comment";

export default function CommentForm({ type = "edit", id, updateMutation }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({});

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchComment(id),
    queryKey: [`comment-${id}`],
    enabled: !!id && !!(type === "edit"),
  });

  const onSubmit = async (data) => {
    const payload = { ...data };
    if (type === "edit") {
      updateMutation.mutate(payload);
    }
  };

  useEffect(() => {
    if (data) {
      setValue("is_reviewed", data.is_reviewed);
    }
  }, [data, setValue]);
  console.log({ data });
  if (type === "edit" && isLoading) return <Spinner />;
  if (type === "edit" && isError) return error?.message ?? "error";
  const isButtonLoading = type === "edit" && updateMutation?.isLoading;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mx-auto flex items-center justify-start">
        <div className="w-full space-y-2">
          <div className="space-y-4">
            <div>
              <Label>Comment</Label>
              <Blockquote>{data?.comment ?? ""}</Blockquote>
            </div>

            {/* Is Featured */}
            <div className="flex items-center space-x-2">
              <Controller
                control={control}
                name="is_reviewed"
                render={({ field }) => (
                  <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                    <div>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                    <div className="space-y-1 leading-none">
                      <Label>Review</Label>
                      <Muted>Mark this comment as reviewed.</Muted>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          <div className="!mt-6 text-end">
            <Button className="" disabled={isButtonLoading}>
              Submit
              {isButtonLoading && (
                <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
