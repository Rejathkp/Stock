// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
// import User from "../Models/adminModel.js";

// const Login = async(req,res) => {
//     const { email, password } = req.body;
//     const Useremail = await User.findOne({ email });

//     if (!Useremail) {
//         return res.json({ message: "User not found" });
//     }

//     // const isPasswordValid = await bcrypt.compare(password, Useremail.password);
//     const isPasswordValid = await (password, Useremail.password);


//     if (!isPasswordValid) {
//         return res.json({ message: "Invalid password" });
//     }

//     res.json({ message: "Login Successful", token: tokengenerate(Useremail._id) });

// }
// const tokengenerate = (id) => {
//     return jwt.sign({id}, process.env.JWT_SECRET, { 
//         expiresIn : "1d"
//     })
// }

// export default Login;


import jwt from "jsonwebtoken";
import User from "../Models/adminModel.js";

const Login = async (req, res) => {
    const { email, password } = req.body;
    const Useremail = await User.findOne({ email });

    if (!Useremail) {
        return res.status(404).json({ message: "User not found" });
    }

    // Directly compare plaintext passwords
    if (password !== Useremail.password) {
        return res.status(401).json({ message: "Invalid password" });
    }

    res.json({ message: "Login Successful", token: tokengenerate(Useremail._id) });
}

const tokengenerate = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { 
        expiresIn: "1d" 
    });
}

export default Login;
