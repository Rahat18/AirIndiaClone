const AirlineService = require('../services/airlineService')

// a basic function which would be called once 


const createAirline = async (req , res) => {
    try{
        const airline = await AirlineService.createAirline(req.body);
        res.status(200).json({
            success : true ,
            message : 'Successfully created Airline ' ,
            data : airline
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

const getAirline = async (req , res) => {
    try{
        const airline = await AirlineService.getAirline(req.params.name);
        res.status(200).json({
            success : true ,
            message : 'Successfully fetched Airline ' ,
            data : airline
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

const getAllAirline = async (req , res) => {
    try{
        const airlines = await AirlineService.getAllAirline();
        res.status(200).json({
            success : true ,
            message : 'Successfully fetched all Airline ' ,
            data : airlines
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



const destroyAirline = async (req , res) => {
    try{
        const airlines = await AirlineService.destroyAirline(req.params.name);
        res.status(200).json({
            success : true ,
            message : 'Successfully deleted  Airline ' ,
            data : airlines
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
    createAirline,
    getAirline ,
    getAllAirline,
    destroyAirline
}