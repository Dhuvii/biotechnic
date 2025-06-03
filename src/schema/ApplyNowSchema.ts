import { z } from "zod";

export const ApplyNowSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name is required"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name is required"),
  email: z.string().email("invalid").min(1, "required"),
  cancerType: z
    .string({ required_error: "Cancer type is required" })
    .min(1, "Cancer type is required"),
  cancerStage: z
    .string({ required_error: "Cancer stage is required" })
    .min(1, "Cancer stage is required"),
  previousTreatments: z.record(z.boolean()).optional(),
});

export type ApplyNowInput = z.infer<typeof ApplyNowSchema>;
