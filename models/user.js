const mongoose= require('mongoose');
const Joi=require('@hapi/joi');
const jwt= require('jsonwebtoken');
const config= require('config');


const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:15
     },
 
    email: {
        type: String,
        required: true,
        unique: true
     },
 
    password: {
        type: String,
        required: true,
        minlength:5,
        maxlength:100
     },
    IsAdmin: Boolean 
 
 
 });

userSchema.methods.generateAuthToken= function(){
    const token= jwt.sign({_id: this._id,isAdmin: this.isAdmin } ,config.get('jwtPrivateKey'));
    return token;
}
 
const User= mongoose.model('User', userSchema);
 
function validateUser(user){
    const schema= Joi.object({
        name:Joi.string().min(3).required(),
        email:Joi.string().required().email(),
        password:Joi.string().min(10).required()


    });
        

     return schema.validate(user);
} 

exports.User= User;
exports.validate=validateUser;