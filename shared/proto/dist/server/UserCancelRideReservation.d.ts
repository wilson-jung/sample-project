import { RideReservationDTO } from '../ride_reservation';
import { StringValue } from '../wrappers';
export interface UserCancelRideReservationParams {
    rideReservationId: string;
    cancelRideReservationToken: string;
}
export declare namespace UserCancelRideReservationParams {
    function fromObject(obj: any): UserCancelRideReservationParams;
}
export interface UserCancelRideReservationResult {
    rideReservation?: RideReservationDTO;
    popupTitle?: StringValue;
    popupBody?: StringValue;
}
export declare namespace UserCancelRideReservationResult {
    function fromObject(obj: any): UserCancelRideReservationResult;
}
