import { DriverStatusDTO } from '../common';
export interface DriverStopDispatchingParams {
}
export declare namespace DriverStopDispatchingParams {
    function fromObject(obj: any): DriverStopDispatchingParams;
}
export interface DriverStopDispatchingResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverStopDispatchingResult {
    function fromObject(obj: any): DriverStopDispatchingResult;
}
