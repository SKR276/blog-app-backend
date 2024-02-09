const express=require("express")
const userModel=require("../models/userModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let userObj=new userModel(data)
    let result=await userObj.save()
    res.json({
        status:"success"
    })
})

module.exports=router