import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import uploadOnCloudinary from "../utils/cloudinary.js";




const getAllVideos=asyncHandler(async(req,res)=>{
    const{page=1,limit=10,query,sortBy,sortType,userId}=req.query
    //to get all videos based on query,sort,pagination
})

const publishVideo=asyncHandler(async(req,res)=>{
    const {title,description}=req.body
    //to get a video and upload it on cloudinary,create video
})

const getVideoById=asyncHandler(async(req,res)=>{
    const {videoId}=req.params
    //to get an video by id
})

const updateVideo=asyncHandler(async(req,res)=>{
    const {videoId}=req.params
    //to update the video details like title,description,thumbnails
})

const deleteVideo=asyncHandler(async(req,res)=>{
    const {videoId}=req.params
    //to delete video
})

const togglePublishStatus=asyncHandler(async(req,res)=>{
    const {videoId}=req.params
})

export {
    getAllVideos,
    publishVideo,
    updateVideo,
    getVideoById,
    deleteVideo,
    togglePublishStatus

}