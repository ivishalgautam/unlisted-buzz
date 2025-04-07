import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const userSchema = z
  .object({
    fullname: z
      .string({ required_error: "Full name is required." })
      .min(1, { message: "Full name is required." }),
    email: z
      .string({ required_error: "Email is required." })
      .email("Invalid email format."),
    mobile_number: z
      .string({ required_error: "Mobile number is required." })
      .min(1, { message: "Mobile number is required." }),
    dob: z
      .string({ required_error: "Date of birth is required." })
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date of birth string!",
      }),
    avatar: z.string().optional(),
  })
  .refine((data) => isValidPhoneNumber(data.mobile_number), {
    path: ["mobile_number"],
    message: "Invalid phone number",
  });

export const userUpdateSchema = z
  .object({
    fullname: z
      .string({ required_error: "Full name is required." })
      .min(1, { message: "Full name is required." }),
    email: z
      .string({ required_error: "Email is required." })
      .email("Invalid email format."),
    mobile_number: z
      .string({ required_error: "Mobile number is required." })
      .min(1, { message: "Mobile number is required." }),
    dob: z
      .string({ required_error: "Date of birth is required." })
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date of birth string!",
      }),
    avatar: z.string().optional(),
  })
  .refine((data) => isValidPhoneNumber(data.mobile_number), {
    path: ["mobile_number"],
    message: "Invalid phone number",
  });
