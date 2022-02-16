const {Customer, validate}= require('../models/customer')
const mongoose= require('mongoose');
const Joi=require('@hapi/joi');
const express= require('express');
const router= express.Router();




    
    router.get('/', async(req, res)=>{
        const customer= await Customer.find();
        res.send(customer);
    });

    router.post('/', async(req,res)=>{
        
        const {error}= validate(req.body);
        if(error){
            res.status(400).send(error.details[0].message);
            return;
        }

        let customer= new Customer({
            name: req.body.name,
            phone: req.body.phone,
            isGold: req.body.isGold
        
        });
        customer= await customer.save();
        res.send(customer);
    });
module.exports= router;