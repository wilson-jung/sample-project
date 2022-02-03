import { RideDTO } from '../ride';
import { DriverStatusDTO } from '../common';
export interface DriverAcceptForwardRideParams {
    rideId: string;
}
export declare namespace DriverAcceptForwardRideParams {
    function fromObject(obj: any): DriverAcceptForwardRideParams;
}
export interface DriverAcceptForwardRideResult {
    ride?: RideDTO;
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverAcceptForwardRideResult {
    function fromObject(obj: any): DriverAcceptForwardRideResult;
}
