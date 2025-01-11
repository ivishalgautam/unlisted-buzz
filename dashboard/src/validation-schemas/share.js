import { z } from "zod";

const TabSchema = z.object({
  tab: z.string(),
  tables: z
    .array(
      z.object({
        title: z.string(),
        table: z.object({
          headers: z.array(z.string()),
          rows: z.array(z.array(z.string())),
        }),
      }),
    )
    .nonempty(),
});

export const shareSchema = z.object({
  name: z
    .string({ required_error: "Share name is required." })
    .min(1, { message: "Share name is required." }),
  is_featured: z.boolean().optional(),
  image: z
    .string({ required_error: "Share image is required." })
    .min(1, { message: "Share image is required." }),
  about: z.string().optional(),
  fundamentals: z
    .array(
      z.object({
        key: z
          .string({ required_error: "Key is required!" })
          .min(1, { message: "Key is required*" }),
        value: z
          .string({ required_error: "Value is required!" })
          .min(1, { message: "Value is required*" }),
      }),
    )
    .optional(),
  shareholding_patterns: z
    .array(
      z.object({
        year: z.string(),
        data: z.array(
          z.object({
            heading: z
              .string({ required_error: "heading is required!" })
              .min(1, { message: "heading is required*" }),
            progress: z
              .number({ required_error: "progress is required!" })
              .min(1, { message: "progress is required*" }),
          }),
        ),
      }),
    )
    .optional(),
  peer_ratio: z.object({
    headers: z.array(z.string()),
    rows: z.array(z.array(z.string())),
  }),
  financials: z.array(TabSchema).optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  meta_keywords: z.string().optional(),
});
