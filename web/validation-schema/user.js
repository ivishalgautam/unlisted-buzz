import { z } from "zod";

export const userSchema = z.object({
  fullname: z
    .string({ required_error: "Full name is required." })
    .min(1, { message: "Full name is required." }),
  email: z
    .string({ required_error: "Email is required." })
    .email("Invalid email format."),
  dob: z
    .string({ required_error: "Date of birth is required." })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date of birth string!",
    }),
  avatar: z.string().optional(),
});

export const userUpdateSchema = z.object({
  fullname: z
    .string({ required_error: "Full name is required." })
    .min(1, { message: "Full name is required." }),
  email: z
    .string({ required_error: "Email is required." })
    .email("Invalid email format."),
  dob: z
    .string({ required_error: "Date of birth is required." })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date of birth string!",
    }),
  avatar: z.string().optional(),
});
