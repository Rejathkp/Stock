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
  removeSubProduct,
} from "../Controller/subProductController.js";
import {
  addFranchise,
  listFranchise,
  removeFranchise,
} from "../Controller/franchiseController.js";
import { addCategory, listCategory, removeCategory } from "../Controller/categoryController.js";

const router = express.Router();

//login
router.post("/login", Login);

//products 
router.post("/addproduct", protect, addProduct);
router.get("/listproduct", protect, listProduct);
router.delete("/removeproduct", protect, removeProduct);

//sub-products 
router.post("/addsubproduct", protect, addSubProduct);
router.get("/listsubproduct", protect, listSubProduct);
router.delete("/removesubproduct", protect, removeSubProduct);

//franchise 
router.post("/addfranchise", protect, addFranchise);
router.get("/listfranchise", protect, listFranchise);
router.delete("/removefranchise", protect, removeFranchise);

//categories 
router.post("/addcategory", protect, addCategory);
router.get("/listcategory", protect, listCategory);
router.delete("/removecategory", protect, removeCategory);


export default router;
