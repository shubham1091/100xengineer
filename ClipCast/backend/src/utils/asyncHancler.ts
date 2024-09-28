import { type Request, type Response, type NextFunction } from "express";
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
      res.status(500).json({ success: false, message: (err as Error).message });
      //   next(err);
    }
  };

// export const asyncHandler = (
//   requestHandler: (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => Promise<void>
// ) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   };
// };
