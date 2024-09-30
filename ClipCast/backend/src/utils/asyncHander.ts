import { type Request, type Response, type NextFunction } from "express";
import { ApiError } from "./ApiError";
import { Logger } from "./Logger";

export const asyncHandler =
  (
    requestHandler: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void>
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await requestHandler(req, res, next);
    } catch (err) {
      if (err instanceof ApiError) {
        Logger.error(`API Error: ${err.message}`, err);
        res.status(err.statusCode).json(err);
      } else {
        const apiError = new ApiError(500, (err as Error).message);
        Logger.error(`Unexpected Error: ${(err as Error).message}`, err);
        res.status(apiError.statusCode).json(apiError);
      }
      return; // Ensure no further middleware is executed
    }
  };
