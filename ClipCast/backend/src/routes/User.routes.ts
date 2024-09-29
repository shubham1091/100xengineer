import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { registerUser } from "../controllers/User.controller";
import { upload } from "../middlewares/Multer.middleware";

export const userRouter = Router();

userRouter.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
