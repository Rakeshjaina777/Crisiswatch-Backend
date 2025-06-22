// src/dtos/resource.dto.js
import { z } from "zod";

export const validateResource = z.object({
  name: z.string().trim().min(2),
  location: z.string().min(3).trim(),
  latitude: z.preprocess((val) => Number(val), z.number().min(-90).max(90)),
  longitude: z.preprocess((val) => Number(val), z.number().min(-180).max(180)),
  type: z.string().min(3).trim(),
  disaster_id: z.string().uuid(),
});
