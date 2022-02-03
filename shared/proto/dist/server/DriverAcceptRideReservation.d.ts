import { RideReservationDTO } from '../ride_reservation';
export interface DriverAcceptRideReservationParams {
    rideReservationId: string;
}
export declare namespace DriverAcceptRideReservationParams {
    function fromObject(obj: any): DriverAcceptRideReservationParams;
}
export interface DriverAcceptRideReservationResult {
    rideReservation?: RideReservationDTO;
}
export declare namespace DriverAcceptRideReservationResult {
    function fromObject(obj: any): DriverAcceptRideReservationResult;
}
