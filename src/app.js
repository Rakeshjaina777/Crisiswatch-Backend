// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createServer } from "http";
import { Server } from "socket.io";

import { PORT } from "./config/env.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/error.middleware.js";
import rateLimiter from "./middlewares/rateLimit.middleware.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { setupSocket } from "./config/socket.js";

const app = express();
const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

setupSocket(io);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimiter);
app.use(loggerMiddleware);

// Routes
app.use("/api", routes);

// Global Error Handler
app.use(errorHandler);

export default server;
