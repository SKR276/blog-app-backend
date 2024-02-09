const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        address:String,
        mobileNo:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("usersblog",userSchema)