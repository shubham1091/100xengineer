import express from "express";
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

/**
 * @route /admin
 * @description Routes related to admin operations
 */
app.use("/admin", adminRouter);

/**
 * @route /user
 * @description Routes related to user operations
 */
app.use("/user", userRouter);

/**
 * @description Start the server and listen on the specified port
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
