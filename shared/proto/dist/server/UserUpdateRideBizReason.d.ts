import { RideDTO } from '../ride';
export interface UserUpdateRideBizReasonParams {
    rideId: string;
    bizReason: string;
}
export declare namespace UserUpdateRideBizReasonParams {
    function fromObject(obj: any): UserUpdateRideBizReasonParams;
}
export interface UserUpdateRideBizReasonResult {
    ride?: RideDTO;
}
export declare namespace UserUpdateRideBizReasonResult {
    function fromObject(obj: any): UserUpdateRideBizReasonResult;
}
