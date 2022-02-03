import { RideReservationDTO } from '../ride_reservation';
export interface UserUpdateRideReservationBizReasonParams {
    rideReservationId: string;
    bizReason: string;
}
export declare namespace UserUpdateRideReservationBizReasonParams {
    function fromObject(obj: any): UserUpdateRideReservationBizReasonParams;
}
export interface UserUpdateRideReservationBizReasonResult {
    rideReservation?: RideReservationDTO;
}
export declare namespace UserUpdateRideReservationBizReasonResult {
    function fromObject(obj: any): UserUpdateRideReservationBizReasonResult;
}
