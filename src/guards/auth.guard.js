// src/guards/auth.guard.js
export const mockAuthGuard = (req, res, next) => {
  const userId = req.header("x-user-id");
  const userRole = req.header("x-user-role");

  if (!userId || !userRole) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Missing credentials" });
  }

  // Attach to request
  req.user = {
    id: userId,
    role: userRole,
  };

  next();
};
