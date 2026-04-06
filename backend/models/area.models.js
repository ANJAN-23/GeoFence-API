import mongoose from 'mongoose'
const areaSchema=new mongoose.Schema({
  name:{
    type:String
  },
  lat:{
    type:Number,
    required:true
  },
  lng:{
    type:Number,
    required:true
  }
},{timestamps:true})
const Area=mongoose.model("Area",areaSchema)
export default Area