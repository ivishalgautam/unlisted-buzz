"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "@/config";
import { endpoints } from "@/utils/endpoints";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  residency: z.enum(["resident", "non-resident"]),
  fullname: z
    .string({ required_error: "Fullname is required*" })
    .min(2, "Fullname must be at least 2 characters"),
  country: z
    .string({ required_error: "Country is required*" })
    .min(1, "Please select a country"),
  email: z
    .string({ required_error: "Email is required*" })
    .email("Invalid email address"),
  //   mobile_number: z.string().min(1, "Phone number is required"),
  email_otp: z.string().min(6, "Phone number is required"),
});

export default function SignupForm() {
  const router = useRouter();
  const [isOTPSent, setIsOTPSent] = useState({ email: false });
  const [isOTPVerified, setIsOTPVerified] = useState({ email: false });
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const createMutation = useMutation({
    mutationFn: async (data) => {
      const { data: resp } = await axios.post(
        `${config.api_base}${endpoints.auth.signup}`,
        data
      );
      localStorage.setItem("user", JSON.stringify(resp.user_data));
      localStorage.setItem("token", resp.token);
      localStorage.setItem("refreshToken", resp.refresh_token);
      router.replace("/");
    },
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message ?? error?.message ?? "error");
    },
  });

  const {
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    createMutation.mutate(data);
    // Here you would typically send the data to your backend
  };

  const handleNextStep = async () => {
    if (step === 1) {
      const isValid = await trigger("residency");
      if (isValid) setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            {step === 1 && <StepOne />}
            {step === 2 && (
              <StepTwo
                {...{
                  isOTPSent,
                  setIsOTPSent,
                  isOTPVerified,
                  setIsOTPVerified,
                }}
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={handlePrevStep}>
                Previous
              </Button>
            )}
            {step < 2 ? (
              <Button type="button" onClick={handleNextStep}>
                Next
              </Button>
            ) : isOTPSent.email ? (
              <Button type="submit">Submit</Button>
            ) : (
              ""
            )}
          </CardFooter>
        </form>
      </FormProvider>
    </Card>
  );
}
