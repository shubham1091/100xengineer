const express = require("express");
let users = require("./MOCK_DATA.json");
const fs = require("fs");
const { exec } = require("child_process");

const app = express();
const PORT = 8000;

const write = (obj, callback) => {
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(obj), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    }
    callback(err);
  });
};

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("OK!");
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

// dynamic path
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((usr) => usr.id === id);

  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  //   console.log(body)
  users.push({ id: users.length + 1, ...body });
  write(users, (err) => {
    if (err) {
      return res.status(500).json({ status: "failure", error: err.name });
    } else {
      return res.json({ status: "success", id: users.length });
    }
  });
});
app.patch("/api/users/:id", (req, res) => {
  const body = req.body;
  //   console.log(body);
  const id = Number(req.params.id);
  users = users.map((user) => {
    if (id === user.id) {
      //   console.log(user);
      return { ...user, ...body };
      //   console.log(user);
    }
    return user;
  });

  write(users, (err) => {
    if (err) {
      return res.status(500).json({ status: "failure", error: err.name });
    } else {
      return res.json({ status: "success", id });
    }
  });
});
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((usr) => usr.id !== id);
  write(users, (err) => {
    if (err) {
      return res.status(500).json({ status: "failure", error: err.name });
    } else {
      return res.json({ status: "success", id });
    }
  });
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

/*
simulating error 
*/
/* setInterval(() => {
  const filePath = "./MOCK_DATA.json";
  // Generate a random number between 0 and 1
  const random = Math.random();

  // 10%
  if (random < 0.1) {
    // Make the file read-only
    exec(`chmod u-w ${filePath}`);
  } else {
    // Make the file writable
    exec(`chmod u+w ${filePath}`);
  }
}, 5 * 1000); */
