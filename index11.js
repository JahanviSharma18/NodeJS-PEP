import express from 'express'
const app=express()
app.listen(8070,()=>{
    console.log("server started")
});
// app.use(express.static("images")) 
//app.use("/public",express.static("images")) 
app.use("/public",express.static("public")) 