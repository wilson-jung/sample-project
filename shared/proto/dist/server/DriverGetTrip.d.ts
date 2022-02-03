import { TripDTO } from '../trip';
export interface DriverGetTripParams {
    tripId: string;
}
export declare namespace DriverGetTripParams {
    function fromObject(obj: any): DriverGetTripParams;
}
export interface DriverGetTripResult {
    trip?: TripDTO;
}
export declare namespace DriverGetTripResult {
    function fromObject(obj: any): DriverGetTripResult;
}
