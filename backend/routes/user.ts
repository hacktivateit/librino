import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  getUserLibraryById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.get("/lib/:id", getUserLibraryById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
