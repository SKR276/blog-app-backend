const mongoose=require("mongoose")
const postSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"usersblog"
        },
        post:{
            type:String,
            required:true
        },
        postDate:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("blogPosts",postSchema)