import mongoose,{isValidObjectId} from "mongoose";
import {Tweet} from "../models/tweet.model.js";
import {User} from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createTweet=asyncHandler(async(req,res)=>{
    //create a tweet
})

const getUserTweets=asyncHanler(async(req,res)=>{
    //get the user Tweets
})

const updateTweets=asyncHandler(async(req,res)=>{
    //update tweets
})

const deleteTweets=asyncHandler(async(req,res)=>{
    //to delete tweets
})


export{
    createTweet,
    getUserTweets,
    updateTweets,
    deleteTweets
}