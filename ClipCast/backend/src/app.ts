import express, { type Express } from "express";
import cors, { type CorsOptions } from "cors";
import cookieParser from "cookie-parser";

export const app: Express = express();

const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(500).json({ success: false, message: err.message });
// });

//routes
import { userRouter } from "./routes/User.routes";

app.use("/api/v1/users", userRouter);
