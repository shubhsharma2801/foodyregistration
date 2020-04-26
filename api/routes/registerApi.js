var express = require('express');
var router = express.Router();
var Resturant = require('../models/resturant');
router.post('/', function(req, res, next) {
    var resturant = new Resturant(req.body.title);
    console.log(JSON.stringify(req.body));
    console.log(req.body);
    resturant.save(function(err){
        if(err){
            res.send(err);
        }
        res.send(JSON.stringify({status:'Added to database successfully'}));
    })
    //res.send(JSON.stringify(req.body));
});

module.exports = router;