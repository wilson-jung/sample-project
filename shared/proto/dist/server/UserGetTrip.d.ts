import { TripDTO } from '../trip';
export interface UserGetTripParams {
    tripId: string;
}
export declare namespace UserGetTripParams {
    function fromObject(obj: any): UserGetTripParams;
}
export interface UserGetTripResult {
    trip?: TripDTO;
}
export declare namespace UserGetTripResult {
    function fromObject(obj: any): UserGetTripResult;
}
