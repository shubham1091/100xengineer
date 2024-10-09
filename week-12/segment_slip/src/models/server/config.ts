import { env } from "@/env";
import { Client, Avatars, Databases, Storage, Users } from "node-appwrite";

export const client = new Client();

client
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apiKey);

export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);
export const users = new Users(client);
