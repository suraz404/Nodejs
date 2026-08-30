import express from "express";
import { signup, login, logout, getCurrentUser } from "../controllers/auth.js";
import { upload } from "../middleware/multer.js";
import { protect } from "../middleware/checkAuth.js";

const authRouter = express.Router();

authRouter.get("/me", protect, getCurrentUser);
authRouter.post("/signup", upload.single("profilePicture"), signup);
authRouter.post("/login", login);
authRouter.post("/logout", protect, logout);

export default authRouter;
