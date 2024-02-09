const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoute=require("./controllers/userRouter")
const postRoute=require("./controllers/postRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sreelakshmi:Skr1234@cluster0.p9kjpl1.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/userBlog",userRoute)
app.use("/api/post",postRoute)

app.listen(3001,()=>{
    console.log("server running")
})

