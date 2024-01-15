import expreess from "express";
const router = expreess.Router();

import {
  registerUser,
  loginUser,
  updateProfile,
  requireAuth,
  verificationUser,
  getUserProfile,
  // getProfileUser,
} from "../controllers/userController.js";
router.post("/", registerUser);
router.get("/verify/:id/:token", verificationUser);
router.put("/", requireAuth, updateProfile);
router.post("/login", loginUser);
router.get("/profile", requireAuth, getUserProfile);

export default router;
