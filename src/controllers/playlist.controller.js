import mongoose,{isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createPlaylist=asyncHandler(async(req,res)=>{
    const {name,description}=req.body

    //to create a playlist
})

const getUserPlaylists=asyncHandler(async(req,res)=>{
    const {userId}=req.params
    //to get all the playlists of a user
})

const getPlaylistById=asyncHandler(async(req,res)=>{
    const {playlistId}=req.params
    //to get a playlist by Id
})

const addVideoToPlaylist=asyncHandler(async(req,res)=>{
    const { playlistId,videoId }=req.params
})

const removeVideoFromPlaylist=asyncHandler(async(req,res)=>{
    const { playlistId,videoId }=req.params
    //To remove video from a playlist
})

const deletePlaylist=asyncHandler(async(req,res)=>{
    const { playlistId }=req.params
    //to delete a playlist
})

const updatePlaylist=asyncHandler(async(req,res)=>{
    const {playlistId }=req.params
    const {name,description}=req.body
    //update playlist
})

export{
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}