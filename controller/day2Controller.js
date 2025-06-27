const day2Model = require('../model/day2Model');

const createUser = async(req,res)=>{
    try{
        const {Name, Email, Password, Age} = req.body;

        const createdUser = await day2Model.findOne({Name});
        if(createdUser) return res.status(400).json({message:"User Already Exists"});
        
        const newUser = await day2Model.create({Name, Email, Password, Age});
        res.status(201).json({message:"User Created Successfully", user:newUser});

    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const getUser = async(req,res)=>{
    try{
        const {Name} = req.body;
        const users = await day2Model.findOne({Name});
        if(!users) return res.status(404).json({message:"No user fond"});

        res.status(200).json({message:"User Found", user:users});

    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const updateUser = async(req,res)=>{
    try{
        const {id} = req.params
        const {Name, Email, Password, Age} = req.body;

        const user = await day2Model.findOne({Name});
        if(!Name) return res.status(404).json({message:"User Not Found"});

        const updatedUser = await day2Model.findByIdAndUpdate(id, {Name, Email, Password, Age}, {new:true});
        res.status(200).json({message:"User Updated Successfully", user:updatedUser});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await day2Model.findOne({id});
        if(!user) return res.status(404).json({message:"User Not Found"});

        const deletedUser = await day2Model. findOneByIdAndDelete({id});
        res.status(200).json({message:"User Deleted Successfully", user:deletedUser})
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}