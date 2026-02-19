import express from 'express'
const app=express();
app.listen(8070,()=>{
    console.log("Srevr Started");
});
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("response for server from /")
})
app.get("/home",(req,res)=>{
    console.log(req.url)
    res.send("response for server from /home")
})