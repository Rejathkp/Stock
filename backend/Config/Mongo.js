import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/stock")
        console.log("Database is Running");
    }
    catch(error){
        console.log(`error:${error}`);
    }
}

export default connectDB;
