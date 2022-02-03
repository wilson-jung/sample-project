import { StringValue, Int32Value } from '../wrappers';
import { UserCompactRideReservationDTO } from '../ride_reservation';
export interface UserListUserCompactRideReservationsParams {
    nextToken?: StringValue;
    limit?: Int32Value;
}
export declare namespace UserListUserCompactRideReservationsParams {
    function fromObject(obj: any): UserListUserCompactRideReservationsParams;
}
export interface UserListUserCompactRideReservationsResult {
    rideReservations: UserCompactRideReservationDTO[];
    nextToken?: StringValue;
}
export declare namespace UserListUserCompactRideReservationsResult {
    function fromObject(obj: any): UserListUserCompactRideReservationsResult;
}
