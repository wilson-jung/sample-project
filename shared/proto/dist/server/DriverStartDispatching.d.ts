import { DriverStatusDTO } from '../common';
export interface DriverStartDispatchingParams {
}
export declare namespace DriverStartDispatchingParams {
    function fromObject(obj: any): DriverStartDispatchingParams;
}
export interface DriverStartDispatchingResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverStartDispatchingResult {
    function fromObject(obj: any): DriverStartDispatchingResult;
}
