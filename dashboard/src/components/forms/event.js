"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "@/validation-schemas/event";
import { File, Trash } from "lucide-react";
import useFileHandler from "@/hooks/use-file-handler";
import { RiAttachment2 } from "@remixicon/react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "@/server/event";
import Spinner from "../Spinner";
import { useEffect } from "react";

export default function EventForm({
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
    resolver: zodResolver(eventSchema),
  });
  const { handleFileChange, deleteFile, image, setImage } = useFileHandler();

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchEvent(id),
    queryKey: [`event-${id}`],
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
      setValue("details", data.details);
      setValue("description", data.description);
      setValue("date", data.date);
      setImage(data.details);
    }
  }, [data, setValue, setImage]);

  const isButtonLoading =
    (type === "create" && createMutation.isLoading) ||
    (type === "edit" && updateMutation?.isLoading);

  if (type === "edit" && isLoading) return <Spinner />;
  if (type === "edit" && isError) return error?.message ?? "error";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="space-y-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
          {/* Name */}
          <div>
            <Label htmlFor="name">Event Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter event name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              {...register("description")}
              placeholder="Enter event description"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

          {/* Date */}
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              {...register("date")}
              placeholder="Enter event date"
            />
            {errors.date && (
              <span className="text-red-500">{errors.date.message}</span>
            )}
          </div>

          {/* Details */}
          <div className="col-span-full space-y-4">
            <div className="flex flex-col items-center justify-center">
              <Input
                type="file"
                placeholder="Select Image"
                onChange={(e) =>
                  handleFileChange(
                    e,
                    "details",
                    setValue,
                    type === "edit" ? updateMutation.mutate : null,
                    type,
                  )
                }
                multiple={false}
                className={`max-w-56`}
              />
              {errors.details && (
                <span className="text-sm text-red-500">
                  {errors.details.message}
                </span>
              )}
            </div>
            <div className="flex items-center justify-center gap-4 rounded-lg border border-dashed border-gray-300 p-8">
              {image ? (
                <figure className="relative flex size-32 items-center justify-center rounded-lg border-2 border-dashed">
                  <a
                    href={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${image}`}
                    target="_blank"
                    className="hover:text-primary"
                  >
                    <RiAttachment2 size={50} />
                  </a>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => deleteFile(image)}
                    className="absolute -right-2 -top-2"
                    size="icon"
                  >
                    <Trash size={20} />
                  </Button>
                </figure>
              ) : (
                <div>No file selected</div>
              )}
            </div>
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
