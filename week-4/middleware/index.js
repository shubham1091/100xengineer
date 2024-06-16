const express = require("express");
const fs = require("fs");
const z = require("zod");
const app = express();
const PORT = process.env.PORT || 3000;
const LOG_FILE = "./request.log";
const RATE_LIMIT = 5; // Requests per minute
const CLEAR_INTERVAL = 60 * 1000; // 1 minute in milliseconds

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string(),
  country: z.string().and(z.literal("IN").or(z.literal("US"))),
});

let visitCount = 0;
const userRequests = new Map(); // Stores request count per IP per URL

// Clear the userRequests map every minute
setInterval(() => {
  userRequests.clear();
}, CLEAR_INTERVAL);

app.use(express.json());
app.use(logger, countSiteVisit, rateLimiter);

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// Endpoint to get user request counts
app.get("/users", (req, res) => {
  // Convert userRequests Map to a plain object
  const userRequestsObj = Object.fromEntries(
    [...userRequests.entries()].map(([ip, urlMap]) => [
      ip,
      Object.fromEntries(urlMap),
    ])
  );
  res.json(userRequestsObj); // Express automatically converts objects to JSON
});

app.post("/", (req, res) => {
  const body = schema.safeParse(req.body);
  console.log(body);
  if (!body.success) {
    res.json(body);
  }
  res.json({ msg: "OK" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Middleware to log request details to a file
function logger(req, res, next) {
  const requestDetails = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    headers: req.headers,
    query: req.query,
    ip: req.ip,
  };

  const requestLog = `${JSON.stringify(requestDetails, null, 2)}\n`;
  fs.appendFile(LOG_FILE, requestLog, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  next();
}

// Middleware to count site visits
function countSiteVisit(req, res, next) {
  visitCount++;
  console.log(`Site visited ${visitCount} times`);
  next();
}

// Middleware to limit the rate of requests
function rateLimiter(req, res, next) {
  const ip = req.ip;
  const url = req.url;

  if (!userRequests.has(ip)) {
    userRequests.set(ip, new Map());
  }

  const urlRequests = userRequests.get(ip);
  const requestCount = urlRequests.get(url) || 0;

  if (requestCount >= RATE_LIMIT) {
    return res
      .status(429)
      .json({ msg: "Too many requests, please try again later" });
  }

  urlRequests.set(url, requestCount + 1);
  next();
}
