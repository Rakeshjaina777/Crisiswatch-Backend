import { z } from "zod";

export const geocodeSchema = z.object({
  description: z.string().min(5),
});

export const validateGeocode = (data) => geocodeSchema.safeParse(data);
