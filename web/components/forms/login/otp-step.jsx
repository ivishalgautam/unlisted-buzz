import { useFormContext, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function OTPStep({ onSubmit, onBack }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="otp">Enter OTP</Label>
        <Controller
          name="otp"
          control={control}
          rules={{
            required: "OTP is required",
            validate: (value) => value.length === 6 || "OTP must be 6 digits",
          }}
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
        {errors.otp && (
          <p className="text-sm text-red-500 mt-1">{errors.otp.message}</p>
        )}
      </div>
      <div className="flex space-x-2">
        <Button
          type="button"
          onClick={onBack}
          variant="outline"
          className="w-full"
        >
          Back
        </Button>
        <Button type="submit" className="w-full">
          Verify OTP
        </Button>
      </div>
    </form>
  );
}
