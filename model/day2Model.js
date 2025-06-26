const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{type:String, required:true},
    Email:{type:String, required:true,},
    Password:{type:String, required:true},
    Age:{type:Number, required:true}
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema);