import { Router } from "express";
import {
  signUp,
  signIn,
  signOut,
} from "../controllers/auth";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/signout", signOut);

export default authRouter;
