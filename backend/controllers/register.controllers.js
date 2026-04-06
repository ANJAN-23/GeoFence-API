import bcrypt from 'bcrypt'
import Student from '../models/students.models.js'
const register=async (req,res)=>
{
    try{
        const {student_id,name,course,phone_no,password,current_area}=req.body()
        if(!student_id || !password)
        {
            return res.status(400).json({msg:"student id and password required"})
        }
        const exists=await Student.findOne({student_id})
        if(exists)
        {
            return res.status(400).json({msg:"user already exisisted"})
        }
        const hashed_password=await bcrypt.hash(password,10)
        const students=new Student({
            student_id,
            name,
            course,
            phone_no,
            password:hashed_password,
            current_area:null
        })
        await students.save()
        res.status(201).json({msg:"Register Successfully"})
    }
    catch(err)
    {
        res.status(500).json({msg:"Server side error"})
    }
}
module.exports=register