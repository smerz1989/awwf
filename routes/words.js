var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.json({
        message: 'Get a word'
    });
});

module.exports = router;