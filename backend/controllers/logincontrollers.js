import bcrypt from 'bcrypt'
import Student from '../models/students.models.js'
const login =async(req,res)=>{
 try{
    const {student_id,password}=req.body;
    const student=await Student.findOne({student_id});
    if(!student){
        return res.status(404).json({msg:"studentnot found" });
    }
    const ismatch=await bcrypt.compare(password,student.password);
    if(!ismatch){
        return res.status(401).json({msg:"Invalid credentials"});
    }
    res.json({
        msg:"Login Succesful",
        student_id:student.student_id

    });
 }
 catch(err){
    res.status(500).json({msg:"server error"});
 }
};
export default login;