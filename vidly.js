const express= require('express');
const Joi=require('@hapi/joi');
const app= express();
const winston= require('winston');

require('./startup/logging')();
require('./startup/db')();
require('./startup/config')();
require('./startup/routes')(app);
require('./startup/prod')(app);

    const port= process.env.PORT || 3000;
    const server= app.listen(3000, ()=>{
        console.log(`Listening on port ${port} `);
    });

    module.exports= server;