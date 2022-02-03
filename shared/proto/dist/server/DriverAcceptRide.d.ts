import { RideDTO } from '../ride';
export interface DriverAcceptRideParams {
    rideId: string;
}
export declare namespace DriverAcceptRideParams {
    function fromObject(obj: any): DriverAcceptRideParams;
}
export interface DriverAcceptRideResult {
    ride?: RideDTO;
}
export declare namespace DriverAcceptRideResult {
    function fromObject(obj: any): DriverAcceptRideResult;
}
