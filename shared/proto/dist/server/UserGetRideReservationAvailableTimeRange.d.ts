import { Timestamp } from '../timestamp';
export interface UserGetRideReservationAvailableTimeRangeParams {
}
export declare namespace UserGetRideReservationAvailableTimeRangeParams {
    function fromObject(obj: any): UserGetRideReservationAvailableTimeRangeParams;
}
export interface UserGetRideReservationAvailableTimeRangeResult {
    minAvailableTime?: Timestamp;
    maxAvailableTime?: Timestamp;
    timeStepMinutes: number;
}
export declare namespace UserGetRideReservationAvailableTimeRangeResult {
    function fromObject(obj: any): UserGetRideReservationAvailableTimeRangeResult;
}
