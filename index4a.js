import express from "express"
const app= express();
app.listen(8070,()=>{
    console.log("Server Started");
});


app.get("/:id/:id1", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    const id = Number(req.params.id);
    const id1 = Number(req.params.id1);
    const sum = id + id1;
    res.send(`Sum is: ${sum}`);
});
