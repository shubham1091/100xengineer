import { Router } from "express";
import { userMiddleware } from "../middleware/user.js";
import { Course, User } from "../db/index.js";
import jwt from "jsonwebtoken";

const router = Router();

/**
 * @route POST /signup
 * @description Register a new user
 * @param {string} username - The username of the new user
 * @param {string} password - The password of the new user
 * @returns {Object} 201 - User created successfully
 * @returns {Object} 400 - Username already exists
 * @returns {Object} 500 - server error
 */
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }

    const user = await User.create({ username, password });
    const token = `Bearer ${jwt.sign(
      { username, id: user._id },
      process.env.JWT_SECRET
    )}`;
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("User signup error:", error.message);
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route POST /signin
 * @description Sign in an user
 * @param {string} username - The username of the admin
 * @param {string} password - The password of the admin
 * @returns {Object} 200 - user signed in successfully with a token
 * @returns {Object} 401 - Unauthorized: user not found
 * @returns {Object} 500 - server error
 */
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(401).json({ message: "Unauthorized: user not found" });
      return;
    }

    const token = `Bearer ${jwt.sign(
      { username, id: user._id },
      process.env.JWT_SECRET
    )}`;
    res.status(200).json({ message: "user signed in successfully", token });
  } catch (error) {
    console.error("Signin error:", error.message);
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route GET /courses
 * @description Get all courses
 * @returns {Object} 200 - Courses fetched successfully
 * @returns {Object} 500 - Internal server error
 */
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({});

    res.status(200).json({ message: "Courses fetched successfully", courses });
  } catch (error) {
    console.error("User get courses error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * @route POST /courses/:courseId
 * @description Purchase a course
 * @middleware userMiddleware
 * @param {string} courseId - The ID of the course to purchase
 * @returns {Object} 200 - Course purchased successfully
 * @returns {Object} 500 - Internal server error
 */
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { courseId } = req.params;

  try {
    await User.updateOne(
      { _id: req.authorId },
      { $addToSet: { purchasedCourses: courseId } }
    );

    res.status(200).json({ message: "Course purchased successfully" });
  } catch (error) {
    console.error("User purchase course error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * @route GET /purchasedCourses
 * @description Get all purchased courses of the logged-in user
 * @middleware userMiddleware
 * @returns {Object} 200 - Courses fetched successfully
 * @returns {Object} 500 - Internal server error
 */
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.authorId);
    const courses = await Course.find({
      _id: { $in: user.purchasedCourses },
    });
    res
      .status(200)
      .json({ message: "Purchased courses fetched successfully", courses });
  } catch (error) {
    console.error("Get user's purchased courses error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
