import express from "express"
import cors from "cors"
import router from "./Router/Testing.js"
import "dotenv/config.js"
import connectDB from "./Config/Mongo.js"

//app config
const app = express()
const port = process.env.port || 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/user",router)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})