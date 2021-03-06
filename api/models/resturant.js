//Modal for Resturant schema to store in Mongo DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for Resturant
const ResturantSchema = new Schema({
    resturantName :String,
    contactName :String,
    contactNumber:Number,
    pincode:Number,
    location:String,
    website:String,
    adt:Number

})

//create model for Resturant
const Resturant = mongoose.model('Resturant', ResturantSchema);

module.exports = Resturant;