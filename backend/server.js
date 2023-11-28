import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./utils/mongodb.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
