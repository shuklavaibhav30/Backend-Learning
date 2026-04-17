import { Router } from "express";
import {
    getAllVideos,
    publishVideo,
    updateVideo,
    getVideoById,
    deleteVideo,
    togglePublishStatus

} from "../controllers/video.controller.js"
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router=Router()