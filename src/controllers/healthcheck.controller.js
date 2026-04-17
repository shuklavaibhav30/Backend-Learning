import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const healthcheck=asyncHandler(async(req,res)=>{
    //build a healthcheck response that simply returns the OK status as a json with a message
})

export {healthcheck}