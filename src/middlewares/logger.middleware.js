// src/middlewares/logger.middleware.js
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ level, message, timestamp }) =>
        `[${timestamp}] ${level.toUpperCase()}: ${message}`
    )
  ),
  transports: [new winston.transports.Console()],
});

export const loggerMiddleware = (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
};
