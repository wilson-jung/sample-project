import { RideReservationDTO } from '../ride_reservation';
export interface DriverPrestartRideReservationParams {
    rideReservationId: string;
}
export declare namespace DriverPrestartRideReservationParams {
    function fromObject(obj: any): DriverPrestartRideReservationParams;
}
export interface DriverPrestartRideReservationResult {
    rideReservation?: RideReservationDTO;
}
export declare namespace DriverPrestartRideReservationResult {
    function fromObject(obj: any): DriverPrestartRideReservationResult;
}
