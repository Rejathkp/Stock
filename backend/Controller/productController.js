import productModel from "../Models/productModel.js";

// add product item
const addProduct = async (req,res) => {

    const product = new productModel({
        code:req.body.code,
        name:req.body.name,
        quantity:req.body.quantity,
        price:req.body.price,
        description:req.body.description,
    })
    try {
        await product.save(); 
        res.json({success:true,message:"Product Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//all product list
const listProduct = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})       
    }
}

export {addProduct,listProduct}