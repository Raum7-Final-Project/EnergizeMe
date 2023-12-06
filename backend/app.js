import express from "express";
import userRoutes from "./routers/userRoutes.js";
import AppError from "./utils/appError.js";
import cors from "cors";

const app = express();

//1) MIDDLEWARE

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2) ROUTES

app.use("/api/users", userRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 400));
});

export default app;
