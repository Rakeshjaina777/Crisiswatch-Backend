export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: "Validation Error",
        errors: result.error.format(),
      });
    }
    req.validated = result.data; // attach validated data
    next();
  };
};
