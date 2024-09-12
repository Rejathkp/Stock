import productModel from "../Models/productModel.js";

// add product item
const addProduct = async (req,res) => {

    const product = new productModel({
        code:req.body.code,
        name:req.body.name,
        productQuantity:req.body.productQuantity,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        subProduct:req.body.subProduct,
        subProductQuantity:req.body.subProductQuantity,
    })
    try {
        await product.save(); 
        res.json({success:200,message:"Product Added"})
    } catch (error) {
        console.log(error);
        res.json({success:404,message:"Error"})
    }
}

//all product list
const listProduct = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success:200,data:products})
    } catch (error) {
        console.log(error);
        res.json({success:404,message:"Error"})       
    }
}

//remove product item
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:200,message:"Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:404,message:"Error"})
    }
}

export {addProduct,listProduct,removeProduct}