import { app } from "./app";
import { connectDB } from "./db";
import { Logger } from "./utils/Logger";

connectDB().then(() => {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    Logger.info(`Server is running on port ${PORT}`);
  });

  app.on("error", (error) => {
    Logger.error("SERVER ERROR", error);
  });
});
