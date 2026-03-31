import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\nMONGODB connected !! DB HOST :${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1)

    }
}
//Har baar itna code likhna bhut complex hota kyuki db se to hm hmesha hi contact krenge....to isko utility file bnake...ek wrapper file bnake wrap krdenge

export default connectDB;