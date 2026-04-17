import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//getVideoComents,addComment,deleteComment,updateComment

const getVideoComments=asyncHandler(async(req,res)=>{
    //to get all comments of a video
    const {videoId}=req.params
    const{page=1,limit=10}=req.query
})


const addComment=asyncHandler(async(req,res)=>{
    // add comment to a video
})

const updateComment=asyncHandler(async(req,res)=>{
    //update a comment
})

const deleteComment=asyncHandler(async(req,res)=>{
    //delete a comment
})

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment

}