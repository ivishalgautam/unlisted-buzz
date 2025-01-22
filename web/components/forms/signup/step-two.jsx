import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import axios from "axios";
import config from "@/config";
import { endpoints } from "@/utils/endpoints";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Brazil",
  "India",
  // Add more countries as needed
];

export default function StepTwo({
  isOTPSent,
  setIsOTPSent,
  isOTPVerified,
  setIsOTPVerified,
}) {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
    control,
  } = useFormContext();

  const email = useWatch({ name: "email" });
  const email_otp = useWatch({ name: "email_otp" });

  const handleSendOtp = async () => {
    if (await trigger(["email"])) {
      try {
        const { data } = await axios.post(
          `${config.api_base}${endpoints.auth.otp}`,
          { email, otp: email_otp }
        );
        setIsOTPSent((prev) => ({ ...prev, email: true }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullname">Full Name</Label>
        <Input
          id="fullname"
          {...register("fullname")}
          aria-invalid={errors.fullname ? "true" : "false"}
          placeholder="Enter first name"
        />
        {errors.fullname && (
          <p className="text-sm text-red-500">{errors.fullname.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select onValueChange={(value) => setValue("country", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && (
          <p className="text-sm text-red-500">{errors.country.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="flex items-center gap-2">
          <Input
            id="email"
            type="email"
            {...register("email", {
              validate: () => {
                if (!email_otp) {
                  return "Please verify email*";
                }
              },
            })}
            aria-invalid={!!errors.email}
            placeholder="Enter email"
            disabled={isOTPSent.email}
          />
          <Button
            variant="outline"
            type="button"
            onClick={handleSendOtp}
            disabled={isOTPSent.email}
          >
            Verify
          </Button>
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {isOTPSent.email && (
        <div>
          <Label>Enter OTP sent on email</Label>
          <Controller
            name="email_otp"
            control={control}
            render={({ field }) => (
              <InputOTP maxLength={6} {...field}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            )}
          />
        </div>
      )}

      {/* <div>
        <Label>Phone</Label>
        <div className="flex items-center gap-2">
          <Controller
            name="mobile_number"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                defaultCountry="IN"
                id="mobile_number"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter phone number"
              />
            )}
          />
          <Button variant="outline" type="button" onClick={handleSendOtp}>
            Verify
          </Button>
        </div>
        {errors.mobile_number && (
          <span className="text-red-500">{errors.mobile_number.message}</span>
        )}
      </div> */}
    </div>
  );
}
