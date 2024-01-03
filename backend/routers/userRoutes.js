import expreess from "express";
const router = expreess.Router();

import {
  registerUser,
  getMe,
  loginUser,
  updateProfile,
  requireAuth,
} from "../controllers/userController.js";
router.post("/", registerUser);
router.put("/", requireAuth, updateProfile);

router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
