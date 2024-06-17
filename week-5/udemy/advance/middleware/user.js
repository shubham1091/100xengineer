import { User } from "../db/index.js";

/**
 * Middleware to authenticate users based on username and password.
 * @middleware userMiddleware
 * @param {Object} req - The request object
 * @param {Object} req.headers - The headers object containing username and password
 * @param {string} req.headers.username - Username of the user
 * @param {string} req.headers.password - Password of the user
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {void}
 */
export async function userMiddleware(req, res, next) {
  const { username, password } = req.headers;

  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("User middleware error:", error.message);
    res.status(400).json({ message: error.message });
  }
}
