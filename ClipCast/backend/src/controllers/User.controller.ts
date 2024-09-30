import type { Request, Response, NextFunction } from "express";
import { User } from "../models/User.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHander";
import { Upload } from "../utils/FileUploader";
import { Logger } from "../utils/Logger";

// Extend the Request interface to include files
interface MulterRequest extends Request {
  files: {
    [fieldname: string]: Express.Multer.File[];
  };
}

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password, fullName } = req.body;

      // Validate input fields
      if (!username || !email || !password || !fullName) {
        Logger.warn("Validation failed: All fields are required");
        throw new ApiError(400, "All fields are required");
      }

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        Logger.warn(`User already exists: ${username} or ${email}`);
        throw new ApiError(409, "User already exists");
      }

      // Handle file uploads
      const avatarFiles = (req as MulterRequest).files?.avatar;
      const coverImageFiles = (req as MulterRequest).files?.coverImage;

      if (!avatarFiles || avatarFiles.length === 0) {
        Logger.warn("Avatar is required");
        throw new ApiError(400, "Avatar is required");
      }

      const avatarLocalPath = avatarFiles[0].path;
      const coverImageLocalPath = coverImageFiles?.[0]?.path || null;

      if (!coverImageLocalPath) {
        Logger.warn("No cover image provided");
      }

      const [avatar, coverImage] = await Promise.all([
        Upload(avatarLocalPath),
        coverImageLocalPath
          ? Upload(coverImageLocalPath)
          : Promise.resolve(null),
      ]);

      if (!avatar) {
        Logger.error("Error uploading avatar");
        throw new ApiError(500, "Error uploading avatar");
      }

      // Create new user
      const newUser = new User({
        email,
        password,
        fullName,
        username,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
      });

      await newUser.save();

      const sanitizedUser = {
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        coverImage: newUser.coverImage,
        watchHistory: newUser.watchHistory,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      };

      Logger.info(`User registered successfully: ${sanitizedUser.username}`);

      res
        .status(201)
        .json(
          new ApiResponse(201, sanitizedUser, "User registered successfully")
        );
    } catch (error) {
      Logger.error(`Error registering user: ${(error as Error).message}`);
      next(error);
    }
  }
);
