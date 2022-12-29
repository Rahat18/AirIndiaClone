const mongoose = require('mongoose');

//airline Schema

const airlineSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    website:{
        type: String
    }
} , {timestamps: true} );


const Airline = mongoose.model('Airline' , airlineSchema);

module.exports = Airline ;

