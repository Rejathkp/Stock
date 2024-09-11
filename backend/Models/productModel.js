import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    code: { type:Number, required:true },
    name: { type:String, required:true },
    quantity: { type:Number, required:true },
    price: { type:Number, required:true },
    description: { type:String, required:true },
    category: { type:String, required:true },
});
const productModel = mongoose.model.product || mongoose.model("product",productSchema)

const subproductSchema = new mongoose.Schema({
    name: { type:String, required:true}
});
const subproductModel = mongoose.model.subproduct || mongoose.model("subproduct",subproductSchema)

const franchiseSchema = new mongoose.Schema({
    name: { type:String, required:true}
});
const franchiseModel = mongoose.model.subproduct || mongoose.model("subproduct",franchiseSchema)

export default {productModel,categoryModel,subproductModel};