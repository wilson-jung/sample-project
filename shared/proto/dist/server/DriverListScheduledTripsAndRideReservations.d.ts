import { RideReservationDTO } from '../ride_reservation';
import { TripDTO } from '../trip';
export interface DriverListScheduledTripsAndRideReservationsParams {
}
export declare namespace DriverListScheduledTripsAndRideReservationsParams {
    function fromObject(obj: any): DriverListScheduledTripsAndRideReservationsParams;
}
export interface DriverListScheduledTripsAndRideReservationsResult {
    entries: DriverListScheduledTripsAndRideReservationsResult.Entry[];
}
export declare namespace DriverListScheduledTripsAndRideReservationsResult {
    function fromObject(obj: any): DriverListScheduledTripsAndRideReservationsResult;
    interface Entry {
        /**
         *  둘 중 하나만 null이 아니어야한다.
         */
        rideReservation?: RideReservationDTO;
        trip?: TripDTO;
    }
    namespace Entry {
        function fromObject(obj: any): Entry;
    }
}
