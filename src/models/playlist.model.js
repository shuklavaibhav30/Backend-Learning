import mongoose,{mongo, Schema} from "mongoose";

//id,name,description,video-ref,user-ref

const playlistSchema=new Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        videos:[{
            type:Schema.Types.ObjectId,
            reference:"Video"
        }],
        owner:{
            type:Schema.Types.ObjectId,
            reference:"User"
        }
    }
    ,{timestamps:true})

export const Playlist=mongoose.model("Playlist",playlistSchema)