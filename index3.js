import express from 'express'
const app=express();
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("response for server from /")
})
app.get("/home",(req,res)=>{
    console.log(req.url)
    res.send("response for server from /home")
})
app.get("/home/page1",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.headers.authorization)
    res.send("response for server from /home/page1")
})
app.listen(8070,()=>{
    console.log("Server Started");
});