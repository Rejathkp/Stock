import express from "express";
import { protect } from "../Middleware/Token.js";
import Login from "../Controller/Login.js";
import { addProduct } from "../Controller/productController.js";

const router = express.Router();

const middleware = [protect];

router.post("/login", Login);
router.post("/addproduct",addProduct)
router.post("/listproduct",addProduct)

export default router;
