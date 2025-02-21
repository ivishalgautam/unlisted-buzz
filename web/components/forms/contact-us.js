"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { ErrorMessage } from "@hookform/error-message";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import config from "@/config";
import { endpoints } from "@/utils/endpoints";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import "react-phone-number-input/style.css";
import * as RPNInput from "react-phone-number-input";
import PhoneSelect from "../ui/phone-select";
const formSchema = z
  .object({
    name: z.string({ required_error: "required*" }).min(1, "Name is required"),
    email: z
      .string({ required_error: "required*" })
      .email("Invalid email address"),
    phone: z
      .string({ required_error: "required*" })
      .min(1, "Phone number is required"),
    subject: z
      .string({ required_error: "required*" })
      .min(1, "Subject is required"),
    source: z
      .string({ required_error: "required*" })
      .min(1, "Source is required"),
    message: z
      .string({ required_error: "required*" })
      .min(1, "Message is required"),
  })
  .refine((data) => RPNInput.isValidPhoneNumber(data.phone), {
    path: ["phone"],
    message: "Invalid phone number",
  });

const sources = ["faceboook", "google", "newspaper", "word of mouth", "other"];

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      source: "",
      message: "",
    },
  });

  const {
    register,
    formState: { errors },
    control,
  } = form;

  const createMutation = useMutation({
    mutationFn: async (data) => {
      return await axios.post(
        `${config.api_base}${endpoints.queries.getAll}`,
        data
      );
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have successfully sent your query.",
      });
      form.reset();
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

  async function onSubmit(data) {
    createMutation.mutate(data);
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        {/* name */}
        <div>
          <Label>Name</Label>
          <Input {...register("name")} placeholder="Enter your name" />
          <ErrorMessage
            name="name"
            render={({ message }) => (
              <span className="text-red-500 text-sm">{message}</span>
            )}
            errors={errors}
          />
        </div>

        {/* email */}
        <div>
          <Label>Email</Label>
          <Input {...register("email")} placeholder="Enter your email" />
          <ErrorMessage
            name="email"
            render={({ message }) => (
              <span className="text-red-500 text-sm">{message}</span>
            )}
            errors={errors}
          />
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

        {/* subject */}
        <div>
          <Label>Subject</Label>
          <Input {...register("subject")} placeholder="Enter your subject" />
          <ErrorMessage
            name="subject"
            render={({ message }) => (
              <span className="text-red-500 text-sm">{message}</span>
            )}
            errors={errors}
          />
        </div>

        {/* source */}
        <div>
          <Label>Source</Label>
          <Controller
            control={control}
            name="source"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  {sources.map((item) => (
                    <SelectItem key={item} value={item} className="capitalize">
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <ErrorMessage
            name="source"
            render={({ message }) => (
              <span className="text-red-500 text-sm">{message}</span>
            )}
            errors={errors}
          />
        </div>

        {/* message */}
        <div>
          <Label>Message</Label>
          <Textarea {...register("message")} placeholder="Enter your message" />
          <ErrorMessage
            name="message"
            render={({ message }) => (
              <span className="text-red-500 text-sm">{message}</span>
            )}
            errors={errors}
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full mt-2"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
