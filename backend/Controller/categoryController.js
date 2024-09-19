import categoriesModel from "../Models/categoriesModel.js";

// add categories
const addCategory = async (req, res) => {
  const category = new categoriesModel({
    categoryName: req.body.categoryName,
  });
  try {
    await category.save();
    res.status(200).json({ message: "Category Added" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error" });
  }
};

//all categories list
const listCategory = async (req, res) => {
  try {
    const categories = await categoriesModel.find({});
    res.status(200).json({ data: categories });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error" });
  }
};

//remove category
const removeCategory = async (req, res) => {
  try {
    await categoriesModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category Removed" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error" });
  }
};


// Update category
const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await categoriesModel.findByIdAndUpdate(
      req.params.id, 
      { categoryName: req.body.categoryName }, // Update with new name
      { new: true, runValidators: true } // Return the updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category Updated", data: updatedCategory });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error updating category" });
  }
};

export { addCategory, listCategory, removeCategory, updateCategory };
