//Register Api which listen to Post request containing registaration details and Store to Mongo DB database.
var express = require('express');
var router = express.Router();
var Resturant = require('../models/resturant');
router.post('/', function(req, res, next) {
    var resturant = new Resturant(req.body.detail);
    console.log(JSON.stringify(req.body));
    console.log(req.body);
    //Mongoose save to database
    resturant.save(function(err){
        //if error
        if(err){
            res.send(err);
        }
        //If success 
        res.send(JSON.stringify({status:'Added to database successfully'}));
    })
    //res.send(JSON.stringify(req.body));
});

module.exports = router;