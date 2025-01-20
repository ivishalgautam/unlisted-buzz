"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmailStep } from "./email-step";
import { OTPStep } from "./otp-step";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "@/config";
import { endpoints } from "@/utils/endpoints";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  otp: z
    .string()
    .length(6, { message: "OTP must be 6 digits" })
    .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
});

export function LoginForm() {
  const [step, setStep] = useState("email");
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: { role: "user" },
  });

  const otpSendMutation = useMutation({
    mutationFn: async (data) => {
      return await axios.post(`${config.api_base}${endpoints.auth.otp}`, data);
    },
    onSuccess: () => {
      setStep("otp");
      toast({
        title: "OTP Sent",
        description: "Please check your email for the OTP",
      });
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

  const otpSubmitMutation = useMutation({
    mutationFn: async (data) => {
      return await axios.post(
        `${config.api_base}${endpoints.auth.login}`,
        data
      );
    },
    onSuccess: ({ data: resp }) => {
      toast({
        title: "Success",
        description: "You have successfully logged in",
      });
      localStorage.setItem("user", JSON.stringify(resp.user_data));
      localStorage.setItem("token", resp.token);
      localStorage.setItem("refreshToken", resp.refresh_token);
      router.push("/");
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

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const email = methods.getValues("email");
    if (await methods.trigger("email")) {
      otpSendMutation.mutate({ email });
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    if (await methods.trigger("otp")) {
      const otp = methods.getValues("otp");
      const email = methods.getValues("email");
      otpSubmitMutation.mutate({ email, email_otp: otp, role: "user" });
    }
  };

  return (
    <FormProvider {...methods}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            {step === "email"
              ? "Enter your email to receive an OTP"
              : "Enter the OTP sent to your email"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "email" ? (
            <EmailStep onSubmit={handleEmailSubmit} />
          ) : (
            <OTPStep
              onSubmit={handleOTPSubmit}
              onBack={() => setStep("email")}
            />
          )}
        </CardContent>
      </Card>
    </FormProvider>
  );
}
