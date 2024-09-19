import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

const categoriesModel = mongoose.model("categories", categorySchema);

export default categoriesModel;
