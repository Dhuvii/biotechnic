import { z } from "zod";

export const ContactUsSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name is required"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name is required"),
  email: z
    .string({ required_error: "required" })
    .email("invalid")
    .min(1, "required"),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is is required"),
});

export type ContactUsInput = z.infer<typeof ContactUsSchema>;
