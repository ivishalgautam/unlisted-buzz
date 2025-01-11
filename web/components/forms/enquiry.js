"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { popularUnlistedShares } from "@/data";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  transactionType: z.enum(["buy", "sell"], {
    required_error: "You need to select a transaction type.",
  }),
  share: z.string().nonempty("Please select a share."),
  quantity: z
    .number({
      required_error: "Quantity is required.",
      invalid_type_error: "Quantity must be a number.",
    })
    .positive("Quantity must be positive."),
  price: z
    .number({
      required_error: "Price is required.",
      invalid_type_error: "Price must be a number.",
    })
    .positive("Price must be positive."),
  details: z
    .string()
    .max(500, "Details must not exceed 500 characters.")
    .optional(),
});

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transactionType: "buy",
      share: "",
      quantity: undefined,
      price: undefined,
      details: "",
    },
  });
  const transactionType = watch("transactionType");
  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      reset();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-auto">
      <div>
        <Label className="block text-sm font-medium text-gray-700 mb-1">
          Transaction Type
        </Label>
        <div className="flex space-x-4">
          <Label
            className={cn(
              "inline-flex items-center border border-gray-300 bg-gray-200 rounded-md px-3 py-2 text-sm font-medium text-gray-700",
              {
                "bg-green-100 border-green-500": transactionType === "buy",
              }
            )}
          >
            <Input
              type="radio"
              value="buy"
              {...register("transactionType")}
              className="form-radio h-4 w-4  accent-gray-700"
            />
            <span className="ml-2">Buy</span>
          </Label>
          <Label
            className={cn(
              "inline-flex items-center border border-gray-300 bg-gray-200 rounded-md px-3 py-2 text-sm font-medium text-gray-700",
              {
                "bg-green-100 border-green-500": transactionType === "sell",
              }
            )}
          >
            <Input
              type="radio"
              value="sell"
              {...register("transactionType")}
              className="form-radio h-4 w-4 accent-gray-700"
            />
            <span className="ml-2">Sell</span>
          </Label>
        </div>
        {errors.transactionType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.transactionType.message}
          </p>
        )}
      </div>

      <div>
        <Label
          htmlFor="share"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select Share
        </Label>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select a share" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a share</SelectLabel>
              {popularUnlistedShares.map((item) => (
                <SelectItem value={item.title} key={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.share && (
          <p className="mt-1 text-sm text-red-600">{errors.share.message}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Quantity
        </Label>
        <Input
          type="number"
          id="quantity"
          {...register("quantity", { valueAsNumber: true })}
          placeholder="Enter quantity"
        />
        {errors.quantity && (
          <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Price per Share
        </Label>
        <Input
          type="number"
          id="price"
          {...register("price", { valueAsNumber: true })}
          placeholder="Enter price"
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="details"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Additional Details
        </Label>
        <Textarea
          id="details"
          {...register("details")}
          rows={3}
          placeholder="Enter additional details"
        ></Textarea>
        {errors.details && (
          <p className="mt-1 text-sm text-red-600">{errors.details.message}</p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="ghost"
          className="bg-black text-white w-full hover:bg-black/80 hover:text-white"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
