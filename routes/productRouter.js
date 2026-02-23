import express from 'express'
const app=express()
app.listen(8070,()=>{console.log("server started")});
const Router = express.Router()
const productRouter = express.Router()


productRouter.get("/",(req,res)=>{
    res.send("this is get request of product router")
})
productRouter.post("/",(req,res)=>{
    res.send("this is post request of product router")
})

export default productRouter;


