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
        await franchiseModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Franchise Removed"})
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"Error"})
    }
}

// Update franchise
const updateFranchise = async (req, res) => {
    try {
        const updatedFranchise = await franchiseModel.findByIdAndUpdate(
            req.params.id, 
            { franchiseName: req.body.franchiseName }, // Update with new franchise name
            { new: true, runValidators: true } // Return the updated document
        );

        if (!updatedFranchise) {
            return res.status(404).json({ message: "Franchise not found" });
        }

        res.status(200).json({ message: "Franchise Updated", data: updatedFranchise });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Error updating franchise" });
    }
};

export {addFranchise,listFranchise,removeFranchise,updateFranchise}
