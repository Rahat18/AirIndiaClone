const express = require('express');
const router = express.Router();
const helpController = require("../../controllers/helpControllers");
const airlineController = require("../../controllers/airlineController");
const flightController = require( "../../controllers/flightController");
const reviewController = require("../../controllers/reviewController");
const bookingController = require("../../controllers/bookingController")



router.get("/help" , helpController.helpDetails)

router.post("/airline/create" , airlineController.createAirline);
router.get("/airline/all" , airlineController.getAllAirline);
router.get("/airline/:name" , airlineController.getAirline);
router.delete("/airline/:name" , airlineController.destroyAirline);

router.post("/flight/create" , flightController.createFlight);
router.get("/flight/all" , flightController.getAllFlights);
router.get("/flight/:flightNumber" , flightController.getFlight);
router.delete("/flight/:flightNumber" , flightController.destroyFlight);

router.post("/review/create" , reviewController.createReview);
router.get("/review/all" , reviewController.getAllReview);
router.get("/review/:flight" , reviewController.getReview);
router.delete("/review/:flight" , reviewController.destroyReview);

router.post("/booking/create" , bookingController.createBooking);
router.get("/booking/:id/boardingPass" , bookingController.boardingPass);
router.delete("/booking/:id" , bookingController.cancelBooking);



module.exports = router;
