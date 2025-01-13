"use client";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ButtonWithLoader from "../ui/button-with-loader";
import { Calendar } from "../ui/calendar";

const schema = z.object({
  price: z
    .number({ required_error: "Price is required*" })
    .min(1, { message: "Price is required*" }),
  date: z.date({ required_error: "Date is required*" }),
});

export default function SharePriceUpdate({ createMutation }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    date: new Date(),
  });

  const onSubmit = async (data) => {
    const payload = {
      price: data.price,
      date: new Date(data.date).toISOString(),
    };

    createMutation.mutate(payload);
  };
  const isButtonLoading = createMutation.isLoading;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mx-auto">
        <div className="space-y-4">
          {/* price */}
          <div>
            <Label>Price</Label>
            <Input
              type="number"
              {...register("price", { valueAsNumber: true })}
              placeholder="Enter price"
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>

          {/* date */}
          <div className="">
            <div className="flex items-center justify-center">
              <Controller
                control={control}
                name="date"
                render={({ field }) => {
                  return (
                    <div className="flex flex-col">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </div>
                  );
                }}
              />
            </div>
            {errors.date && (
              <span className="text-red-500">{errors.date.message}</span>
            )}
          </div>
        </div>

        <div className="!mt-6 text-end">
          <ButtonWithLoader isLoading={isButtonLoading}>
            Submit
          </ButtonWithLoader>
        </div>
      </div>
    </form>
  );
}
