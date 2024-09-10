import User from "./Models/adminModel.js";
import dummyAdmin from "./dummyAdmin/admin.data.js";
import connectDB from "./Config/Mongo.js";

await connectDB();

const importData = async () => {
  try {
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
