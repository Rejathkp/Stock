import categoriesModel from "../Models/categoriesModel.js";
// add
const addCategory = async (req, res) => {
  const category = new categoriesModel({
    category_name: req.body.category_name,
  });
  try {
    await category.save();
    res.json({ success: 200, message: "Category Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: 404, message: "Error" });
  }
};

//all categories list
const listCategory = async (req, res) => {
  try {
    const categories = await categoriesModel.find({});
    res.json({ success: 200, data: categories });
  } catch (error) {
    console.log(error);
    res.json({ success: 404, message: "Error" });
  }
};

//remove category
const removeCategory = async (req, res) => {
  try {
    await categoriesModel.findByIdAndDelete(req.body.id);
    res.json({ success: 200, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: 404, message: "Error" });
  }
};

export { addCategory, listCategory, removeCategory };
