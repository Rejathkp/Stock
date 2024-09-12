import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category_name: { type: String, required: true },
  },
  { timestamps: true }
);

const categoriesModel = mongoose.model("category", categorySchema);

export default categoriesModel;
