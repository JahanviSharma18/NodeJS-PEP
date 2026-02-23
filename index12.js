import express from 'express'
const app=express()
app.listen(8070,()=>{console.log("server started")});
const Router = express.Router()
const userRouter = express.Router()
const productRouter = express.Router()
Router.get("/",(req,res)=>{
    res.send("Hello World!")
})
Router.post("/",(req,res)=>{
    res.send("This is post request")
})
app.use("/api/users",Router)

userRouter.post("/",(req,res)=>{
    res.send("this is post request of user router")
})
productRouter.get("/",(req,res)=>{
    res.send("this is get request of product router")
})
productRouter.post("/",(req,res)=>{
    res.send("this is post request of product router")
})
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)


