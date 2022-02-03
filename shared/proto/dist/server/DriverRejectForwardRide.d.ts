import { DriverStatusDTO } from '../common';
export interface DriverRejectForwardRideParams {
    rideId: string;
}
export declare namespace DriverRejectForwardRideParams {
    function fromObject(obj: any): DriverRejectForwardRideParams;
}
export interface DriverRejectForwardRideResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverRejectForwardRideResult {
    function fromObject(obj: any): DriverRejectForwardRideResult;
}
