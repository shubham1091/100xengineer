import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import fs from "fs";
import { Logger } from "./Logger";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const Upload = async (
  localFilePath: string
): Promise<UploadApiResponse | null> => {
  try {
    if (!fs.existsSync(localFilePath)) {
      Logger.error(`File does not exist: ${localFilePath}`);
      return null;
    }
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    Logger.info(`File uploaded successfully: ${response.url}`);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    Logger.error(`Error uploading file: ${(error as Error).message}`);
    return null;
  }
};
