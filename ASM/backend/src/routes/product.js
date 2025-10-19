import express from "express";
import {
  create,
  getAll,
  getDetail,
  getProductsByCategory,
  remove,
  update,
} from "../controllers/product.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const routerProduct = express.Router();

routerProduct.get("/", getAll);
routerProduct.get("/category/:categoryId", getProductsByCategory);
routerProduct.get("/:id", getDetail);
routerProduct.post("/", checkAuth,isAdmin, create);
routerProduct.put("/:id", checkAuth,isAdmin, update);
routerProduct.delete("/:id", checkAuth,isAdmin, remove);

export default routerProduct;
