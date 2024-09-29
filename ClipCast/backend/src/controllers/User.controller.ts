import type { UploadApiResponse } from "cloudinary";
import type { Request } from "express";
import { User } from "../models/User.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHancler";
import { Upload } from "../utils/FileUploader";
import { ApiResponse } from "../utils/ApiResponse";

// Extend the Request interface to include files
interface MulterRequest extends Request {
  files: {
    [fieldname: string]: Express.Multer.File[];
  };
}

// interface fao implements Request {}

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, fullName } = req.body;

  // Validate input fields
  if (!username || !email || !password || !fullName) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if user already exists
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  // Handle file uploads
  const avatarFiles = (req as MulterRequest).files?.avatar;
  const coverImageFiles = (req as MulterRequest).files?.coverImage;

  if (!avatarFiles || avatarFiles.length === 0) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatarLocalPath = avatarFiles[0].path;
  const coverImageLocalPath = coverImageFiles?.[0]?.path || null;

  // Upload avatar and cover image
  const avatar = await Upload(avatarLocalPath);
  if (!avatar) {
    throw new ApiError(500, "Error uploading avatar");
  }

  const coverImage: UploadApiResponse | null = coverImageLocalPath
    ? await Upload(coverImageLocalPath)
    : null;

  // Create new user
  const newUser = await User.create({
    email,
    password,
    fullName,
    username: username.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
  });

  const dbUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );

  if (!dbUser) {
    throw new ApiError(500, "Error creating user");
  }
  res
    .status(201)
    .json(new ApiResponse(201, dbUser, "User registered Successfully"));
});
