import { TripDTO } from '../trip';
export interface DriverLogTripReminderParams {
    tripId: string;
}
export declare namespace DriverLogTripReminderParams {
    function fromObject(obj: any): DriverLogTripReminderParams;
}
export interface DriverLogTripReminderResult {
    trip?: TripDTO;
}
export declare namespace DriverLogTripReminderResult {
    function fromObject(obj: any): DriverLogTripReminderResult;
}
