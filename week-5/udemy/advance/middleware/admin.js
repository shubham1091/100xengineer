import jwt from "jsonwebtoken";

/**
 * Middleware to authenticate admins based on JWT.
 * @middleware adminMiddleware
 * @param {Object} req - The request object
 * @param {string} req.headers.authorization - Bearer token
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {void}
 */
export async function adminMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  // console.log("Auth header:", authHeader);

  if (!authHeader) {
    console.log("Authorization header missing");
    return res
      .status(401)
      .json({ message: "Unauthorized: Authorization header missing" });
  }

  const tokenParts = authHeader.split(" ");

  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    console.log("Invalid token format");
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token format" });
  }

  const token = tokenParts[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (!payload.username || !payload.id) {
      console.log("Invalid token payload");
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token payload" });
    }

    req.authorId = payload.id;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      console.log("JWT error:", err.message);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    } else if (err.name === "TokenExpiredError") {
      console.log("JWT expired:", err.message);
      return res.status(401).json({ message: "Unauthorized: Token expired" });
    } else {
      console.error("Internal server error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
