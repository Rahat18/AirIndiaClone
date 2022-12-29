const mongoose = require('mongoose');

// booking Schema

const bookingSchema = new mongoose.Schema({
    id:{
        type: Number ,
        required: true ,
        unique: true
    },
   
  flight:{
        type: mongoose.Schema.Types.ObjectId,
        required: true ,
        ref: 'Flight'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' , 

    },
    status:{           // booked , cancelled , in Process
        type:String ,
        required: true ,
        default: "In Process",
        // enum: [ " booked ",  " cancelled " , " in process "]

    },
} ,{timestamps: true});

const Booking = mongoose.model('Booking' , bookingSchema);

module.exports =Booking