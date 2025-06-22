// src/middlewares/error.middleware.js
export default (err, req, res, next) => {
  console.error("🔥 Error:", err);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
