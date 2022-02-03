import { RideDTO } from '../ride';
export interface DriverNotifyRiderArrivedAtDestinationParams {
    rideId: string;
}
export declare namespace DriverNotifyRiderArrivedAtDestinationParams {
    function fromObject(obj: any): DriverNotifyRiderArrivedAtDestinationParams;
}
export interface DriverNotifyRiderArrivedAtDestinationResult {
    ride?: RideDTO;
    /**
     *  기계식 미터기일 때는 0이 내려감
     */
    totalPrice: number;
    callFee: number;
}
export declare namespace DriverNotifyRiderArrivedAtDestinationResult {
    function fromObject(obj: any): DriverNotifyRiderArrivedAtDestinationResult;
}
