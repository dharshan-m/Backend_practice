const day2Model = require('../model/day2Model');

const createUser = async(req,res)=>{
    try{
        const {Name, Email, Password, Age} = req.body;

        const createdUser = await day2Model.findOne({Name});
        if(createdUser) return res.status(400).json({message:"User Already Exists"});
        
        const newUser = await day2Model.create({Name, Email, Password, Age});
        res.status(201).json({message:"User Created Successfully", user:newUser});

    }catch(error){
        res.status(500).json({message:"Internal Server Error", error:error.message});
    }
}

module.exports = {
    createUser
}