const mongoose=require("mongoose");

const addressSchema=mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"user",required:true},
    fullname:{type:String,required:true},
    landmark:{type:String},
    street:{type:String,default:"Street"},
    city:{type:String,default:"Delhi"},
    state:{type:String,default:"Delhi"},
    zipcode:{type:Number,default:201102},
    mobile:{type:Number,default:1111111111}
})

const Addressmodel=mongoose.model("address",addressSchema);

module.exports={Addressmodel}