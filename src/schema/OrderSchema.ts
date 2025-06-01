import { translate } from "@/utilities/translate";
import { z } from "zod";

export const OrderSchema = z.object({
  id: z.string().optional(),
  fullName: z
    .string()
    .min(1, translate("homepage").orderForm.errors.fullName.required),
  streetAddress: z
    .string()
    .min(1, translate("homepage").orderForm.errors.streetAddress.required),
  region: z.string().optional(),
  city: z.string().min(1, translate("homepage").orderForm.errors.city.required),
  zipCode: z
    .string()
    .min(1, translate("homepage").orderForm.errors.zipCode.required),
  country: z
    .string()
    .min(1, translate("homepage").orderForm.errors.country.required),
  email: z.string().email(translate("invalid")).min(1, translate("required")),
  phoneNumber: z
    .string()
    .min(1, translate("homepage").orderForm.errors.phoneNumber.required),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export type OrderInput = z.infer<typeof OrderSchema>;
