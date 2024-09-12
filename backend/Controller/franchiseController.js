import franchiseModel from "../Models/franchiseModel.js";

const addFranchise = async (req,res) => {

    const franchise = new franchiseModel({
        franchiseName:req.body.franchiseName,
    })
    try {
        await franchise.save();
        res.status(200).json({message:"Franchise Added"})
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"Error"})
    }
}

//all farnchise list
const listFranchise = async (req,res) => {
    try {
        const franchises = await franchiseModel.find({});
        res.status(200).json({data:franchises})
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"Error"})
    }
}

//remove franchise item
const removeFranchise = async (req,res) => {
    try {
        await franchiseModel.findByIdAndDelete(req.body.id)
        res.status(200).json({message:"Franchise Removed"})
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"Error"})
    }
}

export {addFranchise,listFranchise,removeFranchise}
