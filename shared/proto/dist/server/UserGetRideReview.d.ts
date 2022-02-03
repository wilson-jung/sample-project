import { RideReviewByUserDTO } from '../ride';
export interface UserGetRideReviewParams {
    rideId: string;
}
export declare namespace UserGetRideReviewParams {
    function fromObject(obj: any): UserGetRideReviewParams;
}
export interface UserGetRideReviewResult {
    review?: RideReviewByUserDTO;
}
export declare namespace UserGetRideReviewResult {
    function fromObject(obj: any): UserGetRideReviewResult;
}
