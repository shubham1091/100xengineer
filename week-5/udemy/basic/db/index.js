import mongoose from "mongoose";

/**
 * Connect to MongoDB using the URL specified in the environment variable DB_URL.
 * Logs a message on successful connection or logs the error if the connection fails.
 */
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:\n", err.message);
    process.exit(1);
  });

/**
 * Admin Schema
 * @typedef {Object} Admin
 * @property {string} username - The username of the admin
 * @property {string} password - The password of the admin
 */
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

/**
 * User Schema
 * @typedef {Object} User
 * @property {string} username - The username of the user
 * @property {string} password - The password of the user
 * @property {Array<ObjectId>} purchasedCourses - The list of course IDs purchased by the user
 */
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

/**
 * Course Schema
 * @typedef {Object} Course
 * @property {string} title - The title of the course
 * @property {string} description - The description of the course
 * @property {number} price - The price of the course
 * @property {string} imageLink - The image link for the course
 * @property {ObjectId} author - The ID of the admin who created the course
 */
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
});

export const Admin = mongoose.model("Admin", AdminSchema);
export const User = mongoose.model("User", UserSchema);
export const Course = mongoose.model("Course", CourseSchema);
