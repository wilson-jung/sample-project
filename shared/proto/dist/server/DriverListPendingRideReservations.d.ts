import { Int32Value, StringValue } from '../wrappers';
import { RideReservationDTO } from '../ride_reservation';
export interface DriverListPendingRideReservationsParams {
    limit?: Int32Value;
    /**
     *  다음 페이지를 볼 때 올려준다.
     */
    nextToken?: StringValue;
}
export declare namespace DriverListPendingRideReservationsParams {
    function fromObject(obj: any): DriverListPendingRideReservationsParams;
}
export interface DriverListPendingRideReservationsResult {
    pendingRideReservations: RideReservationDTO[];
    nextToken?: StringValue;
}
export declare namespace DriverListPendingRideReservationsResult {
    function fromObject(obj: any): DriverListPendingRideReservationsResult;
}
