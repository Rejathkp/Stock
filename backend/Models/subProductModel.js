import mongoose from "mongoose";

const subProductSchema = new mongoose.Schema({
    subProductCode: { type:Number, required:true, unique:true },
    subProductName: { type:String, required:true },
    subProductMinimumQuantity: { type:Number, required:true },
    subProductPrice: { type:Number, required:true },
    subProductDescription: { type:String, required:true },
},
{ timestamps: true }
);
const subProductModel = mongoose.model("subProduct",subProductSchema)

export default subProductModel;