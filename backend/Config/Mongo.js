import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO);

    const connect = await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database is Running");
  } catch (error) {
    console.log(`error:${error}`);
  }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
})

export default connectDB;
