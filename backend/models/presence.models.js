import mongoose from 'mongoose'
const presenceSchema= new mongoose.Schema({
    student_id:{
        type:String,
        required:true
    },
    device_id:{
        type:String,
        required:true
    },
    last_ip:{
        type:String,
        required:true
    },
    last_seen:{
        type:Date,
        required:true
    },
},{timestamps:true})

const Presence=mongoose.model("Presence",presenceSchema)
export default Presence