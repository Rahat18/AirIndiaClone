const ReviewService = require('../services/reviewService')

// a basic function which would be called once 


const createReview= async (req , res) => {
    try{
        const review = await ReviewService.createReview(req.body);
        res.status(200).json({
            success : true ,
            message : 'Successfully created Review ' ,
            data : review
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            success : false ,
            message : 'Something went wrong ' ,
        });

    }

 
}

const getReview = async (req , res) => {
    try{
        const review = await ReviewService.getReview(req.params.flight);
        res.status(200).json({
            success : true ,
            message : 'Successfully fetched Review' ,
            data : review
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            success : false ,
            message : 'Something went wrong ' ,
        });

    }

 
}

const getAllReview = async (req , res) => {
    try{
        const review = await ReviewService.getAllReview();
        res.status(200).json({
            success : true ,
            message : 'Successfully fetched all Reviews ' ,
            data : review
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            success : false ,
            message : 'Something went wrong ' ,
        });

    }

 
}



const destroyReview = async (req , res) => {
    try{
        const review = await ReviewService.destroyReview(req.params.flight);
        res.status(200).json({
            success : true ,
            message : 'Successfully deleted Review' ,
            data : review
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            success : false ,
            message : 'Something went wrong ' ,
        });

    }

 
}


module.exports ={
    createReview ,
    getReview ,
    getAllReview ,
    destroyReview
}