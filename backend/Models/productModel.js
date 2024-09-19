import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productCode: { type:Number, required:true, unique:true },
    productName: { type:String, required:true },
    productMinimumQuantity: { type:Number, required:true },
    productPrice: { type:Number, required:true },
    productDescription: { type:String, required:true },
    productCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required:true },
    subProducts:[{
        subProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'subProduct', required:true },
        subProductQuantity: { type:Number, required:true },
    }]

},
{ timestamps: true }
);
const productModel = mongoose.model("product",productSchema)

export default productModel;