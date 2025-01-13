"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { promoterSchema } from "@/validation-schemas/promoter";
import Spinner from "../Spinner";
import InputErrorMessage from "../ui/input-error-message";
import { useQuery } from "@tanstack/react-query";
import { fetchPromoter } from "@/server/promoter";
import { useEffect } from "react";

export default function PromoterForm({
  type = "create",
  id,
  updateMutation,
  createMutation,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(promoterSchema),
  });

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchPromoter(id),
    queryKey: [`promoter-${id}`],
    enabled: !!id && !!(type === "edit"),
  });

  const onSubmit = async (data) => {
    const payload = { ...data };
    if (type === "edit") {
      updateMutation.mutate(payload);
    }
    if (type === "create") {
      createMutation.mutate(payload);
    }
  };
  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("designation", data.designation);
      setValue("experience", data.experience);
      setValue("linkedin", data.linkedin);
    }
  }, [data, setValue]);

  const isButtonLoading =
    createMutation?.isLoading || (type === "edit" && updateMutation?.isLoading);

  if (type === "edit" && updateMutation.isLoading) return <Spinner />;
  if (type === "edit" && updateMutation.isError)
    return updateMutation?.error?.message ?? "error";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="space-y-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} placeholder="Enter name" />
            {errors.name && (
              <InputErrorMessage>{errors.name.message}</InputErrorMessage>
            )}
          </div>

          {/* Designation */}
          <div>
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              {...register("designation")}
              placeholder="Enter designation"
            />
            {errors.designation && (
              <InputErrorMessage>
                {errors.designation.message}
              </InputErrorMessage>
            )}
          </div>

          {/* Experience */}
          <div>
            <Label htmlFor="experience">Experience</Label>
            <Input
              id="experience"
              {...register("experience")}
              placeholder="Enter experience"
            />
            {errors.experience && (
              <InputErrorMessage>{errors.experience.message}</InputErrorMessage>
            )}
          </div>

          {/* LinkedIn */}
          <div>
            <Label htmlFor="linkedin">LinkedIn Profile</Label>
            <Input
              id="linkedin"
              {...register("linkedin")}
              placeholder="Enter LinkedIn profile URL"
            />
            {errors.linkedin && (
              <InputErrorMessage>{errors.linkedin.message}</InputErrorMessage>
            )}
          </div>
        </div>
        <div className="text-end">
          <Button disabled={isButtonLoading}>
            Submit
            {isButtonLoading && (
              <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
