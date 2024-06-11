const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const SECRET = process.env.JWT_SECRET;
const USERS_FILE_PATH = path.resolve(__dirname, "all_users.json");

const USERS_DATA = require(USERS_FILE_PATH);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: "Username and password are required" });
  }
  //   console.log(username,password);
  if (!isUserValid(username, password)) {
    return res.status(403).json({
      msg: "User dosent exist in our in memory DB",
    });
  }

  let token = jwt.sign({ username }, SECRET, { expiresIn: "5m" });
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  // token format Bearer token
  const Auth = req.headers.authorization;
  //   console.log(Auth);
  if (!Auth) {
    return res.status(401).json({ msg: "Authorization header is required" });
  }
  if (!Auth.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Invalid token format" });
  }

  const token = Auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    const username = decoded.username;

    const users = USERS_DATA.filter((usr) => usr.username !== username).map(
      (usr) => ({ username: usr.username, name: usr.name })
    );

    return res.json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    return res
      .status(400)
      .json({ msg: "Name, username, and password are required" });
  }
  if (doesUserExist(username)) {
    return res.status(400).json({ msg: "Username already exists" });
  }

  USERS_DATA.push({ name, username, password });

  // writing to file
  try {
    await fs.promises.writeFile(
      USERS_FILE_PATH,
      JSON.stringify(USERS_DATA, null, 2)
    );
  } catch (err) {
    return res.status(500).json({ msg: "Error saving user data" });
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: "5m" });
  return res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});

/**
 * Checks if a user exists in the User_DATA array based on the provided username and password.
 *
 * @param {string} username - The username to check.
 * @param {string} password - The password to check.
 * @returns {boolean} - Returns true if the user exists, otherwise false.
 */
function isUserValid(username, password) {
  const user = USERS_DATA.find(
    (usr) => usr.username === username && usr.password === password
  );

  return user !== undefined;
}

/**
 * Checks if a user exists in the list of all users by username.
 *
 * @param {string} username - The username to check for existence.
 * @returns {boolean} - Returns true if the user exists, otherwise false.
 */
function doesUserExist(username) {
  const user = USERS_DATA.find((usr) => usr.username === username);

  return user !== undefined;
}
