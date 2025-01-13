import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(1, "Name of event is required*"),
  description: z.string().min(1, "Description of event is required*"),
  date: z.string().min(1, "Date of event is required*"),
  details: z.string().optional(),
});
