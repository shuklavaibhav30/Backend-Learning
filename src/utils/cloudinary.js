import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"         //File System manage in Node.js

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET_KEY // Click 'View API Keys' above to copy your API secret
});
console.log("Cloudinary config:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY ? "EXISTS" : "MISSING"
});

const uploadOnCloudinary=async function(localFilePath) {
    try{
        if(!localFilePath)  return null;
        const uploadResult = await cloudinary.uploader
       .upload(localFilePath, {resource_type:"auto"})
       //FILE HAS BEEN UPLOADED SUCCESSFULLY
       console.log("File has been uploaded successfully",uploadResult.url);
       return uploadResult;
       
       
    }catch(error){
           console.log("CLOUDINARY UPLOAD ERROR:", error.message);
           fs.unlinkSync(localFilePath)//remove the locally stored temporary file as the upload operation got failed
           return null;
    };
};  

export default uploadOnCloudinary;