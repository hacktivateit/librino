import { Request, Response, NextFunction } from 'express';

const checkAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

export default checkAuth;

