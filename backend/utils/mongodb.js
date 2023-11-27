import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{dbName:process.env.DATABASE})
    .then(()=>console.log("Connected to mongoDB"))
    .catch(()=>console.log("Connection error"))
