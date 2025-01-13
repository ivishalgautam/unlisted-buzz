import { z } from "zod";

export const promoterSchema = z.object({
  name: z.string().min(1, "Name is required*"),
  designation: z.string().min(1, "Designation is required*"),
  experience: z.string().min(1, "Experience is required*"),
  linkedin: z
    .string()
    .min(1, "LinkedIn profile is required*")
    .url("Enter a valid LinkedIn URL*"),
});
