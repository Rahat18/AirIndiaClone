const mongoose = require('mongoose');

//reviw Schema

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' , 

    },
    reviewComment:{
        type: String,
        required : true,
        minlength:2
    },
    flight:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    }
} , {timestamps: true} );


const Review = mongoose.model('Review' , reviewSchema);

module.exports = Review ;

