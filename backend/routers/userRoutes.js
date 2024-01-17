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
router.post("/login", loginUser);
router.get("/verify/:id/:token", verificationUser);
router.use(requireAuth); // Alle nachfolgenden Routen erfordern Authentifizierung
router.put("/", updateProfile);
router.get("/profile", getUserProfile);

export default router;
