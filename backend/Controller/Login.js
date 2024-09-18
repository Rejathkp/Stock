import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../Models/adminModel.js";
//test
const Login = async(req,res) => {
    const { email, password } = req.body;
    const Useremail = await User.findOne({ email });

    if (!Useremail) {
        return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, Useremail.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login Successful", token: tokengenerate(Useremail._id) });

}
const tokengenerate = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { 
        expiresIn : "1d"
    })
}

export default Login;

// import jwt from "jsonwebtoken";
// import User from "../Models/adminModel.js";

// const Login = async (req, res) => {
//     const { email, password } = req.body;
//     const Useremail = await User.findOne({ email });

//     if (!Useremail) {
//         return res.status(404).json({ message: "Admin not found" });
//     }

//     // Directly compare plaintext passwords
//     if (password !== Useremail.password) {
//         return res.status(404).json({ message: "Invalid password" });
//     }

//     res.status(200).json({ message: "Login Successful", token: tokengenerate(Useremail._id) });
// }

// const tokengenerate = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { 
//         expiresIn: "1d" 
//     });
// }

// export default Login;