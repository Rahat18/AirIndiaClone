const Review= require ('../models/review') ;

const createReview = async (data) => {
    try {
        const newReview = {
            reviewComment: data.reviewComment ,
            user : data.user ,
            flight : data.flight

        }
        const response = await new Review(newReview).save();
        return response;

    }
     catch(err){
        console.log(err);
    }
}


const destroyReview = async (flight) => {
   try{
        const response = await Review.findOneAndDelete(flight);
        return response;
    } 
    catch(err){
        console.log(err) ;
    }
}


const getReview = async ( flight ) => {
    try{
        const response = await Review.findOne({flight : flight});
        return response;
    } 
    catch(err){
        console.log(err);
    }
}


const getAllReview = async () => {
    try{
        const response = await Review.find();
        return response;
    } 
    catch(err){
        console.log(err);
    }
}



module.exports = {
    createReview ,
    destroyReview,
    getReview ,
    getAllReview
}
