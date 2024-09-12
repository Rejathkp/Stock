import subProductModel from "../Models/subProductModel.js"

const addSubProduct = async (req, res) => {
  const subProduct = new subProductModel({
    code: req.body.code,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    description: req.body.description,
  });
  try {
    await subProduct.save();
    res.json({ success: true, message: "Sub-Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//all subproduct list
const listSubProduct = async (req, res) => {
  try {
    const subProducts = await subProductModel.find({});
    res.json({ success: 200, data: subProducts });
  } catch (error) {
    console.log(error);
    res.json({ success: 404, message: "Error" });
  }
};

//remove subproduct item
const removeSubProduct = async (req, res) => {
  try {
    await removeSubProduct.findByIdAndDelete(req.body.id);
    res.json({ success: 200, message: "Sub-Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: 404, message: "Error" });
  }
};

export { addSubProduct, listSubProduct, removeSubProduct };
