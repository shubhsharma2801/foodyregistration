const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const ResturantSchema = new Schema({
    resturantName :String,
    contactName :String,
    contactNumber:Number,
    pincode:Number,
    location:String,
    website:String,
    adt:Number

})

//create model for todo
const Resturant = mongoose.model('Resturant', ResturantSchema);

module.exports = Resturant;