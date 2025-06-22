import { z } from "zod";

export const reportSchema = z.object({
  disaster_id: z.string().uuid(),
  user_id: z.string().min(3),
  content: z.string().min(5),
  image_url: z.string().url().optional(),
  verification_status: z.enum(["pending", "verified", "rejected"]),
});

export const validateReport = (data) => reportSchema.safeParse(data);
