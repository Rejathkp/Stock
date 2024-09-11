import mongoose from "mongoose";

const connectDB = async () => {
  try {

    const connect = await mongoose
      .connect(process.env.MONGO)
      console.log("Database is Running");
  } catch (error) {
    console.log(`error:${error}`);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

export default connectDB;
