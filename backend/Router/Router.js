import express from "express";
import { protect } from "../Middleware/Token.js";
import Login from "../Controller/Login.js";
import {
  addProduct,
  listProduct,
  removeProduct,
} from "../Controller/productController.js";
import {
  addSubProduct,
  listSubProduct,
} from "../Controller/subProductController.js";
import {
  addFranchise,
  listFranchise,
} from "../Controller/franchiseController.js";
import { addCategory, listCategory } from "../Controller/categoryController.js";

const router = express.Router();

const middleware = [protect];

//login
router.post("/login", Login);

//products
router.post("/addproduct", addProduct);
router.get("/listproduct", listProduct);
router.post("/removeproduct", removeProduct);

//sub-products
router.post("/addsubproduct",addSubProduct)
router.get("/listsubproduct",listSubProduct)

//franchise
router.post("/addfranchise",addFranchise)
router.get("/listfranchise",listFranchise)

//categories
router.post("/addcategory", addCategory);
router.get("/listcategory", listCategory);

export default router;
