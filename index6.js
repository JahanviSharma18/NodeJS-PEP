import express from 'express'
const app=express();
app.listen(8070)
app.get("/",(req,res)=>{
    res.send("hello"+ req.query.name +req.query.age);
})

// http://localhost:8070/?name=john(app.get("/name/:name"),()=>{})  is equal to   
// http://localhost:8070/name/john   (app.get("/"),()=>{})
//http://localhost:8070/?name=janvi&age=21    //only 1st one is written with ?, rest is followed by &