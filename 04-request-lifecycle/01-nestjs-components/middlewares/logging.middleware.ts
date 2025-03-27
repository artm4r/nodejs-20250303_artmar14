import { Request, Response, NextFunction } from "express";

export const LoggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`REQUEST: [${req.method}] ${req.path}`);

  next()
}
