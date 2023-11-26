const express=require("express")
const mongoose=require("mongoose")
const model=require("./model")
const cors=require("cors")
app=express()
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors([]))
mongoose.connect("mongodb://localhost:27017").then(()=>{console.log("Database connected")}).catch((err)=>{console.log("found error"+err)})

app.get("/",async (req,res)=>{
    const val=await model.find()
    res.status(200).json(val)
})
app.post("/add",async (req,res)=>{
    console.log(req.body.data)
    model.collection.insertOne(req.body.data)
    res.send("Done")
})
app.delete("/delete",async (req,res)=>{
   console.log(req.body.regno)
   const res1= model.collection.deleteOne({regno:req.body.regno}).then((res1)=>console.log(res1)).catch((err)=>console.log(err))
    res.send("Done")
})

app.put("/put/:id",async (req,res)=>{
    console.log(req.params.id);
    console.log(req.body.data)
    try{
    let record=await model.collection.updateOne({regno:req.params.id},{$set:req.body.data})
    console.log(record)
    }
    catch(err){
        console.log(err);
    }
    return res.send("DOne")
})
app.listen(4000,()=>console.log("server is listening at port 4000"))
