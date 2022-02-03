import { TripDTO } from '../trip';
export interface DriverAcceptTripParams {
    tripId: string;
}
export declare namespace DriverAcceptTripParams {
    function fromObject(obj: any): DriverAcceptTripParams;
}
export interface DriverAcceptTripResult {
    trip?: TripDTO;
}
export declare namespace DriverAcceptTripResult {
    function fromObject(obj: any): DriverAcceptTripResult;
}
