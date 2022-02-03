import { DriverStatusDTO } from '../common';
export interface DriverStartTripReturningParams {
}
export declare namespace DriverStartTripReturningParams {
    function fromObject(obj: any): DriverStartTripReturningParams;
}
export interface DriverStartTripReturningResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverStartTripReturningResult {
    function fromObject(obj: any): DriverStartTripReturningResult;
}
