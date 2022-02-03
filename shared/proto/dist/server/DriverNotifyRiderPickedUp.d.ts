import { RideDTO } from '../ride';
export interface DriverNotifyRiderPickedUpParams {
    rideId: string;
}
export declare namespace DriverNotifyRiderPickedUpParams {
    function fromObject(obj: any): DriverNotifyRiderPickedUpParams;
}
export interface DriverNotifyRiderPickedUpResult {
    ride?: RideDTO;
}
export declare namespace DriverNotifyRiderPickedUpResult {
    function fromObject(obj: any): DriverNotifyRiderPickedUpResult;
}
