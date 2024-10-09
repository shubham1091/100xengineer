import { Compression, Permission } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";

export const getOrCreateStorage = async () => {
  try {
    await storage.getBucket(questionAttachmentBucket);
    console.log("storage already exists");

    console.log("storage connected");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.log("storage not found creating storage");
    try {
      await storage.createBucket(
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.read("any"),
          Permission.read("users"),
          Permission.create("users"),
          Permission.update("users"),
          Permission.delete("users"),
        ],
        false,
        undefined,
        undefined,
        ["jpg", "png", "gif", "jpeg", "webp", "heic"],
        Compression.None,
        false,
        true
      );
      console.log("storage created");
      console.log("storage connected");
    } catch (error) {
      console.error("Error creating storage: ", error);
    }
  }
};
