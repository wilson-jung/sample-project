import { RideDTO } from '../ride';
export interface DriverAddRideStopoverParams {
    rideId: string;
    /**
     *  DriverPrepareAddRideStopover API에서 내려준 토큰
     */
    addToken: string;
}
export declare namespace DriverAddRideStopoverParams {
    function fromObject(obj: any): DriverAddRideStopoverParams;
}
export interface DriverAddRideStopoverResult {
    ride?: RideDTO;
}
export declare namespace DriverAddRideStopoverResult {
    function fromObject(obj: any): DriverAddRideStopoverResult;
}
