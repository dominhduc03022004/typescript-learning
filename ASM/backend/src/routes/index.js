import express from "express"
import routerAuth from "./auth.js";
import routerProduct from "./product.js";
import routerCategory from "./category.js";
const router = express.Router();

router.use('/product', routerProduct)
router.use('/auth', routerAuth)
router.use('/category', routerCategory)
export default router