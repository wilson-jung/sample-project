import { RideDTO } from '../ride';
export interface UserUpdateRidePreferencesParams {
    rideId: string;
    userRidePreferenceTags: RideDTO.UserRidePreferenceTag[];
}
export declare namespace UserUpdateRidePreferencesParams {
    function fromObject(obj: any): UserUpdateRidePreferencesParams;
}
export interface UserUpdateRidePreferencesResult {
}
export declare namespace UserUpdateRidePreferencesResult {
    function fromObject(obj: any): UserUpdateRidePreferencesResult;
}
