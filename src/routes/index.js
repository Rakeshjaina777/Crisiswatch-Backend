// src/routes/index.js
import express from "express";
import disasterRoutes from "./disaster.routes.js";

const router = express.Router();

router.use("/disasters", disasterRoutes);

export default router;
