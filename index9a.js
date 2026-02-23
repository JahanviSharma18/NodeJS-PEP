//if in the url we have/1/2/3/4 , then print welcome using next, and if not then print access denied

// import express from "express";
// const app = express();
// app.listen(8070);
// const auth=(req,res,next)=>{
//     if(req.path==="/1/2/3/4"){
//         next();
//     }else{
//         res.send("Access denied")
//     }
// };
// app.use(auth);

// app.get("/1/2/3/4",(req,res)=>{
//     res.send("Welcome")
// })



import express from "express";
const app = express();
app.listen(8070);
// const auth=(req,res,next)=>{
//     if(token==="/1/2/3/4"){
//         next();
//     }else{
//         res.send("Access denied")
//     }
// };
// app.use(auth);

// app.get("/1/2/3/4",(req,res)=>{
//     res.send("Welcome")
// })

app.use(express.json());
const auth=(req,resp,next)=>{
   if(req.body.token === 1234){
    next();
   }
   else{
    resp.send("Access Denied");
   }
}

app.use(auth);
// app.use(logger);
app.post("/1234", (req, res) => {

  res.send("Welcome");
});























