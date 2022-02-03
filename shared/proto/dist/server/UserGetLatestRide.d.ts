import { RideDTO } from '../ride';
export interface UserGetLatestRideParams {
}
export declare namespace UserGetLatestRideParams {
    function fromObject(obj: any): UserGetLatestRideParams;
}
export interface UserGetLatestRideResult {
    ride?: RideDTO;
}
export declare namespace UserGetLatestRideResult {
    function fromObject(obj: any): UserGetLatestRideResult;
}
