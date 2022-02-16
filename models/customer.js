const mongoose= require('mongoose');
const Joi=require('@hapi/joi');




 const Customer= mongoose.model('Customer',  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:15
     },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
     type: String,
     required: true,
     minlength:3,
     maxlength:15
  }
 
 
 })
 );



 function validateCustomer(customer){
    const schema= Joi.object({
        name:Joi.string().min(3).required(),
        phone:Joi.string().min(3).required(),
        isGold: Joi.boolean()
    });
        

     return schema.validate(customer);
} 



exports.Customer= Customer;
exports.validate= validateCustomer;

