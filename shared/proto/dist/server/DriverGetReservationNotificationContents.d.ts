import { RideReservationDTO } from '../ride_reservation';
import { TripDTO } from '../trip';
import { Timestamp } from '../timestamp';
export interface DriverGetReservationNotificationContentsParams {
}
export declare namespace DriverGetReservationNotificationContentsParams {
    function fromObject(obj: any): DriverGetReservationNotificationContentsParams;
}
export interface DriverGetReservationNotificationContentsResult {
    /**
     * OneOf-data
     */
    upcomingRideReservation?: RideReservationDTO;
    /**
     * OneOf-data
     */
    upcomingTrip?: TripDTO;
    offDriverNotifyFrom?: Timestamp;
    workingDriverNotifyFrom?: Timestamp;
    pendingReservationExists: boolean;
}
export declare namespace DriverGetReservationNotificationContentsResult {
    function fromObject(obj: any): DriverGetReservationNotificationContentsResult;
}
