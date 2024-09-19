import express from "express";
import { protect } from "../Middleware/Token.js";
import Login from "../Controller/Login.js";
import {
  addProduct,
  listProduct,
  removeProduct,
  updateProduct,
} from "../Controller/productController.js";
import {
  addSubProduct,
  listSubProduct,
  removeSubProduct,
  updateSubProduct,
} from "../Controller/subProductController.js";
import {
  addFranchise,
  listFranchise,
  removeFranchise,
  updateFranchise,
} from "../Controller/franchiseController.js";
import { addCategory, listCategory, removeCategory, updateCategory } from "../Controller/categoryController.js";

const router = express.Router();

//login
router.post("/login", Login);

//middleware (applies protect to all routes after this)
router.use(protect);

//products 
router.post("/addproduct", addProduct);
router.get("/listproduct", listProduct);
router.delete("/removeproduct/:id", removeProduct);
router.put("/updateproduct/:id", updateProduct);

//sub-products 
router.post("/addsubproduct", addSubProduct);
router.get("/listsubproduct", listSubProduct);
router.delete("/removesubproduct/:id", removeSubProduct);
router.put("/updatesubproduct/:id", updateSubProduct);

//franchise 
router.post("/addfranchise", addFranchise);
router.get("/listfranchise", listFranchise);
router.delete("/removefranchise/:id", removeFranchise);
router.put("/updatefranchise/:id", updateFranchise);

//categories 
router.post("/addcategory", addCategory);
router.get("/listcategory", listCategory);
router.delete("/removecategory/:id", removeCategory);
router.put("/updatecategory/:id", updateCategory);

export default router;
