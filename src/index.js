// require('dotenv').config({path:'./env'}) 
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import app from "./app.js";

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()     //as connectDB is async function hence it is a promise and it is handled by catch and then
.then(()=>{
    app.on("error",()=>{                //Listener
            console.log("ERROR",error);
            throw error;
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`SERVER IS RUNNING AT port :${process.env.PORT}`);
        
    })
})
.catch((err)=>{console.log("Mongo DB connection failed!!!",err);
})











/* APPROACH 1- CONNECTING DB IN INDEX.JS
import express from "express";

const app=express()
// function connectDB(){}
// connectDB()

// better approach using iffy in js which connect db immediately

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",()=>{                //Listener
            console.log("ERROR",error);
            throw error;
            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.log("ERROR",error);
        throw error
        
    }
})()
*/