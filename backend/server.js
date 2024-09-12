import express from "express"
import cors from "cors"
import router from "./Router/Router.js"
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
app.use("/admin",router)
app.use("/product",router)
app.use("/subproduct",router)
app.use("/categories",router)
app.use("/franchise",router)

app.get("/",(req,res)=>{ 
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})