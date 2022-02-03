import { Int32Value } from '../wrappers';
import { RideDTO } from '../ride';
export interface DriverUpdateWaypointsOfRideParams {
    rideId: string;
    /**
     *  추후 진짜 경유지 수정이 생기는 경우를 고려해서 wrapper type으로 만듬
     */
    additionalWaypointCount?: Int32Value;
}
export declare namespace DriverUpdateWaypointsOfRideParams {
    function fromObject(obj: any): DriverUpdateWaypointsOfRideParams;
}
export interface DriverUpdateWaypointsOfRideResult {
    ride?: RideDTO;
}
export declare namespace DriverUpdateWaypointsOfRideResult {
    function fromObject(obj: any): DriverUpdateWaypointsOfRideResult;
}
