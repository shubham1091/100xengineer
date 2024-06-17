import { Admin } from "../db/index.js";

/**
 * Middleware to authenticate admins based on username and password.
 * @middleware adminMiddleware
 * @param {Object} req - The request object
 * @param {Object} req.headers - The headers object containing username and password
 * @param {string} req.headers.username - Username of the admin
 * @param {string} req.headers.password - Password of the admin
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {void}
 */
export async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;

  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.error("Admin middleware error:", error.message);
    res.status(400).json({ message: error.message });
  }
}
