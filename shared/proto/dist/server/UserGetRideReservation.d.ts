import { RideReservationDTO } from '../ride_reservation';
export interface UserGetRideReservationParams {
    rideReservationId: string;
}
export declare namespace UserGetRideReservationParams {
    function fromObject(obj: any): UserGetRideReservationParams;
}
export interface UserGetRideReservationResult {
    rideReservation?: RideReservationDTO;
}
export declare namespace UserGetRideReservationResult {
    function fromObject(obj: any): UserGetRideReservationResult;
}
