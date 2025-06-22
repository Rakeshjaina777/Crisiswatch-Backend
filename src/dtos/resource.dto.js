import { z } from "zod";

export const resourceSchema = z.object({
  disaster_id: z.string().uuid(),
  name: z.string().min(2),
  location_name: z.string(),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  type: z.string(),
});

export const validateResource = (data) => resourceSchema.safeParse(data);
