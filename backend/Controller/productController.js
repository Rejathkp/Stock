// import categoriesModel from "../Models/categoriesModel.js";
// import productModel from "../Models/productModel.js";
// import subProductModel from "../Models/subProductModel.js";

// // add product item
// const addProduct = async (req,res) => {
//     try {
//         // Fetch category by categoryId
//         const category = await categoriesModel.findById(req.body.categoryId);

//         // If category doesn't exist, return error
//         if (!category) {
//             return res.status(400).json({ message: "Invalid category selected" });
//         }

//         // Check if all subProducts exist
//         const subProducts = await Promise.all(req.body.subProducts.map(async (subProduct) => {
//             const subProductData = await subProductModel.findById(subProduct.subProduct);
//             if (!subProductData) {
//                 throw new Error(`Invalid subProduct with ID: ${subProduct.subProduct}`);
//             }
//             return {
//                 subProduct: subProductData._id,
//                 subProductQuantity: subProduct.subProductQuantity
//             };
//         }));

//     const product = new productModel({
//         productCode: req.body.productCode,
//         productName: req.body.productName,
//         productMinimumQuantity: req.body.productMinimumQuantity,
//         productPrice: req.body.productPrice,
//         productDescription: req.body.productDescription,
//         productCategory: category._id,
//         subProducts: subProducts
//     })
    
//         await product.save(); 
//         res.status(200).json({message:"Product Added"})
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({message:"Error"})
//     }
// }

// //all product list
// const listProduct = async (req, res) => {
//     try {
//         const products = await productModel.find({})
//             .populate('productCategory', 'categoryName') // Populate categoryName from categoriesModel
//             .populate('subProducts.subProduct', 'subProductName'); // Populate subProductName from subProductModel

//         res.status(200).json({ data: products });
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({ message: "Error" });
//     }
// };

// //remove product item
// const removeProduct = async (req,res) => {
//     try {
//         await productModel.findByIdAndDelete(req.params.id)
//         res.status(200).json({message:"Product Removed"})
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({message:"Error"})
//     }
// }

// // // Update product item
// // const updateProduct = async (req, res) => {
// //     try {
// //         // Find the product by its ID
// //         const product = await productModel.findById(req.body.id);

// //         if (!product) {
// //             return res.status(404).json({ message: "Product not found" });
// //         }

// //         // Update the product details
// //         if (req.body.categoryId) {
// //             const category = await categoriesModel.findById(req.body.categoryId);
// //             if (!category) {
// //                 return res.status(400).json({ message: "Invalid category selected" });
// //             }
// //             product.productCategory = category._id;
// //         }

// //         if (req.body.subProducts && req.body.subProducts.length) {
// //             const subProducts = await Promise.all(req.body.subProducts.map(async (subProduct) => {
// //                 const subProductData = await subProductModel.findById(subProduct.subProduct);
// //                 if (!subProductData) {
// //                     throw new Error(`Invalid subProduct with ID: ${subProduct.subProduct}`);
// //                 }
// //                 return {
// //                     subProduct: subProductData._id,
// //                     subProductQuantity: subProduct.subProductQuantity
// //                 };
// //             }));
// //             product.subProducts = subProducts;
// //         }

// //         // Update other fields
// //         product.productCode = req.body.productCode || product.productCode;
// //         product.productName = req.body.productName || product.productName;
// //         product.productMinimumQuantity = req.body.productMinimumQuantity || product.productMinimumQuantity;
// //         product.productPrice = req.body.productPrice || product.productPrice;
// //         product.productDescription = req.body.productDescription || product.productDescription;

// //         // Save the updated product
// //         await product.save();
// //         res.status(200).json({ message: "Product Updated", data: product });
// //     } catch (error) {
// //         console.log(error);
// //         res.status(404).json({ message: "Error updating product", error: error.message });
// //     }
// // };


// // Update product item
// const updateProduct = async (req, res) => {
//     try {
//         const { productCode, productName, productMinimumQuantity, productPrice, productDescription, productCategory, subProducts } = req.body;

//         // Check if category exists
//         const categoryExists = await categoriesModel.findById(productCategory);
//         if (!categoryExists) {
//             return res.status(404).json({ message: "Category not found" });
//         }


//         // Find and update the product
//         const productUpdate = await productModel.findByIdAndUpdate(
//             req.params.id,
//             {
//                 productCode,
//                 productName,
//                 productMinimumQuantity,
//                 productPrice,
//                 productDescription,
//                 productCategory,
//                 subProducts
//             },
//             { new: true }  // Return the updated document
//         ).populate('subProducts');

//         // If product not found
//         if (!productUpdate) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Return the updated product
//         res.status(200).json({ message: "Product updated successfully", product: productUpdate });
//     } catch (error) {
//         console.error("Error updating product:", error);
//         res.status(500).json({ message: `The update error is: ${error.message}` });
//     }
// };


// export {addProduct,listProduct,removeProduct,updateProduct}



import categoriesModel from "../Models/categoriesModel.js";
import productModel from "../Models/productModel.js";
import subProductModel from "../Models/subProductModel.js";

// Add product
const addProduct = async (req, res) => {
  try {
    const { productCode, productName, productMinimumQuantity, productPrice, productDescription, categoryId, subProducts } = req.body;

    // Check if category exists
    const category = await categoriesModel.findById(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Invalid category selected" });
    }

    // Create new product
    const newProduct = new productModel({
      productCode,
      productName,
      productMinimumQuantity,
      productPrice,
      productDescription,
      productCategory: category._id,
      subProducts
    });

    await newProduct.save();
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// List all products
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find()
      .populate('productCategory', 'categoryName')
      .populate('subProducts.subProduct', 'subProductName');
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update product (your preferred structure)
const updateProduct = async (req, res) => {
  try {
    const { productCode, productName, productMinimumQuantity, productPrice, productDescription, productCategory, subProducts } = req.body;

    // Check if category exists
    if (productCategory) {
        const categoryExists = await categoriesModel.findById(productCategory);
        if (!categoryExists) {
          return res.status(404).json({ message: "Category not found" });
        }
      }

    // Find and update the product
    const productUpdate = await productModel.findByIdAndUpdate(
      req.params.id,
      {
        productCode,
        productName,
        productMinimumQuantity,
        productPrice,
        productDescription,
        productCategory,
        subProducts
      },
      { new: true }  // Return the updated document
    ).populate('subProducts.subProduct', 'subProductName');  // Populate subProductName for the updated product

    // If product not found
    if (!productUpdate) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Return the updated product
    res.status(200).json({ message: "Product updated successfully", product: productUpdate });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: `The update error is: ${error.message}` });
  }
};

export { addProduct, listProduct, removeProduct, updateProduct };
