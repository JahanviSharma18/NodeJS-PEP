import express from 'express'
const app=express()
app.listen(8070,()=>console.log("Server started"));
app.get("/",(req,res)=>{
    res.json({message: "Hello World!"})
});


app.post("/",(request,response)=>{
    
})