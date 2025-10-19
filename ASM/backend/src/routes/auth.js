import express from "express";
import { getProfileUser, signIn, signUp } from "../controllers/auth.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const routerAuth = express.Router();

routerAuth.post("/signup", signUp);
routerAuth.post("/signin", signIn);
routerAuth.get("/profile", checkAuth ,getProfileUser)

export default routerAuth;