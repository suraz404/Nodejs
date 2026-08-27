import express from "express";
import { signup, login, logout } from "../controllers/auth.js";
import { upload } from "../middleware/multer.js";

const authRouter = express.Router();

authRouter.post("/signup", upload.single("profilePicture"), signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
