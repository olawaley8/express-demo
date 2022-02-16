const genres= require('../routes/genres');
const customers= require('../routes/customers');
const users= require('../routes/users');
const movies= require('../routes/movies');
const rentals= require('../routes/rentals');
const auth= require('../routes/auth');
const error= require('../middleware/error');
const express= require('express');

module.exports= function(app){
    app.use(express.json());
    app.use('/api/genres', genres);
    app.use('/api/customers', customers);
    app.use('/api/users', users);
    app.use('/api/movies', movies);
    app.use('/api/rentals', rentals);
    app.use('/api/auth', auth);
    app.use(error);
}