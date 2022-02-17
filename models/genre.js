const mongoose= require('mongoose');
const Joi=require('@hapi/joi');


const genreSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:40
     }
 
 
 });
 
 const Genre= mongoose.model('Genre', genreSchema);
 
 function validateGenre(genre){
    const schema= Joi.object({
        name:Joi.string().min(3).max(50).required()
    });
        

     return schema.validate(genre);
} 

exports.Genre= Genre;
exports.validate=validateGenre;
exports.genreSchema= genreSchema;