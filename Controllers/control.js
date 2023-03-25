const user=require('../models/Schema')
const mongoose=require('mongoose');


const usercreate=async(req,res)=>{

    const {name,email,no,address,category,desc}=req.body;

    if(!name || !email)
    {
        res.status(404).json({msg:"please enter a name or email"});
    }

    try{

        const usercreate=new user({name,email,no,address,category,desc});
        await usercreate.save();
        res.status(200).json(usercreate);
    }catch(error)
    {
        res.status(404).json({msg:"error saving user"})
    }
}


const getalluser=async(req,res)=>{

    try{
        const getalluser=await user.find({})
        res.status(200).json(getalluser);
    }catch(error)
    {
        res.status(404).json({msg:"error getting user"});
    }

}

const deleted=async(req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"error invalid id"});
    }

    try{

        const deleteuser= await user.findByIdAndDelete({_id:id})
        res.status(200).json(deleteuser);
    }catch(error)
    {
        res.status(404).json({msg:"error deleting user"});
    }
}

const getsingleuser=async(req,res)=>{

    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"error invalid id"});
    }

    try{

        const getsingleuser= await user.findById({_id:id})
        res.status(200).json(getsingleuser);
    }catch(error)
    {
        res.status(404).json({msg:"error deleting user"});
    }
}

const getupdateuser=async (req, res) =>
{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }

    try{

        const updateworkout= await user.findByIdAndUpdate(id,{
            ...req.body
        })

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }
}

module.exports={usercreate,getalluser,deleted,getsingleuser,getupdateuser}