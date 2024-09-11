import User from "./Models/adminModel.js";
import dummyAdmin from "./dummyAdmin/admin.data.js";
import connectDB from "./Config/Mongo.js";

const importData = async () => {
  try {
    await connectDB();

    await User.deleteMany();

    const createdAdmin = await User.insertMany(dummyAdmin);
    console.log("Created Admin Data:", createdAdmin);
    // console.log("Data cleared and imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1); // Exit process with failure
  }
};

importData();
