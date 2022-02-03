import { DriverStatusDTO } from '../common';
export interface DriverStartWorkingParams {
    feedbackConfirmed: boolean;
}
export declare namespace DriverStartWorkingParams {
    function fromObject(obj: any): DriverStartWorkingParams;
}
export interface DriverStartWorkingResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverStartWorkingResult {
    function fromObject(obj: any): DriverStartWorkingResult;
}
