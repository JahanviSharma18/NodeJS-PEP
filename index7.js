import express from "express"
const app=express()
app.listen(8070)
app.get("/",(req,res)=>{
    const user={
        name:"Janvi",
        email:"janvi@gmail.com",
        role:"student"
    };
    //res.send(user);
    res.json(user)
})