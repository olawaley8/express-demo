const winston = require("winston");
require('winston-mongodb');
require('express-async-errors');
require('winston-transport');


module.exports= function(){
    winston.exceptions.handle(
        new winston.transports.Console({
           format: winston.format.colorize({all: true})
        }),
        new winston.transports.File({filename: 'uncaughtExceptions.log'}));
        
process.on('unhandledRejection', (ex)=>{
    throw ex;
});
winston.add(new winston.transports.File({filename: 'logfile.log'}));    
winston.add(new winston.transports.MongoDB({
    db:'mongodb://localhost/vidly',
    level: 'info'
}));    
}