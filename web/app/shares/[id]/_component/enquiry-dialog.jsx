"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import useFetchShares from "@/hooks/use-fetch-shares";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutation } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import { toast } from "@/hooks/use-toast";
import { ErrorMessage } from "@hookform/error-message";
import PhoneSelect from "@/components/ui/phone-select";
import * as RPNInput from "react-phone-number-input";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { MainContext } from "@/store/context";

const formSchema = z
  .object({
    transaction_type: z.enum(["buy", "sell"], {
      required_error: "You need to select a transaction type.",
    }),
    share_id: z.string().nonempty("Please select a share."),
    quantity: z
      .number({
        required_error: "Quantity is required.",
        invalid_type_error: "Quantity must be a number.",
      })
      .positive("Quantity must be positive."),
    price_per_share: z
      .number({
        required_error: "Price is required.",
        invalid_type_error: "Price must be a number.",
      })
      .positive("Price must be positive."),
    message: z
      .string()
      .max(500, "Details must not exceed 500 characters.")
      .optional(),
    name: z
      .string({ required_error: "Name is required*" })
      .min(1, { message: "Name is required*" }),
    email: z.string({ required_error: "Email is required*" }).email(),
    phone: z
      .string({ required_error: "Phone number is required*" })
      .min(1, { message: "Phone number is required*" }),
  })
  .refine((data) => RPNInput.isValidPhoneNumber(data.phone), {
    path: ["phone"],
    message: "Invalid phone number",
  });

export function EnquiryDialog({ open, setOpen, quantity, shareId }) {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      {/* <AlertDialogTrigger >Open</AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="sr-only">Enquiry form?</AlertDialogTitle>
          <AlertDialogDescription className="sr-only">
            Enquiry form
          </AlertDialogDescription>
          <EnquiryForm {...{ open, setOpen, quantity, shareId }} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function EnquiryForm({ open, setOpen, quantity, shareId }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, isLoading, isError, error } = useFetchShares();
  const { user } = useContext(MainContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transaction_type: "buy",
      share_id: shareId ? shareId : "",
      quantity: quantity ? quantity : "",
      price_per_share: undefined,
      message: "",
      name: user ? user.fullname : "",
      email: user ? user.email : "",
      phone: user ? user.mobile_number : "",
    },
  });
  const transaction_type = watch("transaction_type");

  const createMutation = useMutation({
    mutationFn: async (data) => {
      return await http().post(endpoints.enquiries.getAll, data);
    },
    onSuccess: () => {
      toast({ title: "Sucess", description: "Enquiry sent successfully." });
      reset();
      setOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message ?? error?.message ?? "Error",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data) => {
    createMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mx-auto">
      <div>
        <Label className="block text-sm font-medium text-gray-700 mb-1">
          Transaction Type
        </Label>
        <div className="flex space-x-4">
          <Label
            className={cn(
              "inline-flex items-center border border-gray-300 bg-gray-200 rounded-md px-3 py-2 text-sm font-medium text-gray-700",
              {
                "bg-green-100 border-green-500": transaction_type === "buy",
              }
            )}
          >
            <Input
              type="radio"
              value="buy"
              {...register("transaction_type")}
              className="form-radio h-4 w-4  accent-gray-700"
            />
            <span className="ml-2">Buy</span>
          </Label>
          <Label
            className={cn(
              "inline-flex items-center border border-gray-300 bg-gray-200 rounded-md px-3 py-2 text-sm font-medium text-gray-700",
              {
                "bg-green-100 border-green-500": transaction_type === "sell",
              }
            )}
          >
            <Input
              type="radio"
              value="sell"
              {...register("transaction_type")}
              className="form-radio h-4 w-4 accent-gray-700"
            />
            <span className="ml-2">Sell</span>
          </Label>
        </div>
        {errors.transaction_type && (
          <p className="mt-1 text-sm text-red-600">
            {errors.transaction_type.message}
          </p>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <div>
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            rows={3}
            placeholder="Enter name"
          ></Input>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </Label>
          <Input
            id="email"
            {...register("email")}
            rows={3}
            placeholder="Enter email"
          ></Input>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* phone */}
      <div>
        <Label>Phone</Label>
        {/* <Input {...register("phone")} placeholder="Enter your phone" /> */}
        <Controller
          control={control}
          name="phone"
          render={({ field }) => <PhoneSelect {...field} />}
        />
        <ErrorMessage
          name="phone"
          render={({ message }) => (
            <span className="text-red-500 text-sm">{message}</span>
          )}
          errors={errors}
        />
      </div>

      <div>
        <Label
          htmlFor="share"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select Share
        </Label>
        {isLoading ? (
          <Skeleton className={"w-full h-9"} />
        ) : isError ? (
          (error?.message ?? error)
        ) : (
          <Controller
            name="share_id"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={!!shareId}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select a share" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a share</SelectLabel>
                    {data?.map((item) => (
                      <SelectItem value={item.value} key={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        )}
        {errors.share && (
          <p className="mt-1 text-sm text-red-600">{errors.share.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-2">
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
            <p className="mt-1 text-sm text-red-600">
              {errors.quantity.message}
            </p>
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
            {...register("price_per_share", { valueAsNumber: true })}
            placeholder="Enter price"
          />
          {errors.price_per_share && (
            <p className="mt-1 text-sm text-red-600">
              {errors.price_per_share.message}
            </p>
          )}
        </div>
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
          {...register("message")}
          rows={3}
          placeholder="Enter additional details"
        ></Textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          //   variant="p"
          className="w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
