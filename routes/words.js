const express = require('express');
const router = express.Router();
const ValidWords = require('../models/words');

router.get('/', async function(req,res,next){
    try{
        const words = await ValidWords.find();
        res.json({words: words});
    }catch(err){
        res.json({message: err});
    }
});

router.get('/random', async function(req,res,next){
    try{
        const words = await ValidWords.aggregate([{$sample: {size: 1}}]);
        res.json(words);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/is_valid/:word',async function(req,res,next){
    try{
        const word2match = req.params.word
        const matching_words = await ValidWords.find({'word': word2match})
        const is_valid = (matching_words.length>0);
        res.send(is_valid);
    }catch(err){
        res.json({message:err});
    }
});


module.exports = router;