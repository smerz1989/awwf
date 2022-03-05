//Imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const wordsRouter = require('./routes/words');
//const wordsDBRouter = require('./db/words');


const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/words', wordsRouter);

//Connect to Mongo DB
try{
    mongoose.connect(process.env.DB_CONNECTION);
}catch(err){
    console.log(err);
};

module.exports = app;
