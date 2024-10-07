import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
  const host = req.hostname;
  const url = req.originalUrl;
  const method = req.method;
  const ip = req.ip;
  const timestamp = new Date().toISOString();

  console.log(chalk.cyan("=================================="));
  console.log(chalk.magenta(`[${timestamp}] Request received:`));
  console.log(chalk.blue(`Method:     ${chalk.white(method)}`));
  console.log(chalk.green(`Host:       ${chalk.white(host)}`));
  console.log(chalk.yellow(`URL:        ${chalk.white(url)}`));
  console.log(chalk.red(`IP Address: ${chalk.white(ip)}`));
  console.log(chalk.cyan("=================================="));
  next();
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "hello-world.gif"));
});


// 404 route
app.use((req, res, next) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
