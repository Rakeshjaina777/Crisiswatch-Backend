// src/docs/swagger.js
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Disaster API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

/**
 * @swagger
 * /api/social/ingest:
 *   post:
 *     summary: Ingest social posts based on keyword
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               platform:
 *                 type: string
 *                 enum: [twitter, reddit]
 *               keyword:
 *                 type: string
 *     responses:
 *       201:
 *         description: Posts ingested
 *
 * /api/social:
 *   get:
 *     summary: Get all stored social posts
 *     responses:
 *       200:
 *         description: Social feed
 */
