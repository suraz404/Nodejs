import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/:name", getUser);
userRouter.put("/:email", updateUser);
userRouter.delete("/:name", deleteUser);

export default userRouter;
