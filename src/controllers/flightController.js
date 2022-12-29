const FlightService = require('../services/flightService')

// a basic function which would be called once 


const createFlight = async (req , res) => {
    try{
        const flight = await FlightService.createFlight(req.body);
        res.status(200).json({
            success : true ,
            message : 'Successfully created Flight ' ,
            data : flight
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

const getFlight = async (req , res) => {
    try{
        const flight = await FlightService.getFlight(req.query.flightNumber);
        res.status(200).json({
            success : true ,
            message : 'Successfully fetched Flight ' ,
            data : flight
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

const getAllFlights = async (req , res) => {
    try{
        const flights = await FlightService.getAllFlights(req.query);
        res.status(200).json({
            success : true ,
            message : 'Successfully fetched all Flights ' ,
            data : flights
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



const destroyFlight = async (req , res) => {
    try{
        const flights = await FlightService.destroyFlight(req.query.flightNumber);
        res.status(200).json({
            success : true ,
            message : 'Successfully deleted  Flight ' ,
            data : flights
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
    createFlight ,
    getFlight ,
    getAllFlights ,
    destroyFlight ,
}