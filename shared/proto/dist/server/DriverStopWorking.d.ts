import { DriverStatusDTO } from '../common';
export interface DriverStopWorkingParams {
}
export declare namespace DriverStopWorkingParams {
    function fromObject(obj: any): DriverStopWorkingParams;
}
export interface DriverStopWorkingResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverStopWorkingResult {
    function fromObject(obj: any): DriverStopWorkingResult;
}
