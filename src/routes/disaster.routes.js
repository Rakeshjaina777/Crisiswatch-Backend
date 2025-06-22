// src/routes/disaster.routes.js
import express from "express";
import {
  createDisaster,
  getDisasters,
  getDisasterById,
  deleteDisaster,
} from "../controllers/disaster.controller.js";
import { mockAuthGuard } from "../guards/auth.guard.js";
import { allowRoles } from "../guards/role.guard.js";
import { validate } from "../middlewares/validate.js";
import { validateDisaster } from "../dtos/disaster.dto.js";

const router = express.Router();

router.get("/", getDisasters);
router.get("/:id", getDisasterById);

router.post(
  "/",
  mockAuthGuard,
  allowRoles("admin", "contributor"),
  validate(validateDisaster),
  createDisaster
);

router.delete("/:id", mockAuthGuard, allowRoles("admin"), deleteDisaster);

export default router;
