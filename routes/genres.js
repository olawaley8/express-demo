const {Genre, validate}= require('../models/genre');
const mongoose= require('mongoose');
const Joi=require('@hapi/joi');
const express= require('express');
const router= express.Router();
const auth= require('../middleware/auth');
const admin = require('../middleware/admin');
const validateObjectId= require('../middleware/validateObjectId');


    
    router.get('/', async(req, res)=>{
        // throw new Error('Na error be this o');
        const genres= await Genre.find();
        res.send(genres);

    });

    router.post('/', auth, async(req,res)=>{
        
        const {error}= validate(req.body);
        if(error){
            res.status(400).send(error.details[0].message);
            return;
        }

        let genre= new Genre({name: req.body.name});
        genre= await genre.save();
        res.send(genre);
    });

    router.put('/:id', async(req, res)=>{
        
            const {error}= validate(req.body);
            if(error){
                res.status(400).send(error.details[0].message);
                return;
        }
        const genre= await Genre.findByIdAndUpdate(req.params.id,{name: req.body.name},{new:true})

        if(!genre) return res.status(404).send('Invalid genre ID')
        res.send(genre);

});    

    router.delete('/:id',[auth, admin], async(req, res)=> {
        const genre= await Genre.findByIdAndDelete(req.params.id);
        
        if(!genre) return res.status(404).send('Invalid genre ID')

        res.send(genre);
    })

    router.get('/:id', validateObjectId, async(req,res)=>{

        const genre= await Genre.findById(req.params.id);

        if(!genre) return res.status(404).send('The genre with the given ID does not exist')

        res.send(genre);

    });

    module.exports= router;


