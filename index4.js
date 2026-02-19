import express from "express"
const app= express();
app.listen(8070,()=>{
    console.log("Server Started");
});



// app.get("/:id",(req,res)=>{
//     console.log(req.url)
//     console.log(req.params)
//     res.send(req.params.id);
// });

//output of http://localhost:8070/1 will be 1
app.get("/:id/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email);
});
//output of http://localhost:8070/1/janvi@gmail.com will be 1janvi@gmail.com 


//"id" and "email" words will be displayed in the url
app.get("/id/:id/email/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email);
});

//1st and last url are redundant, when home was put at last, helloworld was not printing
app.get("/home",(req,res)=>{
  res.send("hello World!");
})


// app.get("/home",(req,res)=>{
//   res.send("hello World!");
// })




