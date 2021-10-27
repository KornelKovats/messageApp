import { logger } from "../logger";
import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express-serve-static-core";

interface Error {
  status?: number;
  message?: string;
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(
    `${err.status || StatusCodes.INTERNAL_SERVER_ERROR} - ${err.message} - ${
      req.originalUrl
    } - ${req.method} - ${req.ip}`
  );
  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    message:
      req.app.get("env") === "development"
        ? err.message
        : "Unknown error happened",
  });
};
