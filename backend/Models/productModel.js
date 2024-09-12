import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    code: { type:Number, required:true },
    name: { type:String, required:true },
    productQuantity: { type:Number, required:true },
    price: { type:Number, required:true },
    description: { type:String, required:true },
    category: { type:String, required:true },
    subProduct: { type:String, required:true },
    subProductQuantity: { type:String, required:true },
});
const productModel = mongoose.model.product || mongoose.model("product",productSchema)

export default productModel;