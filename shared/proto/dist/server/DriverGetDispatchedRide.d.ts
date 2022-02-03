import { RideDTO } from '../ride';
export interface DriverGetDispatchedRideParams {
}
export declare namespace DriverGetDispatchedRideParams {
    function fromObject(obj: any): DriverGetDispatchedRideParams;
}
export interface DriverGetDispatchedRideResult {
    ride?: RideDTO;
    dispatchTimeoutSeconds: number;
}
export declare namespace DriverGetDispatchedRideResult {
    function fromObject(obj: any): DriverGetDispatchedRideResult;
}
