import { logger } from "../utils/logger.js";

export const loggerMiddleware = (req, res, next) => {
  logger.info({
    method: req.method,
    url: req.originalUrl,
    time: new Date().toISOString(),
  });
  next();
};
