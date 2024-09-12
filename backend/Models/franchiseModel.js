import mongoose from "mongoose";

const franchiseSchema = new mongoose.Schema({
    name: { type:String, required:true}
});
const franchiseModel = mongoose.model.franchise || mongoose.model("franchise",franchiseSchema)

export default franchiseModel;