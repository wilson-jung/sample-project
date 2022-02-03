import { DriverStatusDTO } from '../common';
export interface DriverStopTripReturningParams {
}
export declare namespace DriverStopTripReturningParams {
    function fromObject(obj: any): DriverStopTripReturningParams;
}
export interface DriverStopTripReturningResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverStopTripReturningResult {
    function fromObject(obj: any): DriverStopTripReturningResult;
}
