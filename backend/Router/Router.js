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

const middleware = [protect];

//login
router.post("/login", Login);

//products
router.post("/addproduct", addProduct);
router.get("/listproduct", listProduct);
router.post("/removeproduct", removeProduct);

//sub-products
router.post("/addsubproduct",addSubProduct);
router.get("/listsubproduct",listSubProduct);
router.post("/removesubproduct", removeSubProduct);

//franchise
router.post("/addfranchise",addFranchise);
router.get("/listfranchise",listFranchise);
router.post("/removefranchise", removeFranchise);

//categories
router.post("/addcategory", addCategory);
router.get("/listcategory", listCategory);
router.post("/removecategory", removeCategory);

export default router;
