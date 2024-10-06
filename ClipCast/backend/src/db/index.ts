import mongoose from "mongoose";
import { DB_NAME } from "../constants";
import { Logger } from "../utils/Logger";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    Logger.info(`Connected to MongoDB: ${connectionInstance.connection.host}`);
  } catch (error) {
    Logger.error("MONGODB CONNECTION ERROR", error);
    process.exit(1);
  }
};
