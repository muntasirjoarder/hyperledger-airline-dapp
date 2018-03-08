'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.conair.airline.flight.createFlight} flightData
 * @transaction
 */
function createFlight(flightData){
    //1. get the asset registry
    return getAssetRegistry('org.conair.airline.flight.Flight')
        .then(function(flightRegistry){
            //Now add flight
            //2 get resource factory
            var factory = getFactory();
            var NS = 'org.conair.airline.flight';

            //3. create Resource instance
            var flightId = 'AE102-05-10-18';
            var flight = factory.newResource(NS,flightId);

            //4. set the relationship
            flight.flightNumber = flightData.flightNumber;

            // 5. Create new concept
            var route = factory.newConcept(NS,"Route");

            route.origin = flightData.origin;
            route.destination = flightData.destination;
            route.schedule = flightData.schedule;

            flight.route = route;
            flight.aliasFlightNumber = [];

            //Emit event

            var event = factory.newEvent(NS,'flightCreated');
            event.flightId = flightId;
            emi(event);

            return flightRegistry.addAll([flight]);
        });
}