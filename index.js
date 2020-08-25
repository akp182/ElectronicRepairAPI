const express = require('express');
const mongoose = require('mongoose');
const electronicRouter = require('./routes/electronic');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const userRouter = require('./routes/user');
const cors = require('cors');
const ElectronicBookingRouter = require('./routes/BookingElectronic');



mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((db) =>
{
console.log("Sucessfully connected mongodb server");
})

const app = express();
app.options('*',cors());
app.use(cors());
app.use(express.static(__dirname + "/public"));



app.use(express.json());
app.use('/users',userRouter);
app.use('/upload', uploadRouter);
app.use('/electronic', electronicRouter);
app.use('/electronicbooking',ElectronicBookingRouter);




app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});

