const joi = require('joi');
const db = require('./connection');

const schema = joi.object().keys({
    word: joi.string().alphanum().required(),
    frequency: joi.number().required(),
    length: joi.number().required()
});

//const words = db.get('words');

//function getAll() {
//    return words.find();
//}

//module.exports = {
//   getAll
//};