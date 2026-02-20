//if in the url we have/1/2/3/4 , then print welcome using next, and if not then print access denied

import express from "express";
const app = express();
app.listen(8070);
const auth=(req,res,next)=>{
    if(req.path==="/1/2/3/4"){
        next();
    }else{
        res.send("Access denied")
    }
};
app.use(auth);

app.get("/1/2/3/4",(req,res)=>{
    res.send("Welcome")
})









