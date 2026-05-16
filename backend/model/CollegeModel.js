const mongoose=require('mongoose');

const collegeSchema=new mongoose.Schema({
    
    name:{type:String,required:true},
    code:{type:String,required:true},
    address:{type:String,required:true},
    departments:{type:[String],required:true},
    email:{type:String,required:true,unique:true},
    url:{type:String,required:true,unique:true},

},{timestamps:true});

const CollegeModel=mongoose.model("college",collegeSchema);

module.exports=CollegeModel;