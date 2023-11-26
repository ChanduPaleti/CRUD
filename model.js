const mongoose=require("mongoose")
const schema=mongoose.Schema({
    name:{type:String,required:true},
    regno:{type:Number,required:true,unique:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    email:{type:String,required:true}
})

const model=mongoose.model("student",schema)

module.exports=model