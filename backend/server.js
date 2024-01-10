import dotenv from "dotenv";
dotenv.config();
import "./utils/mongodb.js";
import app from "./app.js";
import cors from "cors";

const PORT = process.env.PORT || 5555;
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
