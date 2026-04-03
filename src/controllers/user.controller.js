import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import (u)

const registerUser=asyncHandler(async(req,res)=>{
    //get user details from frontend
    //validation- not empty
    //check if user already exists: username, email
    //check for images(avatar) and upload to cloudinary
    //create user object -create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response


    const {fullName,username,email,password}=req.body       //req.body me sara data aata h
    console.log("email: ",email)
    // if (fullName==""){
    //     throw new ApiError(400,"fullname is required")
    // }
    if (
        [fullName,email,username,password].some((field)=>field?.trim()==="")//agr field ko trim krne pr null h
    ) {
        throw new ApiError(400,"All fields are compulsary")
    }
    const existedUser=User.findOne({
        $or:[{ username },{ email }]//jitne chahe utne value check krlo
    })
    if(existedUser) throw new ApiError(409,"user with email or username already exists!!!")

    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.coverImage[0]?.path;
    if(!avatarLocalPath)    throw new ApiError(400,"Aatar file is required");
    //agr req.files ka access hai to (req.files?.)avatar ka naam yani vo web address check kro cloudinary se

    const avatar=await uploadOnCloudinary(avatarLocalPath);
    const coverImage=await uploadOnCloudinary(coverImageLocalPath);
    if(!avatar) throw new ApiError(400,"Aatar file is required");

    const user=await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url||"",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering user")
    }
    
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Created successfully")
    )
})

export {registerUser}