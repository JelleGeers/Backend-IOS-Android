let mongoose = require('mongoose');

let Address= require('./Address');

let RideSchema= new mongoose.Schema({
    destination:String,
    date: Date,
    address: Address
});
mongoose.model('Ride',RideSchema);
/*
Ride
name
rideInfo : Object

RideInfo
destination
date
address : Object

Address*/