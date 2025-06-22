// src/dtos/report.dto.js
import { z } from "zod";

export const validateReport = z.object({
  content: z.string().min(5).trim(),
  user_id: z.string().uuid(),
  disaster_id: z.string().uuid(),
  image_url: z.string().url().optional().or(z.literal("")),
  status: z.enum(["PENDING", "VERIFIED", "REJECTED"]).default("PENDING"),
});
