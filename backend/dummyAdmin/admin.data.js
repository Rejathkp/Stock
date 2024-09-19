import bcrypt from "bcrypt"

const dummyAdmin = {

    email:"admin@gmail.com",
    password: bcrypt.hashSync("admin123",12),
};

export default dummyAdmin;
