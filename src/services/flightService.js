const Flight = require ('../models/flight') ;

const createFlight = async (data) => {
    try {
        const newFlight = {
            departureAirport: data.departureAirport ,
            arrivalAirport: data.arrivalAirport ,
            duration: data.duration ,
            airline: data.airlineId ,
            flightDate: data.flightDate ,
            departureTime: data.departureTime ,
            arrivalTime: data.arrivalTime ,
            flightNumber: data.flightNumber ,
            price: data.price ,

        }
        const response = await new Flight(newFlight).save();
        return response;

    }
     catch(err){
        console.log(err);
    }
}


const upateFlight = async (data) => {
    try{
        const response = await Flight.updateOne({flightNumber: data.flightNumber} , data);
        return response ;
    } 
    catch(err){
        console.log(err)
    }
}


const destroyFlight = async (flightNumber) => {
   try{
        const response = await Flight.findOneAndDelete({flightNumber : flightNumber} );
        return response;
    } 
    catch(err){
        console.log(err) ;
    }
}


const getFlight = async (flightNumber) => {
    try{
        const response = await Flight.findOne({flightNumber : flightNumber});
        return response;
    } 
    catch(err){
        console.log(err);
    }
}


const getAllFlights = async (data) => {
    try{
        let response;
        if(data.sort){
            if(data.price) {
                if(data.sort == 'inc')
                response = await Flight.find().sort('price');  // sorting in increasing order
    
                else
                response = await Flight.find().sort('-price');  // sorting in decreasing order
    
    
            } 
            else if( data.duration){
                if(data.sort == 'inc')
                response = await Flight.find().sort('duration');  // sorting in increasing order
    
                else
                response = await Flight.find().sort('-duration');  // sorting in decreasing order
    
            } 

        }
        else if(data.filter){
            if(data.price) {
                if(data.filter == 'lt')
                response = await Flight.find({ price: {$lt: data.price}})  // filter in increasing order
    
                else
                response = await Flight.find({ price: {$gt: data.price}})  // filter in decreasing order
    
    
            } 
            else if( data.duration){
                if(data.filter == 'lt')
                response = await Flight.find({ duration: {$lt: data.duration}})  // filter in increasing order
    
                else
                response = await Flight.find({ duration: {$gt: data.duration}})    // filter in decreasing order
    
            } 


        }
        
        else{
        response = await Flight.find();
        }
        return response;
    } 
    catch(err){
        console.log(err);
    }
}



module.exports = {
    createFlight ,
    upateFlight ,
    destroyFlight ,
    getFlight ,
    getAllFlights
}