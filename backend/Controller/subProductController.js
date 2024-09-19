import subProductModel from "../Models/subProductModel.js"

const addSubProduct = async (req, res) => {
  const subProduct = new subProductModel({
    subProductCode: req.body.subProductCode,
    subProductName: req.body.subProductName,
    subProductMinimumQuantity: req.body.subProductMinimumQuantity,
    subProductPrice: req.body.subProductPrice,
    subProductDescription: req.body.subProductDescription,
  });
  try {
    await subProduct.save();
    res.status(200).json({ message: "Sub-Product Added" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error" });
  }
};

//all subproduct list
const listSubProduct = async (req, res) => {
  try {
    const subProducts = await subProductModel.find({});
    res.status(200).json({ data: subProducts });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error" });
  }
};

//remove subproduct item
const removeSubProduct = async (req, res) => {
  try {
    await subProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Sub-Product Removed" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error" });
  }
};

// Update Subproduct
const updateSubProduct = async (req, res) => {
  try {
    const updatedSubProduct = await subProductModel.findByIdAndUpdate(
      req.params.id, 
      {
        subProductCode: req.body.subProductCode,
        subProductName: req.body.subProductName,
        subProductMinimumQuantity: req.body.subProductMinimumQuantity,
        subProductPrice: req.body.subProductPrice,
        subProductDescription: req.body.subProductDescription,
      }, // Update fields
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    if (!updatedSubProduct) {
      return res.status(404).json({ message: "Sub-Product not found" });
    }

    res.status(200).json({ message: "Sub-Product Updated", data: updatedSubProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating sub-product" });
  }
};

export { addSubProduct, listSubProduct, removeSubProduct, updateSubProduct };
