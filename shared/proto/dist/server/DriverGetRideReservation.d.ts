import { RideReservationDTO } from '../ride_reservation';
export interface DriverGetRideReservationParams {
    rideReservationId: string;
}
export declare namespace DriverGetRideReservationParams {
    function fromObject(obj: any): DriverGetRideReservationParams;
}
export interface DriverGetRideReservationResult {
    rideReservation?: RideReservationDTO;
}
export declare namespace DriverGetRideReservationResult {
    function fromObject(obj: any): DriverGetRideReservationResult;
}
