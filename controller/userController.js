import User from "../schemas/userSchema.js";


export const addUser=async(req,res)=>{
    const user=req.body;
    const newUser=new User(user)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
} 

export const getUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(201).json(users)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

export const getUser=async(req,res)=>{
    try {
        const user=await User.find({_id:req.body.id})
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

export const editUser=async(req,res)=>{
    const user=req.body.user;
    const id=req.body.id;
    try {
        const updatedUser=await User.updateOne({_id:id},user)
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

export const deleteUser=async(req,res)=>{
    const id=req.body.id;
    try {
        await User.deleteOne({_id:id})
        res.status(200).json({message:"Deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:error.message
        })
    }
}