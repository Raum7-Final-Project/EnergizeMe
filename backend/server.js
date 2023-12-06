import dotenv from "dotenv";
dotenv.config();
import "./utils/mongodb.js";
import app from "./app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
