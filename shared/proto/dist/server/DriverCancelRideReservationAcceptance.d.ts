import { RideReservationDTO } from '../ride_reservation';
export interface DriverCancelRideReservationAcceptanceParams {
    rideReservationId: string;
}
export declare namespace DriverCancelRideReservationAcceptanceParams {
    function fromObject(obj: any): DriverCancelRideReservationAcceptanceParams;
}
export interface DriverCancelRideReservationAcceptanceResult {
    rideReservation?: RideReservationDTO;
}
export declare namespace DriverCancelRideReservationAcceptanceResult {
    function fromObject(obj: any): DriverCancelRideReservationAcceptanceResult;
}
