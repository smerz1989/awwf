const mongoose = require('mongoose');

const ValidWordsSchema = mongoose.Schema({
    word: String,
    frequency: Number,
    length: Number
});

module.exports = mongoose.model('Valid_Words',ValidWordsSchema);