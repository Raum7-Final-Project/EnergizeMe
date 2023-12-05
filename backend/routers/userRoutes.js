import expreess from "express";
const router = expreess.Router();

import {
  registerUser,
  getMe,
  loginUser,
} from "../controllers/userController.js";
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
