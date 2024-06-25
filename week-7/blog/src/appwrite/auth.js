import { config } from "../config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (!userAccount.$id) {
        // Handle scenario where account creation failed
        console.error("Account creation failed:", userAccount);
        // Assuming you have a method to handle login fallback
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      console.error("Error creating account:", error.message, error.stack);
      throw error; // Propagate the error to the caller
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Error logging in:", error.message, error.stack);
      throw error; // Propagate the error to the caller
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error fetching current user:", error.message, error.stack);
      throw error; // Propagate the error to the caller
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Error logging out:", error.message, error.stack);
      throw error; // Propagate the error to the caller
    }
  }
}

export const authService = new AuthService();
