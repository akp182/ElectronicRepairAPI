const mongoose = require('mongoose');

const ElectronicBookingSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
contact:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},

problem:{
    type:String,
    required:true
},

date:{
    type:String,
    required:true
},
time:{
    type:String,
    required:true
}
},{timestamps:true})
module.exports = mongoose.model('elctronicBooking',ElectronicBookingSchema); 