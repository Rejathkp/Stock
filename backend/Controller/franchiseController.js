import franchiseModel from "../Models/franchiseModel.js";

const addFranchise = async (req,res) => {

    const franchise = new franchiseModel({
        name:req.body.name,
    })
    try {
        await franchise.save();
        res.json({success:200,message:"Franchise Added"})
    } catch (error) {
        console.log(error);
        res.json({success:404,message:"Error"})
    }
}

//all farnchise list
const listFranchise = async (req,res) => {
    try {
        const franchises = await franchiseModel.find({});
        res.json({success:200,data:franchises})
    } catch (error) {
        console.log(error);
        res.json({success:404,message:"Error"})
    }
}

//remove franchise item
const removeFranchise = async (req,res) => {
    try {
        await franchiseModel.findByIdAndDelete(req.body.id)
        res.json({success:200,message:"Franchise Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:404,message:"Error"})
    }
}

export {addFranchise,listFranchise,removeFranchise}
