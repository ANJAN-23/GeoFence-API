import mongoose from 'mongoose'
const studentSchema=new mongoose.Schema(
    {
        student_id:{
            type:String,
            required:true
        },
        name:
        {
            type:String,
            required:true
        },
        course:
        {
            type:String,
            required:true
        },
        phone_no:
        {
            type:String
        },
        password:
        {
            type:String,
            required:true
        },
        current_area:
        {
            type:String,
            required:true
        }
    },
{timestamps:true})
const Student=mongoose.model('Student',studentSchema)
export default Student