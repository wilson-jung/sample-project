import { RideDTO } from '../ride';
export interface DriverDeleteRideStopoverParams {
    rideId: string;
    /**
     *  삭제하려는 Stopover.created_at을 담아서 올리면 된다.
     */
    stopoverCreatedAt: string;
}
export declare namespace DriverDeleteRideStopoverParams {
    function fromObject(obj: any): DriverDeleteRideStopoverParams;
}
export interface DriverDeleteRideStopoverResult {
    ride?: RideDTO;
}
export declare namespace DriverDeleteRideStopoverResult {
    function fromObject(obj: any): DriverDeleteRideStopoverResult;
}
