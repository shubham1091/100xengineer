import { Router } from "express";
import { adminMiddleware } from "../middleware/admin.js";
import { Admin, Course } from "../db/index.js";

const router = Router();

/**
 * @route POST /signup
 * @description Register a new admin
 * @param {string} username - The username of the new admin
 * @param {string} password - The password of the new admin
 * @returns {Object} 201 - Admin created successfully
 * @returns {Object} 400 - Username and password are required or username already exists
 * @returns {Object} 500 - server error
 */
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const admin = await Admin.create({ username, password });
    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (error) {
    console.error("Admin signup error:", error.message);
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route POST /courses
 * @description Create a new course
 * @middleware adminMiddleware
 * @param {string} title - The title of the course
 * @param {string} description - The description of the course
 * @param {string} imageLink - The image link for the course
 * @param {number} price - The price of the course
 * @returns {Object} 201 - Course created successfully
 * @returns {Object} 500 - server error
 */
router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;

  try {
    if (!title || !description || !price || !imageLink) {
      throw new Error("All fields are required");
    }

    const course = await Course.create({
      title,
      description,
      price,
      imageLink,
      author: req.admin._id,
    });

    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error("Admin create course error:", error.message);
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route GET /courses
 * @description Get all courses created by the logged-in admin
 * @middleware adminMiddleware
 * @returns {Object} 200 - Courses fetched successfully
 * @returns {Object} 500 - Internal server error
 */
router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({ author: req.admin._id });

    res.status(200).json({ message: "Courses fetched successfully", courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
