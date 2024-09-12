import mongoose from "mongoose";

const franchiseSchema = new mongoose.Schema({
    franchiseName: { type:String, required:true}
},
{ timestamps: true }
);
const franchiseModel = mongoose.model("franchise",franchiseSchema)

export default franchiseModel;