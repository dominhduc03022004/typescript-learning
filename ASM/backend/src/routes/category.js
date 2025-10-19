import express from "express";
import { checkAuth } from "../middlewares/checkAuth.js";
import { create, getAll, getDetail, remove, update } from "../controllers/category.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const routerCategory = express.Router();

routerCategory.get("/", getAll);
routerCategory.get("/:id", getDetail);
routerCategory.post("/", checkAuth,isAdmin, create);
routerCategory.put("/:id", checkAuth,isAdmin, update);
routerCategory.delete("/:id", checkAuth,isAdmin, remove);

export default routerCategory;
