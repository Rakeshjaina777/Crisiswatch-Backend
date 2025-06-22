// src/middlewares/rateLimit.middleware.js
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 10, // 10 requests
  duration: 1, // per 1 second by IP
});

export default async function rateLimiterMiddleware(req, res, next) {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch {
    res.status(429).json({ message: "Too Many Requests" });
  }
}
