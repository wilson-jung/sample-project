import { RideReservationDTO } from '../ride_reservation';
export interface DriverStartRideReservationParams {
    rideReservationId: string;
}
export declare namespace DriverStartRideReservationParams {
    function fromObject(obj: any): DriverStartRideReservationParams;
}
export interface DriverStartRideReservationResult {
    rideReservation?: RideReservationDTO;
}
export declare namespace DriverStartRideReservationResult {
    function fromObject(obj: any): DriverStartRideReservationResult;
}
