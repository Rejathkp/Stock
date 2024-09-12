import mongoose from "mongoose";

const subProductSchema = new mongoose.Schema({
    code: { type:Number, required:true },
    name: { type:String, required:true },
    quantity: { type:Number, required:true },
    price: { type:Number, required:true },
    description: { type:String, required:true },
});
const subProductModel = mongoose.model.subProduct || mongoose.model("subProduct",subProductSchema)

export default subProductModel;