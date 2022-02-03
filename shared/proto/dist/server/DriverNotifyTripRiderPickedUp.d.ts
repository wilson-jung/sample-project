import { TripDTO } from '../trip';
export interface DriverNotifyTripRiderPickedUpParams {
    tripId: string;
}
export declare namespace DriverNotifyTripRiderPickedUpParams {
    function fromObject(obj: any): DriverNotifyTripRiderPickedUpParams;
}
export interface DriverNotifyTripRiderPickedUpResult {
    trip?: TripDTO;
}
export declare namespace DriverNotifyTripRiderPickedUpResult {
    function fromObject(obj: any): DriverNotifyTripRiderPickedUpResult;
}
