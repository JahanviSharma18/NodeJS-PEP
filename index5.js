import express from "express"
const app= express();
app.listen(8070,()=>{
    console.log("Server Started");
});
app.get("/",(req,res)=>{
    console.log(req.headers.authorization);
    res.send();
})
