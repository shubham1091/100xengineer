const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DB_URL = process.env.DB_URL || "";
const PORT = process.env.PORT || 3000;
const SALT_ROUND = Number(process.env.SALT_ROUND) || 10;

const app = express();
app.use(express.json());

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "email already exist" });
    }
    const hashedPass = await bcrypt.hash(password, SALT_ROUND);
    const user = new User({ name, email, password: hashedPass });
    await user.save();

    return res.json({
      msg: "Account created successfully",
    });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    return res.json({ msg: "You are signed in" });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
