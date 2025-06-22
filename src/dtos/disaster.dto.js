import { z } from "zod";

export const disasterSchema = z.object({
  title: z.string().min(5),
  location_name: z.string().min(5),
  description: z.string().min(15),
  tags: z.array(z.string()).optional(),
  owner_id: z.string().uuid(),
});

export const validateDisaster = (data) => disasterSchema.safeParse(data);
