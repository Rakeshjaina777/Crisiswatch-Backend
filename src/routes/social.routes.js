// src/routes/social.routes.js
import express from "express";
import {
  ingestSocial,
  getSocialPosts,
} from "../controllers/social.controller.js";
import { validate } from "../middlewares/validate.js";
import { SocialIngestDTO } from "../dtos/social.dto.js";

const router = express.Router();

router.post("/ingest", validate(SocialIngestDTO), ingestSocial);
router.get("/", getSocialPosts);

export default router;
